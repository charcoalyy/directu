import { Badge, Flex, Grid, Text } from "@mantine/core";

const DetailsStatus = () => {
  return (
    <Flex
      direction="column"
      gap="8px"
      sx={{
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Grid align="center">
        <Grid.Col span={2}>
          <Text fz="sm" fw={500}>
            Score
          </Text>
        </Grid.Col>
        <Grid.Col span={10}>
          <Badge>80</Badge>
        </Grid.Col>
      </Grid>

      <Grid align="center">
        <Grid.Col span={2}>
          <Text fz="sm" fw={500}>
            Matches
          </Text>
        </Grid.Col>
        <Grid.Col span={10}>
          <Flex gap="4px">
            <Badge>group work</Badge>
            <Badge>AI field</Badge>
            <Badge>no exams</Badge>
          </Flex>
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default DetailsStatus;
