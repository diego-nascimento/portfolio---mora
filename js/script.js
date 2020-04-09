if(window.SimpleAnime){
  console.log(`teste`)
  new SimpleAnime()
}

if(window.SimpleSlide) {
    new SimpleSlide({
      slide: "depoimentos", // nome do atributo data-slide="principal"
      auto: true, // se o slide deve passar automaticamente
      time: 3000, // tempo de transição dos slides
      pauseOnHover: true, // pausa a transição automática
      nav: true
    });
}

