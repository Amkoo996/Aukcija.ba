import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
import joblib
import os

# 1. Generisanje mock podataka (pošto još nemamo pravu bazu)
def generate_mock_data(num_samples=1000):
    np.random.seed(42)
    categories = ['Elektronika', 'Nakit', 'Uređaji', 'Aksesoar']
    
    data = {
        'starting_price': np.random.uniform(10, 500, num_samples),
        'condition': np.random.randint(1, 6, num_samples), # 1 (loše) do 5 (novo)
        'category': np.random.choice(categories, num_samples),
        'duration_days': np.random.randint(3, 15, num_samples)
    }
    df = pd.DataFrame(data)

    # Simulacija logike za konačnu cijenu
    # Množitelj na osnovu stanja predmeta
    condition_mult = df['condition'] * 0.2 + 0.8
    # Množitelj na osnovu kategorije
    cat_mult = df['category'].map({'Elektronika': 1.5, 'Nakit': 2.0, 'Uređaji': 1.2, 'Aksesoar': 1.1})

    df['final_price'] = df['starting_price'] * condition_mult * cat_mult + np.random.normal(0, 20, num_samples)
    df['final_price'] = df['final_price'].clip(lower=df['starting_price']) # Konačna cijena ne može biti manja od početne

    return df

# 2. Treniranje modela
def train_model():
    print("Generišem podatke za trening...")
    df = generate_mock_data()

    # One-hot encoding za kategoričke varijable (kategorije)
    df_encoded = pd.get_dummies(df, columns=['category'])

    X = df_encoded.drop('final_price', axis=1)
    y = df_encoded['final_price']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    print("Treniram Random Forest model...")
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    predictions = model.predict(X_test)
    mae = mean_absolute_error(y_test, predictions)
    print(f"Model istreniran! Srednja apsolutna greška (MAE): {mae:.2f} KM")

    # Spasi model i kolone za kasniju upotrebu
    os.makedirs('models', exist_ok=True)
    joblib.dump(model, 'models/price_predictor_model.pkl')
    joblib.dump(X.columns.tolist(), 'models/model_columns.pkl')
    print("Model uspješno spašen u folder 'models/'.")

    return model, X.columns.tolist()

# 3. Funkcija za predikciju
def predict_price(starting_price, condition, category, duration_days):
    try:
        model = joblib.load('models/price_predictor_model.pkl')
        model_columns = joblib.load('models/model_columns.pkl')
    except FileNotFoundError:
        print("Model nije pronađen. Pokrećem trening...")
        model, model_columns = train_model()

    # Kreiranje DataFrame-a od ulaznih podataka
    input_data = pd.DataFrame({
        'starting_price': [starting_price],
        'condition': [condition],
        'category': [category],
        'duration_days': [duration_days]
    })

    # Encoding ulaznih podataka
    input_encoded = pd.get_dummies(input_data, columns=['category'])

    # Poravnanje kolona sa onima na kojima je model treniran
    input_encoded = input_encoded.reindex(columns=model_columns, fill_value=0)

    prediction = model.predict(input_encoded)[0]
    return prediction

if __name__ == "__main__":
    print("="*40)
    print(" Aukcija.ba AI Engine - Price Predictor ")
    print("="*40)
    
    # Treniraj model ako se pokreće prvi put
    train_model()

    # Testiranje predikcije
    print("\n--- Testiranje predikcije ---")
    test_item = {
        'starting_price': 50.0,
        'condition': 4, # Vrlo dobro stanje
        'category': 'Elektronika',
        'duration_days': 7
    }
    
    print("Ulazni podaci predmeta:")
    for key, value in test_item.items():
        print(f" - {key}: {value}")
        
    predicted_price = predict_price(**test_item)
    print(f"\n>>> Predviđena konačna cijena: {predicted_price:.2f} KM <<<")
