import { sortByScore } from "@constants/utils";
import { Drawer, Flex, Text } from "@mantine/core";
import KanbanItem from "@molecules/KanbanItem";

interface DetailsProps {
  courses: any[];
  selected: string[];
  open: boolean;
  setClose: () => void;
  handleSelect: (s: string, a: "delete" | "add") => void;
}

const Edit = ({
  courses,
  selected,
  open,
  setClose,
  handleSelect,
}: DetailsProps) => {
  return (
    <Drawer
      padding="xl"
      opened={open}
      position="right"
      onClose={setClose}
      title="COURSE LIST"
      overlayProps={{ opacity: 0.5 }}
    >
      <Text color="#414141" fz="xl" fw={700}>
        Add More
      </Text>
      <Text color="#414141" fz="xs">
        These are the courses recommended to you for this term.
      </Text>

      <Flex direction="column" gap="8px" sx={{ marginTop: "16px" }}>
        {sortByScore(courses).map((c) => (
          <KanbanItem
            data={c}
            board={false}
            disabled={selected.includes(c)}
            key={c.code}
            handleSelect={handleSelect}
          />
        ))}
      </Flex>
    </Drawer>
  );
};

export default Edit;
