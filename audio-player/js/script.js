const nameSong = document.querySelector('.song__name')
const songExecutor = document.querySelector('.song__executor')
const imgCover = document.getElementById('cover')
const backImg = document.querySelector('.back__img')
const audio = document.getElementById('audio')
const player = document.querySelector('.main__container')
const playBtn = document.querySelector('.play__pause')
const nextBtn = document.getElementById('nextSong')
const prevBtn = document.getElementById('prevSong')
const durationTime = document.querySelector('.durationTime')
const currentTimes = document.querySelector('.currentTime')
const volumeInput = document.getElementById('volume__length');
const songLength = document.getElementById('song__length')


const songs = ['Don t Hurt Yourself', 'Don t Start Now' , 'Don t Speak' , 'Moi Lolita' , 'Incognito','Love Like Mine', 'MIDDLE OF THE NIGHT', 'Ceux qui rêvent' , 'Mental Funeral'];
const artist = ['Beyonce', 'Dua Lipa' , 'No Doubt' , 'Alizée' , 'bludnymph' , 'Stela Cole', 'Elley Duhé', 'Pomme', 'Ehle ']

let songIndex = 0;


//начальная песня
function startSong(song) {
    backImg.src = `assets/img/cover${songIndex + 1}.png`
    imgCover.src = `assets/img/cover${songIndex + 1}.png`
    nameSong.innerHTML = song
    songExecutor.innerHTML = artist[songIndex]
    audio.src = `assets/audio/${song}.mp3`


    audio.addEventListener('loadedmetadata', () => {
        const duration = audio.duration;
        durationTime.innerHTML = formatTime(duration);
        console.log(formatTime(duration));
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        currentTimes.innerHTML = formatTime(currentTime); 
        console.log(formatTime(currentTime));
    });
}
startSong(songs[songIndex])


//формат времени 
function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
}


//стоп плей
function playSong() {
    audio.play()
    player.classList.add('play')
    playBtn.src = 'assets/svg/pause.png'
}

function stopSong() {
    audio.pause()
    player.classList.remove('play')
    playBtn.src = 'assets/svg/play.png'
}

playBtn.addEventListener('click', () => {
    const play = player.classList.contains('play')
    if(play){
        stopSong()
    } else {
        playSong()
    }
})


// громкость
audio.volume = volumeInput.value;

volumeInput.addEventListener('input', function() {
    audio.volume = volumeInput.value; 
    console.log(`Volume: ${audio.volume}`);
  });