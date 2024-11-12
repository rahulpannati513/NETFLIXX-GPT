import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

const movie = {
  id: 1034541,
  results: [
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Greetings from Santa",
      key: "zb2P9y70lJE",
      site: "YouTube",
      size: 1080,
      type: "Clip",
      official: true,
      published_at: "2024-10-23T12:08:24.000Z",
      id: "6718ef609ff681d9e0a396be",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Holiday Shopping",
      key: "o0xvTl-cxbk",
      site: "YouTube",
      size: 1080,
      type: "Clip",
      official: true,
      published_at: "2024-10-22T12:23:52.000Z",
      id: "6718c52527bd57d91f622090",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Only In Cinemas Now",
      key: "sO-j8YRJLXc",
      site: "YouTube",
      size: 1080,
      type: "Teaser",
      official: true,
      published_at: "2024-10-14T16:27:58.000Z",
      id: "670d82be9f3531e6b26c1dbe",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "UK Screening Audience Reactions",
      key: "mPQoGFlJQ5Q",
      site: "YouTube",
      size: 1080,
      type: "Featurette",
      official: true,
      published_at: "2024-10-09T11:55:00.000Z",
      id: "6706d4e4003c9214a0b3e7cd",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: ":30 UK TV Spot",
      key: "FW6gRKp5XY4",
      site: "YouTube",
      size: 1080,
      type: "Teaser",
      official: true,
      published_at: "2024-09-23T08:16:15.000Z",
      id: "66f12da3a97880148f3b02a7",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: ":15 UK TV Spot",
      key: "tlpLULMoDIc",
      site: "YouTube",
      size: 1080,
      type: "Teaser",
      official: true,
      published_at: "2024-09-23T08:15:59.000Z",
      id: "66f12dbb0315b91f463afe7e",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Uncut Theatrical Trailer",
      key: "0EDDtgWnSeY",
      site: "YouTube",
      size: 1080,
      type: "Trailer",
      official: true,
      published_at: "2024-08-28T18:07:41.000Z",
      id: "66cf68223c4fc937a33954f5",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "New Theatrical Trailer",
      key: "D6mC2rXALOE",
      site: "YouTube",
      size: 1080,
      type: "Trailer",
      official: true,
      published_at: "2024-08-28T18:03:52.000Z",
      id: "66cf67e6dff29121312b9c9e",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Official Teaser Trailer",
      key: "lYMTzx2Qcmw",
      site: "YouTube",
      size: 2160,
      type: "Teaser",
      official: true,
      published_at: "2024-07-24T14:00:55.000Z",
      id: "66a2d28a318507e635c83d74",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Teaser #1",
      key: "p8hGx8Rd8L8",
      site: "YouTube",
      size: 2160,
      type: "Teaser",
      official: true,
      published_at: "2023-11-13T16:00:36.000Z",
      id: "6552678dea84c71093ff057c",
    },
  ],
};
