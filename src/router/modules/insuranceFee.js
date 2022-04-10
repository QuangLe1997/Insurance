import carInsurance from "@/views/InsuranceFee";

const route = {
  path: "/insurance-fee",
  name: "InsuranceFee",
  component: carInsurance,
  hidden: false,
  props: (route) => Object.assign({}, route.query, route.params),
  meta: {
    title: "Phí bảo hiểm",
  },
};
export default route;
