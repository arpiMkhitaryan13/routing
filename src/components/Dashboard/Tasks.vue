<template>
  <div class="tasksWrapper">
    <div class="offset">
      <div class="headerWrapper">
        <div>Tasks:</div>
        <div><v-icon class="v-icon mr-2 mdi mdi-bug theme--dark"/>Bug</div>
        <div><v-icon class="v-icon mr-2 mdi mdi-code-tags theme--dark"/>Website</div>
        <div><v-icon class="v-icon mr-2 mdi mdi-cloud theme--dark"/>Server</div>
      </div>
    </div>
    <div class="tasks">
        <div class="task" v-for="task in $options.tasks">
          <input type="checkbox">
          <div class="taskText">{{task}}</div>
          <div>
            <v-icon class="v-icon mdi mdi-pencil theme--light primary--text"/>
          </div>
          <div>
            <v-icon class="v-icon mdi mdi-close theme--light error--text"/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Tasks",
        tasks:[
            "Sign contract for 'What are conference organized afraid of?'",
            "Sign contract for 'What are conference organized afraid of?'",
            "Sign contract for 'What are conference organized afraid of?'",
    ],
    }
</script>

<style scoped lang="scss">
.tasksWrapper {
  border-radius: 6px;
  background-color: white;
  border: 1px solid lightgray;
  width: 50%;
  margin: 10px;
  color: black;

  .offset {
    position: relative;
    top: -18px;
    height: 83px;
    max-width: calc(100% - 20px);
    padding: 15px;
    margin: 0 auto;
    background: linear-gradient(60deg,#66bb6a,#43a047)!important;
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
  .headerWrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 12px;
  }
  .task {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .taskText {
      overflow: visible;
      height: auto;
    }
  }

}
</style>
