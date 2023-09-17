import { Flex, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Flex
      align="center"
      sx={{
        backgroundColor: "#F3F4F8",
        borderRadius: "100px",
        margin: "40px",
        padding: "10px 20px",
      }}
    >
      <Group
        spacing="8px"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img src="./favicon.png" height="20px" style={{ opacity: 0.75 }}></img>
      </Group>
    </Flex>
  );
};

export default Nav;
