import { ActionIcon, Badge, Flex, Group, Text } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";

const KanbanItem = () => {
  return (
    <Flex
      direction="column"
      gap="16px"
      sx={{
        padding: "16px",
        backgroundColor: "white",
        borderRadius: "7.5px",
      }}
    >
      <Group>
        <Flex sx={{ width: "100%" }} justify="space-between" align="center">
          <Badge size="xs">Placeholder</Badge>
          <ActionIcon size="xs" radius="lg">
            <IconDotsVertical />
          </ActionIcon>
        </Flex>
      </Group>
      <Group>
        <Flex direction="column">
          <Text fz="md" fw={600}>
            Placeholder
          </Text>
          <Text fz="xs" lineClamp={3}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </Flex>
      </Group>
    </Flex>
  );
};

export default KanbanItem;
