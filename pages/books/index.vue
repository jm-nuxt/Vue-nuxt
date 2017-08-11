<template id="books">
  <section class="books">

    <el-row  justify="center" type="flex">
      <el-col :span="20">
        <nuxt-link to="/">回到首页</nuxt-link>
        <h2>商品列表页面</h2>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6">
        <h3>XXX</h3>
      </el-col>
      <el-col :span="18">

        <el-input
          placeholder="请选择日期"
          icon="search"
          v-model="bookName"
          :on-icon-click="searchBooks">
        </el-input>

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
        bookName:'',
        books:[],
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },

      searchBooks(){
        let url = `/v2/book/search`
        try {
          axios.get(url, {params:{ q: this.bookName }}).then((result) => {
            let {status, data} = result
            if (status === 200) {
              this.books = data.books;
            }
          })
        } catch (e) {
          console.log(e)
        }

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

<style media="screen">
  .books{
    padding: 20px;
  }
</style>
