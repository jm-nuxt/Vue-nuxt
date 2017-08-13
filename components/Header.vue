<template>
    <el-menu theme="dark"
             :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
        <el-menu-item index="1">
            <nuxt-link to="/">首页</nuxt-link>
        </el-menu-item>

        <el-menu-item index="2">
            <nuxt-link to="/book">图书</nuxt-link>
        </el-menu-item>

        <el-menu-item index="3">
            <nuxt-link to="/music">音乐</nuxt-link>
        </el-menu-item>

        <!--<el-menu-item>-->
            <!--<nuxt-link tp="/movie">电影</nuxt-link>-->
        <!--</el-menu-item>-->

        <!--<el-menu-item>-->
            <!--<nuxt-link tp="/location">同城</nuxt-link>-->
        <!--</el-menu-item>-->

        <!--<el-menu-item index="3">-->
            <!--<nuxt-link to="/group">小组</nuxt-link>-->
        <!--</el-menu-item>-->
    </el-menu>
</template>

<script>
    export default {
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>