import { Text, Flex, Tabs, TabsValue } from "@mantine/core";
import Checkbox from "@molecules/Checkbox";
import ProCon from "@molecules/ProCon";
import { useMemo, useState } from "react";

const DetailsTabs = ({ data }: { data: any }) => {
  const [activeTab, setActiveTab] = useState<
    "summary" | "reviews" | "breakdown" | TabsValue
  >("summary");

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
              {/* {data.reviews.map((d: any) => (
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
              ))} */}
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
      case "breakdown":
        return (
          <Tabs.Panel value="breakdown">
            <Flex direction="column" gap="4px" sx={{ marginTop: "12px" }}>
              {/* {data.analysis.map((d: any) => (
                <ProCon text={d.text} pro={!!d.pro} />
              ))} */}
            </Flex>
          </Tabs.Panel>
        );
      default:
        return;
    }
  }, [activeTab]);

  return (
    <Tabs value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab color="#414141" value="summary">
          Review Summary
        </Tabs.Tab>
        <Tabs.Tab color="#414141" value="reviews">
          Top Reviews
        </Tabs.Tab>
        <Tabs.Tab color="#414141" value="breakdown">
          Why This Course
        </Tabs.Tab>
      </Tabs.List>

      {tabsContent}
    </Tabs>
  );
};

export default DetailsTabs;
