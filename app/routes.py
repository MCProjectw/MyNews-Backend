from app import app
from flask import request, jsonify
from app.models import load_model, predict

model = load_model

@app.route("/predict", methods=['POST'])
def predict_route():
    data = request.json['data']
    prediction = predict(model, data)
    return jsonify({'prediction': prediction.tolist()})