<template>
  <div>
    <span :title="user.username">{{ slug }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "hunger"
      },
      slug: "H"
    };
  },
  methods: {}
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
