<template>
    <div class="container">
        <div class="row my-4 ">
            <Categories />
            <div class="col-md-8 mt-5">
                <div class="card">
                    <div class="card-header">Articles</div>
                    <div class="card-body" v-for="(post, index) in posts" :key="index">
                        <div class="media">
                            <img :src="post.photo" class="rounded shadow-sm img-fluid mr-2" alt="Post image">
                            <div class="media-body">
                                <router-link :to="post.path">
                                    <h3>{{ post.title }}</h3>
                                </router-link>
                                <p>
                                    <span class="text-default">
                                        {{ post.user.name }}
                                    </span>
                                    <span class="text-primary">
                                        {{ post.added }}
                                    </span>
                                </p>
                                <p class="lead">{{ post.body.substr(0,200) }} ...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Categories from './Categories'
    export default {
        components: {
            Categories
        },
        data(){
            return {
                posts: []
            }
        },
        created(){
            this.getPosts()
        },
        methods: {
            getPosts(){
                axios.get('/api/posts/category/' + this.$route.params.slug)
                .then(response => {
                    console.log(response.data)
                    this.posts = response.data
                })
                .catch(error => console.log(error))
            }
        },
        watch:{
            '$route': 'getPosts'
        }
    }
</script>
