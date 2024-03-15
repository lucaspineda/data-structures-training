import requests
from flask import Flask, render_template, jsonify
from meme import Meme
import json

app = Flask(__name__)

@app.route("/")
def return_meme():
    meme_content = json.loads(requests.get('https://meme-api.com/gimme').content)
    new_meme = Meme(meme_content.get('url'), meme_content.get('title'))
    meme_dict = {'url': new_meme.img_source, 'title': new_meme.title}  # Create a dictionary

    return meme_dict

app.run("0.0.0.0", port=81)
