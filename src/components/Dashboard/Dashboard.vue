<template>
  <div class="content">
     <Graphics/>
    <Stats/>
  </div>
</template>

<script>
    import Graphics from "./Graphics";
    import Stats from "./Stats";

    export default {
        name: 'Dashboard',
        components:{Graphics, Stats},

        data() {
            return {
                arr: 13
            }
        },
    }
</script>

<style scoped lang="scss">

</style>
