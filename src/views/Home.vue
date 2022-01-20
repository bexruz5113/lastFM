<template>
  <div>
    <navbar />
    <HelloWorld />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import HelloWorld from "../components/HelloWorld";
import navbar from "../components/navbar.vue";

export default {
  name: "Home",

  components: {
    navbar,
    HelloWorld,
    Footer,
  },
};
</script>
