<template>
  <div>
    <v-container class="mx-auto">
      <v-row class="py-5">
        <v-col cols="12" class="pa-5">
          <v-form ref="form" @submit.prevent="getTag" lazy-validation>
            <v-select v-model="tagName" :items="items" required></v-select>
            <v-btn class="mr-4" type="submit"> submit </v-btn>
          </v-form></v-col
        >
        <v-col cols="12" md="6"
          ><p class="text-h4 px-3">Top Tag Albums</p></v-col
        >
        <v-col cols="12" md="6">
          <v-toolbar flat color="transparent">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search Music"
              single-line
            ></v-text-field>
          </v-toolbar>
        </v-col>

        <v-col cols="12" md="8">
          <v-row>
            <v-col class="text-center" cols="12" v-if="!findAlbum.length">
              <v-progress-circular
                :size="100"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </v-col>
            <v-col
              v-else
              cols="12"
              md="6"
              lg="4"
              xl="3"
              class="my-3 px-3 mx-auto"
              v-for="list in findAlbum"
              :key="list.id"
            >
              <v-card
                class="
                  mx-auto
                  d-md-block d-flex
                  align-items-center
                  grey
                  lighten-2
                "
                outlined
              >
                <!-- <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1">
                    {{ list.artist.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{
                    list.artist.mbid
                  }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <a href="https://www.last.fm/music/BTS">
                    <img width="60" src="../assets/play.png" alt=""
                  /></a>
                </v-list-item-action>
              </v-list-item> -->
                <div
                  class="d-flex justify-space-around"
                  v-for="(picture, index) in list.image"
                  :key="index"
                >
                  <div
                    class="imgPosition d-md-block d-none"
                    v-if="picture.size === 'extralarge'"
                  >
                    <img style="width: 100%" :src="picture['#text']" />
                    <span class="playPosition"
                      ><a href="https://www.last.fm/music/BTS">
                        <img width="40" src="../assets/play.png" alt="" /></a
                    ></span>
                    <span class="linkPosition">
                      <a class="text-h6 white--text" :href="list.url">{{
                        list.name
                      }}</a
                      ><br />
                      <a
                        class="text-caption white--text"
                        :href="list.artist.url"
                        >{{ list.artist.name }}</a
                      >
                    </span>
                  </div>
                  <div
                    class="imgPosition d-md-none d-block"
                    v-if="picture.size === 'medium'"
                  >
                    <img style="width: 100%" :src="picture['#text']" />
                    <!-- <span class="playPosition"
                      ><a href="https://www.last.fm/music/BTS">
                        <img width="30" src="../assets/play.png" alt="" /></a
                    ></span> -->
                  </div>
                </div>
                <div class="d-md-block d-none">
                  <p class="text-caption px-2 py-3 mb-0">
                    Popular right now on Last.fm
                  </p>
                </div>
                <div class="px-2 d-md-none d-block">
                  <span>
                    <a
                      class="text-caption font-weight-black black--text"
                      :href="list.url"
                      >{{ list.name }}</a
                    ><br />
                    <a
                      class="text-caption black--text"
                      :href="list.artist.url"
                      >{{ list.artist.name }}</a
                    >
                  </span>
                  <p class="text-caption mb-0">Popular right now on Last.fm</p>
                </div>
              </v-card>
              <!-- <v-card elevation="9" outlined>
            <a :href="list.url">{{ list.name }}</a>
          </v-card> -->
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4" class="px-3">
          <div><p class="text-h5">Sponsored Topics</p></div>
          <div class="my-2" v-for="(base, id) in bases" :key="id">
            <v-btn
              class="d-flex justify-space-between px-lg-5 px-2 py-4"
              style="width: 100%"
              depressed
              small
              color="grey lighten-2"
            >
              <span> {{ base.id }}. {{ base.title }}</span>
              <span><v-icon dark left> mdi-arrow-right </v-icon></span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HelloWorld",

  data: () => ({
    search: "",
    tagName: "pop",
    foundBases: [],
    items: ["rock", "disco", "jazz", "pop"],
    bases: [
      { id: 1, title: "Audio Streaming Platforms" },
      { id: 2, title: "Make Your Own Radio Station" },
      { id: 3, title: "Download Music Albums" },
      { id: 4, title: "Top 10 Songs of 2021" },
    ],
  }),

  computed: {
    ...mapGetters("album", ["album"]),
    findAlbum: function () {
      return this.album.filter((list) => {
        return list.name.includes(
          this.search.replace(/./, (c) => c.toUpperCase())
        );
      });
    },
  },
  mounted() {
    this.getTagTopAlbums(this.tagName);
  },
  methods: {
    ...mapActions("album", ["getTagTopAlbums"]),
    getTag() {
      this.getTagTopAlbums(this.tagName);
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.imgPosition {
  position: relative;
  margin: 0 auto;
}
.playPosition {
  position: absolute;
  top: 18px;
  left: 18px;
}
.linkPosition {
  position: absolute;
  bottom: 25px;
  left: 18px;
}
</style>
