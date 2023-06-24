<template>
  <HeadBlock />
  <WhoIs />
  <BenefitsBlock />
  <AttendBlock />
  <MissonBlock />
</template>

<script>
import HeadBlock from "./components/HeadBlock.vue";
import WhoIs from "./components/WhoIs.vue";
import BenefitsBlock from "./components/BenefitsBlock.vue";
import AttendBlock from "./components/AttendBlock.vue";
import MissonBlock from "./components/MissonBlock.vue";

export default {
  name: "App",
  components: {
    HeadBlock,
    WhoIs,
    BenefitsBlock,
    AttendBlock,
    MissonBlock,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: #10083f;
}
h1,
h2 {
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
}
.text-lg {
  color: #504d64;
  font-size: 18px;
  line-height: 22px;
  max-width: 642px;
  margin: auto;
}
.m-lg {
  margin: 110px 0 36px;
}
</style>
