<template>
  <div  class="header">
    <div class="routerName">
      <div class="hamburgerManu"
           @click="burgerToggle">
        <v-icon class="mdi mdi-view-list theme--light"></v-icon>
      </div>
      <p>{{ $route.name }}</p>
    </div>
    <div  class="iconsWrapper">
      <div class="inputWrapper" @click="changeAnimationClass"
           @blur="onBlurSearchInput">
        <div :class="{'transformingDivOnClick': inputFocused}" class="input"> Search</div>
        <div class="searchInput">
          <input
          >

          <div class="divider">
            <div class="dividerAfter" :class="{'active': animationToggle }"></div>
          </div>
        </div>
      </div>

      <div>
        <router-link to="/dashboard">
          <v-icon
            class="v-icon mdi mdi-view-dashboard theme--light tertiary--text"
          />

        </router-link>
      </div>
      <div class="notification">
        <router-link to="/notifications">
          <v-icon class="v-icon mdi mdi-bell theme--light"/>
        </router-link>
        <span>3</span>
      </div>
      <div>
        <router-link to="/profile">
          <v-icon class="v-icon mdi mdi-account theme--light"/>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                animationToggle: false,
                inputFocused: false,
            }
        },
        methods: {
            burgerToggle() {
                this.$emit('burgerToggle');
            },
            changeAnimationClass() {
                this.animationToggle = !this.animationToggle;
            },
            onBlurSearchInput() {
                console.log(13)
                this.animationToggle = false;
            }
        }
    }
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    padding: 15px 24px;
    min-height: 75px;
  }

  .routerName {
    display: flex;
    align-items: center;

    p {
      font-size: 18px;
      color: rgb(73, 80, 87);
      font-family: Roboto, sans-serif;
      margin-bottom: 0;
      font-weight: 300;
      @media (max-width: 1140px) {
        padding: 0 15px;
      }
    }
  }

  .iconsWrapper {
    display: flex;
    align-items: center;

    .input {
      position: relative;
      left: 50px;
      top: 10px;
      color: black;
    }

    .searchInput {
      padding: 8px 0;
      width: 159px;

      input {
        outline: none !important;
        width: 100%;
        color: #42b983;

      }

      .divider {
        border: .5px solid #d2d2d2;
        position: relative;

        .dividerAfter {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          left: 0;
          transform: scaleX(0);
          transition: .5s;
          border-bottom: .5px solid #9c27b0;
        }

        .active {
          transform: scaleX(1);
        }
      }
    }

    a {
      text-decoration: none;
    }

    i {
      padding: 10px 15px;
      display: flex;
      min-height: 48px;
      align-items: center;
      border-radius: 3px;
      @media (max-width: 300px) {
        font-size: 3vw;
        padding: 5px 10px;
      }
    }
  }

  .notification {
    position: relative;

    span {
      position: absolute;
      top: 0;
      padding: 4px 6px;
      border-radius: 100%;
      background-color: red;
      color: white;
      border: 1px solid #fff !important;
      font-size: 9px;
      height: 20px;
      line-height: normal;
      width: 20px;
      font-weight: 400;
    }
  }

  @media (max-width: 1010px) {
    .searchInput {
      display: none;
    }
  }
  .inputWrapper {
    display: flex;
  }

</style>
