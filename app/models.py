import pickle
import numpy as np

def load_model() :
    with open('models/model.pkl', 'rb') as f:
        model = pickle.load(f)
    return model

def predict(model, data) :
    data = np.array(data)
    return model.predict(data)