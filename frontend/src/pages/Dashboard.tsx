import { Flex } from "@mantine/core";
import Nav from "@molecules/Nav";
import Kanban from "@templates/Kanban";

const Dashboard = () => {
  return (
    <Flex direction="column" justify="flex-start">
      <Nav />
      <Kanban />
    </Flex>
  );
};

export default Dashboard;
