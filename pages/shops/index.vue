<template id="products">
  <section>

    <el-row>
      <el-col :span="24">
        <h2>商品列表页面</h2>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6">
        <h3>XXX</h3>
      </el-col>
      <el-col :span="18">
        <ul>
          <li v-for="(product, index) in products" :key="index">
            <nuxt-link :to="{ name: 'shops-id', params: { id: product.id }}">
              <span>{{ product.name }} - {{product.phone}}</span>
              <time>{{ product.time }}</time>
            </nuxt-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </section>
</template>

<script type="text/javascript">
  // let axios = require('axios')
  import axios from '~/plugins/axios'
  export default {
    layout: 'products',
    data() {
      return {
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    },
    // 异步数据获取
    async asyncData (context) {
      try {
        let url = `/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wtmkps3fh90&latitude=30.25807&limit=24&longitude=120.215&offset=0&terminal=web`
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
