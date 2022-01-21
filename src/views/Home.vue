<template>
  <div>
    <v-container class="py-8">
      <p>HelloWorld</p>
      <router-link class="grey black--text mx-3 pa-2" to="/topAlbum"
        >Tag Top Albums</router-link
      >
      <router-link class="grey black--text mx-3 pa-2" to="/about"
        >Artist Top Albums</router-link
      >
      <router-link class="grey black--text mx-3 pa-2" to="/topAlbum"
        >Top Albums</router-link
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
