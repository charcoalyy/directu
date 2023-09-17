import { createProfile } from "@api/profile";
import { careerCards, headers } from "@constants/text";
import useRequest from "@hooks/useRequest";
import { Box, Button, Flex, Grid, Textarea } from "@mantine/core";
import Heartable from "@molecules/Heartable";
import PageHeader from "@molecules/PageHeader";
import Rank from "@organisms/Ranking";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profiling = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(1);
  const [selected, setSelected] = useState([] as string[]);
  const [text, setText] = useState("");

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

    makeRequest({
      id: "user",
      body: body,
    });

    navigate("/dashboard");
  };

  const tab = useMemo(() => {
    switch (currentTab) {
      case 1:
        return (
          <Grid>
            {careerCards.map((c) => (
              <Grid.Col span={2}>
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
      default:
        return (
          <Textarea
            placeholder="Give us all the details"
            minRows={15}
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          />
        );
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
              currentTab === 3
                ? handleSubmit()
                : setCurrentTab((prev) => (prev !== 3 ? prev + 1 : prev));
            }}
          >
            {currentTab === 3 ? "DONE" : "NEXT"}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Profiling;
