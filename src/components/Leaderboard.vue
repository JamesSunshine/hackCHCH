<template>
    <div>
        <p>Leaderboard</p>
      <div>
        <br><br><br>
        <ul>
          <li>User: Leaf Points</li>
          <br>
          <li v-for="item in items" :key="item.leafPoints">
            {{ item.userName }}: {{ item.leafPoints}}
          </li>
        </ul>
      </div>
    </div>

</template>

<script>
    export default {
        name: "Leaderboard",

      data() {
          return {
            items: [{leafPoints: 70, userName: "Nishi"},
              {leafPoints: 50, userName: "Ryzaak"},
              {leafPoints: 2, userName: "Jamie"}],
          }
      }
    }
</script>

<style scoped>

</style>
