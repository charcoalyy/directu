import { Drawer, Flex, Text } from "@mantine/core";
import KanbanItem from "@molecules/KanbanItem";

interface DetailsProps {
  courses: string[];
  selected: string[];
  open: boolean;
  setClose: () => void;
  handleSelect: (s: string) => void;
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
      <Text fz="xl" fw={700}>
        Title
      </Text>
      <Text fz="xs">
        These are the courses recommended to you for this term.
      </Text>

      <Flex direction="column" gap="8px">
        {courses.map((c) => (
          <KanbanItem
            board={false}
            disabled={selected.includes(c)}
            key={c}
            i={c}
            handleSelect={handleSelect}
          />
        ))}
      </Flex>
    </Drawer>
  );
};

export default Edit;
