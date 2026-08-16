from fastapi import FastAPI
import pandas as pd

app = FastAPI()

df = pd.read_csv("../data/IMDb_Top_700_Movies_2026_cleaned.csv")

@app.get("/")
def main():
    return {"Supp Hello World"}

@app.get("/movies")
def read_movies():
    return {"movies": df.to_dict(orient="records")}

@app.get("/movies/{rank}")
def read_movie_by_rank(rank: int):
    movie = df[df['Rank'] == rank]
    if not movie.empty:
        return {"movie": movie.to_dict(orient="records")[0]}
    else:
        return {"error": "Movie not found"}

@app.get("/stats/genres")
def genres_count():
    genres = df['Genre(s)'].str.split('|').explode().value_counts().to_dict()
    return {"genres": genres}

@app.get("/stats/decades")
def decades_avg_rating():
    avg_ratings = df.groupby('Decade')['IMDb Rating'].mean().to_dict()
    return {"avg_ratings_by_decade": avg_ratings}

@app.get("/stats/topdirectors")
def top_directors_by_movies():
    directors = df['Director'].value_counts().head(10).to_dict()
    return {"top_directors": directors}
