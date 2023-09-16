import { ActionIcon, Flex, Text } from "@mantine/core";
import { IconReload } from "@tabler/icons-react";

const PageHeader = () => {
  return (
    <Flex justify="space-between" align="center">
      <Flex direction="column">
        <Text fz="xl" fw={700}>
          Your degree for you.
        </Text>
        <Text fz="xs">
          Click the course name to view what UWFlow has to say about each
          course. Click edit to look through your recommended courses and add
          more.
        </Text>
      </Flex>
      <ActionIcon>
        <IconReload />
      </ActionIcon>
    </Flex>
  );
};

export default PageHeader;
