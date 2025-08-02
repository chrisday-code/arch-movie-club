import useSWR from "swr";
export function useTmdbData({ id }: { id: string }) {
  const key = `/api/movie/${id}`;
  return useSWR<{ hello: string }>([key], async () => {
    return fetch(key).then((res) => res.json());
  });
}
