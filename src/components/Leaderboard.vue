<template>
    <div class="">
        <nav-bar></nav-bar>
        <ul class="flex">
            <li class="-mb-px mr-1 mt-16" v-on:click="openTab('teamLeaf')">
                <p class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                    Team Weekly Leaf Points</p>
            </li>
            <li class="mr-1 my-16" v-on:click="openTab('soloLeaf')">
                <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Weekly
                    Leaf Points</a>
            </li>
            <li class="mr-1 my-16" v-on:click="openTab('soloTree')">
                <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Total
                    Trees Donated</a>
            </li>
        </ul>
        <div class="mt-2 general-container-rounded bg-white mx-6 shadow-lg">
            <p class="pl-3 text-2xl border-b-2 mb-5">{{currentLeaderboard}}</p>

            <div v-if="teamLeaf">
                <table class="m-auto shadow-lg">
                    <thead>
                    <tr class="bg-gray-100">
                        <th class="px-4 py-2">Team</th>
                        <th class="px-4 py-2">Weekly Leaf Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="bg-white" v-for="team in teamPoints" :key="team.leafPoints">
                        <td class="border px-4 py-2">{{ team.teamName }}</td>
                        <td class="border px-4 py-2">{{ team.leafPoints}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="soloLeaf" class="">
                <table class="m-auto shadow-lg">
                    <thead>
                    <tr class="bg-gray-100">
                        <th class="px-4 py-2">Name</th>
                        <th class="px-4 py-2">Weekly Leaf Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="bg-white" v-for="item in items" :key="item.leafPoints">
                        <td class="border px-4 py-2">{{ item.userName }}</td>
                        <td class="border px-4 py-2">{{ item.leafPoints}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="soloTree">
                <table class="m-auto shadow-lg">
                    <thead>
                    <tr class="bg-gray-100">
                        <th class="px-4 py-2">Name</th>
                        <th class="px-4 py-2">Total Donated Trees</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="bg-white" v-for="item in soloTreePoints" :key="item.leafPoints">
                        <td class="border px-4 py-2">{{ item.userName }}</td>
                        <td class="border px-4 py-2">{{ item.treePoints}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


</template>

<script>
    import NavBar from "./NavBar";

    export default {
        name: "Leaderboard",
        components: {NavBar},
        data() {
            return {
                currentLeaderboard: "Team Weekly Leaderboard",
                items: [{leafPoints: 70, userName: "Nishi Kawa"},
                    {leafPoints: 50, userName: "John Smith"},
                    {leafPoints: 37, userName: "Ryzaak Sunshine"},
                    {leafPoints: 2, userName: "Jamie Maurice"}],

                teamPoints: [{leafPoints: 36, teamName: "Green Corp"},
                {leafPoints: 23, teamName: "Trying for Trees"},
                {leafPoints: 12, teamName: "Treerrific"},
                {leafPoints: 3, teamName: "Company Co."}],

                soloTreePoints: [{treePoints: 3, userName: "John Smith"},
                    {treePoints: 2, userName: "Ryzaak Sunshine"},
                    {treePoints: 2, userName: "Nishi Kawa"},
                    {treePoints: 1, userName: "Jamie Maurice"}],

                teamLeaf: true,
                soloLeaf: false,
                soloTree: false,
            }
        },

        mounted: async function () {
            let points = sessionStorage.getItem("leafPoints");
            let uName = sessionStorage.getItem("userName");
            this.items.push({leafPoints: Number.parseInt(points), userName: uName});
            this.items.sort(this.itemComparison);
        },

        methods: {


            itemComparison(itemA, itemB) {
                if (itemA.leafPoints > itemB.leafPoints) {
                    return -1;
                } else {
                    return 1;
                }
            },

            openTab(tab) {
                switch (tab) {
                    case('teamLeaf'):
                        this.teamLeaf = true;
                        this.soloLeaf = false;
                        this.soloTree = false;
                        this.currentLeaderboard = "Team Weekly Leaf Points";
                        break;
                    case('soloLeaf'):
                        this.teamLeaf = false;
                        this.soloLeaf = true;
                        this.soloTree = false;
                        this.currentLeaderboard = "Solo Weekly Leaf Points";
                        break;
                    case('soloTree'):
                        this.teamLeaf = false;
                        this.soloLeaf = false;
                        this.soloTree = true;
                        this.currentLeaderboard = "Total Trees Donated";

                        break;
                }
            }
        }
    }
</script>

<style scoped>
</style>
