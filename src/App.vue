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
          <v-btn v-on="on">
            <v-icon >mdi-home</v-icon>
          </v-btn>

        </template>
        <span>Home</span>
      </v-tooltip>
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
          <v-btn v-on="on">
            <v-icon >mdi-account</v-icon>
          </v-btn>

        </template>
        <span>About</span>
      </v-tooltip>
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
          <v-btn v-on="on">
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
  })
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
