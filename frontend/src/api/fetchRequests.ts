interface GetProps {
  url: string;
  params?: any;
  token?: string;
}

export const get = async ({ url, params }: GetProps) => {
  if (params) {
    url += "?" + new URLSearchParams(params).toString();
  }

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw data;
};

interface PostProps {
  url: string;
  body?: any;
  token?: string;
}

export const post = async ({ url, body }: PostProps) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw data;
};
