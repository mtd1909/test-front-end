<template>
  <div class="sidebar" :class="{hide: hideSidebar}">
    <div class="sidebar__menubar" @click="handleSidebar">
      <i class="fa-regular fa-chevron-left" />
    </div>
    <ul class="sidebar__list">
      <template v-for="(route, index) in routes">
        <li :key="index" class="sidebar__list-item">
          <router-link :to="route.path" class="item__link">
            <span>{{ route.name }}</span>
          </router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hideSidebar: false,
    }
  },
  computed: {
    routes () {
      return this.$router.options.routes[0].children
    },
  },
  methods: {
    handleSidebar () {
      this.hideSidebar = !this.hideSidebar
    }
  }
}
</script>