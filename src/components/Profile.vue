<template>
    <div>
        <nav-bar></nav-bar>
        <div class="pt-32">

            <!--        <div class="bg-white m-auto general-container-rounded mx-6">-->
            <div class="m-auto bg-white radius-border overflow-hidden shadow mx-5">
                <img src="https://cdn.discordapp.com/attachments/726046163576422512/751237699356196925/unknown.png"
                     class="w-full"/>
                <div class="flex justify-center -mt-8">
                    <img src="https://media.discordapp.net/attachments/554945397328576533/742975383640604702/output_ba721G.gif"
                         class="rounded-full border-solid border-white border-2 -mt-3 w-1/3">
                </div>
                <div class="text-center px-3 pb-6 pt-2">
                    <h3 class="text-black text-sm bold font-sans">{{ userName }}</h3>
                    <p class="mt-2 font-sans font-light text-grey-dark">Hello, I really love biking and running and
                        busing!</p>
                </div>
                <div class="flex justify-center pb-3 text-grey-dark">
                    <div class="text-center mr-3 border-r pr-3">
                        <h2>{{this.leafPoints}}</h2>
                        <span>Leaf Points</span>
                    </div>
                    <div class="text-center">
                        <h2 v-if="!badgeEarned">8</h2>
                        <h2 v-if="badgeEarned">9</h2>
                        <span>Badges</span>
                    </div>
                </div>
            </div>

            <div class="m-auto bg-white general-container-rounded mx-5 mt-5 mb-5 height-top-badges  shadow">
                <div class="">
                    <div class="border-b-2 border-gray-500 pb-2 overflow-hidden">
                        <label class="text-lg font-bold ">Top Badges</label>
                        <button class="bg-earth-brown round-button float-right" v-on:click="goToBadgeProgress">View all
                        </button>
                        <br>
                    </div>

                    <div class="mt-4">
                        <img class="inline-block mr-12 tooltip"
                             src="https://media.discordapp.net/attachments/751284461253033984/751297605111382106/badge6.png?width=586&height=671"
                             alt="Badge" width="70px" v-if="badgeEarned"
                            v-on:click="goToBadgeProgress">
                        <img class="inline-block mr-12"
                             src="https://media.discordapp.net/attachments/751284461253033984/751285810103451758/badge1.png?width=586&height=671"
                             alt="Badge" width="70px">
                        <img class="inline-block "
                             src="https://media.discordapp.net/attachments/751284461253033984/751297608080687244/badge7.png?width=586&height=671"
                             alt="Badge" width="70px">
                        <img class="inline-block ml-12"
                             src="https://media.discordapp.net/attachments/751284461253033984/751297615064334406/badge9.png?width=586&height=671"
                             alt="Badge" width="70px" v-if="!badgeEarned">





                    </div>
                </div>

            </div>

            <div class="m-auto bg-white general-container-rounded mx-5 mt-5 mb-5">
                <div>
                    <div class="border-b-2 border-gray-500 pb-2">
                        <label class="text-lg font-bold">User statistics</label><br>
                    </div>
                    <div class="mt-4">
                        <label>Distance: 125km</label><br>
                        <label>CO2 saved: 12.2</label>
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
    </div>
</template>

<script>
    import NavBar from "./NavBar";

    export default {
        name: "Profile",
        components: {NavBar},
        mounted: async function () {
            this.userName = sessionStorage.getItem("userName");
            let badgeEarned = sessionStorage.getItem("badgeEarnt");
            this.leafPoints = sessionStorage.getItem("leafPoints")
            if (badgeEarned === "true") {
                this.badgeEarned = true;
            }
        },

        data() {
            return {
                userName: "",
                badgeEarned: false,
                leafPoints: 0,
            }
        },


        methods: {
            goToBadgeProgress() {
                this.$router.push({name: "badges"});
            },


        },


    }
</script>

<style scoped>
    .height-top-badges {
        height: 220px
    }

    .tooltip .tooltip-text {
        visibility: hidden;
        text-align: center;
        padding: 2px 6px;
        position: absolute;
        z-index: 100;
    }
    .tooltip:hover .tooltip-text {
        visibility: visible;
    }

</style>

