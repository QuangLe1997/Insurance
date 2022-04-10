import userInformation from "@/views/UserInformation";

const route = {
  path: "/user-information",
  name: "UserInformation",
  component: userInformation,
  hidden: false,
  props: (route) => Object.assign({}, route.query, route.params),
  meta: {
    title: "Thông tin liên lạc",
    icon: "mdi-policy",
  },
};
export default route;
