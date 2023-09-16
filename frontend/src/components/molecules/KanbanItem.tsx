import { ActionIcon, Badge, Flex, Grid, Text } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";

const KanbanItem = () => {
  return (
    <Grid
      sx={{
        padding: "20px",
        backgroundColor: "white",
        width: "30%",
        marginTop: "20px",
        borderRadius: "7.5px",
      }}
    >
      <Grid.Col span={12}>
        <Flex justify="space-between" align="center">
          <Badge>Placeholder</Badge>
          <ActionIcon size="xs" radius="lg">
            <IconDotsVertical />
          </ActionIcon>
        </Flex>
      </Grid.Col>
      <Grid.Col span={12}>
        <Flex direction="column">
          <Text fz="md" fw={600}>
            Placeholder
          </Text>
          <Text fz="sm" lineClamp={3}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default KanbanItem;
