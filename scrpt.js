console.log('welcome to spotify');
//Intialize the variables
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "tum-salam-e-Ishq", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "hum-salam-e-Ishq", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songName: "ya-salam-e-Ishq", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songName: "we-salam-e-Ishq", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songName: "you-salam-e-Ishq", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songName: "us-salam-e-Ishq", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songName: "are-salam-e-Ishq", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    { songName: "they-salam-e-Ishq", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
    { songName: "na jane-salam-e-Ishq", filepath: "songs/10.mp3", coverpath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// audioElement.play();

// handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currenttime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}



Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songindex}.mp3`;
        masterSongName.innerText = songs[songindex].songName; 
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 10) {
        songindex = 0
    }
    else {
        songindex += 1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 10) {
        songindex = 0
    }
    else {
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})