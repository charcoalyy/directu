import { getCourses } from "@api/courses";
import useRequest from "@hooks/useRequest";
import { Box } from "@mantine/core";
import Kanban from "@templates/Kanban";

const Dashboard = () => {
  // parse into object where each key is a school term
  const { data } = useRequest({
    request: getCourses,
    requestByDefault: true,
    params: { id: "user" },
  });

  return <Box>{data && <Kanban data={data.courses} />}</Box>;
};

export default Dashboard;
