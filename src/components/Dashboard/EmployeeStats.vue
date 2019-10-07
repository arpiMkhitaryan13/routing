<template>
  <div class="eStatsWrapper">
    <div class="_offset">
      <div>Employee Stats</div>
      <p>New employees on 15th September, 2016</p>
    </div>
    <div class="eStatsContent">
      <table>
        <thead>
        <tr>
          <th v-for="header in capitalize(headers)">{{header}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="employeeData in $options.employeeDataList ">
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
        employeeDataList: [
            {
                id: 1,
                name: 'Arpi Mkhitaryan',
                salary: '$10,000',
                country: 'Armenia',
                city: 'Yerevan',
            },
            {
                id: 2,
                name: 'Dakota Rice',
                salary: '$35,738',
                country: 'Niger',
                city: 'Tunrhout',
            },
            {
                id: 3,
                name: 'Minerva Hooper',
                salary: '$23,738',
                country: 'Curaçao',
                city: 'Sinaai-Waas',
            },
            {
                id: 4,
                name: 'Philip Chanley',
                salary: '$38,735',
                country: 'Korea, South',
                city: 'Gloucester',
            },
            {
                id: 5,
                name: 'Doris Greene',
                salary: '$63,542',
                country: 'Malawi',
                city: 'Feldkirchen in Kārnten',
            },
        ],
        data() {
            return {
                headers: Object.keys(this.$options.employeeDataList[0]),
            }
        },
    }
</script>

<style  lang="scss">
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

    ._offset {
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
