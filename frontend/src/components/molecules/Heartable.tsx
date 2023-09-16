import { ActionIcon, Flex, Text } from "@mantine/core";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

const Heartable = ({
  id,
  selected,
  handleSelect,
}: {
  id: string;
  selected: string[];
  handleSelect: () => void;
}) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      align="center"
      gap="20px"
      sx={{
        background: "lightgrey",
        borderRadius: "5px",
        padding: "12px",
        cursor: "pointer",
        height: "100px",
      }}
      onClick={handleSelect}
    >
      <Flex justify="flex-end" sx={{ width: "100%" }}>
        <ActionIcon size="xs">
          {selected.includes(id) ? <IconHeartFilled /> : <IconHeart />}
        </ActionIcon>
      </Flex>
      <Text fz="xs" sx={{ textAlign: "center" }}>
        {id}
      </Text>
    </Flex>
  );
};

export default Heartable;
