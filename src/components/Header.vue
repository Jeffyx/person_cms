<template>
  <div class="hd">
    <p class="hd-logo">PERSON CMS</p>
    <p>登录</p>
  </div>
</template>
<script>
export default {
  name:'XHeader'
}
</script>

<style scoped lang="scss">
    .hd{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        color: #fff;
        &-logo{
          font-weight: bold;
          // font-size: 30px;
        }
    }
</style>
