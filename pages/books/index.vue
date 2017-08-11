<template id="products">
  <section>
    <nuxt-link to="/">回到首页</nuxt-link>
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
          <li v-for="(book, index) in books" :key="index">
            <nuxt-link :to="{ name: 'books-id', params: { id: book.id }}">
              <span>{{ book.title }}</span>
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
        let url = `/v2/book/search?q=python&fields=id,title`
        const { data } = await axios.get(url)
        console.log(data.books)
        return {
          books: data.books
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
</script>
