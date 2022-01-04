<template>
  <v-app>
    <v-app-bar
      app
      color="#ff99ff"
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
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
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
