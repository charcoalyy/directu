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
            <Flex direction="column" gap="12px" sx={{ marginTop: "12px" }}>
              {data.reviews ? (
                data.reviews.map((d: any) => (
                  <Flex
                    key={d}
                    direction="column"
                    sx={{
                      padding: "14px",
                      backgroundColor: "#F3F4F8",
                      borderRadius: "5px",
                    }}
                  >
                    <Text fz="xs">{d}</Text>
                  </Flex>
                ))
              ) : (
                <Text fz="xs">No reviews available for this course</Text>
              )}
            </Flex>
          </Tabs.Panel>
        );
      case "summary":
        return (
          <Tabs.Panel value="summary">
            <Flex
              direction="column"
              gap="4px"
              sx={{ marginTop: "12px", backgroundColor: "#F7F9FE" }}
            >
              {data.summary
                .split("-")
                .map(
                  (text: any) => text && <Checkbox key={text} data={text} />
                )}
            </Flex>
          </Tabs.Panel>
        );
      case "breakdown":
        return (
          <Tabs.Panel value="breakdown">
            <Flex direction="column" gap="4px" sx={{ marginTop: "12px" }}>
              {data.personal_explanation.map((item: any, i: number) => {
                Array.isArray(item) ? (
                  item.map((t: any) => (
                    <ProCon text={t} pro={i === 0 ? true : false} />
                  ))
                ) : (
                  <ProCon text={item} pro={i === 0 ? true : false} />
                );
              })}
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
