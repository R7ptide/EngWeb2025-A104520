import csv
import json

# Nome do arquivo CSV
csv_filename = "contratos2024.csv"

# Lista para armazenar os contratos
contratos = []

# Abrir o arquivo CSV e ler os dados
with open(csv_filename, mode="r", encoding="utf-8") as file:
    reader = csv.DictReader(file, delimiter=";")  # Define o delimitador correto
    for row in reader:
        # Converter 'precoContratual' para float e trocar ',' por '.'
        if row["precoContratual"]:
            row["precoContratual"] = float(row["precoContratual"].replace(",", "."))
        
        # Converter 'prazoExecucao' para int, se for válido
        if row["prazoExecucao"].isdigit():
            row["prazoExecucao"] = int(row["prazoExecucao"])

        contratos.append(row)

# Converter para JSON
json_output = json.dumps(contratos, indent=4, ensure_ascii=False)

# Opcionalmente, salvar em um arquivo JSON
with open("contratos2024.json", "w", encoding="utf-8") as json_file:
    json_file.write(json_output)

print("JSON criado com sucesso!")
 