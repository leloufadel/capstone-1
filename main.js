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
    image: 'Assets/speaker_01.png',
    name: 'Prof. Toto Titi',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/speaker_02.png',
    name: 'Prof. Nana Aba Appiah Amfo',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/speaker_03.png',
    name: 'Prof. Toto Titi',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/speaker_04.png',
    name: 'Prof. Lala Fadel',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/speaker_01.png',
    name: 'Prof. Tata Toto',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/speaker_01.png',
    name: 'Prof. Tam Tam',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/speaker_01.png',
    name: 'Prof. Titi Tato',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/speaker_03.png',
    name: 'Prof. Foo Var',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/speaker_04.png',
    name: 'Prof. Foo Bar',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/speaker_05.png',
    name: 'Prof. John Doe',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/speaker_02.png',
    name: 'Prof. Sam-Wilson-Spath',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    image: 'Assets/speaker_01.png',
    name: 'Prof. Samantha-Starmer',
    title: 'Vice-chancellor, University of Ghana.',
    bio: 'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
];


function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const chosenSpeaker = [];
const speakersContainer = document.querySelector('.speakers-grid');
const seeMoreBtn = document.querySelector('.see-more-btn');

function generateSpeakers(count) {
  for (let i = 1; i <= count; i++) {
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
        <p class="speaker-bio">${speaker.bio}</p>
      </div>
    `;
    speakersContainer.appendChild(speakerElement);
  }
}

function showMoreSpeakers() {
  generateSpeakers(2);
  if (speakersContainer.children.length >= 6) {
    seeMoreBtn.style.display = 'none';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Generate initial 6 speakers for desktop version
  if (window.innerWidth > 768) {
    generateSpeakers(6);
  }
  // Generate initial 2 speakers for mobile version
  else {
    generateSpeakers(2);
  }

  // Add event listener to see more button
  seeMoreBtn.addEventListener('click', showMoreSpeakers);
});
