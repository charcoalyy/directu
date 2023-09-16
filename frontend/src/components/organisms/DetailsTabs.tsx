import { Flex, Tabs } from "@mantine/core";
import Checkbox from "@molecules/Checkbox";
import { useMemo, useState } from "react";

const DetailsTabs = () => {
  const [activeTab, setActiveTab] = useState<"steps" | "data">("steps");

  const tabsContent = useMemo(() => {
    switch (activeTab) {
      case "data":
        return <Tabs.Panel value="data">hi</Tabs.Panel>;
      case "steps":
        return (
          <Tabs.Panel value="steps">
            <Flex
              direction="column"
              gap="4px"
              sx={{ marginTop: "12px", maxHeight: "400px", overflowY: "auto" }}
            >
              {[1, 2, 3, 4].map((i) => (
                <Checkbox key={i} />
              ))}
            </Flex>
          </Tabs.Panel>
        );
      default:
        return;
    }
  }, [activeTab]);

  return (
    <Tabs value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List grow>
        <Tabs.Tab value="steps">RECOMMENDED STEPS</Tabs.Tab>
        <Tabs.Tab value="data">STUDENT DATA</Tabs.Tab>
      </Tabs.List>

      {tabsContent}
    </Tabs>
  );
};

export default DetailsTabs;
