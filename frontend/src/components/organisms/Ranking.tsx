import { Flex, Text, Group } from "@mantine/core";
// import PageHeaderTwo from "@molecules/PageHeaderTwo";
import Demo from "@organisms/Slider";

const Rank = () => {
  return (
    <Flex direction="column" gap="20px" sx={{ padding: "40px" }}>
      {/* <PageHeaderTwo /> */}

      <Group
        sx={{
          width: "850px",
          paddingLeft: "15%",
          paddingTop: "5%",
          //   fontWeight: "600",
        }}
      >
        <Group>
          <Text>Placeholder</Text>
          <Demo />
        </Group>
        <Group>
          <Text>Placeholder</Text>
          <Demo />
        </Group>
        <Group>
          <Text>Placeholder</Text>
          <Demo />
        </Group>
      </Group>
    </Flex>
  );
};

export default Rank;
