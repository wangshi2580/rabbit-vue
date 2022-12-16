<template>
    <div>123</div>
    <el-button type="primary" @click="getNum">123</el-button>
    <p>{{$store.state.user.name}}</p>
    <el-button type="primary" @click="getName">123</el-button>

</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup () {
    const store = useStore()
    console.log(store.state.num)
    console.log(store.getters.newNum)
    function getNum () {
    //   store.commit('updateNum')
      store.dispatch('updateNum')
    //   console.log(store.state.num)
    }
    function getName () {
      store.commit('user/getName')
    }
    return { getNum, getName }
  }
}
</script>
