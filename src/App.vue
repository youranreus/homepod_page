<template>
  <div id="wrap">
    <div id="wrap-content">

        <router-view v-slot="{ Component }">
          <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
            <keep-alive>
              <component :is="Component"/>
            </keep-alive>
          </transition>
        </router-view>

    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: ''
    }
  }
}
</script>
<style>
@font-face {
  font-family: 'Alata';
  src: url('assets/Alata.ttf');
}

#wrap {
  font-family: "微软雅黑", "Alata", Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /*background: rgba(246, 247, 248, 0.9);*/
}

#wrap-content {
  /*position: relative;*/
  width: 1200px;
  height: 600px;
  border-radius: 15px;
}

#wrap::before {
  content: '';
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  background-image: url(assets/bk.png);
  opacity: 0.03;
}

.clear, .clear::after, .clear::before {
  content: '';
  display: block;
  clear: both;
}

.left {
  float: left;
}

.right {
  float: right;
}
</style>
