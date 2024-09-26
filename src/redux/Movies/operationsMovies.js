import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendingMovies = createAsyncThunk(
  "movies/getTrendingMovies",
  async (_, thunkAPI) => {
    try {
      const response = await tmdbApi.get(`/trending/movie/day`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchGenres = createAsyncThunk(
  "movies/getGenres",
  async (_, thunkAPI) => {
    try {
      const response = await tmdbApi.get(`/genre/movie/list`);
      const genreMap = response.data.genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});
      return genreMap;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTrailer = createAsyncThunk(
  "movies/getTrailer",
  async (id, thunkAPI) => {
    try {
      const response = await tmdbApi.get(`/movie/${id}/videos`, {
        params: {
          language: "en-US",
        },
      });
      const trailers = response.data.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      return trailers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
