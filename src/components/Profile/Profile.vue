<template>
  <div class="content">
    <div class="editProfile">
      <EditProfile/>
    </div>
        <div class="userInfoWrapper">
            <img :src="$options.userInfo.userImg"/>
          <div class="userInfoContent">
            <div>{{$options.userInfo.position}}</div>
            <div>{{$options.userInfo.name}}</div>
            <div>{{$options.userInfo.aboutUser}}</div>
          </div>
          <button class="followButton">FOLLOW</button>
      </div>
  </div>
</template>

<script>
  import EditProfile from "./EditProfile";
    export default {
        name: 'Profile',
        components:{EditProfile},
        userInfo: {
            name: 'Alec Thompson',
            position: 'CEO / CO-FOUNDER',
            userImg: 'https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg',
            aboutUser: 'Don\'t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...'
        },
    }
</script>

<style scoped lang="scss">
  .content {
    padding-top: 70px;
    display: flex;
    justify-content: space-between;
  }
  .editProfile {
    width: 66%;
  }
  .userInfoWrapper {
    border: 1px solid lightgray;
    width: 33%;
    background-color: white;
    color: grey;
    border-radius: 6px;
    padding: 0 15px 15px;
  }


  img {
    height: 130px;
    width: 130px;
    border-radius: 100%;
    position: relative;
    top: -55px;
    max-width: calc(100% - 20px);
    margin: 0 auto;
    font-size: 14px;
    font-weight: 200;
    color: #ebecf5ab;
    text-align: start;
    box-shadow: 5px 5px 5px rgba(68,68,68,0.6);
  }
.userInfoContent {
  position: relative;
  top: -30px;
  padding: 0 15px;

  :first-child {
    font-size: 12px;
    margin-bottom: 16px;
  }
  :nth-child(2) {
    margin: 10px 0;
    font-size: 18px;
    font-family: Roboto, sans-serif;
  }
  :nth-child(3) {
    font-size: 14px;
    color: #999;
    font-family: Roboto, sans-serif;
  }
}
  .followButton {
    border-radius: 30px;
    background-color: #4caf50;
    padding: 10px 25px;
    color: white;
    font-size: 12px;
  }
</style>
