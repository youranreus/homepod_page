<template>
  <div id="system">
    <div id="system-container">
      <h3 id="title">Homepod <span>@{{ basicInfo.version }}</span></h3>
      <div class="flex-wrap">
        <div class="content">
          <div class="section" id="basic-info">
            <div class="section-content">
              <h3>基本信息</h3>
              <ul>
                <li>{{ basicInfo.msg }}</li>
                <li>数据库: {{ basicInfo.DB }}</li>
                <li>版本: {{ basicInfo.version }}</li>
              </ul>
              <svg t="1628389733035" class="icon" viewBox="0 0 1033 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="2068" width="200" height="200">
                <path
                    d="M1033.309091 572.509091V456.145455l-158.254546-32.581819c-9.309091-32.581818-23.272727-65.163636-41.890909-97.745454l93.090909-134.981818-79.127272-79.127273-134.981818 93.090909c-27.927273-18.618182-65.163636-32.581818-97.745455-41.890909L577.163636 0H465.454545l-32.581818 162.909091c-37.236364 4.654545-69.818182 18.618182-97.745454 37.236364l-134.981818-93.09091-83.781819 83.781819 93.090909 139.636363c-18.618182 27.927273-32.581818 60.509091-41.890909 93.090909l-158.254545 32.581819v116.363636l158.254545 32.581818c9.309091 32.581818 23.272727 65.163636 41.890909 97.745455l-93.090909 134.981818 79.127273 79.127273 134.981818-93.09091c32.581818 18.618182 65.163636 32.581818 97.745455 41.89091L465.454545 1024h116.363637l32.581818-158.254545c32.581818-9.309091 65.163636-18.618182 97.745455-37.236364l134.981818 93.090909 79.127272-79.127273-93.090909-139.636363c18.618182-27.927273 32.581818-65.163636 41.890909-97.745455l158.254546-32.581818z m-512 125.672727c-102.4 0-186.181818-83.781818-186.181818-186.181818s83.781818-186.181818 186.181818-186.181818 186.181818 83.781818 186.181818 186.181818-83.781818 186.181818-186.181818 186.181818z"
                    p-id="2069"></path>
              </svg>
            </div>
          </div>

          <div class="section" id="plugin">
            <div class="section-content">
              <h3>已加载插件</h3>
              <ul>
                <li v-for="item in ModuleList" v-bind:key="item">{{ item }} <span class="right"><i
                    class="fa fa-info-circle" aria-hidden="true" @click="getModuleInfo($event)"
                    :id="'plugin-'+item"></i></span></li>
              </ul>
            </div>
            <svg t="1628392418913" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="3708" width="200" height="200">
              <path
                  d="M1024 716.8v204.8a102.4 102.4 0 0 1-102.4 102.4h-204.8v-102.4a102.4 102.4 0 0 0-102.4-102.4 102.4 102.4 0 0 0-102.4 102.4v102.4H307.2a102.4 102.4 0 0 1-102.4-102.4v-204.8H102.4a102.4 102.4 0 0 1-102.4-102.4 102.4 102.4 0 0 1 102.4-102.4h102.4V307.2c0-56.32 46.08-102.4 102.4-102.4h204.8V102.4a102.4 102.4 0 0 1 102.4-102.4 102.4 102.4 0 0 1 102.4 102.4v102.4h204.8a102.4 102.4 0 0 1 102.4 102.4v204.8h-102.4a102.4 102.4 0 0 0-102.4 102.4 102.4 102.4 0 0 0 102.4 102.4h102.4z"
                  p-id="3709"></path>
            </svg>
          </div>
        </div>
        <div class="content">
          <div class="section" id="websites">
            <div class="section-content">
              <h3>网站状态</h3>
              <ul>
                <li v-for="item in basicInfo.websiteStatus" v-bind:key="item">{{ item[0] }}<span
                    :class="(item[1] === 200) ? 'success' : 'error'" class="right">{{ item[1] }}</span></li>
              </ul>
            </div>
            <svg t="1628396050544" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="6539" width="200" height="200">
              <path
                  d="M290.0992 409.6H155.136a371.4048 371.4048 0 0 0-14.2848 102.4c0 35.5328 4.9664 69.888 14.336 102.4h134.9632c-5.632-32.768-8.4992-66.9184-8.4992-102.4 0-35.4816 2.8672-69.632 8.4992-102.4z m52.0704 0a542.1056 542.1056 0 0 0-9.3696 102.4c0 35.7376 3.072 69.888 9.3696 102.4H486.4V409.6H342.1696z m75.008 461.3632A491.8784 491.8784 0 0 1 301.568 665.6H173.9776a372.0704 372.0704 0 0 0 243.2 205.3632z m69.2224-3.584V665.6H354.9696c24.064 77.1072 67.84 144.2304 131.4304 201.8304zM417.1776 153.088A372.0704 372.0704 0 0 0 173.9776 358.4H301.568a491.8784 491.8784 0 0 1 115.5584-205.3632z m69.2224 3.584C422.8096 214.1184 379.0848 281.2416 354.9696 358.4H486.4V156.5696zM733.9008 409.6c5.632 32.768 8.4992 66.9184 8.4992 102.4 0 35.4816-2.8672 69.632-8.4992 102.4h135.0144c9.3184-32.512 14.2848-66.8672 14.2848-102.4s-4.9664-69.888-14.336-102.4h-134.9632z m-52.0704 0H537.6v204.8h144.2304c6.2464-32.512 9.3696-66.6624 9.3696-102.4s-3.072-69.888-9.3696-102.4z m-75.008 461.3632A372.0704 372.0704 0 0 0 850.0224 665.6H722.432a491.8784 491.8784 0 0 1-115.5584 205.3632z m-69.2224-3.584c63.5904-57.5488 107.3152-124.672 131.4304-201.7792H537.6v201.8304zM606.8224 153.088A491.8784 491.8784 0 0 1 722.432 358.4h127.6416a372.0704 372.0704 0 0 0-243.2-205.3632z m-69.2224 3.584V358.4h131.4304c-24.064-77.1072-67.84-144.2304-131.4304-201.8304zM512 947.2a435.2 435.2 0 1 1 0-870.4 435.2 435.2 0 0 1 0 870.4z"
                  fill="#2c2c2c" p-id="6540"></path>
            </svg>
          </div>
          <div class="section" id="copyright">
            <div class="section-content">
              <p>听说我要写BUG，爷爷奶奶可高兴啦，给我买了最爱吃的Vue入门指南</p>
              <h3>@youranreus</h3>
            </div>
          </div>
        </div>
      </div>

    </div>

    <router-link to="/about" class="back">
      <svg t="1628300153041" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1988" width="200" height="200">
        <path
            d="M932.04 483.875H163.745l350.591-311.627c11.009-9.785 12-26.643 2.216-37.652-9.787-11.005-26.64-11.999-37.653-2.214L74.242 492.065a26.672 26.672 0 0 0 0 39.868L478.9 891.618a26.567 26.567 0 0 0 17.708 6.735c7.353 0 14.676-3.022 19.945-8.95 9.785-11.01 8.793-27.866-2.216-37.653L160.473 537.214H932.04c14.729 0 26.669-11.94 26.669-26.67 0-14.729-11.94-26.669-26.67-26.669z"
            p-id="1989"></path>
      </svg>
    </router-link>
    <router-link to="/" class="next">
      <svg t="1628300153041" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1988" width="200" height="200">
        <path
            d="M932.04 483.875H163.745l350.591-311.627c11.009-9.785 12-26.643 2.216-37.652-9.787-11.005-26.64-11.999-37.653-2.214L74.242 492.065a26.672 26.672 0 0 0 0 39.868L478.9 891.618a26.567 26.567 0 0 0 17.708 6.735c7.353 0 14.676-3.022 19.945-8.95 9.785-11.01 8.793-27.866-2.216-37.653L160.473 537.214H932.04c14.729 0 26.669-11.94 26.669-26.67 0-14.729-11.94-26.669-26.67-26.669z"
            p-id="1989"></path>
      </svg>
    </router-link>
    <van-popup
        v-model:show="show"
        round>
      <div id="ModuleDetail">
        <h3>{{ModuleInfo.name}}</h3>
        <p>{{ModuleInfo.des}}</p>
        <h4>功能列表</h4>
        <li v-for="func in ModuleInfo.func" v-bind:key="func">{{func}}</li>
        <h5>ないよ~</h5>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "system",
  data() {
    return {
      basicInfo: {
        version: '加载中',
        msg: '加载中',
        DB: '加载中'
      },
      ModuleList: {},
      ModuleInfo: {},
      show: false
    }
  },
  methods: {
    getBasic() {
      this.basicInfo = this.$store.state.systemInfo;
      if(this.basicInfo.version === '加载中')
      {
        this.$http.get('https://i.exia.xyz/X/status').then((response) => {
          this.$store.commit('storeSystemInfo', response.data);
          this.basicInfo = response.data;
        });
      }
      this.$http.get('https://i.exia.xyz/X/getModuleList').then((response) => {
        this.ModuleList = response.data;
      })
    },
    getModuleInfo(a) {
      let name = a.currentTarget.id.slice(7);
      this.$http.get('https://i.exia.xyz/X/getModuleInfo/' + name).then((response) => {
        this.ModuleInfo = response.data;
        this.show = true;
      })
    }
  },
  created() {
    this.getBasic()
  }
}
</script>

<style scoped>
a:link, a:visited {
  color: unset;
  text-decoration: none;
}

#system {
  width: 800px;
  margin: 0 auto;
  color: #1D1D1F;
}

#title {
  margin-top: 0;
  font-size: 2.5rem;
  font-weight: 400;
}

#title span {
  font-size: 1rem;
  font-weight: 400;
  color: #909095;
}

.flex-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.content {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
}

.section {
  position: relative;
  width: 380px;
  border-radius: 10px;
  background: #FBFBFD;
  overflow: hidden;
  margin-bottom: 20px;
}

.section svg {
  opacity: 0.05;
  position: absolute;
  z-index: 0;
}

.section-content {
  position: relative;
  margin: 20px;
  z-index: 2;
}

.section-content h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.section-content li {
  color: #86868b;
  line-height: 1.7;
}

#basic-info svg {
  position: absolute;
  right: -70px;
  bottom: -80px;
}

#plugin li .right {
  cursor: pointer;
  color: #07f;
}

#plugin svg {
  top: -80px;
  right: -35px;
  transform: rotate(250deg);
}

#websites li a {
  color: #06c;
}

#websites .success {
  color: #13CB39;
}

#websites .error {
  color: #FC5F52;
}

#websites svg {
  top: -50px;
  right: -80px;
  transform: rotate(-45deg);
}

#copyright p {
  color: #86868b;
  line-height: 1.7;
}

#copyright h3 {
  color: #1d1d1f;
  font-weight: 400;
  font-size: 18px;
  text-align: right;
}

#ModuleDetail {
  height: 300px;
  width: 300px;
  padding: 30px;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
}

#ModuleDetail::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

#ModuleDetail h3 {
  font-weight: 400;
  font-size: 22px;
  margin: 0 0 10px;
}

#ModuleDetail p {
  color: #86868b;
  font-size: 20px;
  font-weight: 200;
  margin: 0 0 10px;
}

#ModuleDetail h4 {
  font-weight: 400;
  font-size: 20px;
  margin: 40px 0 10px;
}
#ModuleDetail li {
  list-style-type: none;
  color: #86868b;
  line-height: 1.9;
  cursor: default;
  font-size: 18px;
  font-weight: 200;
  -webkit-transition: .2s ease all;
  -moz-transition: .2s ease all;
  -o-transition: .2s ease all;
  transition: .2s ease all;
}

#ModuleDetail li:hover {
  transform: translateX(5px);
}

#ModuleDetail h5 {
  font-size: 20px;
  font-weight: 400;
  color: #999;
  text-align: center;
  margin-top: 50px;
}

.back, .next {
  position: fixed;
  top: 50px;
}

.back svg, .next svg {
  width: 40px;
  height: 40px;
}

.back {
  left: 50px;
}

.next {
  transform: rotate(180deg);
  right: 50px;
}
</style>