import { Openable } from "@constants/details";
import { Flex } from "@mantine/core";
import PageHeader from "@molecules/PageHeader";
import KanbanBoard from "@organisms/KanbanBoard";
import { useNavigate } from "react-router-dom";

const Kanban = ({ setOpen }: Openable) => {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      gap="10px"
      sx={{ padding: "40px", height: "100vh" }}
    >
      <PageHeader
        title="Your degree for you"
        desc="Click the course name to view what UWFlow has to say about each
          course. Click edit to look through your recommended courses and add
          more."
        handleAction={() => navigate("/profiling")}
      />
      <Flex
        gap="10px"
        sx={{ width: "92vw", overflowX: "auto", padding: "8px" }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <KanbanBoard key={i} setOpen={setOpen} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Kanban;
