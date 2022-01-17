<template>
    <div class="container">
        <div class="row">
            <div class="column col-8">
                <div class="infos-content">
                    <p>
                        Auriane Allaire (Hoài thu), artiste multi-disciplinaire de 25 ans, est née au Viêtnam. Adoptée par des parents français, elle grandit dans la ville du Mans. Après sa première année de master d’Arts Plastiques à l’Université de Rennes, elle entame plus tard de nombreuses expériences associatives dans l’organisation d’événements culturels. Cherchant toujours à dépasser les limites de la photographie, Auriane associe très rapidement son support de prédilection au dessin, à la danse, et plus récemment, au récit d’un voyage vers la quête de son identité..
                        <br><br>
                        Mary Recordon, Actrice dans le marché de l'art <br><br>


                        Expositions individuelle : <br>
                        Café Folk, Le Mans, 2019 <br>
                        Médiathèque La Passerelle, Connerré, 2018 <br>
                        Station Cité, Le Mans, 2018 <br>
                        CRIDEV, Rennes, 2018 <br>
                        Association Oasis KarmÔnie, Le Mans, 2018 <br>
                        CRIJ, Orléans, 2013 <br>
                        Service jeunesse, Le Mans 2012 <br><br>

                        Exposition collective : <br>
                        Le Roch’Lab, Rochefort-sur-Loire, 2018 <br>
                        Basse Tension, Parigné le Polin, 2018 <br>
                        Salle ACSAS, Comte du Maine, 2018 <br>
                        Ouverture des portes, Université Rennes 2, 2016 <br>
                        Exposition collective, Les Photographiques, Le Mans, 2013 <br>
                        Phot’Expo, Asnière sur Vègre, 2013 <br>
                        Les Photographiques, Off, 2012 <br><br>

                        Interviews orale : <br>
                        Radio Alpa, 2018 <br>
                        LMTV Sarthe, 2018 <br>
                        Sweet Fm, 2018 <br>
                        Radio Fréquence Fillé, 2018 <br>
                        Zone Reine, Association Raptors, 2017 <br>
                        Radio C-Lab, Rennes, 2016 <br><br>

                        Articles de journaux : <br>
                        Exposition Médiathèque Connerré, Le Maine Libre, 2018<br>
                        Viêt-Nam, Le Maine Libre, 2018<br>
                        Ouest-France, 2018<br>
                        Ouest-France, 2014<br>
                        Ouest-France, 2013

                    </p>
                    <nav>
                    <router-link :to="`/projects/`">
                        <span>Projets</span>
                            <svg viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 6C19.5 7.41222 18.5434 8.77617 16.8138 9.81389C15.0942 10.8456 12.6864 11.5 10 11.5C7.31362 11.5 4.90576 10.8456 3.18618 9.81389C1.45665 8.77617 0.5 7.41222 0.5 6C0.5 4.58778 1.45665 3.22383 3.18618 2.18611C4.90576 1.15436 7.31362 0.5 10 0.5C12.6864 0.5 15.0942 1.15436 16.8138 2.18611C18.5434 3.22383 19.5 4.58778 19.5 6Z" stroke="black"/>
                                <circle cx="10" cy="6" r="3" fill="black"/>
                            </svg>
                    </router-link>
                    <a href="mailto:" target="_blank">Contact</a>
                    </nav>
                </div>
            </div>
            
            <div class="column col-4 _fixed">
                <div class="img-block">
                    <img src="../assets/images/about-1.png" alt="">
                </div>
            </div>
        </div>
        <footer-home :title="title"></footer-home>
    </div>
</template>

<script>
    import FooterHome from '../components/FooterHome.vue'
    export default {
        name: 'Infos',
        components: {
            'footer-home' : FooterHome
        }, 
        data(){
            return {
                title: 'Infos'
            }
        }
    }

</script>

<style>

</style>