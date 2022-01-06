<template>
  <v-app>
    <v-app-bar
      app
      color="#81858a"
      dark
    >
      <div class="header-name">NM</div>
      <div class="header-subname">Studio</div>

      <v-spacer></v-spacer>
      <v-btn-toggle
          v-model="toggle_exclusive"
          rounded
        >

      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
          <v-btn v-on="on" @click="redirectToHomePage()">
            <v-icon >mdi-home</v-icon>
          </v-btn>

        </template>
        <span>Home</span>
      </v-tooltip>
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
          <v-btn v-on="on" @click="redirectToAboutPage()">
            <v-icon >mdi-account</v-icon>
          </v-btn>

        </template>
        <span>About</span>
      </v-tooltip>
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
          <v-btn v-on="on" @click="redirectToProjectPage()">
            <v-icon >mdi-github</v-icon>
          </v-btn>

        </template>
        <span>My Projects</span>
      </v-tooltip>
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
          <v-btn v-on="on" @click="redirectToContactPage()">
            <v-icon >mdi-contacts</v-icon>
          </v-btn>

        </template>
        <span>Contacts</span>
      </v-tooltip>
        </v-btn-toggle>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
      <v-footer
    dark
    padless
    fixed
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title style="background-color: #81858a;">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <a target="_blank" :href="`https://twitter.com/home`" style="color: #FFFFFF;
    text-decoration: none;">
      <v-icon @mouseover="hover.twitter = true" @mouseleave="hover.twitter =false" :color="hover.twitter?'primary':''">mdi-twitter</v-icon>
      </a>
      <a target="_blank" :href="`https://www.instagram.com/nilesh______mishra/`" style="color: #FFFFFF;
    text-decoration: none;">
      <v-icon @mouseover="hover.insta = true" @mouseleave="hover.insta =false" :color="hover.insta?'primary':''" class="pl-3">mdi-instagram</v-icon>
      </a>
      <a target="_blank" :href="`https://github.com/nilesh9836`" style="color: #FFFFFF;
    text-decoration: none;">
      <v-icon @mouseover="hover.git = true" @mouseleave="hover.git =false" :color="hover.git?'primary':''" class="pl-3">mdi-github</v-icon>
      </a>
      <a target="_blank" :href="`https://www.linkedin.com/feed/`" style="color: #FFFFFF;
    text-decoration: none;">
      <v-icon @mouseover="hover.linkedin = true" @mouseleave="hover.linkedin =false" :color="hover.linkedin?'primary':''" class="pl-3">mdi-linkedin</v-icon>
      </a>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date() }}<strong></strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    hover: {
      twitter: false,
      insta: false,
      git: false,
      linkedin: false
    }
  }),
  methods: {
    redirectToAboutPage () {
      this.$router.push({ path: 'about' })
    },
    redirectToHomePage () {
      this.$router.push({ path: 'home' })
    },
    redirectToContactPage () {
      this.$router.push({ path: 'contact' })
    },
    redirectToProjectPage () {
      this.$router.push({ path: 'project' })
    }
  }
}
</script>
<style scoped>
.header-name{
  color: black;
  font-weight: 500;
  font-size: 28px;
}
.header-subname{
  color: black;
}
</style>
