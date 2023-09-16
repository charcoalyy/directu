import { Flex, Tabs, TabsValue } from "@mantine/core";
import Checkbox from "@molecules/Checkbox";
import DataList from "@molecules/DataList";
import { useMemo, useState } from "react";

const DetailsTabs = () => {
  const [activeTab, setActiveTab] = useState<"summary" | "reviews" | TabsValue>(
    "summary"
  );

  const tabsContent = useMemo(() => {
    switch (activeTab) {
      case "reviews":
        return (
          <Tabs.Panel value="reviews">
            <Flex direction="column" gap="12px" sx={{ marginTop: "12px" }}>
              {[1, 2].map((i) => (
                <DataList key={i} />
              ))}
            </Flex>
          </Tabs.Panel>
        );
      case "summary":
        return (
          <Tabs.Panel value="summary">
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
        <Tabs.Tab value="summary">REVIEW SUMMARY</Tabs.Tab>
        <Tabs.Tab value="reviews">TOP REVIEWS</Tabs.Tab>
      </Tabs.List>

      {tabsContent}
    </Tabs>
  );
};

export default DetailsTabs;
