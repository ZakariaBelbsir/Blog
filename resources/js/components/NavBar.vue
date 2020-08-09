<template>
  <div class="mb-4">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <router-link class="navbar-brand" :to="home">Blog</router-link>
          <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation"></button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <router-link class="navbar-brand" :to="home">Acceuil</router-link>
              </li>
              <li class="nav-item" v-if="!logged">
                <router-link class="nav-link" :to="register">Inscription</router-link>
              </li>
              <li class="nav-item" v-if="!logged">
                <router-link class="nav-link" :to="login">Connexion</router-link>
              </li>
              <li class="nav-item" v-if="logged">
                <a class="nav-link" @click="userLogout" style="cursor: pointer;">
                  <span class="font-weight-bold">{{ name.toUpperCase() }}</span> 
                  Déconnexion
                </a>
              </li>
            </ul>
          </div>
        </nav>
  </div>
</template>

<script>
export default {
    data(){
        return {
            home: '/',
            login: '/login',
            logout: '/logout',
            register: '/register',
            logged: User.isLoggedIn().logged,
            name: User.isLoggedIn().name
        }
    },
    methods: {
      userLogout(){
        User.logout()
        this.logged = false
        this.$router.go()
      }
    }
}
</script>

<style>

</style>