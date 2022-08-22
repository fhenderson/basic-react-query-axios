import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getPostById = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

function usePosts() {
  return useQuery(["posts"], async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  });
}

function usePost(postId) {
  return useQuery(["post", postId], () => getPostById(postId), {
    enabled: !!postId
  });
}

export { usePost, usePosts };
