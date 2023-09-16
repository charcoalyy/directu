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
        cursor: "default",
        width: "100%",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Group>
        <Flex sx={{ width: "100%" }} justify="space-between" align="center">
          <Badge size="xs">{data.score}% MATCH</Badge>
          <ActionIcon
            size="xs"
            radius="lg"
            onClick={() =>
              !disabled && handleSelect(data.code, board ? "delete" : "add")
            }
          >
            {board ? <IconMinus /> : !disabled && <IconPlus />}
          </ActionIcon>
        </Flex>
      </Group>
      <Group onClick={setOpen} sx={{ cursor: "pointer" }}>
        <Flex direction="column">
          <Text color="#414141" fz="xs" fw={600}>
            {data.name}
          </Text>
          <Text color="#414141" sx={{ fontSize: "10px" }}>{data.name}</Text>
        </Flex>
      </Group>
    </Flex>
  );
};

export default KanbanItem;
