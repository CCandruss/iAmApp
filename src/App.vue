<template>
  <div>
    <v-app id="inspire"
    row wrap align-left
    dark
    >
      <v-navigation-drawer
        v-model="drawer"
        app 
        dark
    >

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Life Design
            </v-list-item-title>
            <v-list-item-subtitle>
              Create Not Consume
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        shrink-on-scroll
        src="iAmApp.jpg"
        contain
        dark
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
        app
        class=".rounded-xl"
    >
        <template v-slot:img="{ props }">
          <v-img
          v-bind="props"
          height="125"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </v-app-bar>

      <v-main
      class="blue-grey darken-4">
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null, 
       items: [
          { title: 'Dashboard', icon: 'mdi-home-edit', to: '/' },
          { title: 'Photos', icon: 'mdi-image-edit', to: '/photos'},
          { title: 'About', icon: 'mdi-alien', to: '/about'},
        ],
      }),
  }

</script>
