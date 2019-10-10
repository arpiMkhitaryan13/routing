<template>
  <div class="content">
    <EmployeeStats :backgroundColor="backgroundColor" :rightProperties="requiredProperties" />
    <EmployeeStats :backgroundColor="backgroundColor" :rightProperties="requiredProperties"/>
  </div>
</template>

<script>
    import EmployeeStats from "./Dashboard/EmployeeStats";

    export default {
        name: 'Table',
        components: {EmployeeStats},
        data(){
            return {
                backgroundColor: 'linear-gradient(60deg,#66bb6a,#43a047)',
                requiredProperties: ['name', 'country', 'city', 'salary'],
            }
        }
    }
</script>

<style scoped lang="scss">
  .eStatsWrapper {
    width: 100%;
    margin-bottom: 55px;

    ._offset {
      background: linear-gradient(60deg,#66bb6a,#43a047)!important;
    }
  }


</style>
