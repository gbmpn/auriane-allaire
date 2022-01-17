<template>
    <div class="entry">
        <div class="row">
            <div class="column col-6">
                <div class="img-block _2x3">
                    <img :src="urlImg" alt="">
                </div>
            </div>
            <div class="column col-6">
                <div class="_2x3">
                    <header class="entry-header">
                        <p class="index">0{{ index + 1}}</p>
                        <span class="date">{{ date }}</span>
                    </header>
                    <div class="entry-content">
                        <h2 class="title">{{ title }}</h2>
                        <p class="desc">{{ desc }}</p>
                        <router-link :to="`/project/${ url }`">
                            <span>Voir plus</span>
                            <svg viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 6C19.5 7.41222 18.5434 8.77617 16.8138 9.81389C15.0942 10.8456 12.6864 11.5 10 11.5C7.31362 11.5 4.90576 10.8456 3.18618 9.81389C1.45665 8.77617 0.5 7.41222 0.5 6C0.5 4.58778 1.45665 3.22383 3.18618 2.18611C4.90576 1.15436 7.31362 0.5 10 0.5C12.6864 0.5 15.0942 1.15436 16.8138 2.18611C18.5434 3.22383 19.5 4.58778 19.5 6Z" stroke="black"/>
                                <circle cx="10" cy="6" r="3" fill="black"/>
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Entry',
        props: ['entries', 'title', 'urlImg', 'desc', 'date', 'url', 'index'],
        data(){
            return {
                dateOptions: { year: 'numeric', month: 'short', day: '2-digit' },
            }
        }
    }
</script>

<style>
</style>