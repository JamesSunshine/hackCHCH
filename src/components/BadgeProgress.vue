<template>
    <div>
        <nav-bar></nav-bar>
        <div>
            <div class="badges">

                <p class="pt-20 mx-6 text-3xl text-gray-800 border-b-2 border-green-600">Earned badges</p>


                <div class="">

                    <div class=" mt-10 mx-6 h-10" v-show="badgeEarned">
                        <img class="inline-block absolute"
                             src="https://media.discordapp.net/attachments/751284461253033984/751297605111382106/badge6.png?width=586&height=671"
                             alt="Badge" width="100px">
                        <div class="inline-block pl-16 py-4 bg-white mt-3 float-right rounded rounded-r-full h-24 shadow"
                             style="width: 87%">
                            <p class="pl-3 text border-b-2 mr-10">Fantail</p>
                            <p class=" pl-3 text-xs">Redeemed 1000 leaf points</p>
                            <p class="pl-3 text-xs text-gray-500 pt-2">Awarded 04/09/2020</p>
                        </div>
                    </div>
                </div>

                <div class="pt-2">
                    <div class=" mt-20 mx-6 h-10">
                        <img class="inline-block absolute"
                             src="https://media.discordapp.net/attachments/751284461253033984/751285810103451758/badge1.png?width=586&height=671"
                             alt="Badge" width="100px">
                        <div class="inline-block pl-16 py-4 bg-white mt-3 float-right rounded rounded-r-full h-24 shadow"
                             style="width: 87%">
                            <p class=" pl-3 text border-b-2 mr-10">Giant Kauri</p>
                            <p class=" pl-3 text-xs">Donated to plant a tree</p>
                            <p class="pl-3 text-xs text-gray-500 pt-2">Awarded 01/09/2020</p>
                        </div>
                    </div>
                </div>

                <div class="pt-2">
                    <div class=" mt-20 mx-6 h-10">
                        <img class="inline-block absolute"
                             src="https://media.discordapp.net/attachments/751284461253033984/751297608080687244/badge7.png?width=586&height=671"
                             alt="Badge" width="100px">
                        <div class="inline-block pl-16 py-4 bg-white mt-3 float-right rounded rounded-r-full h-24 shadow"
                             style="width: 87%">
                            <p class=" pl-3 text border-b-2 mr-10">Rimu</p>
                            <p class=" pl-3 text-xs">Travelled 500 km by bike</p>
                            <p class="pl-3 text-xs text-gray-500 pt-2">Awarded 10/08/2020</p>
                        </div>
                    </div>
                </div>


                <div class="pt-2">
                    <div class=" mt-20 mx-6 h-10">
                        <img class="inline-block absolute"
                             src="https://media.discordapp.net/attachments/751284461253033984/751286974073274430/badge4.png?width=586&height=671"
                             alt="Badge" width="100px">
                        <div class="inline-block pl-16 py-4 bg-white mt-3 float-right rounded rounded-r-full h-24 shadow"
                             style="width: 87%">
                            <p class=" pl-3 text border-b-2 mr-10">Rimu</p>
                            <p class=" pl-3 text-xs">Travelled 100 km by bike</p>
                            <p class="pl-3 text-xs text-gray-500 pt-2">Awarded 01/08/2020</p>
                        </div>
                    </div>
                </div>


                <div class="pt-2">
                    <div class=" mt-20 mx-6 h-10">
                        <img class="inline-block absolute"
                             src="https://media.discordapp.net/attachments/751284461253033984/751297615064334406/badge9.png?width=586&height=671"
                             alt="Badge" width="100px">
                        <div class="inline-block pl-16 py-4 bg-white mt-3 float-right rounded rounded-r-full h-24 shadow"
                             style="width: 87%">
                            <p class=" pl-3 text border-b-2 mr-10">Rangiora</p>
                            <p class=" pl-3 text-xs">Walked 500 km</p>
                            <p class="pl-3 text-xs text-gray-500 pt-2">Awarded 15/07/2020</p>
                        </div>
                    </div>
                </div>

                <div class="pt-2">
                    <div class=" mt-20 mx-6 h-10">
                        <img class="inline-block absolute"
                             src="https://media.discordapp.net/attachments/751284461253033984/751298135099179058/badge10.png?width=586&height=671"
                             alt="Badge" width="100px">
                        <div class="inline-block pl-16 py-4 bg-white mt-3 float-right rounded rounded-r-full h-24 shadow"
                             style="width: 87%">
                            <p class=" pl-3 text border-b-2 mr-10">Rangiora</p>
                            <p class=" pl-3 text-xs">Walked 100 km
                            <p class="pl-3 text-xs text-gray-500 pt-2">Awarded 03/09/2020</p>
                        </div>
                    </div>
                </div>

                <div class="pt-2">
                    <div class=" mt-20 mx-6 h-10">
                        <img class="inline-block absolute"
                             src="https://media.discordapp.net/attachments/751284461253033984/751286362686226482/badge2.png?width=586&height=671"
                             alt="Badge" width="100px">
                        <div class="inline-block pl-16 py-4 bg-white mt-3 float-right rounded rounded-r-full h-24 shadow"
                             style="width: 87%">
                            <p class=" pl-3 text border-b-2 mr-10">Rangiora</p>
                            <p class=" pl-3 text-xs">Walked 50 km</p>
                            <p class="pl-3 text-xs text-gray-500 pt-2">Awarded 01/08/2020</p>
                        </div>
                    </div>
                </div>

                <div class="pt-2">
                    <div class=" mt-20 mx-6 h-10">
                        <img class="inline-block absolute"
                             src="https://media.discordapp.net/attachments/751284461253033984/751297609645293588/badge8.png?width=586&height=671"
                             alt="Badge" width="100px">
                        <div class="inline-block pl-16 py-4 bg-white mt-3 float-right rounded rounded-r-full h-24 shadow"
                             style="width: 87%">
                            <p class=" pl-3 text border-b-2 mr-10">Braving the cold</p>
                            <p class=" pl-3 text-xs">Made 100 trips in freezing weather</p>
                            <p class="pl-3 text-xs text-gray-500 pt-2">Awarded 03/09/2020</p>
                        </div>
                    </div>
                </div>

                <div class="pt-2">
                    <div class=" mt-20 mx-6 h-10">
                        <img class="inline-block absolute"
                             src="https://media.discordapp.net/attachments/751284461253033984/751286590915084298/badge3.png?width=586&height=671"
                             alt="Badge" width="100px">
                        <div class="inline-block pl-16 py-4 bg-white mt-3 float-right rounded rounded-r-full h-24 shadow"
                             style="width: 87%">
                            <p class=" pl-3 text border-b-2 mr-10">Braving the cold</p>
                            <p class=" pl-3 text-xs">Made 10 trips in freezing weather</p>
                            <p class="pl-3 text-xs text-gray-500 pt-2">Awarded 01/04/2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "./NavBar";

    export default {
        name: "BadgeProgress",
        components: {NavBar},
        data() {
            return {
                badgeEarned: false
            }
        },

        mounted() {
            let badgeEarned = sessionStorage.getItem("badgeEarnt");
            if (badgeEarned === "true") {
                this.badgeEarned = true;
            }
        }
    }

</script>

<style scoped>

</style>
