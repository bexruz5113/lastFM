<template>
  <div class="navbarFixed">
    <v-app-bar color="grey darken-4" dark>
      <div class="pr-md-3 d-sm-block d-none">
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          :class="{ 'show-btns': hover }"
          :color="transparent"
          icon
        >
          <v-icon :class="{ 'show-btns': hover }" :color="transparent">
            {{ icon }}
          </v-icon>
        </v-btn>
      </div>

      <v-toolbar-title>
        <router-link to="/"
          ><img
            src="https://www.last.fm/static/images/logo_animate.e1b8206ad4c7.gif" /></router-link
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-md-none d-block">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </div>
      <div class="d-md-flex align-md-center d-none">
        <v-btn class="mx-5" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <router-link to="/"
          ><p class="mb-0 mx-2 white--text">Home</p></router-link
        >
        <router-link to="/"
          ><p class="mb-0 mx-2 white--text">Live</p></router-link
        >
        <router-link to="/"
          ><p class="mb-0 mx-2 white--text">Music</p></router-link
        >
        <router-link to="/"
          ><p class="mb-0 mx-2 white--text">Events</p></router-link
        >
        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              class="mx-2"
              fab
              dark
              color="white"
            >
              <v-icon dark> mdi-account </v-icon>
            </v-btn>
          </template>

          <v-list dark>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title class="px-4"
                ><a class="white--text" href="#">{{
                  item.title
                }}</a></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar>
              <img
                style="width: 100%; max-width: 47px"
                src="../assets/me.jpg"
                alt="Bexruz"
              />
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="() => {}">
            <v-list-item-title
              ><b>bexruzbaxronov</b>
              <p>View profile</p></v-list-item-title
            ><br />
            <v-list-item-title>Notifications</v-list-item-title>
            <v-list-item-title>Inbox</v-list-item-title>
            <v-list-item-title>Bookmarks</v-list-item-title>
            <v-list-item-title>Settings</v-list-item-title>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
    items: [
      { title: "Bexruz Baxronov" },
      { title: "Notifications" },
      { title: "Inbox" },
      { title: "Bookmarks" },
      { title: "Settings" },
      { title: "Logout" },
    ],
    drawer: false,
    group: null,
  }),
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: Barlow, Open Sans, Lucida Grande, Helvetica Neue, Helvetica,
    Arial, Sans-serif;
}
.navbarFixed {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  left: 0;
}
p {
  font-size: 14px;
}
</style>
