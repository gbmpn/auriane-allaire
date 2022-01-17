<template>
    <div class="container">
        <div class="row">
            <div class="column col-3">
                <span class="fix"></span>
            </div>
            <div class="column col-6">
                <div class="img-container">
                    <!-- <img v-for="(url, i) in urlImgs" :key="i" :src="url" alt=""> -->
                    <template v-if="uniqueArticle.banner_image">
                        <img :src="uniqueArticle.banner_image.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_1">
                        <img :src="uniqueArticle.image_1.url" alt="">
                    </template>

                     <template v-if="uniqueArticle.image_2">
                        <img :src="uniqueArticle.image_2.url" alt="">
                    </template>

                     <template v-if="uniqueArticle.image_3">
                        <img :src="uniqueArticle.image_3.url" alt="">
                    </template>

                     <template v-if="uniqueArticle.image_4">
                        <img :src="uniqueArticle.image_4.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_5">
                        <img :src="uniqueArticle.image_5.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_6">
                        <img :src="uniqueArticle.image_6.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_7">
                        <img :src="uniqueArticle.image_7.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_8">
                        <img :src="uniqueArticle.image_8.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_9">
                        <img :src="uniqueArticle.image_9.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_10">
                        <img :src="uniqueArticle.image_10.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_11">
                        <img :src="uniqueArticle.image_11.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_12">
                        <img :src="uniqueArticle.image_12.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_13">
                        <img :src="uniqueArticle.image_13.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_14">
                        <img :src="uniqueArticle.image_14.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_15">
                        <img :src="uniqueArticle.image_15.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_16">
                        <img :src="uniqueArticle.image_16.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_17">
                        <img :src="uniqueArticle.image_17.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_18">
                        <img :src="uniqueArticle.image_18.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_19">
                        <img :src="uniqueArticle.image_19.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_20">
                        <img :src="uniqueArticle.image_20.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_21">
                        <img :src="uniqueArticle.image_21.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_22">
                        <img :src="uniqueArticle.image_22.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_23">
                        <img :src="uniqueArticle.image_23.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_24">
                        <img :src="uniqueArticle.image_24.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_25">
                        <img :src="uniqueArticle.image_25.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_26">
                        <img :src="uniqueArticle.image_26.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_27">
                        <img :src="uniqueArticle.image_27.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_28">
                        <img :src="uniqueArticle.image_28.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_29">
                        <img :src="uniqueArticle.image_29.url" alt="">
                    </template>

                    <template v-if="uniqueArticle.image_30">
                        <img :src="uniqueArticle.image_30.url" alt="">
                    </template>
 
                </div>
            </div>
            <div class="column col-3">
                <div class="fixed">
                    <header class="entry-header">
                        <p class="index">{{ $prismic.richTextAsPlain(uniqueArticle.number) }}</p>
                        <span class="date">{{  uniqueArticle.date }}</span>
                    </header>
                    <div class="entry-content">
                        <h2 class="title">{{ $prismic.richTextAsPlain(uniqueArticle.title) }}</h2>
                        <p class="desc">{{ $prismic.richTextAsPlain(uniqueArticle.description) }}</p>
                        <router-link :to="`/projects/`">
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
                title: "Series",
                uid: this.$route.params.uid,
                dateOptions: { year: 'numeric', month: 'short', day: '2-digit' },
                urlImgs: [
                    require('../assets/images/detail-1.png'),
                    require('../assets/images/detail-2.png'),
                    require('../assets/images/detail-3.png'),
                    require('../assets/images/detail-4.png'),
                ],
                uniqueArticle: []
            }
        }, 
        methods: {

            getContent (uid) {
                this.$prismic.client.getByUID('serie', uid).then(response => {
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