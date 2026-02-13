import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newPost) => {
      return new Promise((resolve) =>
        setTimeout(() => resolve(newPost), 500)
      );
    },

    onSuccess: (newPost) => {
      // Manually update cache instead of refetching
      queryClient.setQueryData(["posts"], (oldPosts = []) => {
        return [newPost, ...oldPosts];
      });
    }
  });
};
