<template>
  <div class="container">
      <div class="col-md-6 mx-auto py-2">
          <div class="card mt-5">
              <div class="card-header">
                  Inscription
              </div>
              <div class="card-body">
                  <div class="form-group">
                      <input type="text" placeholder="Nom & Prénom"
                        v-model="name"
                        class="form-control"
                      >
                  </div>
                  <div class="form-group">
                      <input type="email" placeholder="Email"
                        v-model="email"
                        class="form-control"
                      >
                  </div>
                  <div class="form-group">
                      <input type="password" placeholder="Mot de passe"
                        v-model="password"
                        class="form-control"
                      >
                  </div>
                  <div class="form-group">
                      <button class="btn btn-primary" @click="register">Valider</button>
                  </div> 
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name:'',
            email: '',
            password: ''
        }
    },
    created(){
        if(User.isLoggedIn()){
            this.$router.push({name: 'home'});
        }
    },
    methods: {
        register(){
            axios.post('/api/users/register', {
                name: this.name,
                email: this.email,
                password: this.password
            }).then(response => {
                User.storeUser(JSON.stringify((response.data)))
                // this.$router.push('/')
                this.$router.go()
            }).catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>