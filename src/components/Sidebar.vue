<template>
  <div>
     <v-navigation-drawer
          v-model="drawer"
          :color="color"
          :expand-on-hover="expandOnHover"
          :mini-variant="miniVariant"
          :right="right"
          :permanent="permanent"
          
          absolute
          dark
        >
          <v-list
            dense
            nav
            class="py-0"
          >
            <!-- <v-list-item two-line :class="miniVariant && 'px-0'"> -->
              <!-- <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/men/81.jpg">
              </v-list-item-avatar> -->
  
               
            <!-- </v-list-item> -->
        <v-list-item-content>
                <v-list-item-title>Main</v-list-item-title>
              </v-list-item-content>
            <v-divider></v-divider>
  
            <v-list-item
              v-for="item in itemsMain"
              :key="item.title"
              :to="item.link"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          
        <v-list-item-content>
                <v-list-item-title>Weekly Reports</v-list-item-title>
              </v-list-item-content>
            <v-divider></v-divider>
  
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.link"
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
       

  </div>
</template>

<script>
export default {
    data () {
    return {
      drawer: true,
      itemsMain: [
        { title: 'Home', icon: 'mdi-view-dashboard', link: "/"},
        { title: 'Register', icon: 'mdi-view-dashboard', link: "/register"},
        { title: 'Login', icon: 'mdi-view-dashboard', link: "/login"},
      ],
      items: [
        { title: 'Week 1', icon: 'mdi-view-dashboard', link: "/reports/week/1"},
        { title: 'Week 2', icon: 'mdi-image', link: "/reports/week/2" },
        { title: 'Week 3', icon: 'mdi-help-box', link: "/reports/week/3"},
        { title: 'Week 4', icon: 'mdi-help-box', link: "/reports/week/4"},
      ],
      color: 's',
      colors: [
        'primary',
        'blue',
        'success',
        'red',
        'teal',
      ],
      right: false,
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
      background: false,
    }
  },
}
</script>
<style scoped>
.main-containter {
    margin-left: 250px;
    padding: 20px;
}
</style>

