from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {"Hello": "Worlds"}


@app.get("/search")
def search():
    return {"search": "result as json"}

    # get the push request
    # search the csv file
    # return the result as json
