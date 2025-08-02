"use client";
import { useParams } from "next/navigation";
import { useMovie } from "@/hooks/useMovie";
import { MovieSkeleton } from "./movie-skeleton";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useMovie({ id: id });

  if (isLoading) {
    return <MovieSkeleton />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Movie</h1>
      <div className="flex flex-col items-center gap-4">
        <h1>{data.title}</h1>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4">
          <img
            className="rounded-lg"
            src={`https://image.tmdb.org/t/p/w185/${data.poster_path}`}
          />
        </div>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
