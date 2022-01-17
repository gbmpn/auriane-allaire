<template>
    <div class="row row-footer">
            <footer>
                <div class="row">
                    <div class="column col-6 align-left">
                        <h1>{{ title }}</h1>
                    </div>
                    <div class="column col-6 align-right">
                        <div class="contact">
                            <span>Multidiscplinary Artist</span>
                            <a href="tel:075551994">+33(0) 758 551 994</a>
                            <a href="mailto:contact@aurianeallaire.com">contact@aurianeallaire.com</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
</template>

<script>
    export default {
        name: 'FooterHome',
        props: ['title']
    }
</script>

<style> 
</style>