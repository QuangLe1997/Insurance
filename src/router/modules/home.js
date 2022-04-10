import demo from "@/views/Home";

const route = {
  path: "/home-3271",
  name: "Home",
  component: demo,
  hidden: false,
  props: (route) => Object.assign({}, route.query, route.params),
  meta: {
    title: "Home",
    icon: "mdi-home",
  },
};
export default route;
