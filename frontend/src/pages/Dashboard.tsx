import { updateCourse } from "@api/courses";
import { createProfile } from "@api/profile";
import useRequest from "@hooks/useRequest";
import { Box } from "@mantine/core";
import Details from "@templates/Details";
import Kanban from "@templates/Kanban";
import { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState<string | null>(null);

  const { data } = useRequest({
    request: createProfile,
    requestByDefault: true,
    params: { id: "30513", body: "304331" },
  });
  console.log(data);

  return (
    <Box>
      <Details open={!!open} setClose={() => setOpen(null)} />
      <Kanban setOpen={setOpen} />
    </Box>
  );
};

export default Dashboard;
