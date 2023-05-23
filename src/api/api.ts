import { QueryClient, useQuery } from "@tanstack/react-query";

const BASE_URL = "https://api.themoviedb.org/3/";
const OPTIONS = { method: "GET", headers: { accept: "application/json" } };
const API_KEY = import.meta.env.VITE_API_KEY;

const getRequestUrl = (
  partialPath: string,
  queryParams?: { [key: string]: string }
): string => {
  const params = new URLSearchParams({ api_key: API_KEY, ...queryParams });
  return `${BASE_URL}${partialPath}?${params}`;
};

interface NowPlayingMovie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

const getNowPlaying = async (): Promise<NowPlayingMovie[]> => {
  const res = await fetch(getRequestUrl("movie/now_playing"), OPTIONS);
  const { results = [] } = await res.json();
  return results;
};

const nowPlayingQuery = {
  queryKey: ["nowPlaying"],
  queryFn: () => getNowPlaying(),
};

export const nowPlayingLoader = (queryClient: QueryClient) => async () => {
  const query = nowPlayingQuery;
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export const useNowPlaying = () => {
  const query = useQuery(nowPlayingQuery);
  return query;
};

interface MovieDetailParams {
  id?: string;
}

interface MovieDetail {
  id: number;
  overview: string;
  poster_path: string;
  production_companies: { name: string }[];
  release_date: string;
  title: string;
  vote_average: number;
}

const getMovieDetail = async (id?: string): Promise<MovieDetail | null> => {
  if (!id) return null;
  const res = await fetch(getRequestUrl(`movie/${id}`), OPTIONS);
  return await res.json();
};

const movieDetailQuery = ({ id }: MovieDetailParams) => ({
  queryKey: ["movieDetail", id],
  queryFn: () => getMovieDetail(id),
});

export const movieDetailLoader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: MovieDetailParams }) => {
    const query = movieDetailQuery(params);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

export const useMovieDetail = ({ id }: MovieDetailParams) => {
  const query = useQuery(movieDetailQuery({ id }));
  return query;
};

const searchMovies = async (query: string): Promise<MovieDetail[]> => {
  if (!query) return [];
  const res = await fetch(getRequestUrl(`search/movie`, { query }), OPTIONS);
  return (await res.json()).results;
};

export const useSearchMovies = (q: string) => {
  console.log(q);
  const query = useQuery({
    queryKey: ["searchMovies", q],
    queryFn: () => searchMovies(q),
  });
  return query;
};
