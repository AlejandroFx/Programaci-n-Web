<template>
    <div>
        
        <TituloPrincipal texto="Peliculas"/>
        <button @click="consumirPeliculas()">Buscar Peliculas</button>

        <Tarjeta v-for="p in Peliculas" :key="p.id" :titulo="p.title" :id="p.id" />
    </div>
</template>


<script>
import TituloPrincipal from '../components/TituloPrincipal'
import Tarjeta from '../components/Tarjeta'
        export default {
            name: 'Peliculas',
            components: {
                TituloPrincipal
            },
            methods: {
                async consumirPeliculas(){
                    try{
                        const res= await fetch ('https://ghibliapi.herokuapp.com/films');
                        const data= await res.json();
                        console.log(data)
                        this.peliculas=data
                    }catch(error){
                        console.log(error);
                    }
                }

            },
            data(){
                return{
                    peliculas: []
                }
            },
            created() {
                this.consumirPeliculas();
            }
        }
    </script>