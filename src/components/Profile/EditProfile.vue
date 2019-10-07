<template>
  <div class="editProfileWrapper">
    <div class="offset">
      <div class="title">Edit Profile</div>
      <div> Complete your profile</div>
    </div>
    <h1>abracadabra</h1>

  </div>
</template>

<script>
    export default {
        name: "EditProfile"
    }
</script>

<style scoped lang="scss">
  .editProfileWrapper {
    width: 100%;
    border: 1px solid grey;

    .offset {
      position: relative;
      top: -18px;
      padding: 15px;
      background: linear-gradient(60deg, #66bb6a, #43a047) !important;
      margin: 0 auto;
      max-width: calc(100% - 32px);
      border-radius: 6px;
      text-align: start;
      font-family: Roboto, sans-serif;
      font-weight: 200;
      font-size: 14px;
       .title{
         font-size: 18px;
         font-weight: 300;
       }
    }
  }
</style>
