// app/api/movie/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

// Mock database or service (replace with your actual data source)
const getMovieFromDatabase = async (id: string) => {
  // This is just a mock implementation - replace with your actual data fetch logic
  // const movies = {
  //   "1": {
  //     id: "1",
  //     title: "Inception",
  //     description:
  //       "A thief who steals corporate secrets through the use of dream-sharing technology.",
  //     releaseDate: "2010-07-16",
  //   },
  //   "2": {
  //     id: "2",
  //     title: "The Dark Knight",
  //     description: "Batman fights the menace known as the Joker.",
  //     releaseDate: "2008-07-18",
  //   },
  //   // Add more mock movies as needed
  // };
  // // Simulate database delay
  // await new Promise((resolve) => setTimeout(resolve, 100));
  // return movies[id as keyof typeof movies] || null;
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mzc1N2YzMjViYmUwNTlkM2I2NzJmMWZkZTUwNmIwYSIsInN1YiI6IjY2MGNjNGZjNWFhZGM0MDE2MzY0MjQwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tq1a3H5SmI75fCikJPylAmvByJSCbv-Ervz0hKUHTaY",
    },
  };

  const res = await fetch(url, options).then((res) => res.json());

  return res;
};

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // Get movie data from your data source
    const movie = await getMovieFromDatabase(id);
    console.log("movie", movie);
    // Return movie data
    return NextResponse.json(movie);
  } catch (error) {
    console.error("Error in movie API route:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
