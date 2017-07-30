fetch('https://gist.githubusercontent.com/Kirit0s/53a9820793c1cdf22a9bfb1b71dbc84d/raw/14c5ee2ff6f9fef5e5dbd19b93c28ec45be32791/db')
	.then(response => response.json())
  .then(data => {
  	data.forEach(element => {
    	let film = createElem("div", "films_item");
    	film.innerHTML+=createElem("div", "films_item__dateStart", element.dateStart).outerHTML;
    	film.innerHTML+=createElem("div", "films_item__title", element.title).outerHTML;
    	film.innerHTML+=createElem("img", "films_item__image", null, element.image).outerHTML;
    	/*film.innerHTML+=createElem("div", "films_item__duration", element.durationMin + ' мин').outerHTML;*/
    	film.innerHTML+="<div class='films_item__button'>Подписаться</div>";
      document.getElementById('films').appendChild(film);
    })
  })
  .catch (error => {
  	alert(error);						// an errors handler must be added !!!!
  });
  function createElem (elem, className, cont, src) {
  	div = document.createElement(elem);
  	div.setAttribute("class", className);
  	if (cont) {div.innerHTML=cont};
  	if (src) {
  		div.setAttribute("src", src);
  		div.setAttribute("alt", "The Poster");
  	};
  	return div;
  };