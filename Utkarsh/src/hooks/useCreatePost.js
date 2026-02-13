import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newPost) => {
      return new Promise(resolve =>
        setTimeout(() => resolve(newPost), 1000)
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    }
  });
};