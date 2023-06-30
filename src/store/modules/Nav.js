export default {
  namespaced: true,
  state: {
    isActive: false,
    links: [
      { link: "#simple-content2", text: "Какие плюсы?" },
      { link: "#simple-content3", text: "Что потребуется от тебя" },
      { link: "#simple-content4", text: "Наша миссия" },
      { link: "#simple-content4", text: "Присоединиться" },
    ],
  },
  getters: {
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
};
