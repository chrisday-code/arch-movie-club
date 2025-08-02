import useSWR from "swr";

export function useMovie({ id }: { id: string }) {
  const key = `/api/movie/${id}`;
  return useSWR<any>([key], async () => {
    return fetch(key).then((res) => res.json());
  });
}
