from flask import Flask, escape, request
import requests
import os
application = Flask(__name__)


@application.route('/')
def hello():
    index_url = os.environ.get('AWS_INDEX_URL', 'https://cristina-maze-game.s3.eu-north-1.amazonaws.com/index.html')
    if not index_url:
        return "Missing environment variable"
    response = requests.get(index_url)
    return response.content