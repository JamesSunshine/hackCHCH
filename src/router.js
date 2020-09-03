import VueRouter from "vue-router";

import Login from "@/components/Login";
import Profile from "@/components/Profile";
import HelloWorld from "@/components/HelloWorld";
import AddTrip from "./components/AddTrip";
import Leaderboard from "@/components/Leaderboard";
import BadgeProgress from "@/components/BadgeProgress";
import Store from "@/components/Store";

const routes = [
    {path: "/", component: HelloWorld, name: "helloworld"},
    {path: "/login", component: Login, name: "login"},
    {path: "/profile", component: Profile, name: "profile"},
    {path: "/addTrip", component: AddTrip, name: "addTrip"},
    {path: "/store", component: Store, name:"store"},
    {path: "/leaderboard", component: Leaderboard, name: "leaderboard"},
    {path: "/badges", component: BadgeProgress, name: "badges"},
];

const router = new VueRouter(
    {
        mode: "history",
        routes
    });

export default router;
