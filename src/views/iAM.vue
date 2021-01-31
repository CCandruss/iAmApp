<template>
  <v-container 
  fluid
  app
  >
    <v-card
    class="mx-auto"
    color=#263238
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
      
      </v-icon>
      <span class="title font-weight-light">Humans are Created by Habit</span>
    </v-card-title>

    <v-card-text 
    class="font-weight-light"
    
    >
      "We all have an ideal self. As can be seen the formation of character is essentially a combination of habits and attitudes. With habits and attitudes repeated, we can become our ideal selves"
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-btn
        color="#454242"
        elevation="2"
        small
        absolute
        right
        width="140"
        >Sign In</v-btn>
        <v-btn
        to="/create-profile"
        color="#454242"
        elevation="2"
        small
        absolute 
        left
        width="140"
        >Create Profile</v-btn>
      

      </v-list-item>
    </v-card-actions>
  </v-card>


    <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="150px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

           
          </v-card>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'My Profile', src: 'B-I.jpg', flex: 6  },
        { title: 'Goal Setting', src: 'Goals.jpg', flex: 6 },
        { title: 'Resources', src: 'scroll.jpg', flex: 6 },
        { title: 'Inspiration', src: 'inspiration.jpg', flex: 6 },
        { title: 'Teams', src: 'team.jpg', flex: 12 },
      ],
    }),
    
  }
</script>