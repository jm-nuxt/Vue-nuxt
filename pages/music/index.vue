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
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      }
    },

    async asyncData(){
      try {
        console.log(1111)
        const { data } = await axios.get(`/v2/music/search`, {params: { q: '周杰伦'}})
        return {
          musics: data.musics
        }
      } catch (e){
        console.log(e)
      }
    }
  };
</script>