import { Box } from "@mantine/core";
import Details from "@templates/Details";
import Kanban from "@templates/Kanban";
import { useState } from "react";

const Faculty = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Box>
      <Details open={!!open} setClose={() => setOpen(null)} />
      <Kanban setOpen={setOpen} />
    </Box>
  );
};

export default Faculty;
