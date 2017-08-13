<template id="product">
<section class="">
  <el-row type="flex" justify="center">
    <el-col :span="18">
      <nuxt-link to="/book">返回书籍列表页</nuxt-link>
    </el-col>
  </el-row>
  <el-row type="flex" justify="center">
    <el-col :span="18">
      <h2>书名： {{ book.title }} </h2>
      <img v-bind:src="book.image" alt="">
      <p>价格：{{book.price}}</p>
      <p>出版时间：{{book.pubdate}}</p>
      <p>出版社：{{book.publisher}}</p>
      <p>总结：{{book.summary}}</p>
      <p>价格：{{book.price}}</p>
      <p>作者：{{book.author[0]}}</p>
      <p>作者介绍：{{book.author_intro}}</p>

      <p>简介：</p>
      <div>
        {{ book.catalog }}
      </div>
    </el-col>
  </el-row>
</section>
</template>

 <script type="text/javascript">
  import axios from '~/plugins/axios'

  export default {
    name: 'book-id',
    async asyncData ({ params, error }) {

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
