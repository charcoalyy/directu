import { Flex, Text, Checkbox as Check } from "@mantine/core";

const Checkbox = () => {
  return (
    <Flex
      gap="14px"
      align="flex-start"
      sx={{
        padding: "14px",
        backgroundColor: "#F1F1F1",
        borderRadius: "7.5px",
      }}
    >
      <Check size="xs"></Check>
      <Flex direction="column" sx={{ marginTop: "-4px" }}>
        <Text color="#414141" fz="sm" fw={600}>
          Placeholder
        </Text>
        <Text color="#414141" fz="xs">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Checkbox;
