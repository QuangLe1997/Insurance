import CarInformation from "@/views/CarInformation";

const route = {
  path: "/car-information",
  name: "CarInsurance",
  component: CarInformation,
  hidden: false,
  props: (route) => Object.assign({}, route.query, route.params),
  meta: {
    title: "Thông tin xe",
    icon: "mdi-car",
  },
};
export default route;
