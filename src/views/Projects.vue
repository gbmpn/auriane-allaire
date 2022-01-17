<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="column col-4">
                    <span class="fix"></span>
                </div>
                <div class="column col-8">
                    
                    <project-entry v-for="(entry, i) in allArticles" 
                        :title="entry.data.title[0].text" 
                        :urlImg="entry.data.banner_image.url"
                        :desc="entry.data.description[0].text"
                        :date="entry.data.date"
                        :url="entry.uid"
                        :key="i" 
                        :index="i"
                        ></project-entry>

                    
                </div>
            </div>
            <footer-home :title="title"></footer-home>
        </div>
    </div>
</template>

<script>
    import ProjectEntry from '../components/ProjectEntry.vue'
    import FooterHome from '../components/FooterHome.vue'

    //import axios from 'axios'

    export default {
        name: 'Projects', 
        components: {
            'footer-home': FooterHome,
            'project-entry': ProjectEntry
        }, 
        data(){
            return {
                title: 'Series' ,
                response: null,
                allArticles:[]
            }
        }, 
        methods: {
            async getContent() {
                this.response = await this.$prismic.client.query([
                    this.$prismic.Predicates.at('document.type', 'serie'),
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