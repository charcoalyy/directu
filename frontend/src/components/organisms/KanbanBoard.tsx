import { Openable } from "@constants/details";
import { Badge, Box, Flex } from "@mantine/core";
import KanbanItem from "@molecules/KanbanItem";

const KanbanBoard = ({ setOpen }: Openable) => {
  return (
    <Box>
      <Badge radius="sm" size="md">
        Placeholder
      </Badge>
      <Flex
        direction="column"
        gap="12px"
        sx={{
          height: "400px",
          overflowY: "auto",
          marginTop: "4px",
          border: "1px solid grey",
          padding: "12px",
          borderRadius: "7.5px",
          backgroundColor: "lightgrey",
        }}
      >
        {[1, 2, 3, 4].map((i) => (
          <KanbanItem key={i} setOpen={setOpen} />
        ))}
      </Flex>
    </Box>
  );
};

export default KanbanBoard;
