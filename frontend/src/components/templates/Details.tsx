import { Drawer, Text } from "@mantine/core";
import DetailsTabs from "@organisms/DetailsTabs";

const Details = () => {
  return (
    <Drawer
      padding="xl"
      opened={true}
      position="right"
      onClose={close}
      title="ITEM DETAILS"
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

      <DetailsTabs />
    </Drawer>
  );
};

export default Details;
