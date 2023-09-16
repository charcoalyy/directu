import { Flex } from "@mantine/core";
import PageHeader from "@molecules/PageHeader";
import KanbanBoard from "@organisms/KanbanBoard";
import { useNavigate } from "react-router-dom";

const Kanban = ({ data }: { data: any }) => {
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
        {data.map((d: any) => (
          <KanbanBoard key={d} data={d} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Kanban;
