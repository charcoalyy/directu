import { Flex, Select, Text } from "@mantine/core";

const PageHeader = () => {
  return (
    <Flex direction="column" sx={{ width: "200px" }}>
      <Text fz="lg" fw={700}>
        Title
      </Text>
      <Select placeholder="Select a course" data={["1", "2"]}></Select>
    </Flex>
  );
};

export default PageHeader;
