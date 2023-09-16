import { ActionIcon, Badge, Flex, Group, Text } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";

interface KanbanItemProps {
  handleSelect: (s: string, a: "delete" | "add") => void;
  board: boolean;
  data: any;
  setOpen?: () => void;
  disabled?: boolean;
}

const KanbanItem = ({
  setOpen,
  handleSelect,
  data,
  board,
  disabled,
}: KanbanItemProps) => {
  return (
    <Flex
      direction="column"
      gap="8px"
      sx={{
        padding: "12px",
        backgroundColor: board ? "white" : "lightgrey",
        borderRadius: "7.5px",
        cursor: disabled ? "default" : "pointer",
        width: "100%",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Group>
        <Flex sx={{ width: "100%" }} justify="space-between" align="center">
          <Badge size="xs">badge</Badge>
          <ActionIcon
            size="xs"
            radius="lg"
            onClick={() =>
              !disabled && handleSelect(data.name, board ? "delete" : "add")
            }
          >
            {board ? <IconMinus /> : !disabled && <IconPlus />}
          </ActionIcon>
        </Flex>
      </Group>
      <Group onClick={setOpen}>
        <Flex direction="column">
          <Text fz="xs" fw={600}>
            {data.name}
          </Text>
          <Text sx={{ fontSize: "10px" }}>Duis aute irure dolor</Text>
        </Flex>
      </Group>
    </Flex>
  );
};

export default KanbanItem;
