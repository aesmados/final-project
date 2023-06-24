<template>
  <div class="burger" @click="toggleActive" :class="{ active: isActive }">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <nav @click="toggleActive" :class="{ hide: isActive }">
    <a :href="link.link" v-for="link in links" :key="link.link">{{
      link.text
    }}</a>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      links: [
        { link: "#simple-content2", text: "Какие плюсы?" },
        { link: "#simple-content3", text: "Что потребуется от тебя" },
        { link: "#simple-content4", text: "Наша миссия" },
        { link: "#simple-content4", text: "Присоединиться" },
      ],
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
