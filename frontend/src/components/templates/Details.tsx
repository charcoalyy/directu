import { Drawer, Text } from "@mantine/core";
import DetailsStatus from "@molecules/DetailsStatus";
import DetailsTabs from "@organisms/DetailsTabs";

interface DetailsProps {
  open: boolean;
  setClose: () => void;
  data: any;
}

const Details = ({ open, setClose, data }: DetailsProps) => {
  // parse data

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
        {data.code} {data.name}
      </Text>
      <Text fz="xs" color="#414141">
        {data.desc}
      </Text>

      <DetailsStatus data={{ score: data.score, matches: data.matches }} />
      <DetailsTabs data={{ summary: data.summary, reviews: data.reviews }} />
    </Drawer>
  );
};

export default Details;
