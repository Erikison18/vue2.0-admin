<template>
  <div class="news">
    <h4>news~~</h4>
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <router-link :to="`/userLayout/home/news/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'NewsComponent',
  data: ()=> {
    return {
      newsList: [
        {id: "001", title: "新闻001"},
        {id: "002", title: "新闻002"},
        {id: "003", title: "新闻003"},
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.news {}
</style>
