from flask import Flask

app = Flask(__name__)

@app.route("/users")
def users():
    return { "members": [{"id": 1, "name" : "Jihun"},
                         {"id": 2, "name" : "Jung" }
                         ]}

if __name__ == "__main__" :
    app.run(debug = True)