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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["attends"]),
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
