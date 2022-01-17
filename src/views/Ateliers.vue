<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="column col-4">
                    <span class="fix"></span>
                </div>
                <div class="column col-8">
                    
                    <atelier-entry v-for="(entry, i) in allArticles" :key="i" 
                        :title="entry.data.title[0].text"
                        :urlImg="entry.data.banner_img.url"
                        :url="entry.uid"
                    ></atelier-entry>
                    
                </div>
            </div>
            <footer-home :title="title"></footer-home>
        </div>
    </div>
</template>

<script>
    import AtelierEntry from '../components/AtelierEntry.vue'
    import FooterHome from '../components/FooterHome.vue'

    //import axios from 'axios'

    export default {
        name: 'Projects', 
        components: {
            'footer-home': FooterHome,
            'atelier-entry': AtelierEntry
        }, 
        data(){
            return {
                title: 'Ateliers',
                allArticles:[]
            }
        }, 
        methods: {
            async getContent() {
                this.response = await this.$prismic.client.query([
                    this.$prismic.Predicates.at('document.type', 'atelier'),
                ])
                for(const post of this.response.results){
                    console.log(post)
                    this.allArticles.push(post)
                }
            }
        },
        created() {
            this.getContent()
        }
    }

</script>

<style>

</style>