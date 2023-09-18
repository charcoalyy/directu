import { ActionIcon, Flex, Text } from "@mantine/core";
import { IconReload } from "@tabler/icons-react";

interface PageHeaderProps {
  title: string;
  desc: string;
  handleAction: () => void;
}

const PageHeader = ({ title, desc, handleAction }: PageHeaderProps) => {
  return (
    <Flex justify="space-between" gap="80px" align="center">
      <Flex direction="column">
        <Text color="#414141" fz="xl" fw={700}>
          {title}
        </Text>
        <Text color="#414141" fz="sm">
          {desc}
        </Text>
      </Flex>
      <ActionIcon onClick={handleAction}>
        <IconReload />
      </ActionIcon>
    </Flex>
  );
};

export default PageHeader;
