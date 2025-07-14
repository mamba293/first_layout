export const videosFromBloggers = [
  {
    image: "./../../assets/images/mainContent/blogger/slide1.png",
    timer: "4:15",
    title: "A Brief History Of Creation",
    views: "80k views · 3 days ago",
    author: "Dollie Blair",
  },
  {
    image: "./../../assets/images/mainContent/blogger/slide2.png",
    timer: "8:00",
    title: "Selecting The Right Hotel",
    views: "123k views  ·  1 months ago",
    author: "Dollie Blair",
  },
  {
    image: "./../../assets/images/mainContent/blogger/slide3.png",
    timer: "5:32",
    title: "Asteroids",
    views: "43k views  ·  12 days ago",
    author: "Dollie Blair",
  },
  {
    image: "./../../assets/images/mainContent/blogger/slide4.png",
    timer: "6:40",
    title: "Telescopes 101",
    views: "11k views  ·  6 months ago",
    author: "Dollie Blair",
  }, {
    image: "./../../assets/images/mainContent/blogger/slide5.png",
    timer: "1:45",
    title: "Medical Care Is Just",
    views: "18k views  ·  2 days ago",
    author: "Dollie Blair",
  }, {
    image: "./../../assets/images/mainContent/blogger/slide6.png",
    timer: "2:12",
    title: "Moon Gazing",
    views: "167k views  ·  4 months ago",
    author: "Dollie Blair",
  }
]


function createCard(video) {

  const card = document.createElement('div');
  card.classList.add('scroll__card');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('slide__image-wrapper');

  const img = document.createElement('img');
  img.classList.add('slide__image');
  img.src = video.image;
  img.alt = video.title;

  const timer = document.createElement('p');
  timer.classList.add('timer');
  timer.textContent = video.timer;

  imageWrapper.appendChild(img);
  imageWrapper.appendChild(timer);

  const title = document.createElement('h4');
  title.classList.add('video__name');
  title.textContent = video.title;

  const info = document.createElement('div');
  info.classList.add('video__info');

  const views = document.createElement('p');
  views.textContent = video.views;

  const author = document.createElement('p');
  author.textContent = video.author;

  info.appendChild(views);
  info.appendChild(author);

  card.appendChild(imageWrapper);
  card.appendChild(title);
  card.appendChild(info);

  return card;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.scroll__container');
  
  videosFromBloggers.forEach(video => {
    const card = createCard(video);
    container.appendChild(card);
  });
});

