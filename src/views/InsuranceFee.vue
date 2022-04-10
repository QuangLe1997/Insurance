<template>
  <v-col sm="12" md="5" lg="4" xl="3" class="work-space">
    <v-row dense class="mt-8 d-flex justify-space-between align-center">
      <v-col cols="4">
        <menu-insurance-select
          :is-active="selectFee === 0"
          tex-menu="Vật Chất Xe"
          :index="0"
          @selected="selectedFee"
        >
          <svg
            slot="img-icon"
            width="61"
            height="61"
            viewBox="0 0 62 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="30.903"
              cy="30.0558"
              rx="30.901"
              ry="30.0498"
              :opacity="selectFee === 0 ? 1 : 0.1"
              :fill="selectFee === 0 ? 'white' : 'url(#paint0_linear_0_1111)'"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.0111 14.1362C18.8031 14.4576 18.7796 14.8604 18.9489 15.2026L23.9589 25.3453L25.2169 22.7945L27.9759 17.2097L29.2369 14.659L29.0369 14.2466C28.8475 13.8622 28.4472 13.6184 28.0089 13.6204H19.9729C19.5824 13.62 19.2191 13.8148 19.0111 14.1362ZM30.1659 26.6241C28.3706 26.6241 26.6022 27.0482 25.0129 27.86V27.2912C25.0129 27.2818 25.0154 27.2736 25.018 27.2654C25.0202 27.2583 25.0224 27.2512 25.0229 27.2435C25.028 27.1298 25.0513 27.0176 25.0919 26.9109C25.0959 26.9009 25.0989 26.8905 25.1019 26.8801C25.1056 26.8674 25.1093 26.8547 25.1149 26.8429C25.1207 26.8305 25.1214 26.8259 25.122 26.8224C25.1223 26.8207 25.1225 26.8192 25.1232 26.8173C25.1236 26.8163 25.1241 26.8151 25.1249 26.8137L31.3299 14.2466C31.5187 13.864 31.9164 13.6205 32.3529 13.6204H40.3879C40.7783 13.62 41.1416 13.8148 41.3496 14.1362C41.5576 14.4576 41.5811 14.8604 41.4119 15.2026L35.3189 27.5411V27.86C33.7295 27.0471 31.9606 26.6225 30.1649 26.6231L30.1659 26.6241ZM20.7139 37.4718C20.7133 32.3959 24.9442 28.2807 30.1639 28.2801C35.3835 28.2796 39.6153 32.394 39.6159 37.4698C39.6164 42.5457 35.3855 46.661 30.1659 46.6615C27.6593 46.6618 25.2553 45.6937 23.4827 43.9703C21.7101 42.2469 20.7141 39.9093 20.7139 37.4718Z"
              fill="#7F47FA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.116 34.8209L35.341 35.2769L35.344 35.2808C35.6085 35.319 35.8281 35.4994 35.9109 35.7466C35.9937 35.9939 35.9256 36.2654 35.735 36.4478L33.398 38.6543L33.949 41.772C33.9941 42.0293 33.885 42.2892 33.6676 42.4424C33.4503 42.5955 33.1624 42.6154 32.925 42.4935L30.035 41.0212L27.153 42.4906C27.0521 42.5432 26.9394 42.5709 26.825 42.5713C26.6163 42.5722 26.4179 42.4833 26.2829 42.3286C26.148 42.1739 26.0901 41.9691 26.125 41.7691L26.677 38.6514L24.344 36.4439C24.1533 36.2615 24.0852 35.99 24.168 35.7427C24.2509 35.4955 24.4704 35.3151 24.735 35.2769L27.965 34.8209L29.407 31.9832C29.5268 31.7497 29.7721 31.6022 30.0405 31.6022C30.3088 31.6022 30.5541 31.7497 30.674 31.9832L32.116 34.8209ZM32.258 38.2945L32.658 37.9172L34.479 36.1959L31.962 35.84L31.411 35.7622L31.165 35.276L30.035 33.0607V39.8592L30.535 40.111L32.782 41.2585L32.352 38.8274L32.258 38.2945Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_1111"
                x1="26.4507"
                y1="14.1229"
                x2="26.4507"
                y2="28.4875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7F47FA" />
                <stop offset="1" stop-color="#7F47FA" />
              </linearGradient>
            </defs>
          </svg>
        </menu-insurance-select>
      </v-col>
      <v-col cols="4">
        <menu-insurance-select
          tex-menu="TNDSBB"
          :is-active="selectFee === 1"
          :index="1"
          @selected="selectedFee"
        >
          <svg
            slot="img-icon"
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="31.1964"
              cy="30.9226"
              rx="30.3615"
              ry="30.6747"
              :opacity="selectFee === 1 ? 1 : 0.1"
              :fill="selectFee === 1 ? 'white' : 'url(#paint0_linear_0_4522)'"
            />
            <path
              d="M26.6498 23.3776L29.3288 17.7443L30.555 15.1705L30.3588 14.7552C30.1749 14.3672 29.786 14.121 29.3602 14.1229H21.5567C21.1779 14.1231 20.8257 14.3197 20.6239 14.6437C20.4222 14.9676 20.3992 15.3735 20.563 15.7186L25.4275 25.9504L26.6498 23.3776Z"
              fill="url(#paint1_linear_0_4522)"
            />
            <path
              d="M42.3156 14.6442C42.1136 14.32 41.761 14.1232 41.3818 14.1229H33.5793C33.1552 14.1229 32.7687 14.3688 32.5856 14.7552L26.5596 27.431C26.5596 27.4409 26.5537 27.4509 26.5498 27.4608C26.5458 27.4707 26.536 27.5064 26.5272 27.5291C26.4879 27.637 26.4654 27.7503 26.4605 27.8651C26.4605 27.882 26.4507 27.8958 26.4507 27.9127V28.4875C29.583 26.825 33.3241 26.825 36.4564 28.4875V28.1664L42.3735 15.7185C42.5376 15.3741 42.5158 14.9687 42.3156 14.6442Z"
              fill="url(#paint2_linear_0_4522)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.2776 38.1829C22.2778 33.0625 26.3863 28.9117 31.4544 28.9117C33.8884 28.9117 36.2227 29.8887 37.9437 31.6276C39.6647 33.3666 40.6315 35.7251 40.6312 38.1842C40.6307 43.3046 36.5218 47.4551 31.4537 47.4547C26.3857 47.4543 22.2774 43.3033 22.2776 38.1829ZM34.4571 38.979L36.9095 36.5648L36.9026 36.5598C36.9918 36.4726 37.0241 36.3418 36.986 36.2224C36.9478 36.1031 36.8459 36.016 36.7231 35.9979L33.3339 35.5024C33.2279 35.4869 33.1364 35.4193 33.0896 35.322L31.5741 32.2209C31.5197 32.1082 31.4064 32.0367 31.2822 32.0367C31.1581 32.0367 31.0448 32.1082 30.9904 32.2209L29.4748 35.322C29.4279 35.4192 29.3365 35.4867 29.2306 35.5024L25.8414 35.9979C25.7186 36.016 25.6166 36.1031 25.5785 36.2224C25.5404 36.3418 25.5727 36.4726 25.6619 36.5598L28.1143 38.9741C28.1924 39.049 28.229 39.158 28.2123 39.2655L27.6336 42.6748C27.6134 42.7984 27.6639 42.923 27.7641 42.9969C27.8643 43.0701 27.9969 43.0797 28.1064 43.0216L31.1366 41.4131C31.2318 41.3627 31.3454 41.3627 31.4407 41.4131L34.4649 43.0266C34.5745 43.0847 34.7071 43.0751 34.8073 43.0018C34.9075 42.9279 34.9579 42.8033 34.9378 42.6797L34.359 39.2704C34.3421 39.1629 34.3788 39.0539 34.4571 38.979Z"
              fill="url(#paint3_linear_0_4522)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_4522"
                x1="0.834961"
                y1="0.247925"
                x2="0.834961"
                y2="61.5972"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFA247" />
                <stop offset="1" stop-color="#FC6E27" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0_4522"
                x1="20.4546"
                y1="14.1229"
                x2="20.4546"
                y2="25.9504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFA247" />
                <stop offset="1" stop-color="#FC6E27" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_0_4522"
                x1="26.4507"
                y1="14.1229"
                x2="26.4507"
                y2="28.4875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFA247" />
                <stop offset="1" stop-color="#FC6E27" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_0_4522"
                x1="22.2776"
                y1="28.9117"
                x2="22.2776"
                y2="47.4547"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFA247" />
                <stop offset="1" stop-color="#FC6E27" />
              </linearGradient>
            </defs>
          </svg>
        </menu-insurance-select>
      </v-col>
      <v-col cols="4">
        <menu-insurance-select
          tex-menu="Cả 2 gói"
          :is-active="selectFee === 2"
          :index="2"
          @selected="selectedFee"
        >
          <svg
            slot="img-icon"
            width="62"
            height="61"
            viewBox="0 0 62 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="30.951"
              cy="30.1044"
              rx="30.951"
              ry="30.0985"
              :opacity="selectFee === 2 ? 1 : 0.1"
              :fill="selectFee === 2 ? 'white' : 'url(#paint0_linear_0_4537)'"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.1765 15.1141C19.9666 15.4385 19.9426 15.845 20.113 16.1905L25.171 26.4315L26.442 23.8574L29.228 18.2171L30.505 15.6411L30.3 15.2259C30.109 14.8374 29.7048 14.5909 29.262 14.5928H21.147C20.7529 14.5929 20.3864 14.7897 20.1765 15.1141ZM31.439 27.7209C29.6274 27.7213 27.8429 28.1495 26.239 28.9686V28.3939C26.2418 28.3778 26.2454 28.3619 26.25 28.3462C26.2548 28.2312 26.278 28.1177 26.319 28.0098C26.3233 27.9992 26.3266 27.988 26.3299 27.977C26.3336 27.9646 26.3373 27.9525 26.342 27.9417C26.3471 27.9302 26.348 27.9252 26.3488 27.9213C26.3494 27.9182 26.3498 27.9158 26.352 27.9115L32.614 15.2259C32.805 14.8387 33.2075 14.5925 33.649 14.5928H41.763C42.1577 14.5919 42.5251 14.7883 42.7358 15.1129C42.9464 15.4374 42.9707 15.8445 42.8 16.1905L36.643 28.6496V28.9725C35.0386 28.1507 33.2525 27.7211 31.439 27.7209ZM21.895 38.6766C21.8945 33.5508 26.167 29.3951 31.438 29.3945C36.709 29.394 40.9825 33.5489 40.983 38.6747C40.9836 43.8005 36.711 47.9562 31.44 47.9568C28.9087 47.9573 26.4809 46.9798 24.6908 45.2394C22.9007 43.4989 21.895 41.1382 21.895 38.6766Z"
              fill="url(#paint1_linear_0_4537)"
            />
            <path
              d="M35.2541 33.79H31.9131L34.0361 36.7463L35.2541 33.79Z"
              fill="#F9F9F9"
            />
            <path
              d="M34.4611 38.064L32.1711 45.0365L38.0481 38.0679L34.4611 38.064Z"
              fill="#F9F9F9"
            />
            <path
              d="M33.2961 37.2082L31.0671 34.1041L28.8311 37.2033L33.2961 37.2082Z"
              fill="#F9F9F9"
            />
            <path
              d="M30.2251 33.7812H26.8831L28.0951 36.7365L30.2251 33.7812Z"
              fill="#F9F9F9"
            />
            <path
              d="M38.131 37.2131L36.008 34.2568L34.79 37.2102L38.131 37.2131Z"
              fill="#F9F9F9"
            />
            <path
              d="M26.127 34.25L23.998 37.2014H27.339L26.127 34.25Z"
              fill="#F9F9F9"
            />
            <path
              d="M33.5391 38.062L28.5881 38.0571L31.0551 45.6267L33.5391 38.062Z"
              fill="#F9F9F9"
            />
            <path
              d="M24.0801 38.0522L29.9391 45.0325L27.6651 38.0561L24.0801 38.0522Z"
              fill="#F9F9F9"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_4537"
                x1="0"
                y1="0.00598145"
                x2="0"
                y2="60.2029"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FE6587" />
                <stop offset="1" stop-color="#F52D6A" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0_4537"
                x1="20.0002"
                y1="14.5928"
                x2="20.0002"
                y2="47.9568"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FE6587" />
                <stop offset="1" stop-color="#F52D6A" />
              </linearGradient>
            </defs>
          </svg>
        </menu-insurance-select>
      </v-col>
    </v-row>
    <v-card class="bill-container mt-8 mb-2">
      <v-card-title>
        <span class="primary-text-section"> Bản báo giá </span>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <div v-for="(bill, idx) in billData" :key="idx">
          <v-row dense class="mb-1 mt-2 d-flex justify-space-between">
            <v-col cols="7">
              <span
                class="text-info"
                :class="{
                  'font-weight-bold': bill.title.bold,
                }"
                >{{ bill.title.name }}</span
              >
            </v-col>
            <v-col cols="auto" class="ml-auto">
              <span
                :class="{
                  'text-importance': bill.price.bold,
                }"
                class="text-info"
                >{{ bill.price.name }}</span
              >
            </v-col>
          </v-row>
          <v-divider v-if="idx !== billData.length - 1" />
        </div>
        <span class="text-importance" v-if="messageErr">
          {{ messageErr }}
        </span>
        <v-btn
          :loading="loading === 1"
          color="primary"
          class="payment mt-4"
          @click="onPay"
        >
          Thanh toán
        </v-btn>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import MenuInsuranceSelect from "../components/MenuInsuranceSelect";
import axios from "axios";
export default {
  name: "InsuranceFee",
  components: { MenuInsuranceSelect },
  created() {
    this.messageErr = null;
    let carData = localStorage.getItem("CarData");
    if (!carData) {
      this.$router.push("/car-information");
    } else {
      carData = JSON.parse(carData);
    }
    let userData = localStorage.getItem("UserData");
    if (!userData) {
      this.$router.push("/user-information");
    } else {
      userData = JSON.parse(userData);
    }
    this.dataSubmit = {
      name: userData.name,
      phone: userData.phone,
      email: userData.email,
      car_brand: carData.brand,
      car_model: carData.model,
      car_year: carData.year,
      province: carData.province,
      date_registry: carData.dateRegistry,
      date_insurance_atv: carData.insuranceActiveDate,
      is_ecom: carData.isEcomReg,
      date_submit: new Date().toLocaleDateString(),
    };
  },
  data() {
    return {
      billData: [
        {
          title: {
            bold: false,
            name: "Tổn thất xe",
          },
          price: {
            bold: false,
            name: "10,000,000 VND",
          },
        },
        {
          title: {
            bold: false,
            name: "Mất cắp bộ phận",
          },
          price: {
            bold: true,
            name: "2,000,000 VND",
          },
        },
        {
          title: {
            bold: false,
            name: "Tai nạn người trên xe",
          },
          price: {
            bold: true,
            name: "Không áp dụng",
          },
        },
        {
          title: {
            bold: false,
            name: "BH tự nguyện-bên thứ 3",
          },
          price: {
            bold: true,
            name: "Không áp dụng",
          },
        },
        {
          title: {
            bold: false,
            name: "TNDSBB",
          },
          price: {
            bold: false,
            name: "Không áp dụng",
          },
        },
        {
          title: {
            bold: false,
            name: "Tổng phí (trước thuế)",
          },
          price: {
            bold: false,
            name: "12,000,000 VND",
          },
        },
        {
          title: {
            bold: false,
            name: "VAT",
          },
          price: {
            bold: false,
            name: "2,200,000 VND",
          },
        },
        {
          title: {
            bold: true,
            name: "Tổng phí (gồm VAT)",
          },
          price: {
            bold: true,
            name: "16,000,000 VND",
          },
        },
      ],
      selectFee: 0,
      dataSubmit: {},
      messageErr: null,
      loading: 0,
    };
  },
  methods: {
    selectedFee(index) {
      console.log("handle seleceted feee", index);
      this.selectFee = index;
    },
    async onPay() {
      this.loading = 1;
      this.messageErr = null;
      const headers = {
        "Content-Type": "application/json",
        Authorization: process.env.VUE_APP_TOKEN,
      };
      this.dataSubmit.fee_package = this.selectFee;
      axios
        .post(
          `${process.env.VUE_APP_API_BASE_URL}/api/car-insurance/new-insurance`,
          this.dataSubmit,
          {
            headers: headers,
          }
        )
        .then(() => {
          localStorage.removeItem("UserData");
          localStorage.removeItem("CarData");
          this.loading = 0;
          this.$router.push(`/payment-success`).catch();
        })
        .catch(() => {
          this.loading = 0;
          this.messageErr = "Submit data error";
        });
    },
  },
};
</script>

<style scoped lang="scss">
.active-fist {
  background-color: $color-primary !important;
  color: white !important;
}
.active-second {
  background-color: $color-orange !important;
  color: white !important;
}
.active-third {
  background-color: $color-pink !important;
  color: white !important;
}
.bill-container {
  background: #ffffff !important;
  box-shadow: none !important;
  border-radius: 10px;
}
.payment {
  width: 100% !important;
  height: 48.62px !important;
  border-radius: 25px !important;
  text-transform: none !important;
}
</style>
