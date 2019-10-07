<template>
  <div class="content">
    <EmployeeStats/>
    <EmployeeStats/>

  </div>
</template>

<script>
  import EmployeeStats from "./Dashboard/EmployeeStats";
export default {
  name: 'Table',
    components: {EmployeeStats}
}
</script>

<style lang="scss">
  .eStatsWrapper {
    width: 100%;
    margin-bottom: 55px;

    ._offset {
      background: linear-gradient(60deg,#66bb6a,#43a047)!important;
    }
  }


</style>
