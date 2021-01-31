<template>
  <div
  class="blue-grey darken-2"
  >
    <v-img
      height="170"
      src="iAm.jpg"
    ></v-img>
    <div
      class="pa-6"
      rounded
    >  
      <v-form
        class="white"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="20"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="name"
          label="Username"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-textarea
            outlined
            auto-grow
            name="input-7-4"
            label="Bio"
            placeholder="Tell your story. Who are you? How did you get there? Where are you going?"
          ></v-textarea>

          <v-textarea
            outlined
            auto-grow
            name="input-7-4"
            label="My Reason"
            placeholder="Why do you want to grow?"
          ></v-textarea>


        <!-- <v-col
          class="d-flex"
          cols="12"
          sm="6"
        >
          <v-select
            :items="items"
            label="Outlined style"
            outlined
          ></v-select>
        </v-col> -->


        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Submit
        </v-btn>
      </v-form>
     </div> 
  </div>  
</template>

<script>
  export default {
    data: () => ({
      allowSpaces: false,
      match: 'Foobar',
      max: 0,
      model: 'Foobar',
    }),

    computed: {
      rules () {
        const rules = []

        if (this.max) {
          const rule =
            v => (v || '').length <= this.max ||
              `A maximum of ${this.max} characters is allowed`

          rules.push(rule)
        }

        if (!this.allowSpaces) {
          const rule =
            v => (v || '').indexOf(' ') < 0 ||
              'No spaces are allowed'

          rules.push(rule)
        }

        if (this.match) {
          const rule =
            v => (!!v && v) === this.match ||
              'Values do not match'

          rules.push(rule)
        }

        return rules
      },
    },

    watch: {
      match: 'validateField',
      max: 'validateField',
      model: 'validateField',
    },

    methods: {
      validateField () {
        this.$refs.form.validate()
      },
    }
  }
</script>

// <script>
//   export default {
//     data: () => ({
//       items: [
//         'Physical Growth',
//         'Skill Acquisition',
//         'Mental Relaxation',
//         'Social Growth',
//         'Business Growth',
//         'Habit Breaking'
//         ],
//     }),
//   }
// </script>

<script>
  export default {
    data: () => ({
      interests: [
        'Fitness',
        'Pscychology',
        'Meditation',
        'Yoga',
        'Business and Finance',
        'Tech'
        ],
    }),
  }
</script>