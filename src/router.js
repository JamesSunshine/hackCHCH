import VueRouter from "vue-router";

import Login from "@/components/Login";
import HelloWorld from "@/components/HelloWorld";
import Profile from "@/components/Profile";

const routes = [
    {path: "/", component: HelloWorld, name: "helloworld"},
    {path: "/login", component: Login, name: "login"},
    {path: "/profile", component: Profile, name: "profile"}
]

const router = new VueRouter(
    {
        mode: "history",
        routes
    });

export default router;







