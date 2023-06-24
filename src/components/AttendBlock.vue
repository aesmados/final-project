<template>
  <div id="simple-content3">
    <div class="container">
      <h2 class="m-lg">Как принять участие?</h2>
      <div class="row">
        <div class="col-sm-6" v-for="attend in attends" :key="attend.id">
          <div class="attend-item">
            <div class="num">{{ attend.id }}</div>
            <h5>{{ attend.title }}</h5>
            <p>{{ attend.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      attends: [
        {
          id: 1,
          title: "Оставь заявку",
          description:
            "Заполни форму максимально честно, выбери продукты которые хочешь тестировать",
        },
        {
          id: 2,
          title: "Ожидай приглашения на интервью",
          description:
            "Будь на связи :) Мы напишем/позвоним тебе заранее и договоримся об удобном времени. Обычно интервью не занимает больше 30-40 минут. ",
        },
        {
          id: 3,
          title: "Позаботься об окружении",
          description:
            "Выбери спокойное, тихое место с хорошим интернетом. Обязательно приноси с собой хорошее настроение 😉",
        },
        {
          id: 4,
          title: "Получи клевую ачивку",
          description:
            "После первого интервью, в приложении Мой Билайн тебе откроется новая ачивка «Яркий пиздюк». Спасибо, что ты с нами!",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.attend-item {
  margin-bottom: 70px;
  padding-right: 120px;
  h5 {
    color: #000;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    margin: 18px 0;
  }
  p {
    color: #78735e;
    font-size: 18px;
    line-height: 24px;
  }
  .num {
    display: flex;
    width: 62px;
    height: 62px;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background: #eaf4ff;
    color: #0183d4;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    line-height: 26px;
  }
}
.col-sm-6:nth-child(2) {
  .attend-item {
    .num {
      color: #9e66ff;
      background: #f3ecff;
    }
  }
}
.col-sm-6:nth-child(3) {
  .attend-item {
    .num {
      color: #61ca45;
      background: #dff6d9;
    }
  }
}
.col-sm-6:nth-child(4) {
  .attend-item {
    .num {
      color: #ffbd12;
      background: #fff7e2;
    }
  }
}
</style>
