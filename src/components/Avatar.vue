<template>
  <div>
    <span :title="username">{{ slug }}</span>
  </div>
</template>

<script>
import Auth from "@/apis/auth";

export default {
  data() {
    return {
      username: "未登录"
    };
  },
  created() {
    Auth.getInfo().then(res => {
      console.log("我是Avatar输出的：");
      console.log(res);
    });
  },
  computed: {
    slug() {
      return this.username.charAt(0);
    }
  }
};
</script>
<style scoped>
span {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 32px;
  border-radius: 50%;
  background: #007a87;
  color: #fff;
  text-shadow: 1px 0 1px #795c19;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 15px;
}
</style>
