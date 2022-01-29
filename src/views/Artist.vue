<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-img
            class="picPosition"
            style="width: 100%; max-height: 300px; background-position: center"
            gradient="to bottom left, rgba(68,55,55,.3), rgba(94,11,11,.7)"
            src="../assets/main.jpg"
            alt=""
          >
            <div class="infoPosition">
              <p class="white--text text-md-h3 text-h4 font-weight-black">
                {{ artistInfo.name }}
              </p>
              <span class="d-flex white--text">
                <span>
                  <p class="mb-1 text-caption">Listeners</p>
                  <p class="font-weight-black">
                    {{ artistInfo.stats.listeners || "" }}
                  </p>
                </span>
                <span class="px-5"
                  ><p class="mb-1 text-caption">Scrobbles</p>
                  <p class="font-weight-black">
                    {{ artistInfo.stats.playcount }}
                  </p></span
                >
              </span>
            </div></v-img
          >
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mx-auto py-10">
      <v-row>
        <v-col cols="12" md="7" class="px-4">
          <span v-html="artistInfo.bio.summary"></span>

          <br />
          <br />
          <span class="d-flex flex-wrap">
            <span v-for="(link, index) in artistInfo.tags.tag" :key="index">
              <a :href="link.url">
                <v-btn class="ma-2" outlined color="indigo"
                  >{{ link.name }}
                </v-btn></a
              >
            </span>
          </span>
        </v-col>
        <v-col cols="12" md="1"></v-col>
        <v-col cols="12" md="4" class="px-3">
          <p class="text-h5 font-weight-black">Similar To</p>
          <span class="d-flex flex-wrap">
            <span v-if="!artistInfo.similar.artist.length">
              <img
                style="width: 100%; max-width: 100px"
                src="../assets/fail.png"
                alt=""
              />
            </span>

            <a
              v-else
              v-for="(info, index) in artistInfo.similar.artist"
              :key="index"
              :href="info.url"
              class="mx-2 black--text"
            >
              <span><img class="similarPic" src="../assets/lastfm.png" /></span>
              <span
                ><p class="text-center">{{ info.name }}</p></span
              >
            </a>
          </span>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mx-auto">
      <v-row class="py-5">
        <!-- <v-col cols="12" class="pa-5">
          <v-form ref="form" @submit.prevent="getArtist" lazy-validation>
            <v-select v-model="artistName" :items="items" required></v-select>
            <v-btn class="mr-4" type="submit"> submit </v-btn>
          </v-form>
        </v-col> -->
        <v-col cols="12" md="8"
          ><p class="text-h4 font-weight-black px-3">Albums</p></v-col
        >
        <v-col cols="12" md="4">
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
            <v-col class="text-center" cols="12" v-if="!findMusic.length">
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
              v-for="list in findMusic"
              :key="list.id"
            >
              <router-link :to="`/artist/${list.artist.name}/${list.name}`">
                <v-card
                  class="
                    grey
                    lighter-2
                    mx-auto
                    d-md-block d-flex
                    align-items-center
                  "
                  outlined
                >
                  <div
                    class="d-flex justify-space-around"
                    v-for="(picture, index) in list.image"
                    :key="index"
                  >
                    <div
                      v-if="picture.size === 'extralarge'"
                      class="imgPosition d-md-block d-none"
                    >
                      <span v-if="!picture['#text'].length">
                        <img
                          style="width: 100%; height: 235px"
                          src="../assets/file.svg"
                      /></span>

                      <span v-else>
                        <img style="width: 100%" :src="picture['#text']"
                      /></span>

                      <span class="playPosition"
                        ><a :href="list.url">
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
                      <span v-if="!picture['#text'].length"
                        ><img
                          style="width: 100%; max-width: 78px; height: auto"
                          src="../assets/file.svg"
                          alt=""
                      /></span>
                      <span v-else
                        ><img style="width: 100%" :src="picture['#text']"
                      /></span>
                    </div>
                  </div>
                  <div class="d-md-block d-none">
                    <p class="text-caption px-2 py-3 mb-0">
                      Popular right now on Last.fm
                    </p>
                  </div>
                  <div class="px-2 d-md-none d-block">
                    <span class="d-block">
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

                      <span>
                        <p class="mb-0 text-caption">
                          playcount: {{ list.playcount }}
                        </p>
                      </span>
                    </span>
                  </div>
                </v-card></router-link
              >
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
    bases: [
      { id: 1, title: "Audio Streaming Platforms" },
      { id: 2, title: "Make Your Own Radio Station" },
      { id: 3, title: "Download Music Albums" },
      { id: 4, title: "Top 10 Songs of 2021" },
    ],
  }),
  created() {
    console.log(this.$route.params.artist);
    this.getArtistInfoTopAlbums(this.$route.params.artist);
    this.getArtistTopAlbums(this.$route.params.artist);
  },
  computed: {
    ...mapGetters("artistInfo", ["artistInfo"]),
    ...mapGetters("artist", ["artist"]),

    findMusic: function () {
      return this.artist.filter((list) => {
        return list.name.includes(
          this.search.replace(/./, (c) => c.toUpperCase())
        );
      });
    },
  },
  methods: {
    ...mapActions("artistInfo", ["getArtistInfoTopAlbums"]),
    ...mapActions("artist", ["getArtistTopAlbums"]),
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
.v-progress-circular {
  margin: 1rem;
}
.picPosition {
  position: relative;
  margin: 0 auto;
}
.imgPosition {
  position: relative;
}
.infoPosition {
  position: absolute;
  top: 50px;
  left: 35px;
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
  order: 100;
}
.similarPic {
  width: 100%;
  max-width: 88px;
  height: auto;
  border-radius: 100%;
}
</style>
