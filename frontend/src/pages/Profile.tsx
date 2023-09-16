import { createProfile } from "@api/profile";
import useRequest from "@hooks/useRequest";
import Profiling from "@templates/Profiling";

const Profile = () => {
  const { data } = useRequest({
    request: createProfile,
    requestByDefault: true,
    params: { id: "30513", body: "304331" },
  });
  console.log(data);

  return <Profiling />;
};

export default Profile;
