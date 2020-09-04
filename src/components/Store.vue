<template>
    <div>
        <div>
            <nav-bar></nav-bar>
        </div>
        <div class="pt-6">
            <h1>Leaf store</h1>
        </div>
        <div class="p-3 m-5">
            <div v-for="item in items" :key="item.itemId" class="general-container-rounded bg-white m-8">
                <div v-on:click="confirm" class="">
                    <p class="tb-float-right text-lg">{{item.cost}}</p>
                    <img class="content-center" src="https://image.shutterstock.com/image-vector/green-tree-on-white-background-260nw-603174926.jpg" alt="Store image">
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
                        description: "Plant a native tree! And get a free coffee."
                    },
                    {
                        itemId: 1,
                        cost: 5,
                        name: "Discount Coffee",
                        description: "Discount coffee from a local business"
                    },
                ]

            }
        },
        methods: {
          confirm() {
              console.log("Implement me!");
            }
        },
    }
</script>

<style scoped>

</style>
