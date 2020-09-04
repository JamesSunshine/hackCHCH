<template>
    <div>
        <nav-bar></nav-bar>
        <div class="pt-32">
            <div class="bg-white general-container-rounded mx-6  shadow">
                <p class="text-gray-800 text-2xl border-b-2 mb-4">How it Works</p>
                <div class="text-sm">
                    <p class="mb-2">Leaf Points are calculated by finding the amount of carbon dioxide you have avoided
                        producing.</p>
                    <p class="mb-2">
                        We calculate the amount of carbon dioxide you would have produced using a car, and subtract
                        the
                        amount you actually produced.</p>
                    <p class="mb-2">
                        The remaining amount of carbon dioxide (in grams/100) is then added to your leaf points.
                    </p>
                    <p>
                        Note that we assume 8L/100km fuel efficiency for cars and 38 g/km for a bus passenger
                    </p>
                </div>
            </div>

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
