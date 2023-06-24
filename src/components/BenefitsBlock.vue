<template>
  <div id="simple-content2">
    <div class="container">
      <h2 class="m-lg">Какие плюсы?</h2>
      <div class="benefits-row">
        <div class="benefit-item" v-for="benefit in benefits" :key="benefit.id">
          <div class="image">
            <img :src="benefit.image" class="img-fluid" />
          </div>
          <h5>{{ benefit.title }}</h5>
          <p>{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      benefits: [
        {
          id: 1,
          image: "/assets/img1.svg",
          title: "Будь первым",
          description:
            "Ты первым увидишь наши новые продукты и поучаствуешь в их разработке",
        },
        {
          id: 2,
          image: "/assets/img2.svg",
          title: "Поделись опытом",
          description:
            "Будем рады узнать о твоем опыте использования наших продуктов",
        },
        {
          id: 3,
          image: "/assets/img3.svg",
          title: "Получи уникальную ачивку",
          description:
            "Блестящая, свеженькая и такая уникальная ачивка в приложении “Мой Билайн”",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.benefits-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -14px;
}
.benefit-item {
  transition: all 0.3s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 16px;
  background: #fff6cc;
  padding: 85px 35px;
  height: 440px;
  width: 33.33%;
  cursor: pointer;
  margin: 0 14px;
  h5 {
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    margin: 12px 0;
  }
  p {
    color: #78735e;
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    transition: all 0.3s ease;
    opacity: 0;
  }
  &:hover {
    width: 35%;
    p {
      opacity: 1;
    }
  }
}
.benefit-item:nth-child(2) {
  background: #eaf4ff;
}
.benefit-item:last-child {
  background: #000;
  h5,
  p {
    color: #fff;
  }
}
</style>
