import { getCourses } from "@api/courses";
import useRequest from "@hooks/useRequest";
import { ActionIcon, Badge, Box, Flex } from "@mantine/core";
import KanbanItem from "@molecules/KanbanItem";
import { IconEdit } from "@tabler/icons-react";
import Details from "@templates/Details";
import Edit from "@templates/Edit";
import { useState } from "react";

const KanbanBoard = ({ data }: { data: any }) => {
  const [open, setOpen] = useState<string | null>(null);
  const courses = ["A", "B", "C"];
  const [selected, setSelected] = useState(["A", "C"]);
  const [edit, setEdit] = useState(false);

  const { data: detailsData, makeRequest } = useRequest({
    request: getCourses,
    requestByDefault: false,
  });

  const handleSelect = (current: string) => {
    setSelected((prev) =>
      prev.includes(current)
        ? prev.filter((s) => s != current)
        : [...prev, current]
    );
    makeRequest({ id: "user", course_id: current });
  };

  return (
    <Box>
      <Details
        open={!!open}
        setClose={() => setOpen(null)}
        data={detailsData}
      />
      <Edit
        open={edit}
        courses={courses}
        selected={selected}
        setClose={() => setEdit(false)}
        handleSelect={handleSelect}
      />
      <Flex justify="space-between">
        <Badge radius="sm" size="md">
          Placeholder
        </Badge>
        <ActionIcon size="xs" onClick={() => setEdit(true)}>
          <IconEdit />
        </ActionIcon>
      </Flex>
      <Flex
        direction="column"
        gap="8px"
        sx={{
          height: "400px",
          width: "220px",
          overflowY: "auto",
          marginTop: "4px",
          border: "1px solid grey",
          padding: "12px",
          borderRadius: "7.5px",
          backgroundColor: "lightgrey",
        }}
      >
        {selected.map((i) => (
          <KanbanItem
            key={i}
            data={data}
            board={true}
            i={i.toString()}
            setOpen={setOpen}
            handleSelect={handleSelect}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default KanbanBoard;
