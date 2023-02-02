const btnEl = document.getElementById('btn');
const animeConEl = document.querySelector('.anime-conteiner');
const animeImgEl = document.querySelector('.anime-img');
const animeNameEl = document.querySelector('.anime-name');

btnEl.addEventListener('click', async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = 'Loadging...';
    animeNameEl.innerText = 'Updating...';
    animeImgEl.src = 'spinner.svg';

    const response = await fetch('https://api.catboys.com/img');
    const data = await response.json();
    console.log(data);
    btnEl.disabled = false;
    btnEl.innerText = 'Get Anime';

    animeConEl.style.display = 'block';
    animeImgEl.src = data.url;
    animeNameEl.innerText = data.artist;
  } catch (error) {
    btnEl.disabled = false;
    btnEl.innerText = 'Get Anime';
    animeNameEl.innerText = 'An error hapened, please try again';
  }
});
