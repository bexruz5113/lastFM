<template>
  <div>
    <v-container class="mx-auto">
      <v-row>
        <v-col cols="12" md="6"
          ><p class="text-h4 px-3">Artist's Song</p></v-col
        >

        <v-col cols="12" md="8">
          <v-row>
            <v-col class="text-center" cols="12" v-if="!song">
              <v-progress-circular
                :size="100"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </v-col>
            <v-col v-else cols="12" md="6" class="my-3 px-3 mx-auto">
              <span>{{ song.artist.name }} </span>
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
  data: () => ({
    search: "",
    bases: [
      { id: 1, title: "Audio Streaming Platforms" },
      { id: 2, title: "Make Your Own Radio Station" },
      { id: 3, title: "Download Music Albums" },
      { id: 4, title: "Top 10 Songs of 2021" },
    ],
  }),

  computed: {
    ...mapGetters("song", ["song"]),
  },
  created() {
    console.log(this.$route.params.artist + " " + this.$route.params.song);
    this.getArtistSong(this.$route.params.artist, this.$route.params.song);
  },
  methods: {
    ...mapActions("song", ["getArtistSong"]),
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
  order: 100;
}
</style>
