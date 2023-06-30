<template>
  <div id="simple-content">
    <div class="container">
      <div class="top-row">
        <div class="logo">
          <img src="/assets/logo.svg" alt="" />
        </div>
        <NavBar />
      </div>
      <div class="row align-items-center">
        <div class="col-sm-4">
          <div class="text">
            <h1>
              Стань нашим <br />
              респондентом
            </h1>
            <p class="text-lg">
              Мы хотим услышать твое мнение, опыт <br />
              и боли общения с цифровыми продуктами Beeline.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfm_Yj07urIb_fF0mTRGZgl5DWt5lC2qYd4TngwXWMgMHiYMg/viewform?usp=sf_link"
              class="btn-ready"
              >Я готов!</a
            >
          </div>
        </div>
        <div class="col-sm-8">
          <div class="banner-image">
            <img src="/assets/banner.svg" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#simple-content {
  background: #f1f1f4;
  padding: 50px 0;
}
.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
}
.banner-image {
  display: flex;
  justify-content: flex-end;
}

.btn-ready {
  background: #ffe14d;
  height: 56px;
  width: 158px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: #10083f;
  transition: all 0.3s ease-out;
  &:hover {
    color: #ffe14d;
    background: #000;
  }
}
.banner {
  margin-top: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text-lg {
  margin: 24px 0;
}
</style>
