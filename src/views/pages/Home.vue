<template>
  <div class="home">
    <div class="container">
      <div class="home__logo">
        <img src="assets/images/logoNCC.png" alt="logo images" class="home__logo-img">
      </div>
      <div class="home__banner">
        <h2 class="home__banner-title">
          Lorem ipsum dolor sit asmet?
        </h2>
        <p class="home__banner-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat
          hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in
          mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut
          mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo.
          Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus
          vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu.
          Donec vulputate odio neque, sed semper turpis pellentesque a.
        </p>
      </div>
      <div class="home__content">
        <div v-for="(item, index) in homeContent" :key="index" class="home__content-item">
          <h2 class="item__title">
            {{ item.title }}
          </h2>
          <div class="item__img">
            <img :src="(item.img)" alt="content image">
          </div>
          <p class="item__text">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeContent: [
        {
          title: 'Lorem ipsum dolor sit amet',
          img: 'assets/images/css-icon1.png',
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non 
          dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa
          in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
          ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam 
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.`
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img: 'assets/images/html-icon1.png',
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non 
          dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa
          in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
          ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam 
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.`
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          img: 'assets/images/url-icon1.png',
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non 
          dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa
          in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
          ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam 
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.`
        },
      ]
    }
  }
}
</script>