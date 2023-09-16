import { Flex, Tabs, TabsValue } from "@mantine/core";
import Checkbox from "@molecules/Checkbox";
import DataList from "@molecules/DataList";
import { useMemo, useState } from "react";

const DetailsTabs = () => {
  const [activeTab, setActiveTab] = useState<"steps" | "data" | TabsValue>(
    "steps"
  );

  const tabsContent = useMemo(() => {
    switch (activeTab) {
      case "data":
        return (
          <Tabs.Panel value="data">
            <Flex direction="column" gap="12px" sx={{ marginTop: "12px" }}>
              {[1, 2].map((i) => (
                <DataList key={i} />
              ))}
            </Flex>
          </Tabs.Panel>
        );
      case "steps":
        return (
          <Tabs.Panel value="steps">
            <Flex direction="column" gap="4px" sx={{ marginTop: "12px" }}>
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
