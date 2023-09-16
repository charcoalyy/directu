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
        <Grid.Col span={3}>
          <Text fz="sm" fw={500}>
            Status
          </Text>
        </Grid.Col>
        <Grid.Col span={9}>
          <Badge>yee</Badge>
        </Grid.Col>
      </Grid>

      <Grid align="center">
        <Grid.Col span={3}>
          <Text fz="sm" fw={500}>
            Timeline
          </Text>
        </Grid.Col>
        <Grid.Col span={9}>
          <Flex gap="4px">
            <Badge>yee</Badge>
            <Text fz="xs">to</Text>
            <Badge>yee</Badge>
          </Flex>
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default DetailsStatus;
