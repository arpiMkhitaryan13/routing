<template>
  <div class="eStatsWrapper">
    <div
      class="offset"
      :style="{background: backgroundColor}">
      <div>Employee Stats</div>
      <p>New employees on 15th September, 2016 </p>
    </div>
    <div class="eStatsContent">
      <table>
        <thead>
        <tr>
          <th v-for="header in capitalize(headers)">{{header}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="employeeData in resultList ">
          <td v-for="data in employeeData">{{data}}</td>
          <div class="divider1"/>
        </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    import helpers from "../../mixins/helpers";

    export default {
        name: "EmployeeStats",
        mixins: [helpers],
        props: ['backgroundColor', 'rightProperties'],

        data() {

            return {
                headers: '',
                requiredProperties: ['id', 'name', 'country', 'city', 'salary'],
                employeeDataList: [],
                dataList: [],
                resultList: [],
            }
        },
        created() {
            fetch('http://localhost:2000/table')
                .then(response => response.json())
                .then(result => {
                    this.dataList = result;
                    console.log(result,'result');
                    this.dataList.map(obj => {
                        let objWithCurrectOrder = Object.assign(...(this.rightProperties || this.requiredProperties).map(k => ({[k]: obj[k]})));
                        this.headers = Object.keys(objWithCurrectOrder);
                        this.resultList.push(objWithCurrectOrder);
                    })

                });
        },
    }
</script>

<style scoped lang="scss">
  .eStatsWrapper {
    border-radius: 6px;
    background-color: white;
    border: 1px solid lightgray;
    width: 50%;
    margin: 10px;

    table {
      width: calc(100% - 30px);
      text-align: end;
      margin: 0 auto;
      border-collapse: collapse;

      th {
        color: #ff9800 !important;
        font-size: 17px;
        font-weight: 200;
        padding: 12px 8px;
      }

      td {
        padding: 12px 6px;
        white-space: nowrap;
        color: rgba(0, 0, 0, .55);
        font-family: Roboto, sans-serif;
      }

      tr {
        border-bottom: 1px solid rgba(0, 0, 0, 0.06) !important;
      }
    }

    .offset {
      position: relative;
      top: -18px;
      height: 83px;
      max-width: calc(100% - 20px);
      padding: 15px;
      margin: 0 auto;
      background: linear-gradient(60deg, #ffa726, #fb8c00);
      border-radius: 6px;
      font-size: 14px;
      font-weight: 200;
      color: #ebecf5ab;
      text-align: start;

      > div {
        font-size: 18px;
        font-family: Roboto, sans-serif;
        color: white;
      }
    }

    tr:first-child {
      border-bottom: 1px solid rgba(0, 0, 0, .06) !important;
    }
  }
</style>
