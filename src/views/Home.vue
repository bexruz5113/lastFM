<template>
  <div>
    <v-container class="py-8">
      <p class="text-h4 py-5">All the Top Albums</p>
      <router-link
        class="grey lighten-2 rounded black--text mx-3 py-2 px-4"
        to="/topAlbum"
        ><v-icon dense color="blue-grey darken-2"> mdi-call-split </v-icon> Tag
        Top Albums</router-link
      >
      <router-link
        class="grey lighten-2 rounded black--text mx-3 py-2 px-4"
        to="/about"
        ><v-icon dense color="blue-grey darken-2"> mdi-call-split </v-icon>
        Artist Top Albums</router-link
      >
      <router-link
        class="grey lighten-2 rounded black--text mx-3 py-2 px-4"
        to="/track"
        ><v-icon dense color="blue-grey darken-2"> mdi-call-split </v-icon>
        Chart Top Track</router-link
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
