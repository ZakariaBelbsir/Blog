<template>
  <div class="container">
      <div class="row my-4">
          <div class="col-md-8 mx-auto mt-5">
              <div class="card">
                  <h2 class="card-header">{{ post.title }}</h2>
                  <p class="p-2">
                      <span class="badge badge-default">
                            {{ post.user }}
                        </span>
                        <span class="badge badge-info">
                            {{ post.created_at }}
                        </span>
                        <span class="badge badge-success">
                            {{ post.category }}
                        </span>
                  </p>
                  <div class="card-img-top">
                      <img :src="post.photo" class="rounded shadow-sm img-fluid mr-2" style="width:100%;height:400px" alt="Post image">
                  </div>
                  <div class="card-body">
                      <div class="media">
                          <div class="media-body">
                              <p class="lead">
                                  {{ post.body.substr(0,300) }}
                              </p>
                          </div>
                      </div>
                      <div class="row my-3">
                          <div class="col-md-12">
                              <div class="media-shadow my-4 p-4">
                                  <div class="media-body" v-if="logged">
                                      <h3 class="my-3 text-dark">Ajouter un commentaire</h3>
                                      <div class="form-group">
                                        <label for="comment">Commentaire</label>
                                        <textarea id="comment" class="form-control"
                                         cols="30" rows="3" v-model="comment"></textarea>
                                      </div>
                                      <button class="btn btn-primary" type="button" 
                                        @click="addComment(post.id)"
                                      >Valider</button>
                                  </div>
                                  <div class="media shadow" v-else>
                                      <div class="media-body">
                                          <router-link to="/login">Connectez vous pour commenter</router-link>
                                      </div>
                                  </div>
                              </div>
                              <h3 class="text-info mb-3">
                                  Commentaires <span class="badge badge-dark p-2">{{ post.comments_count }}</span>
                              </h3>
                              <div class="medya my-4 p-4 shadow"
                                v-for="(comment, index) in post.comments" :key="index"
                              >
                                <div class="media-body">
                                    <span class="text-danger">
                                        {{ comment.user }} | {{ comment.created_at }}
                                    </span>
                                    <p class="lead">
                                        {{ comment.body.substr(0,100) }}
                                    </p>
                                </div>
                              </div>
                          </div>
                      </div>
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
            post : null,
            comment: '',
            logged: User.isLoggedIn().logged
        }
    },
    created(){
        axios.get(`/api/posts/${this.$route.params.slug}`)
            .then(response => {
                console.log(response.data)
                this.post = response.data
            })
            .catch(err => console.log(err))
    },
    methods:{
        addComment(id){
            axios.post('/api/comments', {
                post_id: id,
                body: this.comment,
                user_id: User.isLoggedIn().id
            }).then(response => {
                this.post.comments_count++
                this.post.comments.unshift(response.data)
                this.comment = ''
            }).catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>