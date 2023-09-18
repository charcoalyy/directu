import { Button, Flex, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      gap="8px"
      sx={{ height: "100vh", width: "100vw", backgroundColor: "#F3F4F8" }}
    >
      <img src="./favicon.png" width="90px"></img>
      <Text sx={{ fontSize: "40px" }} fw={900} color="indigo">
        DirectU
      </Text>
      <Text fz="sm" sx={{ textAlign: "center", width: "38%" }}>
        Building on thousands of real students' feedback and experiences, the
        best courses for you—and specifically you—are listed right here, right
        now.
      </Text>
      <Button
        radius="xl"
        sx={{ marginTop: "20px" }}
        onClick={() => navigate("/profile")}
      >
        PROFILE ME
      </Button>
    </Flex>
  );
};

export default Home;
