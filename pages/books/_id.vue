<template id="product">
  <section class="">
    <el-row type="flex" justify="center">
      <el-col :span="18">
        <nuxt-link to="/books">返回书籍列表页</nuxt-link>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="18">
        <h2>书名： {{ book.title }} </h2>
        <img v-bind:src="book.image" alt="">
        <p>价格：{{book.price}}</p>
        <p>出版时间：{{book.price}}</p>
        <p>出版社：{{book.price}}</p>
        <p>总结：{{book.price}}</p>
        <p>价格：{{book.price}}</p>
        <p>作者：{{book.author[0]}}</p>
        <p>作者介绍：{{book.author_intro}}</p>

        <p>简介：</p>
        <div class="">
          {{ book.catalog }}
        </div>
      </el-col>
    </el-row>
  </section>
</template>

 <script type="text/javascript">
  // let axios = require('axios')
  import axios from '~/plugins/axios'

  export default {
    name: 'id',
    asyncData ({ params, error }) {

      return axios.get('/v2/book/' + params.id)
        .then((res) => {
          console.log(res.data)
          return { book: res.data }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
</script>
