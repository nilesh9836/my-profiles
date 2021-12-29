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
      <v-btn
        text
        color="teal accent-4"
        @click="redirectToAboutPage()"
      >
        Hire Me

      </v-btn>
      <v-icon color="teal accent-4" small @click="redirectToAboutPage()">mdi-arrow-right</v-icon>
      <v-spacer></v-spacer>
      <v-row class="pl-9 ml-9">
      <v-icon>mdi-twitter</v-icon>
      <v-icon class="px-2">mdi-facebook</v-icon>
      <v-icon>mdi-instagram</v-icon>
      <v-icon class="pl-2">mdi-github</v-icon>
      <v-icon class="pl-2">mdi-linkedin</v-icon>
    </v-row>
    </v-card-actions>
  </v-card>
      </v-col>
      <v-col>
      <v-card elevation="0" outlined>
      <img
      src="img/icons/nilesh-logo.jpg"
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
