export default {
  namespaced: true,
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
  },
  getters: {
    benefits(state) {
      return state.benefits;
    },
  },
  mutations: {},
  actions: {},
};
