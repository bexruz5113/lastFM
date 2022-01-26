<template>
  <div>
    <v-container class="py-8">
      <p class="text-h4 py-5">All the Top Albums</p>
      <!-- <div>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> Item </v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div> -->
      <div class="d-flex">
        <div class="mx-4">
          <v-menu transition="slide-x-transition" bottom right>
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
          </v-menu>
        </div>
        <div class="mx-4">
          <v-menu transition="slide-x-transition" bottom right>
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
          </v-menu>
        </div>
        <div class="mx-4">
          <v-menu transition="slide-x-transition" bottom right>
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
          </v-menu>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: "Bexruz ",
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>
