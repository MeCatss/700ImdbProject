from get_recommendations_file import get_recommendations
import joblib

class MovieService:
    def __init__(self, df):
        self.df = df
        self.cos_sim = joblib.load("cosine_similarity_movie.joblib")

    def get_all_movies(self):
        return {"movies": self.df.to_dict(orient="records")}
    
    def get_by_rank(self, rank):
        movie = self.df[self.df['Rank'] == rank]
        if not movie.empty:
            return {"movie": movie.to_dict(orient="records")[0]}
        else:
            return {"error": "Movie not found"}

    def movierecommendations(self, title):
            return {"movie": get_recommendations(title, self.df, self.cos_sim)}

class StatsService:
    def __init__(self, df):
        self.df = df

    def genres_count(self):
        genres = self.df['Genre(s)'].str.split('|').explode().value_counts().to_dict()
        return {"genres": genres}

    def decades_avg_rating(self):
        avg_ratings = self.df.groupby('Decade')['IMDb Rating'].mean().to_dict()
        return {"avg_ratings_by_decade": avg_ratings}

    def top_directors_by_movies(self):
        directors = self.df['Director'].value_counts().head(10).to_dict()
        return {"top_directors": directors}


    