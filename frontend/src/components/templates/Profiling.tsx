import { Box, Button, Flex, Grid, Textarea } from "@mantine/core";
import Heartable from "@molecules/Heartable";
import PageHeader from "@molecules/PageHeader";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profiling = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(1);
  const careers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const [selected, setSelected] = useState([] as string[]);

  const handleSelect = (current: string) => {
    setSelected((prev) =>
      prev.includes(current)
        ? prev.filter((s) => s != current)
        : [...prev, current]
    );
  };

  const tab = useMemo(() => {
    switch (currentTab) {
      case 1:
        return (
          <Grid>
            {careers.map((c) => (
              <Grid.Col span={2}>
                <Heartable
                  id={c.toString()}
                  selected={selected}
                  handleSelect={() => handleSelect(c)}
                />
              </Grid.Col>
            ))}
          </Grid>
        );
      case 2:
      case 3:
      default:
        return <Textarea placeholder="Give us all the details" minRows={15} />;
    }
  }, [currentTab, selected]);
  return (
    <Box>
      <Flex
        direction="column"
        gap="10px"
        sx={{ padding: "40px", height: "100vh" }}
      >
        <PageHeader
          title="Let's make your degree for you"
          desc="kekekkee"
          handleAction={() => setCurrentTab(1)}
        />

        {tab}

        <Flex justify="flex-end" sx={{ width: "100%" }}>
          <Button
            radius="xl"
            onClick={() => {
              currentTab === 3
                ? navigate("/dashboard")
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
