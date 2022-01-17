<template>
    <div class="container racines">
        <div class="row intro-row">
            <div class="column col-1"><span class="fix"></span></div>
            <div class="column col-4">
                <div class="img-block _2x3">
                    <img src="../assets/images/racines-cover.png" alt="">
                </div>
            </div>
            <div class="column col-1"><span class="fix"></span></div>
            <div class="column col-6">
                <div class="infos-content">
                    <p>
                        Découvrir le lâcher, l’exaltation corporelle, le désir d’être soi-même en transe, en rien, dans le vide de l’espace. 
                        Je vous propose un atelier avec 8 personnes maximum pour sentir votre corps, votre propre équilibre, là où vous en êtes, ainsi travailler le rapport à vous même et les autres. Comment je me mets à rencontrer l’autre et moi-même? Sous quelles intentions je me laisse porter et guider par l’autre? 
                    </p>
                </div>
            </div>
        </div>
        <div class="row images-row">
            <div class="column col-2"><span class="fix"></span></div>
            <div class="column col-8">
                <div class="img-block _4x3">
                    <img src="../assets/images/racines1.png" alt="">
                </div>
                <div class="img-block _4x3">
                    <img src="../assets/images/racines2.png" alt="">
                </div>
                <div class="img-block _4x3">
                    <img src="../assets/images/racines3.png" alt="">
                </div>
                <div class="img-block _4x3">
                    <img src="../assets/images/racines4.png" alt="">
                </div>
                <div class="img-block _4x3">
                    <img src="../assets/images/racines5.png" alt="">
                </div>
                <div class="infos-content">
                    <p>
                        Découvrir le lâcher, l’exaltation corporelle, le désir d’être soi-même en transe, en rien, dans le vide de l’espace. 
                        Je vous propose un atelier avec 8 personnes maximum pour sentir votre corps, votre propre équilibre, là où vous en êtes, ainsi travailler le rapport à vous même et les autres. Comment je me mets à rencontrer l’autre et moi-même? Sous quelles intentions je me laisse porter et guider par l’autre? 
                    </p>
                </div>
            </div>
        </div>
        <footer-home :title="title"></footer-home>
    </div>
</template>

<script>
    import FooterHome from '../components/FooterHome.vue'
    export default {
        name: 'Racines',
        components: {
            'footer-home' : FooterHome
        }, 
        data(){
            return {
                title: 'Racines'
            }
        }
    }

</script>

<style>

</style>