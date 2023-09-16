import { placeholderGet } from "@api/placeholder";
import useRequest from "@hooks/useRequest";
import { Button, Code, Flex, Title } from "@mantine/core";

const Home = () => {
  const { data, makeRequest } = useRequest({
    request: placeholderGet,
    requestByDefault: false,
  });

  return (
    <Flex direction="column" sx={{ width: "400px" }}>
      <Title order={1}>Home</Title>
      <Button onClick={() => makeRequest({ postId: 1 })}>
        Call a placeholder API
      </Button>
      <Code>{data && JSON.stringify(data)}</Code>
    </Flex>
  );
};

export default Home;
