<template>
  <div class="grey darken-4">
    <v-container>
      <v-row class="py-8">
        <v-col cols="12" sm="6" md="4" lg="3"
          ><h3 class="grey--text">Company</h3>
          <br />
          <a href="#" class="white--text">About Last.fm</a><br />
          <a href="#" class="white--text">Contact Us</a><br />
          <a href="#" class="white--text">Jobs</a>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3"
          ><h3 class="grey--text">Help</h3>
          <br />
          <a href="#" class="white--text">Track My Music</a><br />
          <a href="#" class="white--text">Community Support</a><br />
          <a href="#" class="white--text">Community Guidelines</a><br />
          <a href="#" class="white--text">Help</a>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3"
          ><h3 class="grey--text">Goodies</h3>
          <br />
          <a href="#" class="white--text">Download Scrobbler</a><br />
          <a href="#" class="white--text">Developer API</a><br />
          <a href="#" class="white--text">Free Music Downloads</a><br />
          <a href="#" class="white--text">Merchandise</a>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3"
          ><h3 class="grey--text">Follow us</h3>
          <br />
          <a href="#" class="white--text">Facebook</a><br />
          <a href="#" class="white--text">Twitter</a><br />
          <a href="#" class="white--text">Instagram</a><br />
          <a href="#" class="white--text">YouTube</a>
        </v-col>
      </v-row></v-container
    >
    <v-divider color="white"></v-divider>
    <v-container>
      <v-row class="d-flex py-5">
        <v-col cols="12" md="8">
          <div class="d-sm-flex flex-wrap justify-sm-space-around">
            <button class="white--text" active>English</button>
            <button class="grey--text">Русский</button>
            <button class="grey--text">Español</button>
            <button class="grey--text">Français</button>
            <button class="grey--text">Italiano</button>
            <button class="grey--text">日本語</button>
          </div>
          <div class="d-flex flex-wrap py-5">
            <p class="grey--text mb-0">
              CBS Interactive © 2022 Last.fm Ltd. All rights reserve
            </p>

            <a class="grey--text" href="#"> | Terms of Use</a>
            <a class="grey--text" href="#"> | Privacy Policy</a>
            <a class="grey--text" href="#"> | Legal Policies</a>
            <a class="grey--text" href="#"> | Cookies Policy</a>
            <a class="grey--text" href="#">
              | Do Not Sell My Personal Information</a
            >

            <a class="grey--text" href="#"> | Jobs at ViacomCBS</a>

            <a class="grey--text" href="#"> | Last.fm Music </a>
            <p class="grey--text">
              Some user-contributed text on this page is available under the
              <a href="#" class="grey--text"
                >Creative Commons Attribution-ShareAlike License;</a
              >
              additional terms may apply.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="text-end">
          <p class="white--text mb-0">Audioscrobbler</p>
          <img
            width="60"
            src="https://www.last.fm/static/images/footer_logo@2x.49ca51948b0a.png"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  font-family: Barlow, Open Sans, Lucida Grande, Helvetica Neue, Helvetica,
    Arial, Sans-serif;
}
a,
p {
  text-decoration: none;
  font-size: 14px;
  line-height: 25px;
}
</style>
