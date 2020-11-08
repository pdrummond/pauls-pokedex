import { useParams } from "react-router-dom";

export function usePageParam(): number {
  const { pageParam } = useParams<{ pageParam: string }>();
  return parseInt(pageParam);
}
