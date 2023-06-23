from fastapi import FastAPI
from search import Search

# from pydantic import BaseModel

app = FastAPI()


@app.get("/")
def root():
    return {"Hello": "Worlds"}


@app.put("/search/{query}")
def search(query : str):
    return Search.result(query)
