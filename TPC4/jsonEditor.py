import json

with open('cinema.json', 'r', encoding='utf-8') as f:
    dados = json.load(f)

for idx, filme in enumerate(dados['filmes'], start=1):
    filme['id'] = idx

with open('cinema.json', 'w', encoding='utf-8') as f:
    json.dump(dados, f, indent=2, ensure_ascii=False)
