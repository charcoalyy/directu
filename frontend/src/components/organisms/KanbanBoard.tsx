import { getCourses, updateCourse } from "@api/courses";
import useRequest from "@hooks/useRequest";
import { ActionIcon, Badge, Box, Flex } from "@mantine/core";
import KanbanItem from "@molecules/KanbanItem";
import { IconEdit } from "@tabler/icons-react";
import Details from "@templates/Details";
import Edit from "@templates/Edit";
import { useMemo, useState } from "react";

const KanbanBoard = ({
  data,
  refreshCourses,
}: {
  data: any;
  refreshCourses: () => void;
}) => {
  const [open, setOpen] = useState<string | null>(null);
  const [edit, setEdit] = useState(false);

  const { data: detailsData, makeRequest } = useRequest({
    request: getCourses,
    requestByDefault: false,
  });

  const { makeRequest: makeUpdateRequest } = useRequest({
    request: updateCourse,
    requestByDefault: false,
  });

  // requests review details for a course
  const handleOpen = (current: string) => {
    setOpen((prev) => (prev === current ? null : current));
    makeRequest({ id: "user", course_id: current });
  };

  // updates status of item as added or not added to board
  const handleSelect = async (current: string, action: "delete" | "add") => {
    console.log("we are trying to ", action);
    await makeUpdateRequest({
      id: "user",
      course: current,
      status: action === "add" ? "added" : "not added",
    });
    refreshCourses();
  };

  const selected = useMemo(() => {
    return data.filter((c: any) => c.status === "added");
  }, [data]);

  return (
    <Box>
      <Details
        open={!!open}
        setClose={() => setOpen(null)}
        data={detailsData}
      />
      <Edit
        open={edit}
        courses={data}
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
        {selected.map((c: any) => (
          <KanbanItem
            key={c.name}
            data={c}
            board={true}
            setOpen={() => handleOpen(c.name)}
            handleSelect={handleSelect}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default KanbanBoard;
