# Divides 80mb CSV into two separate CSVs
import pandas as pd

SOURCES_CSV = "./movie_plots.csv"
SOURCES_DATAFRAME = pd.read_csv(SOURCES_CSV)

movie_data_without_plot_df = SOURCES_DATAFRAME[["Title", "Release Year", "Director", "Origin/Ethnicity", "Genre", "Cast", "Wiki Page"]]
movie_plot_df = SOURCES_DATAFRAME[["Plot"]]

movie_plot_df.to_csv("movie-data-plots-only.csv")
movie_data_without_plot_df.to_csv("movie-data-without-plots.csv")