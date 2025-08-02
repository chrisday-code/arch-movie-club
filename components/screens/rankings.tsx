import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Database, Tables, Enums } from "@/utils/supabase/database.types";
import { MovieTile } from "@/components/movie-tile/movie-tile";

export default async function Page() {
  const supabase = createClient();

  const { data: movies } = await supabase.from("movies").select();

  console.log(movies);
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <h1> Rankings</h1>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4">
          {movies &&
            movies.map((movie, key) => (
              <div className="item" key={`movie-rank-${key}`}>
                <MovieTile key={movie.id} movie={movie} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
