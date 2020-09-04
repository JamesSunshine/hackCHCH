<template>
<div>
    <nav-bar></nav-bar>
    <br><br><br>
    <p>How it Works:</p>
    <div>
        <p>
            Leaf Points are calculated by finding the amount of carbon dioxide you have avoided producing.
            We calculate the amount of carbon dioxide you would have produced using a car, and subtract the amount you actually produced.
            The remaining amount of carbon dioxide (in grams/100) is then added to your leaf points.
        </p>
        <p>
            (Note that we assume 8L/100km fuel efficiency for cars and 38 g/km for a bus passenger)
        </p>
    </div>
</div>
</template>

<script>
import NavBar from "./NavBar";
export default {
name: "Explanation.vue",
    components: {NavBar}
}
</script>

<style scoped>

</style>