# /server.py


### IMPORTS ###
import os
import datetime
from pytz import timezone
import pytz
from flask import Flask, jsonify, request, json, Response, render_template


# app initialization
app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

# @app.route("/hello")
# def hello():
#     return "Hello World!”

if __name__ == "__main__":
    # connect_to_db(app)
    # app.run(debug=True, host="0.0.0.0")
    app.run(host="0.0.0.0")
