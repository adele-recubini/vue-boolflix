// CHIAVE API
//
// 59974366f70c9bc6b02a5ff65f4411d9
//
// ESEMPIO DI CHIAMATA
// https://api.themoviedb.org/3/movie/550?api_key=59974366f70c9bc6b02a5ff65f4411d9

var app = new Vue({
    el: '#root',
    data: {
        risultati: [],
        ricerca: '',

    },
    methods: {
      // con una funzione richiamo film e dopo serie tv con lo stesso procedimento, ovviamente cambierà la seconda parte una volta è serch movie e una volta è serach tv
      cerca:function(){
        const self = this;
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=59974366f70c9bc6b02a5ff65f4411d9&query=' + self.ricerca)
          .then((risposta) => {
            self.risultati = risposta.data.results
          });

          // serie tv
      
        axios.get('https://api.themoviedb.org/3/search/tv?api_key=59974366f70c9bc6b02a5ff65f4411d9&query=' + self.ricerca)
          .then((risposta) =>{
            self.risultati = risposta.data.results

          });

      }


// fine methods
    }
});

Vue.config.devtools = true
