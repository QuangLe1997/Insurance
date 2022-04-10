import PaymentSuccess from "@/views/PaymentSuccess";

const route = {
  path: "/payment-success",
  name: "PaymentSuccess",
  component: PaymentSuccess,
  hidden: false,
  props: (route) => Object.assign({}, route.query, route.params),
  meta: {
    title: "Thanh toán thành công",
    icon: "mdi-car",
  },
};
export default route;
