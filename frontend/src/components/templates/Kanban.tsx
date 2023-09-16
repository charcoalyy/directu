import { getCourses } from "@api/courses";
import { headers } from "@constants/text";
import useRequest from "@hooks/useRequest";
import { Flex } from "@mantine/core";
import PageHeader from "@molecules/PageHeader";
import KanbanBoard from "@organisms/KanbanBoard";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Kanban = () => {
  const navigate = useNavigate();

  const { data, makeRequest } = useRequest({
    request: getCourses,
    requestByDefault: true,
    params: { id: "user" },
  });

  const parsedData = useMemo(() => {
    return (
      data &&
      data.courses.reduce(
        (
          dict: { [key: string]: any[] },
          course: {
            name: string;
            code: string;
            term: string;
            status: string;
          }
        ) => {
          // if (!Object.keys(dict).includes(course.term)) {
          //   dict[course.term] = [course];
          // } else {
          //   dict[course.term].push(course);
          // }
          // console.log(dict);
          // TODO: hardcode in terms

          dict.temporary.push(course);
          return dict;
        },
        { temporary: [] }
      )
    );
  }, [data]);

  return (
    <Flex
      direction="column"
      gap="10px"
      sx={{ padding: "40px", height: "100vh" }}
    >
      <PageHeader
        title={headers.dashboard.title}
        desc={headers.dashboard.desc}
        handleAction={() => navigate("/profile")}
      />
      <Flex
        gap="10px"
        sx={{ width: "92vw", overflowX: "auto", padding: "8px" }}
      >
        {parsedData &&
          Object.entries(parsedData).map(([term, courses]) => (
            <KanbanBoard
              key={term}
              term={term}
              data={courses}
              refreshCourses={() => makeRequest({ id: "user" })}
            />
          ))}
      </Flex>
    </Flex>
  );
};

export default Kanban;
