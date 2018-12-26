<template>
  <div class="film">
    <div v-if="movie != null">
      <h1 class="xlarge-title film__title">{{movie.title}}</h1>
      <p class="film__opening">{{movie.opening_crawl}}</p>

      <div class="film_description">
        <h4 class="film_description__title">Director</h4>
        <p class="film_description__director">{{movie.director}}</p>
      </div>

      <div class="film_description">
        <h4 class="film_description__title">Producer</h4>
        <p class="film_description__producer">{{movie.producer}}</p>
      </div>

      <div class="film_description">
        <h4 class="film_description__title">Episode</h4>
        <p class="film_description__episode">{{movie.episode_id}}</p>
      </div>

      <div class="film_description">
        <h4 class="film_description__title">Release</h4>
        <p class="film_description__release">{{movie.release_date}}</p>
      </div>
      
      <div class="film_description">
        <h4 class="film_description__title">Release</h4>
        <p class="film_description__release">{{movie.release_date}}</p>
      </div>

      <div class="film_description">
        <h4 class="film_description__title">Characters</h4>
        <p class="film_description__people">
          <starwars-character v-for="(character, index) in movie.characters" :key="index" :url="character" />
        </p>
      </div>

      <div class="film_description">
        <h4 class="film_description__title">Planets</h4>
        <p class="film_description__planet">
          <starwars-planet v-for="(planet, index) in movie.planets" :key="index" :url="planet" />
        </p>
      </div>

      <div class="film_description">
        <h4 class="film_description__title">Species</h4>
        <p class="film_description__species">
          <starwars-species v-for="(species, index) in movie.species" :key="index" :url="species" />
        </p>
      </div>

      <div class="film_description">
        <h4 class="film_description__title">Vehicle</h4>
        <p class="film_description__species">
          <starwars-vehicle v-for="(vehicle, index) in movie.vehicles" :key="index" :url="vehicle" />
        </p>
      </div>

    </div>
    <div v-else class="loading">Loading...</div>
  </div>
</template>

<script>
import Character from '@/components/Character'
import Planet from '@/components/Planet'
import Species from '@/components/Species'
import Vehicle from '@/components/Vehicle'


//Library
import api from '@/api'
import { apiV1 } from '@/api/urls'

export default {
  name: 'starwars-film',
  components: {
    'starwars-character': Character,
    'starwars-planet': Planet,
    'starwars-species': Species,
    'starwars-vehicle': Vehicle,
  },
  props: {

  },
  data() {
    return {
      movie: null
    }
  },
  computed: {

  },
  watch: {

  },
  beforeCreate() {

  },
  created() {

  },
  beforeMount() {

  },
  mounted() {
    this.loadData()
  },
  beforeUpdate() {

  },
  updated() {

  },
  activated() {

  },
  deactivated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },
  methods: {
    loadData() {
      (async () => {
        const { data, status } = await api.get(apiV1.movies(this.$route.params.id))
        console.log(data)
        if(status == 200) {
          this.movie = data

        }
      })();
    }
  }
}
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>