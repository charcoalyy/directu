import { Slider } from "@mantine/core";
import { Flex } from "@mantine/core";

// Configure marks to match step
const MARKS = [
  { value: 0, label: "0%" },
  { value: 25, label: "25%" },
  { value: 50, label: "50%" },
  { value: 75, label: "75%" },
  { value: 100, label: "100%" },
];

function Demo() {
  return (
    <Flex
      direction="column"
      justify="center"
      gap="20px"
      sx={{ width: "600px", padding: "20px" }}
    >
      <Slider
        label={(val) => MARKS.find((mark) => mark.value === val)?.label}
        defaultValue={50}
        step={25}
        marks={MARKS}
        styles={{ markLabel: { display: "none" } }}
      />
    </Flex>
  );
}

export default Demo;
