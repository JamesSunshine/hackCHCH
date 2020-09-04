<template>
    <div class="pt-32">
<!--        <div class="bg-white m-auto general-container-rounded mx-6">-->
            <div class="m-auto bg-white radius-border overflow-hidden shadow mx-5">
                <img src="https://cdn.discordapp.com/attachments/726046163576422512/751237699356196925/unknown.png" class="w-full"/>
                <div class="flex justify-center -mt-8">
                    <img src="https://media.discordapp.net/attachments/554945397328576533/742975383640604702/output_ba721G.gif"
                         class="rounded-full border-solid border-white border-2 -mt-3 w-1/3">
                </div>
                <div class="text-center px-3 pb-6 pt-2">
                    <h3 class="text-black text-sm bold font-sans">John Smith</h3>
                    <p class="mt-2 font-sans font-light text-grey-dark">Hello, I really love biking and running and busing!</p>
                </div>
                <div class="flex justify-center pb-3 text-grey-dark">
                    <div class="text-center mr-3 border-r pr-3">
                        <h2>34</h2>
                        <span>Leaf Points</span>
                    </div>
                    <div class="text-center">
                        <h2>10</h2>
                        <span>Badges</span>
                    </div>
                </div>
        </div>

        <div class="m-auto bg-white general-container-rounded mx-5 mt-5 mb-5">
            <div class="">
                <div class="border-b-2 border-gray-500 pb-2">
                    <label class="text-lg font-bold ">Top Badges</label>
                    <button class="bg-earth-brown round-button float-right" v-on:click="goToBadgeProgress">View all</button><br>
                </div>

                <div class="mt-4">
                    Top 5 badges go here
                </div>
            </div>

        </div>

        <div class="m-auto bg-white general-container-rounded mx-5 mt-5 mb-5">
            <div>
                <div class="border-b-2 border-gray-500 pb-2">
                    <label class="text-lg font-bold">User statistics</label><br>
                </div>
                <div class="mt-4">
                    <label>Distance: 0km</label><br>
                    <label>CO2 saved: 0</label>
                </div>

            </div>
        </div>

<!--        <div class="m-auto bg-white general-container-rounded mx-5 mt-5 mb-5">-->
<!--            <div>-->
<!--                <label class="text-lg font-bold">All Badges</label><br>-->
<!--                All badges go here-->
<!--            </div>-->
<!--        </div>-->
<!--        <div>-->
<!--        <img src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Background image">-->
<!--        <img src="https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png" alt="Profile Image">-->
<!--        <h1>John Smith</h1>-->
<!--        </div>-->
<!--        <div class="leafPoints">-->
<!--            <h2>Leaf Points</h2>-->
<!--        </div>-->
<!--        <div class="badges">-->
<!--            <h2>Badges</h2>-->

<!--            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" v-on:click="goToBadgeProgress">Progress</button>-->
<!--        </div>-->
<!--        <div class="stats">-->
<!--            <h1>Stats</h1>-->
<!--            <h2>Distance Travelled</h2>-->
<!--            <h3>Map</h3>-->
<!--        </div>-->

    </div>
</template>

<script>
    export default {
        name: "Profile",


        methods: {
            goToBadgeProgress() {
                this.$router.push({name: "badges"});
            },

        }
    }
</script>

<style scoped>

</style>

