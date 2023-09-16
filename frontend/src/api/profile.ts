import { post } from "./fetchRequests";
const baseURL = import.meta.env.VITE_BASE_URL;

interface createProfileProps {
  params: { id: string; body: string };
}

export const createProfile = async ({ params }: createProfileProps) => {
  const data = await post({
    url: `${baseURL}/profile`,
    body: params,
  });

  return data;
};
