<template>
    <div class="container">
        <div class="row">
            <div class="column col-4">
                <span class="fix"></span>
            </div>
            <div class="column col-8">
                <div class="atelier-entry">
                    <div class="img-block _16x9">
                        <img src="../assets/images/atelier-1.jpg" alt="">
                    </div>
                    <div class="header">
                        <h2>{{ $prismic.richTextAsPlain(uniqueArticle.title) }}</h2>
                        <span class="number">{{ $prismic.richTextAsPlain(uniqueArticle.number) }}</span>
                    </div>
                    <div class="atelier-content">
                        <p class="description">
                            {{ $prismic.richTextAsPlain(uniqueArticle.description) }}
                        </p>
                        <p class="infos">
                            {{ $prismic.richTextAsPlain(uniqueArticle.lieu) }} <br> 
                            {{ $prismic.richTextAsPlain(uniqueArticle.tarif) }} <br> 
                            {{ $prismic.richTextAsPlain(uniqueArticle.duree) }}
                        </p>
                        <router-link :to="`/ateliers/`">
                            <span>Retour</span>
                            <svg viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 6C19.5 7.41222 18.5434 8.77617 16.8138 9.81389C15.0942 10.8456 12.6864 11.5 10 11.5C7.31362 11.5 4.90576 10.8456 3.18618 9.81389C1.45665 8.77617 0.5 7.41222 0.5 6C0.5 4.58778 1.45665 3.22383 3.18618 2.18611C4.90576 1.15436 7.31362 0.5 10 0.5C12.6864 0.5 15.0942 1.15436 16.8138 2.18611C18.5434 3.22383 19.5 4.58778 19.5 6Z" stroke="black"/>
                                <circle cx="10" cy="6" r="3" fill="black"/>
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>

        </div>
        <footer-home :title="title"></footer-home>
    </div>
</template>

<script>
    import FooterHome from '../components/FooterHome.vue'

    export default {
        name: 'Detail',
        components: {
            'footer-home': FooterHome
        }, 
        data(){
            return{
                title: "Ateliers",
                uid: this.$route.params.uid,
                uniqueArticle: []
            }
        }, 
        methods: {

            getContent (uid) {
                this.$prismic.client.getByUID('atelier', uid).then(response => {
                    console.log(response.data)
                    this.uniqueArticle = response.data
                })
                
            }
        },
        created() {
            this.getContent(this.$route.params.uid)
        }
    }

</script>

<style>

</style>