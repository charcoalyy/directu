import { getCourses, updateCourse } from "@api/courses";
import Loader from "@atoms/Loader";
import { sortByScore } from "@constants/utils";
import useLoading from "@context/loadingContext";
import useRequest from "@hooks/useRequest";
import { ActionIcon, Badge, Box, Flex } from "@mantine/core";
import KanbanItem from "@molecules/KanbanItem";
import { IconPlus } from "@tabler/icons-react";
import Details from "@templates/Details";
import Edit from "@templates/Edit";
import { useMemo, useState } from "react";

const KanbanBoard = ({
  data,
  term,
  refreshCourses,
}: {
  data: any;
  term: string;
  refreshCourses: () => void;
}) => {
  const { setLoading } = useLoading();
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
  const handleOpen = async (current: string) => {
    setOpen((prev) => (prev === current ? null : current));
    setLoading(true);
    await makeRequest({ id: "user", course_id: current });
    setLoading(false);
  };

  // updates status of item as added or not added to board
  const handleSelect = async (current: string, action: "delete" | "add") => {
    setLoading(true);
    await makeUpdateRequest({
      id: "user",
      course: current,
      status: action === "add" ? true : false,
    });

    refreshCourses();
    // setLoading(false);
  };

  const selected = useMemo(() => {
    return data.filter((c: any) => c.status === true);
  }, [data]);

  return (
    <Box>
      <Loader />
      {detailsData && (
        <Details
          open={!!open}
          setClose={() => setOpen(null)}
          data={detailsData.course}
        />
      )}
      <Edit
        open={edit}
        courses={data}
        selected={selected}
        setClose={() => setEdit(false)}
        handleSelect={handleSelect}
      />
      <Flex justify="space-between">
        <Badge radius="sm" size="md">
          Term {term}
        </Badge>
        <ActionIcon size="xs" onClick={() => setEdit(true)}>
          <IconPlus />
        </ActionIcon>
      </Flex>
      <Flex
        direction="column"
        gap="8px"
        sx={{
          height: "450px",
          width: "220px",
          overflowY: "auto",
          marginTop: "4px",
          border: "1px #E0E0E0",
          padding: "12px",
          borderRadius: "7.5px",
          backgroundColor: "#F3F4F8",
        }}
      >
        {sortByScore(selected).map((c: any) => (
          <KanbanItem
            key={c.name}
            data={c}
            board={true}
            setOpen={() => handleOpen(c.code)}
            handleSelect={handleSelect}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default KanbanBoard;
