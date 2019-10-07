<template>
  <div class="tasksWrapper">
    <div class="offset">
      <div class="headerWrapper">
        <div>Tasks:</div>
        <div>
          <v-icon class="v-icon mr-2 mdi mdi-bug theme--dark"/>
          Bug
        </div>
        <div>
          <v-icon class="v-icon mr-2 mdi mdi-code-tags theme--dark"/>
          Website
        </div>
        <div>
          <v-icon class="v-icon mr-2 mdi mdi-cloud theme--dark"/>
          Server
        </div>
      </div>
    </div>
    <div class="tasks">
      <div class="task" v-for="task in tasks">
        <div class="checkbox">
          <input type="checkbox" v-model="task.selected">
          <v-icon class="v-icon mdi mdi-checkbox-blank-outline theme--light"
                  :class="{'success--text': task.selected,
                           'mdi-checkbox-marked': task.selected }" @click="checkboxToggle(task)">
          </v-icon>
        </div>

        <div class="taskText">{{task.description}}</div>
        <div class="icons">
          <div @click="checkboxToggle(task)">
            <v-icon class="v-icon mdi mdi-pencil theme--light primary--text" style="color:#4caf50!important;"/>
          </div>
          <div @click="checkboxToggle(task)">
            <v-icon class="v-icon mdi mdi-close theme--light error--text"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Tasks",
        data() {
            return {
                checked: false,
                tasks: [
                    {
                        description: "Sign contract for 'What are conference organized afraid of?'",
                        selected: false
                    },
                    {
                        description: "Sign contract for 'What are conference organized afraid of?'",
                        selected: false
                    },
                    {
                        description: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n",
                        selected: false
                    },
                ],
            }
        },

        methods: {
            checkboxToggle(task) {
                task.selected = !task.selected;
            }
        }
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
    height: fit-content;

    .offset {
      position: relative;
      top: -18px;
      height: 83px;
      max-width: calc(100% - 20px);
      padding: 15px;
      margin: 0 auto;
      background: linear-gradient(60deg, #66bb6a, #43a047) !important;
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
    .tasks {
      padding: 16px;
      .task:not(:last-child){
        border-bottom: 1px solid grey;

      }
    }

    .task {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 5px 0;

      .checkbox {
        margin: 0 33px;
      }

      .taskText {
        text-align: start;
        font-size: 14px;
        font-weight: 300;
        padding: 0 8px;
        overflow: visible;
        white-space: inherit;
        height: auto;
        color: #000000b5;
      }
      .icons {
        display: flex;
        i {
          padding: 15px;
        }
      }

      input {
        display: none;
      }
    }
  }
</style>
