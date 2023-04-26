const menu = document.querySelector('.menu');
const nav = document.querySelector('.second-nav');
const span = document.createElement('span');
span.innerHTML += '<span>&times;</span>';
span.classList.add('close');
menu.addEventListener('click', () => {
  if (nav.style.display === 'inline-block') {
    nav.style.display = 'none';
  } else {
    nav.appendChild(span);
    nav.style.display = 'flex';
    nav.classList.add('humberger');
    span.addEventListener('click', () => {
      nav.style.display = 'none';
    });
    document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
      nav.style.display = 'none';
    }));
  }
});

const speakers = [
  {
    image: 'Assets/Aisha-Pandor.webp',
    name: 'Prof. Toto Titi',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/Amanda-Herson.webp',
    name: 'Prof. Nana Aba Appiah Amfo',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/Apoorva-Kumar.webp',
    name: 'Prof. Toto Titi',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/asha-kamenge.webp',
    name: 'Prof. Lala Fadel',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/candy.webp',
    name: 'Prof. Tata Toto',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/hartell.webp',
    name: 'Prof. Tam Tam',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/john-muteru.webp',
    name: 'Prof. Titi Tato',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/Kevin-Tucker.jpg',
    name: 'Prof. Foo Var',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/lance.webp',
    name: 'Prof. Foo Bar',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/Paul-Misener.webp',
    name: 'Prof. John Doe',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/Sam-Wilson-Spath.webp',
    name: 'Prof. Sam-Wilson-Spath',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/Samantha-Starmer.webp',
    name: 'Prof. Samantha-Starmer',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
];
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const chosenSpeaker = [];
function generateSpeakers() {
  const speakersConainer = document.querySelector('.speakers-grid');
  for (let i = 1; i <= 6; i += 1) {
    let rndInt = randomIntFromInterval(0, 11);
    while (chosenSpeaker.includes(rndInt)) {
      rndInt = randomIntFromInterval(0, 11);
    }
    chosenSpeaker.push(rndInt);
    const speaker = speakers[rndInt];
    const speakerElement = document.createElement('div');
    speakerElement.classList.add('speaker');
    speakerElement.innerHTML = `
            <div class="speaker-img">
                <img src="${speaker.image}" alt="">
            </div>

            <div class="speaker-info">
                <h3 class="speaker-name">${speaker.name}</h3>
                <h4 class="speaker-title">${speaker.title}</h4>
                <hr class="speaker-separator">

                <p class="speaker-bio">
                ${speaker.bio}
                </p>
            </div>
        `;

    speakersConainer.appendChild(speakerElement);
  }
}
window.addEventListener('DOMContentLoaded', () => {
  generateSpeakers();
});