import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../services/api";

/*
Custom hook created to:
1. Abstract server state logic
2. Avoid repetition
3. Improve maintainability
4. Centralize caching logic
*/

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  });
};