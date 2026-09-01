def get_recommendations(Title, df, cosine_sim,  n=5):
    title_lower = Title.lower()
    df_titles_lower = df['Title'].str.lower()
    if title_lower not in df_titles_lower.values:
        return f"Judul '{Title}' tidak ditemukan dalam dataset."

    idx = df_titles_lower[df_titles_lower == title_lower].index[0]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:n+1]
    movie_indices = [i[0] for i in sim_scores]
    return df[['Rank', 'Title']].iloc[movie_indices].to_dict('records')