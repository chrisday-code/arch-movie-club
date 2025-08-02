import { Database, Tables, Enums } from "@/utils/supabase/database.types";
import Link from "next/link";

export const MovieTile = ({ movie }: { movie: Tables<"movies"> }) => {
  const { created_at, id, release_year, reviewed_on, suggestor, title } = movie;

  const poster_path = "/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"; // placeholder gladiator
  const img_src = `https://image.tmdb.org/t/p/w185/${poster_path}`;
  return (
    <div className="shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <img className="rounded-lg" src={img_src} />
      <Link href={`/movie/${id}`}>
        <h5>
          {title} ({release_year})
        </h5>
      </Link>
    </div>
  );
};
