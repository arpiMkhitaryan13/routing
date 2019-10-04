<template>
  <div class="content">
     <Graphics/>
    <Stats/>
    <div class="bottom">
      <EmployeeStats/>
      <Tasks/>
    </div>
  </div>
</template>

<script>
    import Graphics from "./Graphics";
    import Stats from "./Stats";
    import EmployeeStats from "./EmployeeStats";
    import Tasks from "./Tasks";

    export default {
        name: 'Dashboard',
        components:{Graphics, Stats, EmployeeStats, Tasks},

        data() {
            return {
                arr: 13
            }
        },
    }
</script>

<style scoped lang="scss">
.bottom {
  display: flex;
}
</style>
