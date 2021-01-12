import Vue from 'vue';

document.addEventListener('DOMContentLoaded', function () {
new Vue({
  el: '#app',
  data: {
    countries: []
  },
  mounted: function () {
    this.fetchCountries();

  },
  methods: {
    fetchCountries: function (){
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then( data => this.countries = data );
    }
  },
})
});