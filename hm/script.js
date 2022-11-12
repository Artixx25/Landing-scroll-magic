$(function() {
	var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 561}});
  
	new ScrollMagic.Scene({
		triggerElement: "#Home"
	  })
	  .setClassToggle(".menu .nav-links a.homem, .side-nav a.home", "active")
	  .addTo(controller);
	  
	new ScrollMagic.Scene({
		triggerElement: "#Overview"
	  })
	  .setClassToggle(".menu .nav-links a.aboutm, .side-nav a.overview", "active")
	  .addTo(controller);
	  
	new ScrollMagic.Scene({
		triggerElement: "#Projects"
	  })
	  .setClassToggle(".menu .nav-links a.projectsm, .side-nav a.projects", "active")
	  .addTo(controller);

	  new ScrollMagic.Scene({
		triggerElement: "#Contacts"
	  })
	  .setClassToggle(".menu .nav-links a.contactm, .side-nav a.contacts", "active")
	  .addTo(controller);
	  
  });
  


//   menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const body = document.querySelector("body");
const logform = document.getElementById("log-pg");
const contform = document.getElementById("cont-pg");

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
	body.classList.toggle("no-scroll");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});

window.addEventListener ("scroll", function(){
	let menu = document.querySelector (".menu");
	menu.classList.toggle("sticky", window.scrollY > 100);
  })

//   log


document.addEventListener('keydown', (event) => {
	event.preventDefault()
	if ('Esc') {
		logform.classList.remove("shownf");
		body.classList.remove("no-scroll");
		contform.classList.remove("shownf");
	}
  })

  function escmouse() {
	logform.classList.remove("shownf");
	body.classList.remove("no-scroll");
	contform.classList.remove("shownf");
}

function showform() {
	logform.classList.add("shownf");
	body.classList.add("no-scroll");
}


function showcnt() {
	contform.classList.add("shownf");
	body.classList.add("no-scroll");
}

$(document).ready(function() {
	var panelOne = $('.form-panel.two').height(),
	  panelTwo = $('.form-panel.two')[0].scrollHeight;
  
	$('.form-panel.two').not('.form-panel.two.active').on('click', function(e) {
	  e.preventDefault();
  
	  $('.form-toggle').addClass('visible');
	  $('.form-panel.one').addClass('hidden');
	  $('.form-panel.two').addClass('active');
	  $('.form').animate({
		'height': panelTwo
	  }, 200);
	});
  
	$('.form-toggle').on('click', function(e) {
	  e.preventDefault();
	  $(this).removeClass('visible');
	  $('.form-panel.one').removeClass('hidden');
	  $('.form-panel.two').removeClass('active');
	  $('.form').animate({
		'height': panelOne
	  }, 200);
	});
  });

//   proj

const videos = [
	{
		youtubeId: "https://enigmacinema.netlify.app/",
		imgSrc: "img/enigm.png",
		title: "Enigma Cinema - best Cinema ever",
		author: "Artixx",
	},
	{
		youtubeId: "https://coolours.netlify.app/",
		imgSrc: "img/coloru.png",
		title: "Coolours - your color randomizer",
		author: "Artixx",
	},
	{
		youtubeId: "https://artixxportfolio.netlify.app",
		imgSrc: "img/portf.png",
		title: "Artixx Portfolio - most beautiful portfolio",
		author: "Artixx",
	}
];

function openVideoListener(node, video) {
	node.onclick = function () {
		open(video.youtubeId);
	};
	return node;
}

function getImg(video) {
	let node = document.createElement("img");
	node.src = video.imgSrc;
	openVideoListener(node, video);
	return node;
}

function getTitle(video) {
	let node = document.createElement("p");
	node.innerHTML = video.title;
	openVideoListener(node, video);
	return node;
}

function getAuthor(video) {
	let node = document.createElement("label");
	node.innerHTML = video.author;
	return node;
}

for (const v in videos) {
	let container = document.querySelector(".container");
	let card = document.createElement("div");
	card.className = "card";

	let cardImg = getImg(videos[v]);
	let cardTitle = getTitle(videos[v]);
	let cardAuthor = getAuthor(videos[v]);

	card.appendChild(cardImg);
	card.appendChild(cardTitle);
	card.appendChild(cardAuthor);
	container.appendChild(card);
}
