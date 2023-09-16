import { Text, Flex, Tabs, TabsValue } from "@mantine/core";
import Checkbox from "@molecules/Checkbox";
import { useMemo, useState } from "react";

const DetailsTabs = ({ data }: { data: any }) => {
  const [activeTab, setActiveTab] = useState<"summary" | "reviews" | TabsValue>(
    "summary"
  );

  const tabsContent = useMemo(() => {
    switch (activeTab) {
      case "reviews":
        return (
          <Tabs.Panel value="reviews">
            <Flex
              direction="column"
              gap="12px"
              sx={{ marginTop: "12px", backgroundColor: "#F1F1F1" }}
            >
              {data.reviews.map((d: any) => (
                <Flex
                  key={d}
                  direction="column"
                  sx={{
                    padding: "14px",
                    backgroundColor: "#414141",
                    borderRadius: "5px",
                  }}
                >
                  <Text fz="xs">{d}</Text>
                </Flex>
              ))}
            </Flex>
          </Tabs.Panel>
        );
      case "summary":
        return (
          <Tabs.Panel value="summary">
            <Flex
              direction="column"
              gap="4px"
              sx={{ marginTop: "12px", backgroundColor: "#F1F1F1" }}
            >
              {data.summary.map((d: any) => (
                <Checkbox key={d} data={d} />
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
        <Tabs.Tab color="#414141" value="summary">
          REVIEW SUMMARY
        </Tabs.Tab>
        <Tabs.Tab color="#414141" value="reviews">
          TOP REVIEWS
        </Tabs.Tab>
      </Tabs.List>

      {tabsContent}
    </Tabs>
  );
};

export default DetailsTabs;
