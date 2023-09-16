import { Flex, Grid } from "@mantine/core";
import PageHeader from "@molecules/PageHeader";
import KanbanBoard from "@organisms/KanbanBoard";

const Kanban = () => {
  return (
    <Flex
      direction="column"
      gap="20px"
      justify="center"
      sx={{ padding: "40px", height: "100vh" }}
    >
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
