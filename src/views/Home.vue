<template>
  <div>
    <v-container class="py-8">
      <p class="text-h4 py-5">All the Top Tags</p>
      <Tags />
      <!-- <p>{{ value | pipe }}</p> -->

      <!-- <div class="d-md-flex d-block">
        <div class="mx-4 py-2"> -->
      <!-- <v-menu transition="slide-x-transition" bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="deep-orange"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                Slide X Transition
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="i in 4" :key="i">
                <v-list-item-title>
                  <router-link class="black--text mx-3 py-2" to="/artist"
                    ><v-icon dense color="blue-grey darken-2">
                      mdi-call-split
                    </v-icon>
                    {{ i }}Jony</router-link
                  ></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu> -->
      <!-- <router-link
            class="grey lighten-2 black--text mx-3 py-2 px-4 rounded"
            to="/top-album"
            ><v-icon dense color="blue-grey darken-2"> mdi-call-split </v-icon>
            Top Albums</router-link
          > -->
      <!-- </div> -->
      <!-- <div class="mx-4 py-2"> -->
      <!-- <v-menu transition="slide-x-transition" bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="deep-orange"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                Slide X Transition
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="i in 4" :key="i">
                <v-list-item-title>
                  <router-link class="black--text mx-3 py-2" to="/top-album"
                    ><v-icon dense color="blue-grey darken-2">
                      mdi-call-split
                    </v-icon>
                    {{ i }}.Tag Top Albums</router-link
                  ></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu> -->
      <!-- <router-link
            class="grey lighten-2 black--text mx-3 py-2 px-4 rounded"
            to="/artist"
            ><v-icon dense color="blue-grey darken-2"> mdi-call-split </v-icon>
            Top Artist</router-link
          > -->
      <!-- </div> -->
      <!-- <div class="mx-4 py-2"> -->
      <!-- <v-menu transition="slide-x-transition" bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="deep-orange"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                Slide X Transition
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="i in 4" :key="i">
                <v-list-item-title>
                  <router-link class="black--text mx-3 py-2" to="/top-album"
                    ><v-icon dense color="blue-grey darken-2">
                      mdi-call-split
                    </v-icon>
                    {{ i }}.Tag Top Albums</router-link
                  ></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu> -->
      <!-- <router-link
            class="grey lighten-2 black--text mx-3 py-2 px-4 rounded"
            to="/tag"
            ><v-icon dense color="blue-grey darken-2"> mdi-call-split </v-icon>
            Tags</router-link
          > -->
      <!-- </div> -->
      <!-- </div> -->
    </v-container>
  </div>
</template>

<script>
import Tags from "./Tags.vue";
export default {
  components: { Tags },
  name: "Home",

  data() {
    return {
      value: "bexruz",
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
  // filters: {
  //   pipe(value) {
  //     if (value) {
  //       value = value.toString();
  //       return value.charAt(0).toUpperCase() + value.slice(1);
  //     } else {
  //       return "";
  //     }
  //   },
  // },
};
</script>
