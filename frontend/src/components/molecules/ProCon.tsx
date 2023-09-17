import { Flex, Text } from "@mantine/core";
import { IconMoodHappyFilled, IconMoodSadFilled } from "@tabler/icons-react";

const ProCon = ({ text, pro }: { text: string; pro: boolean }) => {
  return (
    <Flex
      gap="8px"
      align="center"
      sx={{
        padding: "8px",
        backgroundColor: pro ? "#E1F2D0" : "#F7D6D6",
        borderRadius: "5px",
      }}
    >
      {pro ? (
        <IconMoodHappyFilled style={{ color: "#ADE377" }} />
      ) : (
        <IconMoodSadFilled style={{ color: "#EB9B9B" }} />
      )}

      <Text fz="sm">{text}</Text>
    </Flex>
  );
};

export default ProCon;
