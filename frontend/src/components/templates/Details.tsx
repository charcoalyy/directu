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
      <Text fz="xl" fw={700}>
        Title
      </Text>
      <Text fz="xs">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>

      <DetailsStatus />
      <DetailsTabs />
    </Drawer>
  );
};

export default Details;
