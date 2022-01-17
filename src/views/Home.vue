<template>
    <div class="container">
        <div class="row">
            <div class="column col-3">
                <div class="img-block _2x3">
                    <img src="../assets/images/home-1.png" alt="">
                </div>
            </div>
            <div class="column col-3">
                <span class="fix"></span>
            </div>
            <div class="column col-6">
                <div class="img-block _1xh">
                    <img src="../assets/images/home-2.png" alt="">
                </div>
            </div>
        </div>

        <footer-home :title="title"></footer-home>
        
    </div>
</template>

<script>
    import FooterHome from '../components/FooterHome.vue'

    export default {
        name: 'Home',
        components: {
            'footer-home' : FooterHome
        }, 
        data(){
            return {
                title: 'Auriane Allaire'
            }
        }
    }

</script>

<style>

</style>