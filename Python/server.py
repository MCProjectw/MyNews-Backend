from flask import Flask # type: ignore
from flask_cors import CORS # type: ignore


app = Flask(__name__)
cors = CORS(app, resources={r"/users/*": {"origins": "*"}})


@app.route("/users")
def users():
    return { "members": [{"id": 1, "name" : "Jihun"},
                         {"id": 2, "name" : "Jung" }
                         ]}

if __name__ == "__main__" :
    app.run(debug = True)