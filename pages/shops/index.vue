<template id="products">
  <section>

    <router-link to="/">首页</router-link>
    <!-- <a href=""></a> -->

    <!-- <button type="button" name="button" @click="back()">回到首页</button> -->
    <h2>商品列表页面</h2>

    <ul>
      <li v-for="(product, index) in products" :key="index">
        <nuxt-link :to="{ name: 'shops-id', params: { id: product.id }}">
          <span>{{ product.name }} - {{product.phone}}</span>
          <time>{{ product.time }}</time>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script type="text/javascript">
  // let axios = require('axios')
  import axios from '~/plugins/axios'
  export default {
    layout: 'products',
    // 异步数据获取
    async asyncData (context) {
      try {
        // let url = `/api/shops`
        // if (context.isClient) {
        //   url = `/api/shops`
        // } else {
        let url = `/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wtmkps3fh90&latitude=30.25807&limit=24&longitude=120.215&offset=0&terminal=web`
        // }
        const { data } = await axios.get(url)
        return {
          products: data
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
</script>
