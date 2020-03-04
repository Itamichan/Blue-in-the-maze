# this script was kindly written by sheepsy90 - https://github.com/sheepsy90

from flask import Flask, escape, request
import requests
import os
application = Flask(__name__)


@application.route('/')
def index():
    index_url = os.environ.get('AWS_INDEX_URL', '')
    if not index_url:
        return "Missing environment variable"
    response = requests.get(index_url)
    return response.content