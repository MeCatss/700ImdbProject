<div align="center">
  <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop" alt="Cinema Banner" width="100%" style="border-radius: 10px;">
  
  # IMDb Top 700 Movies Dataset (2026 Edition)
  
  **A Comprehensive, Mathematically Rigorous Dataset of the World's Highest-Rated Films**
</div>

<br>

## Overview

This dataset presents an exhaustive and meticulously structured collection of the Top 700 highest-rated movies on IMDb as of 2026. Unlike standard, arbitrary lists, this dataset is compiled using the official **Bayesian Average Rating Formula** utilized by IMDb to calculate the Top 250. We have extended this rigorous mathematical methodology to extract the top 700 films, ensuring that the rankings are strictly based on statistical significance rather than raw, unweighted scores.

It provides an unparalleled resource for data scientists, machine learning engineers, and film analysts seeking clean, high-quality cinematic data for exploratory data analysis, visualization, and predictive modeling.

<div align="center">
  <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop" alt="Film Reel" width="100%" style="border-radius: 10px; margin-top: 20px; margin-bottom: 20px;">
</div>

## Features Included

The dataset comprises a single, highly refined CSV file: `IMDb_Top_700_Movies_2026.csv`. Each row corresponds to a critically acclaimed film and includes the following features:

* **Rank**: The definitive ranking of the movie (1 through 700) based on the calculated Bayesian average.
* **Title**: The official primary title of the cinematic release.
* **Year**: The initial year of theatrical release.
* **IMDb Rating**: The raw average user rating on IMDb (scale of 1.0 to 10.0).
* **Votes**: The aggregate number of registered IMDb user votes, serving as a measure of popularity and consensus.
* **Genre(s)**: The categorical classification of the film (e.g., Drama, Sci-Fi, Action). Multiple genres are delimited by a pipe character.
* **Director**: The primary credited director(s) of the film.
* **Main Actor(s)**: The top-billed cast members, providing insight into star power and casting trends.
* **Country**: The primary country or region of origin for the film's production.
* **Runtime (mins)**: The official duration of the film in minutes.

## How to Use This Dataset

This structured dataset is designed to facilitate advanced analytical workflows, including but not limited to:

* **Exploratory Data Analysis (EDA)**: Uncover latent patterns between ratings, genres, and directors. Understand how audience preferences shift over time.
* **Data Visualization Projects**: Create comprehensive dashboards or charts mapping out top genres, prolific decades, or the geographic distribution of cinematic excellence.
* **Machine Learning**: Build content-based filtering algorithms and recommendation systems, or train regression models to predict a film's success based on its structural attributes (director, genre, runtime).
* **Storytelling & Analysis**: Analyze what structural, genre, or regional factors contribute to making a movie a timeless, highly-rated masterpiece.

## Example Ideas for Projects

If you are looking for inspiration on how to utilize this dataset, consider the following project ideas:
* Compare the distribution of IMDb ratings across different decades (e.g., the 1970s vs. the 2010s).
* Visualize the most common primary and secondary genres among the absolute highest-rated films.
* Identify and rank directors who have multiple entries within the Top 700.
* Correlate the total number of votes a film receives with its final rating to analyze the impact of mass popularity on critical acclaim.
* Perform NLP entity embeddings on the actor and director columns to find hidden networks of recurring cinematic collaborations.

## Mathematical Methodology

To ensure the utmost accuracy and prevent films with highly-rated but statistically insignificant vote counts from skewing the rankings, the dataset employs the Bayesian estimate formula:

```text
W = (V / (V + M)) * R + (M / (V + M)) * C
```

Where:
* **W**: Weighted Rating
* **V**: Number of votes for the movie
* **M**: Minimum votes required to be listed (Threshold: 50,000)
* **R**: Average rating of the movie
* **C**: Mean vote across the entire dataset

## Inspiration

This dataset brings together cinematic excellence from around the world, from timeless classics to modern masterpieces. By utilizing a strictly rigorous mathematical approach to rankings rather than subjective curation, this dataset serves as the perfect foundation for analysts, developers, and movie enthusiasts alike to explore the very best of cinema history.

## Licensing and Acknowledgements

* Data is sourced from the official IMDb non-commercial datasets.
* This derived dataset is published under the CC0: Public Domain license for uninhibited academic and professional use.
* Banner imagery provided by Unsplash.

<div align="center">
  <br>
  <i>If you find this dataset valuable for your research or projects, please consider providing an upvote to support continued updates.</i>
</div>
