import { ActionIcon, Flex, Text } from "@mantine/core";
import { IconReload } from "@tabler/icons-react";

interface PageHeaderProps {
  title: string;
  desc: string;
  handleAction: () => void;
}

const PageHeader = ({ title, desc, handleAction }: PageHeaderProps) => {
  return (
    <Flex justify="space-between" gap="60px" align="center">
      <Flex direction="column">
        <Text fz="xl" fw={700}>
          {title}
        </Text>
        <Text fz="xs">{desc}</Text>
      </Flex>
      <ActionIcon onClick={handleAction}>
        <IconReload />
      </ActionIcon>
    </Flex>
  );
};

export default PageHeader;
