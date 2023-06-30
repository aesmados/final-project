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
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["links"]),
    ...mapGetters(["isActive"]),
  },
  methods: {
    ...mapMutations(["toggleActive"]),
  },
};
</script>
