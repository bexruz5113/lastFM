<template>
  <div>
    <v-container class="mx-auto">
      <v-row class="py-5">
        <v-col cols="12" md="6"><p class="text-h4">Top Albums</p></v-col>
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
            <v-col
              cols="12"
              md="6"
              lg="4"
              xl="3"
              class="my-3 mx-auto"
              v-for="list in findMusic"
              :key="list.id"
            >
              <v-card
                class="mx-auto d-md-block d-flex align-items-center"
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
                  <p class="text-caption mb-0">Popular right now on Last.fm</p>
                </div>
                <div class="px-2 d-md-none d-block">
                  <span>
                    <a class="text-caption black--text" :href="list.url">{{
                      list.name
                    }}</a
                    ><br />
                    xaxaxa
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
              color="grey lighten-1"
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
    message: "assalomu alekum",
    search: "",
    foundBases: [],
    bases: [
      { id: 1, title: "Audio Streaming Platforms" },
      { id: 2, title: "Make Your Own Radio Station" },
      { id: 3, title: "Download Music Albums" },
      { id: 4, title: "Top 10 Songs of 2021" },
    ],
  }),

  computed: {
    ...mapGetters("music", ["music"]),
    findMusic: function () {
      return this.music.filter((list) => {
        return list.name.includes(
          this.search.replace(/./, (c) => c.toUpperCase())
        );
      });
    },
  },
  mounted() {
    this.getMusicList();
  },
  methods: {
    ...mapActions("music", ["getMusicList"]),
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
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
