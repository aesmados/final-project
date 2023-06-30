import { createStore } from "vuex";

export default createStore({
  state: {
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
    isActive: false,
    links: [
      { link: "#simple-content2", text: "Какие плюсы?" },
      { link: "#simple-content3", text: "Что потребуется от тебя" },
      { link: "#simple-content4", text: "Наша миссия" },
      { link: "#simple-content4", text: "Присоединиться" },
    ],
  },
  getters: {
    benefits(state) {
      return state.benefits;
    },
    attends(state) {
      return state.attends;
    },
    links(state) {
      return state.links;
    },
    isActive(state) {
      return state.isActive;
    },
  },
  mutations: {
    toggleActive(state) {
      state.isActive = !state.isActive;
    },
  },
  actions: {},
  modules: {},
});
