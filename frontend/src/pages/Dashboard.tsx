import Loader from "@atoms/Loader";
import { Box } from "@mantine/core";
import Kanban from "@templates/Kanban";

const Dashboard = () => {
  return (
    <Box>
      <Loader />
      <Kanban />
    </Box>
  );
};

export default Dashboard;
