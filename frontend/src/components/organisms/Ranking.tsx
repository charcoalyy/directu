import { rankings } from "@constants/text";
import { Flex, Text, Grid } from "@mantine/core";
import Demo from "@organisms/Slider";

const Rank = () => {
  return (
    <Flex
      direction="column"
      align="center"
      gap="10px"
      sx={{ marginTop: "20px" }}
    >
      {rankings.map((r) => (
        <Grid key="r" align="center" sx={{ width: "100%" }}>
          <Grid.Col span={3}>
            <Text>{r}</Text>
          </Grid.Col>
          <Grid.Col span={9}>
            <Demo />
          </Grid.Col>
        </Grid>
      ))}
    </Flex>
  );
};

export default Rank;
