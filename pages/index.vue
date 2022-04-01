<template>
  <div>
    <Header/>
    <!-- <Tutorial/> -->
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    
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
