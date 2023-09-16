import { Badge, Flex, Grid, Text } from "@mantine/core";

const DetailsStatus = ({ data }: { data: any }) => {
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
          <Badge>{data.score}% MATCH</Badge>
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
            {data.matches.map((m: any) => (
              <Badge>{m}</Badge>
            ))}
          </Flex>
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default DetailsStatus;
