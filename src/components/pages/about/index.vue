<template>
  <div class="about">
    <h4>about</h4>
    <hr />
    <h4>Vuex</h4>
    <h5>但前求和为： {{ sum }}</h5>
    <h6>但前求和放大10倍为： {{ bigSum }}</h6>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">求和为奇数在加</button>
    <button @click="incrementWait(n)">等待1s后加</button>
    <h6>{{ school }}---{{ subject }}</h6>
    <h6 :style="{ color: 'red' }">
      下方ListComponent组件总人数是：{{ personList.length }}
    </h6>
    <br />
    <h5>多组件共享数据</h5>
    <ListComponent></ListComponent>
  </div>
</template>

<script>
import ListComponent from "./list.vue"
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
export default {
  name: "AboutComponent",
  components: { ListComponent },
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    ...mapState("count", ["sum", "school", "subject"]),
    ...mapState("person", ["personList"]),
    ...mapGetters("count", ["bigSum"]),
  },
  methods: {
    ...mapMutations("count", { increment: "JIA", decrement: "JIAN" }),
    ...mapActions("count", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
  },
}
</script>

<style scoped lang="less">
.about {
  margin: 20px;
  h6,
  h5 {
    margin: 10px 0;
  }
  button {
    margin: 0 10px;
  }
}
</style>
