import { get, post } from "./fetchRequests";
const baseURL = import.meta.env.VITE_BASE_URL;

interface getCoursesProps {
  params: { id: string };
}

export const getCourses = async ({ params }: getCoursesProps) => {
  const data = await get({
    url: `${baseURL}/courses`,
    params: params,
  });
  return data;
};

interface updateCourseProps {
  params: { id: string; course: string; status: boolean };
}

export const updateCourse = async ({ params }: updateCourseProps) => {
  const data = await post({
    url: `${baseURL}/courses`,
    body: params,
  });

  return data;
};
