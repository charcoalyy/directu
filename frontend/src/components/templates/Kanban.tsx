import { Flex, Grid } from "@mantine/core";
import PageHeader from "@molecules/PageHeader";
import KanbanBoard from "@organisms/KanbanBoard";

const Kanban = () => {
  return (
    <Flex direction="column" gap="30px" sx={{ padding: "40px" }}>
      <PageHeader />
      <Grid>
        {[1, 2, 3, 4].map((i) => (
          <Grid.Col key={i} span={3}>
            <KanbanBoard />
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
};

export default Kanban;
