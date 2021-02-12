// CHIAVE API ado
// 59974366f70c9bc6b02a5ff65f4411d9
// ESEMPIO DI CHIAMATA
// https://api.themoviedb.org/3/movie/550?api_key=59974366f70c9bc6b02a5ff65f4411d9

// per 'costruire' la locandina esempio
// https://image.tmdb.org/t/p    /w342/   wwemzKWzjKYJFfCeiB57q3r4Bcm.png
// chiamata axios per il cast
// https://api.themoviedb.org/3/movie/250845/credits?api_key=59974366f70c9bc6b02a5ff65f4411d9

var app = new Vue({
    el: '#root',
    data: {
        risultati: [],
        ricerca: '',
        lingue:['it' , 'en'],
        attori:[],

    },
    methods: {
      // con una funzione richiamo film e dopo serie tv con lo stesso procedimento, ovviamente cambierà la seconda parte una volta è serch movie e una volta è serach tv
      cerca:function(){

        const self = this;
        self.risultati=[];
        self.attori=[];
        self.cercafilm();
        self.cercaTelefilm();
        self.cercaAttori();

      },
      // chiamata axios per i film

      cercafilm:function(){
        const self = this;

        axios.get('https://api.themoviedb.org/3/search/movie?api_key=59974366f70c9bc6b02a5ff65f4411d9&query=' + self.ricerca)
          .then((risposta) => {
            self.risultati = risposta.data.results;
            self.risultati = [...self.risultati, ...risposta.data.results];
          });

       },
       // chiamata axios per i telefilm

       cercaTelefilm:function(){
         const self = this;

        axios.get('https://api.themoviedb.org/3/search/tv?api_key=59974366f70c9bc6b02a5ff65f4411d9&query=' + self.ricerca)
          .then((risposta) =>{
            self.risultati = risposta.data.results;
            self.risultati = [...self.risultati, ...risposta.data.results];

          });
        },

        // chiamata axios per vedere gli attori

        cercaAttori:function(){
          const self = this;
          self.risultati.forEach((element) => {
          axios.get ('https://api.themoviedb.org/3/movie/'+ element.id + '/credits?api_key=59974366f70c9bc6b02a5ff65f4411d9')
           .then((risposta) =>{

             self.attori = risposta.data.cast;
              console.log(self.attori);



           })




        });
       },

        // ('https://api.themoviedb.org/3/movie/'+ element.id + '/credits?api_key=59974366f70c9bc6b02a5ff65f4411d9')




      // funzione per la locandina

      // locandina:function(poster){
      //   return 'https://image.tmdb.org/t/p' + '/w342/' + poster
      // },

        locandina:function(poster) {
          if(poster) {
            return 'https://image.tmdb.org/t/p' + '/w342/' + poster
          }else {
            return  'img/default.jpg'
          }
        },

      // funzione per portare i 10 voti a cinque

      stelle:function(voto){
        return Math.ceil(voto / 2);
      }

// fine methods
    }
});

Vue.config.devtools = true




// per gestire le bandiere ?
// ragionamento giusto ma per la struttura del codice è errato
// cosi andiamo a sovrascivere un dato che di per se non deve essere toccato ma solo gestito e soprattutto non è atomico


// self.risultati.forEach((element) => {
//   if (self.original_language === 'it') {
//     self.original_language === 'img/it.png'
//   }
//   if (self.original_language === 'en') {
//     self.original_language === 'img/eg.svg'
//   }
// });
