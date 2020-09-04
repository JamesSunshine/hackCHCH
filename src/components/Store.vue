<template>
    <div>
        <div>
            <nav-bar ref="nav"></nav-bar>
        </div>
        <div class="pt-6">
            <h1>Leaf store</h1>
        </div>
        <div class="p-3 m-5">
            <div v-for="item in items" :key="item.itemId" class="general-container-rounded bg-white m-8">
                <div v-on:click="confirm(item.cost)" class="">
                    <p class="tb-float-right text-3xl">{{item.cost}}</p>
                    <img class="content-center" src="../assets/treeForStore.png" alt="Store image">
                    <p class="text-center text-xl font-bold">{{item.name}}</p>
                    <p>{{item.description}}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import NavBar from "./NavBar";

    export default {
        name: "Store",
        components: {NavBar},
        data() {
            return {
                items: [
                    {
                        itemId: 0,
                        cost: 45,
                        name: "Plant a native tree",
                        description: "Plant a native tree! And get a discount coffee."
                    },
                    {
                        itemId: 1,
                        cost: 5,
                        name: "Discount Coffee",
                        description: "Discount coffee from a local business."
                    },
                ]

            }
        },
        methods: {
            confirm(points) {
                this.$refs.nav.spendPoints(points);
            },
        },
    }
</script>

<style scoped>

</style>
