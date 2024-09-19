const avatars = document.querySelectorAll('.slider__avatar');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');
const nameDisplay = document.querySelector('.slider__name');
const textDisplay = document.querySelector('.slider__text');

const testimonials = [
  {
    name: 'Jhon Doe',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed massa nisi. Vivamus pharetra nunc id dui elementum, sit amet aliquet felis molestie. Pellentesque accumsan tempor velit, eget efficitur nunc tincidunt gravida. Quisque fringilla, risus non tincidunt malesuada, lacus neque sagittis nibh.`,
    avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
  },
  {
    name: 'Artem Jones',
    text: `roadmap.sh is an incredible resource. I was fortunate to discover it during my university days in 2018. Back then, it was just a single repository with three images. 
    It's amazing to see how much impact it has had on millions of lives since then.`,
    avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    name: 'Mike Ross',
    text: `Phasellus eget convallis nunc, a sagittis ipsum. Nunc ultricies lorem vel sem vestibulum, sit amet condimentum nunc scelerisque. Sed fringilla, mi a consectetur faucibus, sapien lectus rhoncus nunc, ac condimentum orci elit non ex. Ut risus tortor, pharetra id sagittis eu, mollis id turpis. Mauris efficitur`,
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  }
];

let currentTestimonial = 1;

function updateSlider(index) {
  avatars.forEach((avatar, i) => {
    if (i === index) {
      avatar.classList.add('slider__avatar--active');
    } else {
      avatar.classList.remove('slider__avatar--active');
    }
  });

  nameDisplay.textContent = testimonials[index].name;
  textDisplay.textContent = testimonials[index].text;
}

prevButton.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateSlider(currentTestimonial);
});

nextButton.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateSlider(currentTestimonial);
});

updateSlider(currentTestimonial);
