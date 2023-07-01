from fastapi import FastAPI
from search import Search
from popular import returnPopular

# from pydantic import BaseModel

app = FastAPI()


@app.get("/")
def root():
    return {"Hello": "Worlds"}

@app.get("/popular")
def popular():
    return returnPopular.popular()


@app.put("/search/{query}")
def search(query: str):
    return Search.result(query)

