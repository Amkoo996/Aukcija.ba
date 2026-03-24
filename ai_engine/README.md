# Aukcija.ba AI Engine 🤖

Ovaj modul koristi Machine Learning (Random Forest Regressor) za predviđanje konačne cijene predmeta na aukciji. Model analizira početnu cijenu, stanje predmeta, kategoriju i trajanje aukcije kako bi procijenio za koliko će se predmet prodati.

Ovaj dodatak demonstrira integraciju vještačke inteligencije (AI) u web platforme za e-trgovinu.

## Struktura foldera

- `price_predictor.py` - Glavna skripta za treniranje modela i predikciju.
- `requirements.txt` - Lista potrebnih Python biblioteka.
- `models/` - Folder gdje se spašava istrenirani `.pkl` model.

## Instalacija

1. Kreirajte virtualno okruženje (opcionalno ali preporučeno):
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate     # Windows
   ```

2. Instalirajte zavisnosti:
   ```bash
   pip install -r requirements.txt
   ```

## Korištenje

Pokrenite glavnu skriptu da biste istrenirali model i vidjeli testnu predikciju:

```bash
python price_predictor.py
```

Skripta će automatski:
1. Generisati mock podatke o aukcijama (simulacija baze).
2. Istrenirati Random Forest model.
3. Spasiti model i njegove kolone u `models/` folder.
4. Izvršiti testnu predikciju za jedan predmet (npr. Elektronika, početna cijena 50 KM).

## Buduća integracija (Backend)

U produkciji, ovaj model se može servirati preko Flask ili FastAPI mikroservisa, koji bi primao HTTP zahtjeve iz Firebase/Node.js backend-a i vraćao predviđenu cijenu na React frontend.
