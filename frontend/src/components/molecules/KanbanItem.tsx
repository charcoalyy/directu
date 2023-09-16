import { Openable } from "@constants/details";
import { ActionIcon, Badge, Flex, Group, Text } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";

interface KanbanItemProps extends Openable {
  i: string;
  handleSelect: (s: string) => void;
  board: boolean;
  disabled?: boolean;
}

const KanbanItem = ({
  i,
  setOpen,
  handleSelect,
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
          <Badge size="xs">Placeholder</Badge>
          <ActionIcon
            size="xs"
            radius="lg"
            onClick={() => !disabled && handleSelect(i)}
          >
            {board ? <IconMinus /> : !disabled && <IconPlus />}
          </ActionIcon>
        </Flex>
      </Group>
      <Group onClick={() => setOpen && setOpen(i)}>
        <Flex direction="column">
          <Text fz="xs" fw={600}>
            Placeholder
          </Text>
          <Text sx={{ fontSize: "10px" }}>Duis aute irure dolor</Text>
        </Flex>
      </Group>
    </Flex>
  );
};

export default KanbanItem;
