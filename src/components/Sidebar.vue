<template>
  <div class="sidebarWrapper">
    <div class="routesWrapper">
      <router-link to="/">
        <div class="profileWrapper">
          <div
            class="avatar"
            style="background-image:url('https://www.pngfind.com/pngs/m/150-1507248_image-library-stock-file-vue-js-logo-wikimedia.png')"
          >
          </div>
        </div>
      </router-link>
      <p>Vuetify MD</p>
    </div>
    <hr
      class="v-divider theme--dark">
    <div
      class="sidebarItem"
      :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/dashboard'}" >
      <v-icon
        class="v-icon mdi mdi-view-dashboard theme--light tertiary--text"
        color="white"
      />
      <router-link to="/dashboard">
        Dashboard
      </router-link>
    </div>
    <div
      class="sidebarItem"
      :class="{'router-link-active': $route.fullPath === '/profile'}" >
      <v-icon class="v-icon mdi mdi-account theme--dark" />
      <router-link to="/profile">
        User Profile
      </router-link>
    </div>
    <div
      class="sidebarItem"
      :class="{'router-link-active': $route.fullPath === '/table'}">
      <v-icon class="v-icon mdi mdi-clipboard-outline theme--dark" />
      <router-link to="/table">
        Table
      </router-link>
    </div>
    <div
      class="sidebarItem"
      :class="{'router-link-active': $route.fullPath === '/typography'}">
      <v-icon class="v-icon mdi mdi-format-font theme--dark" />
      <router-link to="/typography">
        Typography
      </router-link>
    </div>
    <div
      class="sidebarItem"
      :class="{'router-link-active': $route.fullPath === '/notifications'}">
      <v-icon class="v-icon mdi mdi-bell theme--dark"/>
      <router-link to="/notifications">
        Notifications
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                active: false,
            }
        }
    }
</script>

