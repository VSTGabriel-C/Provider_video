const videosList = [
	{
		video: "images/01.mp4",
		title: "Editando fotos",
	  },
	  {
		video: "images/02.mp4",
		title: "Live Stream",
	  },
	  {
		video: "images/03.mp4",
		title: "Digitando",
	  },
	  {
		video: "images/04.mp4",
		title: "Home office",
	  },
	  {
		video: "images/05.mp4",
		title: "Likes",
	  },
	  {
		video: "images/06.mp4",
		title: "Gota de água",
	  },
	  {
		video: "images/07.mp4",
		title: "Código",
	  },
	  {
		source: "youtube",
		video: "https://www.youtube.com/embed/6iTtDecsPF0",
		title: "Online Video 1",
	  },
	  {
		source: "youtube",
		video: "https://www.youtube.com/embed/jJXDAPkz1FM",
		title: "Online Video 2",
	  },
]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
	var { video, title } = item;
	return (
		`<div class="list active">
		<video src=${video} class="list-video"></video>
		<h3 class="list-title">${title}</h3>
		</div>`
		)
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
	vid.onclick = () => {
		videoList.forEach(remove => { remove.classList.remove('active') });
		vid.classList.add('active');
		let src = vid.querySelector('.list-video').src;
		let title = vid.querySelector('.list-title').innerHTML;
		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
	};
});