import pickle
import numpy as np

def load_model(model_filename='model/logistic_model.pkl') :
    with open(model_filename, 'rb') as file:
        model = pickle.load(file)
    return model

def predict(model, data) :
    data = np.array(data)
    return model.predict(data)