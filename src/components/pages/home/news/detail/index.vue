<template>
  <div class="newsDetail">
    <ul>
      <li>新闻编号：{{$route.query.id}}</li>
      <li>新闻标题：{{$route.query.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data: ()=> {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped>
.newsDetail {}
</style>
