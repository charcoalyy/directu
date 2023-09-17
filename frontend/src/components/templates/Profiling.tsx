import { createProfile } from "@api/profile";
import { careerCards, headers } from "@constants/text";
import useRequest from "@hooks/useRequest";
import { Box, Button, Flex, Grid, Textarea } from "@mantine/core";
import Heartable from "@molecules/Heartable";
import PageHeader from "@molecules/PageHeader";
import Multiselect from "@organisms/Multiselect";
import Rank from "@organisms/Ranking";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profiling = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(1);
  const [selected, setSelected] = useState([] as string[]);
  const [text, setText] = useState("");
  const [courses, setCourses] = useState([] as string[]);

  const { makeRequest } = useRequest({
    request: createProfile,
    requestByDefault: false,
  });

  const handleSelect = (current: string) => {
    setSelected((prev) =>
      prev.includes(current)
        ? prev.filter((s) => s != current)
        : [...prev, current]
    );
  };

  const handleSubmit = () => {
    const body = "Career interests include "
      .concat(selected.join(", "))
      .concat(". ")
      .concat(text);

    const liked = courses;

    makeRequest({
      id: "user",
      body: body,
      liked: liked,
    });

    navigate("/dashboard");
  };

  const tab = useMemo(() => {
    switch (currentTab) {
      case 1:
        return (
          <Grid>
            {careers.map((c) => (
              <Grid.Col span={2} key={c}>
                <Heartable
                  id={c.name}
                  iconName={c.icon}
                  selected={selected}
                  handleSelect={() => handleSelect(c.name)}
                />
              </Grid.Col>
            ))}
          </Grid>
        );
      case 2:
        return <Rank />;
      case 3:
        return (
          <Textarea
            placeholder="Give us all the details"
            minRows={15}
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          />
        );
      case 4:
        return <Multiselect updateHomeValue={setCourses} />;
      default:
        return;
    }
  }, [currentTab, selected, text]);

  return (
    <Box>
      <Flex
        direction="column"
        gap="10px"
        sx={{ padding: "40px", height: "100vh" }}
      >
        <PageHeader
          // @ts-ignore
          title={headers[`profiling${currentTab}`].title}
          // @ts-ignore
          desc={headers[`profiling${currentTab}`].desc}
          handleAction={() => setCurrentTab(1)}
        />

        {tab}

        <Flex justify="flex-end" sx={{ width: "100%" }}>
          <Button
            radius="xl"
            size="xs"
            onClick={() => {
              currentTab === 4
                ? handleSubmit()
                : setCurrentTab((prev) => (prev !== 4 ? prev + 1 : prev));
            }}
          >
            {currentTab === 4 ? "DONE" : "NEXT"}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Profiling;
