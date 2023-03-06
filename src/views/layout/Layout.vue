<template>
  <div class="wrapper">
    <Sidebar />
    <div class="main">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Sidebar from '@/views/components/Sidebar.vue'
import Footer from '@/views/components/Footer.vue'
export default {
  components: {
    Sidebar,
    Footer
  },
}
</script>