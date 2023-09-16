import { Flex, Text } from "@mantine/core";

const PageHeader = () => {
  return (
    <Flex direction="column">
      <Text fz="xl" fw={700}>
        Your degree for you.
      </Text>
      <Text fz="xs">
        Click to view what UWFlow has to say about each course. Add and drop
        into your terms as needed.
      </Text>
    </Flex>
  );
};

export default PageHeader;
