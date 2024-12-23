/*função filtrar filme conforme pesquisa*/
document.getElementById('search').addEventListener('input', function(event)
{
    let searchTerm = event.target.value.toLowerCase();
    let movies = document.querySelectorAll('.movie');

  movies.forEach(function(movie)
  {
    let title = movie.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchTerm)) {movie.style.display = 'block';}
    else {movie.style.display = 'none';}
  });
});