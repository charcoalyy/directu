import { getCourses } from "@api/courses";
import Loader from "@atoms/Loader";
import useRequest from "@hooks/useRequest";
import { MultiSelect } from "@mantine/core";
import { useEffect, useMemo, useState } from "react";

const Multiselect = ({
  updateHomeValue,
}: {
  updateHomeValue: (v: string[]) => void;
}) => {
  const [value, setValue] = useState([] as string[]);

  const { data } = useRequest({
    request: getCourses,
    requestByDefault: true,
    params: { id: "user" },
  });

  const parsedData = useMemo(() => {
    return (
      data &&
      data.courses.map((d: any) => {
        return { label: d.code.toUpperCase(), value: d.code };
      })
    );
  }, [data]);

  useEffect(() => {
    updateHomeValue(value);
  }, [value]);

  return (
    <>
      {parsedData ? (
        <MultiSelect
          data={parsedData}
          searchable
          value={value}
          onChange={setValue}
          defaultValue={[]}
          placeholder="Pick courses"
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Multiselect;
