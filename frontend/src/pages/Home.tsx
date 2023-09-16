import { Box } from "@mantine/core";
import KanbanBoard from "@organisms/KanbanBoard";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "red", height: "100vh" }}>
      <KanbanBoard />
    </Box>
  );
};

export default Home;
