<template>
    <div class="pt-32">
        <nav-bar></nav-bar>
        <div class="m-auto bg-white radius-border overflow-hidden shadow mx-5">
            <img src="https://www.precinct.co.nz/web/assets/hero/_2200x1466_crop_center-center_82_line/Charles-Fergusson-Exterior.jpg" class="w-full"/>
            <div class="flex justify-center -mt-8">
                <img src="https://st2.depositphotos.com/7109552/11355/v/950/depositphotos_113556662-stock-illustration-infinity-design-infinity-logo-vector.jpg"
                     class="rounded-full border-solid border-white border-2 -mt-3 w-1/3">
            </div>
            <div class="text-center px-3 pb-6 pt-2">
                <h3 class="text-black text-sm bold font-sans">Green Corp.</h3>
                <p class="mt-2 font-sans font-light text-grey-dark">Top ten in Metro's greenest companies 2019</p>
            </div>
            <div class="flex justify-center pb-3 text-grey-dark">
                <div class="text-center mr-3 pr-3">
                    <h2>2384</h2>
                    <span>Total Leaf Points</span>
                </div>
            </div>
        </div>
        <div class="m-auto bg-white general-container-rounded mx-5 mt-5 mb-5">
            <div class="border-b-2 mb-5 pb-5" v-on:click="goToProfile">
                <label class="text-lg font-bold">Chief Leaf</label><br>
                John Smith
                <div>
                    34 Leaf Points
                </div>
            </div>

            <div>
                <label class="text-lg font-bold">Team Forest</label><br>
                45 planted trees
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "Team",


        methods: {
            goToBadgeProgress() {
                this.$router.push({name: "badges"});
            },

            goToProfile() {
                this.$router.push({name: "profile"})
            },

        }
    }
</script>

<style scoped>

</style>

