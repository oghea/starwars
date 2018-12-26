<template>
  <div class="home">
    <div class="home__title">
      <img src="/img/logo/logo-white.png" alt="">
    </div>
    <div class="home__movie">
      <starwars-card-movie :movies='movie' />
    </div>
  </div>
</template>

<script>
import CardMovie from '@/components/CardMovie'


//Library
import api from '@/api'
import { apiV1 } from '@/api/urls'

export default {
  name: 'starwars-home',
  components: {
    'starwars-card-movie': CardMovie
  },
  props: {

  },
  data() {
    return {
      movie: []
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
        const { data, status } = await api.get(apiV1.movie)
        console.log(data)
        if(status == 200) {
          const final = data.results.sort((a, b) => parseFloat(a.episode_id) - parseFloat(b.episode_id));
          this.movie = final
        }
      })();
    }
  }
}
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>