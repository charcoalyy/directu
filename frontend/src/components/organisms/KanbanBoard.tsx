import { Badge, Box, Flex } from "@mantine/core";
import KanbanItem from "@molecules/KanbanItem";

const KanbanBoard = () => {
  return (
    <Box>
      <Badge radius="sm" size="md">
        Placeholder
      </Badge>
      <Flex
        direction="column"
        gap="12px"
        sx={{
          marginTop: "4px",
          border: "1px solid grey",
          padding: "12px",
          borderRadius: "7.5px",
          backgroundColor: "lightgrey",
        }}
      >
        <KanbanItem />
        <KanbanItem />
      </Flex>
    </Box>
  );
};

export default KanbanBoard;
