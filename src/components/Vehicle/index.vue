<template>
  <i class="vehicle" v-if="vehicle != null">
    {{vehicle.name}}, 
  </i>
</template>

<script>

//Library
import api from '@/api'
import { apiV1 } from '@/api/urls'

export default {
  name: 'starwars-vehicle',
  components: {

  },
  props: {
    url: {
      required: false
    }
  },
  data() {
    return {
      vehicle: null
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
        const urlArray = this.url.split('/')

        const { data, status } = await api.get(apiV1.vehicle(urlArray[urlArray.length - 2]))
        if(status == 200) {
          this.vehicle = data

        }
      })();
    }
  }
}
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>