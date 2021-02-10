// CHIAVE API ado
// 59974366f70c9bc6b02a5ff65f4411d9
// ESEMPIO DI CHIAMATA
// https://api.themoviedb.org/3/movie/550?api_key=59974366f70c9bc6b02a5ff65f4411d9

// per 'costruire' la locandina esempio
// https://image.tmdb.org/t/p    /w342/   wwemzKWzjKYJFfCeiB57q3r4Bcm.png

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

      },

      // funzione che mi genera la locandina


      locandina:function(poster_path){
        return 'https://image.tmdb.org/t/p' + '/w342/' + poster_path
      },

      // funzione per la generazione delle stelline

      // stelle:function(voto){
      //   return Math.ceil(voto/2)
      // }





// fine methods
    }
});

Vue.config.devtools = true
