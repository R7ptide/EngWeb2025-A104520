import json

def reorganizar_json(json_original):
    novo_json = {
        "reparacoes": [],
        "intervencoes": [],
        "viaturas": []
    }
    
    intervencoes_set = set()
    
    for reparacao in json_original["reparacoes"]:
        reparacao["id"] = reparacao.pop("nif")
        novo_json["reparacoes"].append(reparacao)
        
        for intervencao in reparacao["intervencoes"]:
            intervencao["id"] = intervencao.pop("codigo")
            intervencoes_set.add(json.dumps(intervencao))  # Usa JSON para tornar hashável
        
        reparacao["viatura"]["id"] = reparacao["viatura"].pop("modelo")
        novo_json["viaturas"].append(reparacao["viatura"])  # Mantém duplicados
    
    novo_json["intervencoes"] = [json.loads(i) for i in intervencoes_set]
    
    return novo_json





with open("dataset_reparacoes.json", "r", encoding="utf-8") as f:
    json_data = json.load(f)
    
novo_dados = reorganizar_json(json_data)
with open("db.json", "w", encoding="utf-8") as f:
    json.dump(novo_dados, f, indent=2, ensure_ascii=False)
print("Novo JSON salvo em db.json")
