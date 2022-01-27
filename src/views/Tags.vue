<template>
  <div>
    <v-container class="mx-auto my-5">
      <v-row>
        <v-col
          class="my-2"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="tag in tags"
          :key="tag.id"
        >
          <router-link
            @click="getTag()"
            class="picPosition"
            :to="`/tag/${tag.text}`"
          >
            <span
              ><img style="width: 100%; max-width: 230px" :src="tag.img" />
              <span class="colorPosition">
                <b>{{ tag.text }}</b>
              </span></span
            >
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          id: 1,
          text: "metal",
          img: "https://lastfm.freetls.fastly.net/i/u/avatar300s/43049789d1a5df04fc7c937a789ae8de.jpg",
        },
        {
          id: 2,
          text: "rock",
          img: "https://lastfm.freetls.fastly.net/i/u/avatar300s/5630cc5f05e9ea9d84bdfbd9f54497ce.jpg",
        },
        {
          id: 3,
          text: "hip-hop",
          img: "https://lastfm.freetls.fastly.net/i/u/avatar300s/9b4011390c4267ce1f91bd672c15dffb.jpg",
        },
        {
          id: 4,
          text: "indie",
          img: "https://lastfm.freetls.fastly.net/i/u/avatar300s/c825233e09af4641a5ce7b6ece883aae.jpg",
        },
        {
          id: 5,
          text: "jazz",
          img: "https://lastfm.freetls.fastly.net/i/u/avatar300s/f0ceabbee2b7d8068cee23e8c43c3758.jpg",
        },
        {
          id: 6,
          text: "reggae",
          img: "https://lastfm.freetls.fastly.net/i/u/avatar300s/ccb1ecd822564895abf5e5afda76bff4.jpg",
        },
        {
          id: 7,
          text: "british",
          img: "https://lastfm.freetls.fastly.net/i/u/avatar300s/07bf696e0d404278a2f8fd885eec2b4f.jpg",
        },
        {
          id: 8,
          text: "dance",
          img: "https://lastfm.freetls.fastly.net/i/u/avatar300s/169de4a6ec7245579ae3be1122114d9b.jpg",
        },
        {
          id: 9,
          text: "rnb",
          img: "https://lastfm.freetls.fastly.net/i/u/avatar300s/646edaf5e65f58781341a8fad455c7ce.jpg",
        },
        {
          id: 10,
          text: "classical",
          img: "https://lastfm.freetls.fastly.net/i/u/avatar300s/683eceb3dee1462e23102012f8440799.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.picPosition {
  position: relative;
  max-width: 230px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.colorPosition {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 22px;
  background-color: rgba(73, 76, 53, 0.356);
}
</style>
