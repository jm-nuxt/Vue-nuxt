<template>
  <section>
    <h2>Music</h2>
    <ul>
      <li v-for="(music, index) in musics" :key="index">
        <div>
          <img v-bind:src="music.image" v-bind:alt="music.alt">
        </div>
        <p>{{ music.title }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'music',

  data() {
    return {
      musics: [],
      activeName: 'second'
    };
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  },

  async asyncData({ query }) {
    // query 是 ？后面的数据
    // params 是路由中的占位符数据
    // 和express req 类似
    // await 需要定义在 async 函数中

    try {
      const {
        data
      } = await axios.get(`/v2/music/search`, {
        params: query
      })

      // console.log(data.musics)
      return {
        musics: data.musics
      }
    } catch (e) {
      console.log(e)
    }
  },

  head () {
    return {
      title: 'Music',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Music description'
        }
      ],
    }
  }
};
</script>
