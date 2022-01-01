<template>
  <v-container class="pa-0 ma-0 pa-4" fluid>
    <v-row no-gutters class="pa-0 ma-0">
      <v-col>
      <v-card
    class="mx-auto"
    outlined
    elevation="0"
  >
    <v-card-text>
      <div>Speed Up Communication</div>
      <p class="text-h4 text--primary">
        Hi i'm  Nilesh <br>Mishra
      </p>
      <p>adjective</p>
      <div class="text--primary">
        NM studio is the place for everything related to<br>
        a project,to-do list and communication.
      </div>
    </v-card-text>
    <v-card-actions>
      <v-row no-gutters>
      <v-col>
      <v-btn
        text
        color="teal accent-4"
        @click="redirectToAboutPage()"
      >
        Hire Me

      </v-btn>
      <v-icon color="teal accent-4" small @click="redirectToAboutPage()">mdi-arrow-right</v-icon>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="pt-4">
      <v-row class="pl-9 ml-9">
      <a :href="`https://twitter.com/home`" style="color: #FFFFFF;
    text-decoration: none;">
      <v-icon>mdi-twitter</v-icon>
      </a>
      <a :href="`https://www.instagram.com/nilesh______mishra/`" style="color: #FFFFFF;
    text-decoration: none;">
      <v-icon class="pl-1">mdi-instagram</v-icon>
      </a>
      <a :href="`https://github.com/nilesh9836`" style="color: #FFFFFF;
    text-decoration: none;">
      <v-icon class="pl-2">mdi-github</v-icon>
      </a>
      <a :href="`https://www.linkedin.com/feed/`" style="color: #FFFFFF;
    text-decoration: none;">
      <v-icon class="pl-2">mdi-linkedin</v-icon>
      </a>
    </v-row>
     </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
      </v-col>
      <v-col>
      <v-card elevation="0"  outlined color="transparent" class="pl-6">
        <div class="pt-9">
        <div class="git-style">10+ git projects</div>
        <div class="contribution-style">Contributions (Open Source) :-</div>
        <li class="list-style">Vuetify</li>
        <li class="list-style">Iview</li>
        </div>
      <img
      class="mt-n13 pl-9"
      src="img/icons/nilesh-logo.png"
      alt="image"
      min-width="400"/>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
  }),
  methods: {
    redirectToAboutPage () {
      this.$router.push({ path: 'about' })
    }
  }
}
</script>
<style scoped>
.git-style {
  color: brown;
  font-size: 18px;
  font-weight: 500;
}
.contribution-style {
  color: rebeccapurple;
  font-size: 18px;
  font-weight: 400;
}
.list-style {
  color: #a5a8ad;
  font-size: 18px;
  font-weight: 300;
}
</style>
