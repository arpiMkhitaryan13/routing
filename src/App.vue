<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <router-link to="/">
          <div class="profileWrapper">
            <div class="avatar"
                 style="background-image:url('https://www.pngfind.com/pngs/m/150-1507248_image-library-stock-file-vue-js-logo-wikimedia.png')">
            </div>
            <div>Vuetify MD</div>
          </div>
          <hr>
        </router-link>
        <div>
          <v-icon class="v-icon mdi mdi-view-dashboard theme--light tertiary--text" color="white"></v-icon>
          <router-link to="/dashboard">Dashboard</router-link>
        </div>
        <router-link to="/profile">User Profile</router-link>
        <router-link to="/table">Table</router-link>
        <router-link to="/typography">Typography</router-link>
        <router-link to="/notifications">Notifications</router-link>
      </div>
      <router-view/>
    </div>
  </v-app>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ebecf5;
  }

  #nav {
    position: fixed;
    height: 100%;
    width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
    padding: 25px;
    background-image: linear-gradient(rgba(27, 27, 27, 0.74), rgba(27, 27, 27, 0.74)), url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg);
    background-position: center center;
    align-items: start;

    a {
      font-weight: bold;
      margin-left: .5em;
      color: #ebecf5;
      text-decoration: none;
      /*:hover{*/
      /*  color: green !important;*/
      /*}*/

      &.router-link-exact-active {
        color: #42b983;
      }
    }

    .profileWrapper {
      display: flex;
      align-items: center;
      font-size: 1.3em;

      .avatar {
        display: inline-block;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        background-position: center;
        background-size: cover;
        margin-right: 1em;
      }
    }
    hr{
      border-top: 1px solid grey;
      width: 200px;
      justify-content: center;
      margin-top: 1.5em;
    }
  }
  .content {
    margin-left: 200px;
  }

</style>
