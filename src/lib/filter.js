import Vue from "vue"
import moment from 'moment'


Vue.filter('dateNormal', function (value) {
  return moment(value).format('DD MMM YYYY')
})
