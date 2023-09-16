import { useCallback, useEffect, useState } from "react";

interface useRequestProps {
  request: (givenParams: { params?: any } | any) => Promise<any>;
  requestByDefault: boolean;
  params?: any;
}

const useRequest = ({ request, requestByDefault, params }: useRequestProps) => {
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState<boolean>(requestByDefault);

  // provides a re-usable call to the desired request
  const makeRequest = useCallback(
    async (params?: any) => {
      setLoading(true);
      let response = undefined;
      try {
        response = await request(params ? { params: params } : {});
        setData(response);
      } catch (err: any) {
        setData(undefined);
        console.log("Error: ", err);
      }
      setLoading(false);
      return response;
    },
    [request]
  );

  // automatically calls desired request if default is true
  useEffect(() => {
    if (loading && requestByDefault) {
      makeRequest(params);
    }
  }, [loading, requestByDefault, makeRequest, params]);

  return { data, loading, makeRequest };
};

export default useRequest;
