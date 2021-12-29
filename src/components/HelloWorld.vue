<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-row no-gutters class="pa-0 ma-0">
      <v-col>
      <v-card
    class="mx-auto"
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
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Origin
          </p>
          <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
      </v-col>
      <v-col>
      <v-card>
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
      console.log('hi')
    }
  }
}
</script>
