<template>
  <div id="home-container">
    <div id="home-l">
      <div>
        <img id="avatar" v-bind:src="UserMeta.avatar" :alt="UserMeta.name">
      </div>
    </div>
    <div id="home-r">
      <div>
        <h3><span @click="hi(1)" @mouseover="hi(0)" class="animate__animated animate__wobble">{{ emoji }}</span> Hi,
          This is {{ UserMeta.name }}</h3>
        <p>{{ UserMeta.des }}</p>
        <button id="more" @click="more">More</button>
      </div>
    </div>

    <div id="footer">
      <p>
        © Project EXIA
        made with ❤️ by 季悠然<br> <a href="http://beian.miit.gov.cn/">粤ICP备19008557-1号</a> |
        <a href="https://icp.gov.moe" target="_blank">萌ICP备 </a><a href="https://icp.gov.moe/?keyword=20214396" target="_blank"> 20214396号</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      UserMeta: {
        avatar: 'https://sdn.geekzu.org/avatar/87e0f8d2f0f70987061cec6376cb7f97?s=200&r=G&d=',
        name: 'Youranreus',
        des: 'Ich bin ein Student von SZTU, Learning Computer Science. 今、日本语とドイツ語を勉强しています！'
      },
      emoji: '👋'
    }
  },
  methods: {
    hi(method = 0) {
      if (method === 0)
        this.emoji = '🤞';
      else
        this.emoji = '👋';
    },
    more() {
      this.$router.push({path: 'about'});
    }
  }
}
</script>

<style scoped>
#wrap-content {
  position: relative;
  width: 1200px;
  height: 600px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#home-container {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
}

#home-l {
  height: 500px;
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#avatar {
  border-radius: 10000rem;
  height: 200px;
  width: 200px;
}

#home-r {
  height: 500px;
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#home-r h3 {
  font-weight: lighter;
  font-size: 2.5rem;
  margin: 10px 0 0;
}

#home-r h3 span {
  display: inline-block;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  cursor: pointer;
}

#home-r p {
  font-size: 18px;
  line-height: 1.77;
}

#more {
  font-family: "Alata", Georgia, serif;
  background: rgba(0, 0, 0, 0);
  color: rgba(0, 119, 255, 0.8);
  padding: 6px 21px;
  border-radius: 10px;
  border: 2px solid #07f;
  font-weight: lighter;
  cursor: pointer;
  -webkit-transition: .2s ease all;
  -moz-transition: .2s ease all;
  -o-transition: .2s ease all;
  transition: .2s ease all;
}

#more:hover {
  background: rgba(0, 119, 255, 1);
  color: #fff;
}

#footer {
  position: fixed;
  bottom: 0;
  color: #86868b;
  line-height: 1.7;
  text-align: center;
  opacity: 0.5;
}

#footer a,#footer a:link,#footer a:visited{
  color: #86868b;
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  #home-container {
    height: auto;
    width: auto;
    flex-direction: column;
  }
  #home-l, #home-r {
    height: auto;
  }
  #home-r {
    margin-top:0px;
  }

  #home-r h3{
    font-weight: normal;
    font-size: 1.5rem;
    margin: 10px 0 0;
  }
  #more {
    display: none;
  }

  #footer {
    position: relative;
  }
}
</style>
