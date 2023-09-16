import { get, post } from "./fetchRequests";
const baseURL = import.meta.env.VITE_BASE_URL;

export const dummyGet = async () => {
  const data = await get({
    url: `${baseURL}/dummy`,
  });
  return data;
};

interface placeholderGetProps {
  params: { postId?: string };
}

export const placeholderGet = async ({ params }: placeholderGetProps) => {
  const data = await get({
    url: "https://jsonplaceholder.typicode.com/comments",
    params: params,
  });
  return data;
};

interface placeholderPostProps {
  params: {
    title: string;
    body: string;
    userId: number;
  };
}

export const placeholderPost = async ({ params }: placeholderPostProps) => {
  const data = await post({
    url: "https://jsonplaceholder.typicode.com/posts",
    body: params,
  });

  return data;
};
