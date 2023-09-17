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
      sx={{ height: "100vh", width: "100vw" }}
    >
      <Text sx={{ fontSize: "40px" }} fw={700} color="primary">
        DirectU
      </Text>
      <Text fz="sm" sx={{ textAlign: "center", width: "50%" }}>
        With the collective effort of thousands of real students' feedback and
        experiences, the best courses for you—and specifically you—are laid out
        right in front of you.
      </Text>
      <Text fz="sm" sx={{ textAlign: "center", width: "50%" }}>
        Want to take the program courses that'll actually provide something of
        value? DirectU has your back. Want to minor with only the best possible
        courses for it? DirectU has your back. Want the easiest way out? DirectU
        has your back.
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
