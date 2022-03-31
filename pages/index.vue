<template>
  <div>
    <Header/>
    <!-- <Tutorial/> -->

      <h1> cNT </h1>
      <b-icon-arrow-up></b-icon-arrow-up>
    
    <Footer />
  </div>
</template>


<script>
export default {
  computed: {
    cnt () {
      return this.$store.state.counter;
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    }
  }
}
</script>
