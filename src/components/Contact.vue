<template>
  <div class="about pa-4">
    <v-card  elevation="0" min-height="700" >
      <v-card-text class="pa-6 about">
          <v-row class="justify-center">
              <v-form ref="form"
    v-model="valid"
    lazy-validation
              style="width:500px">
    <v-text-field
      v-model="name"
      :counter="20"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      class="mr-4"
      :disabled="!valid"
      @click="submit"
      color="primary"
    >
      submit
    </v-btn>
    <v-btn text @click="reset">
      clear
    </v-btn>
  </v-form>
          </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'contact',
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Student',
        'Contributor',
        'Client'
      ],
      checkbox: false
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
<style scoped>
.about {
    font-size: 20px;
    font-family: monospace;
    color: darkmagenta !important;
    line-height: 43px;
}
</style>
