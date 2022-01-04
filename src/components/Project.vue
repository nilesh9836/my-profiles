<template>
  <div class="about pa-4">
    <v-card outlined elevation="0" min-height="700" >
      <v-card-text class="pa-6 about">
     <div>Some of my open project on github </div>
          <a :href="`https://vue-json-formatter.netlify.app`" style="color: #FFFFFF;
    text-decoration: none;">
      <li style="color: blue;">json-formatter</li>
      </a>
      </v-card-text>
    </v-card>
  </div>
</template>
<style scoped>
.about {
    font-size: 20px;
    font-family: monospace;
    color: darkmagenta !important;
    line-height: 43px;
}
</style>
