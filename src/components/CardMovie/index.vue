<template>
  <div class="cardMovie">
    <slick
      ref="slick"
      :options="slickOptions"
      >
      <div class="card" v-for="(movie, index) in movies" :key="index">
        <a @click="gotoFilm(movie)" class="card__wrapper">
          <h1 class="xlarge-title episode">{{movie.episode_id}}</h1>
          <h1 class="large-title title">{{movie.title}}</h1>
          <p class="subhead description">{{movie.release_date | dateNormal}}</p>
        </a>
      </div>
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick';

//Library


export default {
  name: 'starwars-card-movie',
  components: {
    Slick
  },
  props: {
    movies: {
      required: true
    }
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        infinite: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
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

  },
  beforeUpdate() {
    if (this.$refs.slick) {
        this.$refs.slick.destroy();
    }
  },
  updated() {
    if (this.$refs.slick && !this.$refs.slick.$el.classList.contains('slick-initialized')) {
        this.$refs.slick.create();
    }
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
    gotoFilm(movie) {
      const url = movie.url
      const urlArray = url.split('/')

      // console.log(urlArray[urlArray.length - 2])
      this.$router.push({ name: 'film', params: { id: urlArray[urlArray.length - 2] } })
    }
  }
}
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>