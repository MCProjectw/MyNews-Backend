from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
import pickle

iris = load_iris()
X, y = iris.data, iris.target

model = RandomForestClassifier()
model.fit(X, y)

with open('models/model.pkl', 'wb') as file:
    pickle.dump(model, file)

print("모델이 'models/model.pkl'로 저장되었습니다.")
