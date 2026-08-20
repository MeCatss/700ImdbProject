from fastapi import FastAPI
import pandas as pd

app = FastAPI()

df = pd.read_csv("../data/IMDb_Top_700_Movies_2026_cleaned.csv")

@app.get("/") #To test if the server is running
def main():
    return {"Supp Hello World"}

@app.get("/movies") #To get all movies from the csv dataset
def read_movies():
    return {"movies": df.to_dict(orient="records")}

@app.get("/movies/{rank}") #To get a specific movie by its rank from the csv dataset
def read_movie_by_rank(rank: int):
    movie = df[df['Rank'] == rank]
    if not movie.empty:
        return {"movie": movie.to_dict(orient="records")[0]}
    else:
        return {"error": "Movie not found"}

@app.get("/stats/genres") #To get the count of each genre
def genres_count():
    genres = df['Genre(s)'].str.split('|').explode().value_counts().to_dict()
    return {"genres": genres}

@app.get("/stats/decades") #To get the average rating for each decade

def decades_avg_rating():
    avg_ratings = df.groupby('Decade')['IMDb Rating'].mean().to_dict()
    return {"avg_ratings_by_decade": avg_ratings}

@app.get("/stats/topdirectors") #To get the top 10 directors with most movies in the dataset
def top_directors_by_movies():
    directors = df['Director'].value_counts().head(10).to_dict()
    return {"top_directors": directors}


from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)