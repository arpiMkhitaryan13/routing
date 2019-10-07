<template>
  <v-app>
    <div id="app">
      <Header @burgerToggle="burgerToggle"/>
      <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isBurgerActive"></div>
        <transition name="slide">
          <div v-if="isBurgerActive"
               class="sidebar-panel">
            <Sidebar/>
          </div>
        </transition>
      </div>
      <div class="nav">
        <Sidebar/>
      </div>
      <div class="content">
      </div>
      <transition name="fade">
        <router-view/>
      </transition>
      <div class="footer">
        <footer class="v-footer v-footer--absolute theme--light" id="core-footer" style="height: 82px;">
          <div class="footer-items">
            <span><a href="/" class="tertiary--text footer-links">Home</a></span>
            <span><a href="https://www.creative-tim.com" class="tertiary--text footer-links">Creative Tim</a></span>
            <span><a href="https://creative-tim.com/presentation"
                     class="tertiary--text footer-links">About Us</a></span>
            <span><a href="https://blog.creative-tim.com" class="tertiary--text footer-links">Blog</a></span>
          </div>
          <div class="hamburgerManu">
            <v-menu
              bottom
              origin="center center"
              transition="scale-transition"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  depressed
                  color="transparent"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
                  </svg>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :href="item.link"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <div class="spacer"></div>
          <div class="aboutTim">©2019
            <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a>, made with
            <i aria-hidden="true" class="v-icon mdi mdi-heart theme--light tertiary--text" style="font-size: 17px;"></i>
            for a better web
          </div>
        </footer>
      </div>
    </div>
  </v-app>
</template>

<script>
    import Sidebar from "./components/Sidebar";
    import Header from "./components/Header";

    export default {
        components: {Sidebar, Header},
        data() {
            return {
                isBurgerActive: false,
                on: null,
                items: [
                    {title: 'Home', link: '/'},
                    {title: 'Creative Tim', link: 'https://www.creative-tim.com'},
                    {title: 'About Us', link: 'https://creative-tim.com/presentation'},
                    {title: 'Blog', link: 'https://blog.creative-tim.com'},
                ],
            }
        },
        methods: {
            burgerToggle() {
                this.isBurgerActive = !this.isBurgerActive;
            },
            closeSidebarPanel() {
                this.isBurgerActive = false;
            }

        },
    }
</script>

<style lang="scss">
  @mixin responsiveHeaderFooter {
    position: absolute;
    width: calc(100% - 260px);
    left: 260px;
    bottom: 0;
    border-top: .5px solid #080808ad;
  }

  @mixin sidebar {
    position: fixed;
    height: 100%;
    width: 260px;
    display: flex;
    padding: 10px;
    flex-direction: column;
    overflow: auto;
    align-items: start;
    background-image: linear-gradient(rgba(27, 27, 27, 0.74), rgba(27, 27, 27, 0.74)), url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg);
    background-position: center center;
    background-size: cover;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    width: 0;
    background: transparent; /* make scrollbar transparent */
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ebecf5;
  }

  .nav {
    @include sidebar;
    transition: .5s;
    transform: translateX(0);

  }

  .hamburgerManu{
    >i {
      height: 100% !important;
    }
  }


  .sidebarWrapper {
    text-align: start;
    width: 100%;
    padding: 10px 0;

    > :nth-child(n+2) {
      margin: 10px 15px;
      padding: 10px 10px;
      border-radius: 4px;
    }
    .sidebarItem:hover {
      background-color: rgba(119, 119, 119, 0.76);
    }
    .sidebarItem.router-link-active {
      background-color: #42b983 ;
    }


    .routesWrapper {
      display: flex;
      align-items: center;

      p {
        margin-bottom: 0;
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 18px;
      }
    }

    a {
      margin-left: 1.2em;
      color: #ebecf5 !important;
      text-decoration: none;

      &.router-link-exact-active {
        background-color: #42b983 !important;
      }
    }

    .profileWrapper {
      display: flex;
      align-items: center;
      font-size: 1.3em;

      .avatar {
        display: inline-block;
        margin-right: .5em;
        width: 40px;
        height: 40px;
        background-position: center;
        background-size: cover;
        border-radius: 100%;
      }
    }

    hr {
      margin: 15px auto 0 !important;
      width: calc(100% - 5px);
      padding: 0;
    }
  }


  #core-footer {
    @include responsiveHeaderFooter;
    height: auto !important;
  }

  .footer {
    a {
      padding: 15px;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.8;
      text-transform: uppercase;
      text-decoration: none;
      color: #495057 !important;
    }
  }

  .header {
    @include responsiveHeaderFooter;
    top: 0;
    display: flex;
    justify-content: flex-start;
    height: 3em;

  }

  .content {
    padding: 41px 23px;
    margin-left: 250px;
  }

  @media (max-width: 770px) {
    footer {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 570px) {
    .aboutTim {
      display: none;
    }
  }

  @media (max-width: 1130px) {
    .footer-items {
      display: none;
    }
    .hamburgerManu {
      display: block;
    }
    .content {
      margin-left: 0;
    }
    .nav {
      transform: translateX(-260px);
    }

    #core-footer {
      left: 0;
      width: 100%;
    }
    .header {
      left: 0;
      width: 100%;
    }
  }

  @media (min-width: 1130px) {
    .hamburgerManu {
      display: none;
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
  }

  .sidebar-backdrop {
    background-color: rgba(0, 0, 0, .5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .sidebar-panel {
    @include sidebar;
    background-size: cover;
    z-index: 999;
  }

  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .divider1 {
    border: .5px solid #9999995c;
    width: 100%;
  }

</style>
