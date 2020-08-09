<template>
    <div class="col-md-4">
        <div class="card mt-5">
            <h2 class="card-header">Catégories</h2>
            <div class="card-body">
                <ul class="list-group" 
                    v-for="(category, index) in categories"
                    :key="index">
                    <li class="list-item">
                        <router-link :to="{name: 'PostCategory', params: {slug: category.slug}}">
                          {{ category.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            categories: []
        }
    },
    created(){
        axios.get('/api/categories')
            .then(response => this.categories = response.data.categories)
            .catch(err => console.log(err))
    }
}
</script>

<style>

</style>