from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from get_recommendations_file import get_recommendations
import pandas as pd

from services import MovieService,StatsService

app = FastAPI()
df = pd.read_csv("IMDb_Top_700_Movies_2026_cleaned.csv")
movie_service = MovieService(df)
stats_service = StatsService(df)

# endpoints
@app.get("/") #To test if the server is running
def main():
    return {"Supp Hello World"}

@app.get("/movies") #To get all movies from the csv dataset
def read_movies():
    return movie_service.get_all_movies()

@app.get("/movies/{rank}") #To get a specific movie by its rank from the csv dataset
def read_movie_by_rank(rank: int):
    return movie_service.get_by_rank(rank)

@app.get("/stats/genres") #To get the count of each genre
def genres_count():
    return stats_service.genres_count()

@app.get("/stats/decades") #To get the average rating for each decade
def decades_avg_rating():
    return stats_service.decades_avg_rating()

@app.get("/stats/topdirectors") #To get the top 10 directors with most movies in the dataset
def top_directors_by_movies():
    return stats_service.top_directors_by_movies()

@app.get("/recommendations/{title}")
def movierecommendations(title):
    return movie_service.movierecommendations(title)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://mecats700imdbproject.vercel.app"],
    allow_methods=["*"],
    allow_headers=["*"],
)