import { Flex, Text, Checkbox as Check } from "@mantine/core";

const Checkbox = ({ data }: { data: any }) => {
  return (
    <Flex
      gap="14px"
      align="flex-start"
      sx={{
        padding: "14px",
        backgroundColor: "#F3F4F8",
        borderRadius: "7.5px",
      }}
    >
      <Check size="xs"></Check>
      <Flex direction="column" sx={{ marginTop: "-2px" }}>
        {/* <Text fz="sm" fw={600}>
          Placeholder
        </Text> */}
        <Text color="#414141" fz="xs">
          {data}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Checkbox;
