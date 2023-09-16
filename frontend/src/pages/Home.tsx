import { Box } from "@mantine/core";
import KanbanItem from "@molecules/KanbanItem";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "red", height: "100vh" }}>
      <KanbanItem />
    </Box>
  );
};

export default Home;
