'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(function (x, y, arr) {
  x.addEventListener('click', openModal);
}); //will not use old school method ----we go for foreach as nodelist can have foreach method

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//////////////////////////////////////////////////////////////////
//How the DOMS really works..................................
//-allow us to make JS interact with the browser
// we can write JS to create ,modify and delete HTML elements ,set styles,classes and attributes;and listen and respond to events
//Dom tree is generated from an HTML document ,which we can then interact with;
//DOM is a very complex API(Application Programming Interface) that contains lots of methods and proeprties to interact with the DOM tree

//selecting,creating and deleting elements.....................
//selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allsections = document.querySelectorAll('.section'); //html collection object --auto updates
console.log(allsections);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); //html collection object --auto updates
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

//creating and inserting elements
const message = document.createElement('div');

message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">got it!';
// header.prepend(message); //to create as first child of parent element
// header.append(message); //to create as last child of parent element
//but out of 2 only 1 will be created as its a live event so creating can be done at once
//To repeat the same method above and to create both as first and last
//we need to clone the element first
// header.append(message.cloneNode(true));

//before and after elements
// header.before(message);
console.log(typeof header);
header.append(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); //new method to remove elements--// message.parentElement.removeChild(message)--old method
  });

//styles ,attributes and classes.....................................
// message.style.backgroundColor = '#37383d';
// message.style.height = '120%';
// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); //it's not showing the actual link
console.log(logo.className);
logo.alt = 'logo';
//non-standard
console.log(logo.designer); //it will not be created as object because its not an property
console.log(logo.getAttribute('designer')); //to get the attribute
logo.setAttribute('sampleAttribute', 'BankistAttribute');
console.log(logo.getAttribute('src')); //it will give the actual link
const link = document.querySelector('.nav__link--btn');
console.log(link.href); //will give the link of the local machine
console.log(link.getAttribute('href')); //will give the exact address of the link
console.log(logo.dataset.version); //when we need to store data in html will use datdset
//classes
logo.classList.add('a', 'b'); //can add multiple classes
logo.classList.remove('b');
logo.classList.toggle('a', 'b');
logo.classList.contains('a', 'b');

//don't use
logo.className = 'raul'; //can create own class but its functionality will not work

// implementing smooth scrolling..........................
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function () {
  // const s1coordinates = section1.getBoundingClientRect();
  // console.log(s1coordinates);
  // console.log(e.target.getBoundingClientRect());
  // console.log('current x/y', window.pageXOffset, window.pageYOffset); //distance after moving from top of the view port and left of the viewport
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  //scrolling
  // window.scrollTo({
  //   left: s1coordinates.left + window.pageXOffset,
  //   top: s1coordinates.top + window.pageYOffset,
  //   behavior: 'smooth', //old method
  // });
  section1.scrollIntoView({ behavior: 'smooth' }); //modern way
});
//types of event and event handlers........................
const h1 = document.querySelector('h1');
const alertH1 = function () {
  alert('alert for events');
  console.log('clicked');
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 100);

//Event propagation:bubbling and capturing.....................

//event travels from child to parent and then root elements :capturing phase
//then it will target on its original place :target element
//finally on display as :bubble phase

//Event propogation
const navLink = document.querySelector('.nav__link');
const navLinks = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = function () {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};

// navLink.addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('NAVLINK', e.currentTarget, e.target);
//   console.log(e.currentTarget === this);
// });
// navLinks.addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('NAVLINKs', e.currentTarget, e.target);
//   console.log(e.currentTarget === this);
// });
// nav.addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.currentTarget, e.target);
//   console.log(e.currentTarget === this); //to check where event is getting target
// });

//Event delegation:Imlementing page navigation.......................

//method which is not efficient

// document.querySelectorAll('.nav__link').forEach(function (x) {
//   x.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//better way to select and apply at the time of targeting the event
//evet delegation --bubble happens so we can apply on a parent element
// step 01--add event listener to parent element
// step 02- Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (x) {
  console.log(x.target);
  x.preventDefault();

  //matching strategy
  if (x.target.classList.contains('nav__link')) {
    // console.log('link');
    const id = x.target.getAttribute('href');
    console.log(id);
    document.querySelector(`${id}`).scrollIntoView({ behavior: 'smooth' });
    // console.log(document.querySelector(id));
  }
});

//DOM Traversing....................................................
//traversing---walking through the dom
const h1_forcheck = document.querySelector('h1');

//going downwards:child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1_forcheck.childNodes);
console.log(h1_forcheck.children);
// h1.firstElementChild.style.color = 'blue';
// h1.lastElementChild.style.color = 'red';

//going upwards:parent
console.log(h1_forcheck.parentNode);
console.log(h1_forcheck.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-primary)';
//closest always look for the parent where as query look for the child element
// h1.closest('h1').style.background = 'var(--gradient-primary)';//if we only want to find the parent element

//going sideways:siblings
console.log(h1_forcheck.previousElementSibling);
console.log(h1_forcheck.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1_forcheck.nextSibling);
console.log(h1_forcheck.parentElement.children);
[...h1_forcheck.parentElement.children].forEach(function (x) {
  // if (x !== h1) x.style.transform = 'scale(.5)';
});

//Building a tabbed component

//tabbed components............................................
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
//css
// ---active class for btn :operations__content--active
//  ---active class for content: operations__tab--active

// tabs.forEach(x =>
//   x.addEventListener('click', function () {
//     console.log('clicked');
//   })
// );//old method and not efficient as it will create a copy of each element

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //guard clause
  if (!clicked) return;
  //removing all active classes
  tabs.forEach(a => a.classList.remove('operations__tab--active'));
  tabContent.forEach(b => b.classList.remove('operations__content--active'));
  //working on btn click
  clicked.classList.add('operations__tab--active');
  //working on content after clicking on btn
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  console.log(clicked.dataset.tab);
});

// Passing arguments to event handleers...............................

//menu fade animation
// const nav = document.querySelector('.nav');//already created above

const eventHandler = function (e) {
  // console.log(this);
  if (e.target.classList.contains('nav__link')) {
    // console.log('link');
    const link = e.target;
    const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};
//mouseover --event
nav.addEventListener('mouseover', eventHandler.bind(0.5));
//mouseout--event
nav.addEventListener('mouseout', eventHandler.bind(1));
//passing this keyword to a copied function for dryup

//Implementing a sticky navigation:the scroll event...................

// const s1coordinates = section1.getBoundingClientRect();
// console.log(s1coordinates);
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > s1coordinates.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
//but above method is not a effiecient method as it will fire or trigger a sroll event every time we scoll our mouse

// //a better way the intersection observer API..............
// const callbackFunc = function (entries, observer) {
//   entries.forEach(entry => console.log(entry.target));
// };

// const options = {
//   root: null,
//   threshold: 0, //any value between 0-1 or percentage of visibility//it means how much percentage is visble in view port
// };
// const observer = new IntersectionObserver(callbackFunc, options);

// observer.observe(section1);
//we need to create an observer for nav with the help of above topic^^
// const header=document.querySelector('.header')//already mentioned above
const stickyNav = function (entries) {
  const [entry] = entries;

  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: '0 px',
});
headerObserver.observe(header);

//revealing elements on scroll..................................
const allSections = document.querySelectorAll('.section');
const hiddenSection = function (entries, y) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  y.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(hiddenSection, {
  root: null,
  threshold: 0.15,
});

allsections.forEach(function (x) {
  sectionObserver.observe(x);
  x.classList.add('section--hidden');
});

//Lazy loading images.................................................................

//first we need to set low image  in html and blured with the help of css for fast loading and hide the pixels
//then create an observer to trigger the taget images and then replace with the high end images

const imgs = document.querySelectorAll('img[data-src]');
const imgLoaderFunc = function (x, y) {
  const [xNew] = x; //destructuring
  console.log(xNew);
  if (!xNew.isIntersecting) return; //guard function
  xNew.target.src = xNew.target.dataset.src; //changing the src from low to high src images with the help of data attribute
  xNew.target.addEventListener('load', function () {
    xNew.target.classList.remove('lazy-img');
    y.unobserve(xNew.target);
  });
};

const imgLoader = new IntersectionObserver(imgLoaderFunc, {
  root: null,
  threshold: 0,
  rootMargin: '100px', //if we want to load image before reaching to the target image
});

imgs.forEach(img => imgLoader.observe(img));

//building a slider component..............................................................
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const sliderImg = document.querySelectorAll('.slide');
let counter = 0;
let max = sliderImg.length;
console.log(sliderImg.length);

//function to dry-up the code

const slider = function (slide) {
  sliderImg.forEach(function (x, y) {
    console.log(x);
    x.style.transform = `translateX(${100 * (y - slide)}%)`;
  });
};

slider(counter); //default values(after loading)
//next slide
const nextSlide = function () {
  console.log('right btn clicked');
  if (counter === max - 1) counter = 0;
  else {
    counter++;
  }
  slider(counter);
  activeDot(counter);
  console.log(`counter value inside nexslide: ${counter}`);
};
btnRight.addEventListener('click', nextSlide);

//previous
const previousSlide = function () {
  console.log('left btn clicked');
  if (counter === 0) counter = max - 1;
  else {
    counter--;
  }
  slider(counter);
  activeDot(counter);

  console.log(`counter value inside previous: ${counter}`);
};

btnLeft.addEventListener('click', previousSlide);

//building a slider component part-2............................................
//lets create an event for left and right down button

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowLeft') previousSlide();
  else if (e.key === 'ArrowRight') nextSlide();
});

//creating a dot with the help of js

const dots = document.querySelector('.dots');

const createDots = function () {
  sliderImg.forEach(function (_, i) {
    dots.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots(); //create before activatig
//using event delegation method to avoid unnessacary track events
dots.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const x = e.target.dataset.slide;
    console.log(x);
    console.log(`counter value ${counter}`);
    slider(x);
    activeDot(x); //using above function to get the image
  }
});

//creating a dot indicator on active slide
const activeDot = function (x) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(y => y.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${x}"]`)
    .classList.add('dots__dot--active');
  console.log('called on dot');
};
activeDot(0); //default

//calling it in above click events

//lets create the original sliding content by removing image div from the html

//lifecycle dom.....................

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree bult', e);
});

window.addEventListener('load', function (e) {
  console.log('page loaded', e);
});
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

//defer and async script loading.......................

//never put script in the head as it will not be a sufficient way>>>>parsing html then waiting for ..(fetch script+execute) then finsishing the HTML
//puting script at the end of the body is better but not the best>>>>parsing HTML and then fetching script+execute and finally DomContentLoaded
//async including in the script is better than both the above option >>>>as it will parsing the HTML and (fetch script+execute) at the same time and then finishing the parsing HTML
//defer is better than async but will take same time>>>>it will parsing the HTML and fetch script in the same time and execute at the end

//ultimately the defer option is the best as it will load after getting everything
//if we need to add libraries (3rd party) we need to define it after our own script
