import { Openable } from "@constants/details";
import { Flex } from "@mantine/core";
import PageHeader from "@molecules/PageHeader";
import KanbanBoard from "@organisms/KanbanBoard";

const Kanban = ({ setOpen }: Openable) => {
  return (
    <Flex
      direction="column"
      gap="10px"
      justify="center"
      sx={{ padding: "40px", height: "100vh" }}
    >
      <PageHeader />
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
