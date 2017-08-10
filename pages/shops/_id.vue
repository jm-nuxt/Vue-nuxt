<template id="product">
  <section>
    <h2> {{ shop.name }} </h2>

    <address>{{ shop.address }}</address> 

    <time>营业时间： {{ shop.opening_hours[0]}}</time>  
  </section>
</template>

 <script type="text/javascript">
  // let axios = require('axios')
  import axios from '~/plugins/axios'

  export default {
    name: 'id',
    asyncData ({ params, error }) {
      let url = `/restapi/shopping/restaurant/${params.id}?extras%5B%5D=activities&extras%5B%5D=license&extras%5B%5D=identification&extras%5B%5D=albums&extras%5B%5D=flavors&latitude=30.25807&longitude=120.215`
      return axios.get(url)
        .then((res) => {
          console.log(res.data)
          return { shop: res.data }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
</script>
