import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Tags from "@/views/Tags";
import Error from "@/components/Error";
import Artist from "@/views/Artist";
import Direct from "@/views/Direct";
import SpecificTagInfo from "@/views/SpecificTagInfo";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/tag",
    name: "tag",
    component: Tags,
  },
  {
    path: "/tag/:tag",
    name: "specific-tag-info",
    component: SpecificTagInfo,
  },
  {
    path: "/artist",
    name: "artist",
    component: Artist,
  },
  {
    path: "/artist/:artist",
    name: "artist-info",
    component: Artist,
  },
  {
    path: "/artist/:artist/:song",
    name: "artist-song-info",
    component: Direct,
  },
  {
    path: "*",
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
