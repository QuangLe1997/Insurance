import carInsurance from "@/views/CarInsurance";

const route = {
  path: "/car-insurance",
  name: "CarInsurance",
  component: carInsurance,
  hidden: false,
  props: (route) => Object.assign({}, route.query, route.params),
  meta: {
    title: "Bảo hiểm ô tô",
    icon: "mdi-car",
  },
};
export default route;
