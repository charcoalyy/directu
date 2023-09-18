import { Badge, Drawer, Grid, Text } from "@mantine/core";
import DetailsTabs from "@organisms/DetailsTabs";

interface DetailsProps {
  open: boolean;
  setClose: () => void;
  data: any;
}

const Details = ({ open, setClose, data }: DetailsProps) => {
  // parse data
  console.log(data);

  return (
    <Drawer
      padding="xl"
      opened={open}
      position="right"
      onClose={setClose}
      title="COURSE DETAILS"
      overlayProps={{ opacity: 0.5, blur: 1 }}
    >
      <Text fz="xl" color="#414141" fw={700}>
        {data.code.toUpperCase()}: {data.name}
      </Text>
      <Text fz="xs" color="#414141">
        {data.desc}
      </Text>

      <Grid align="center" sx={{ marginTop: "4px", marginBottom: "8px" }}>
        <Grid.Col span={2}>
          <Text color="#414141" fz="sm" fw={500}>
            Score
          </Text>
        </Grid.Col>
        <Grid.Col span={10}>
          <Badge>{(data.score * 100).toFixed(2)}% MATCH</Badge>
        </Grid.Col>
      </Grid>

      <DetailsTabs
        data={{
          summary: data.summary,
          reviews: data.reviews,
          personal_explanation: data.personal_explanation,
        }}
      />
    </Drawer>
  );
};

export default Details;
