import { Flex, Text, Checkbox as Check } from "@mantine/core";

const Checkbox = ({ data }: { data: any }) => {
  return (
    <Flex
      gap="14px"
      align="flex-start"
      sx={{
        padding: "14px",
        backgroundColor: "lightgrey",
        borderRadius: "7.5px",
      }}
    >
      <Check size="xs"></Check>
      <Flex direction="column" sx={{ marginTop: "-2px" }}>
        {/* <Text fz="sm" fw={600}>
          Placeholder
        </Text> */}
        <Text fz="xs">{data}</Text>
      </Flex>
    </Flex>
  );
};

export default Checkbox;
