import { Flex, Text } from "@mantine/core";

const DataList = () => {
  return (
    <Flex direction="column" gap="4px">
      <Text color="#414141" fz="md" fw={600}>
        Title
      </Text>

      {[1, 2].map((i) => (
        <Flex
          key={i}
          direction="column"
          sx={{
            padding: "14px",
            backgroundColor: "#F3F4F8",
            borderRadius: "5px",
          }}
        >
          <Text color="#414141" fz="xs">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default DataList;
