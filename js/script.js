if(window.SimpleAnime){
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

if(window.SimpleSlide) {
  new SimpleSlide({
    slide: "portfolio", // nome do atributo data-slide="principal"
    
    nav: true
  });
}

