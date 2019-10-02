<template>
  <div class="statsWrapper">
    <div  v-for="stat in $options.stats">
      <div class="stat">
        <div class="statTop">
          <div class="offset">
            <div class="statImage" :style="{backgroundColor: stat.color}">
              <v-icon class="v-icon mdi theme--dark" :class="stat.icon" large/>
            </div>
          </div>

          <div class="statContent">
            <div class="statTitle">{{stat.title}}</div>
            <div class="statAmount">{{stat.amount}}</div>
          </div>
        </div>

        <div class="statDescription"></div>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        name: "Stats",
        stats:[
            {
                title:'Revenue',
                icon: "mdi-store",
                color: '#43a047',
                amount: '$34,245',
                description: 'Last 24 Hours',
                descriptionIcon: "v-icon mr-2 mdi mdi-calendar theme--light"
            },
            {
                title:'Revenue',
                icon: "mdi-content-copy",
                color: '#fb8c00',
                amount: '$34,245',
                description: 'Last 24 Hours',
                descriptionIcon: "v-icon mr-2 mdi mdi-calendar theme--light"
            },
            {
                title:'Revenue',
                icon: "mdi-information-outline",
                color: '#e53935',
                amount: '$34,245',
                description: 'Last 24 Hours',
                descriptionIcon: "v-icon mr-2 mdi mdi-calendar theme--light"
            },
            {
                title:'Revenue',
                icon: "mdi-twitter",
                color: '#00acc1',
                amount: '$34,245',
                description: 'Last 24 Hours',
                descriptionIcon: "v-icon mr-2 mdi mdi-calendar theme--light"
            },
        ],
    }
</script>

<style scoped lang="scss">
.statsWrapper {
  padding: 54px 12px;
  display: flex;
  justify-content: space-between;
  flex-basis: 25%;

  .stat{
    padding: 12px;
    border: 1px solid red;
    color: black;
    background-color: white;

    .statTop{
      display: flex;
      justify-content: space-between;
    }

    .statContent{
      margin-left: 39px;
    }

    .offset {
      height: 85px;
      width: 85px;
      position: relative;
      top: -2em;

      .statImage {
        height: 100%;
        border-radius: 6px;
        padding: 15px;

        i {
          font-size: 36px!important;
          line-height: 56px;
          width: 56px;
          height: 56px;
        }
      }
    }

    .statTitle{
      color: #9e9e9e !important;
      font-size: 14px;
    }

    .statAmount {
      margin: 0!important;
      letter-spacing: 0!important;
      font-size: 25px;
      font-family: Roboto, sans-serif;
      font-weight: 300 !important;
    }
  }
}
</style>
