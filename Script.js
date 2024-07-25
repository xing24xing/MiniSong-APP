// Initialize The Variable

let songIndex = 0;
let audioEle = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let progressBar = document.getElementById('myProgressBar');
let songsItem = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:'Beliver',filePath:'1.mp3',coverPath:'img-2.jpg'},
    {songName:'Carols The Bell',filePath:'2.mp3',coverPath:'img-3.jpg'},
    {songName:'Motivational Song',filePath:'3.mp3',coverPath:'img-2.jpg'},
    {songName:'Happy-Day',filePath:'4.mp3',coverPath:'img-3.jpg'},
    {songName:'Beautiful',filePath:'5.mp3',coverPath:'img2.jpg'},
    {songName:'Perfect Night',filePath:'6.mp3',coverPath:'img2.jpg'},
    {songName:'Chasing That Feeling',filePath:'7.mp3',coverPath:'img2.jpg'},
    {songName:'Bite me',filePath:'8.mp3',coverPath:'img2.jpg'},
];
songsItem.forEach((Element,i) =>{
    // console.log(Element ,i );
 Element.getElementsByTagName('img')[0].src = songs[i].coverPath;
 Element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})
// handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioEle.paused || audioEle.currentTime<= 0)
    {
        audioEle.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioEle.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    
    }
    
       
    }
   

)
// Listen TO Events

// audioEle.play();
audioEle.addEventListener('timeupdate' , ()=>{
 progress = parseInt((audioEle.currentTime/audioEle.duration)*100);
progressBar.value = progress;
});

progressBar.addEventListener('change',()=>{
audioEle.currentTime = (progressBar.value * audioEle.duration)/100;
});

const makeAllPlay = ()=>{
    // e.target.classList.remove('fa-play-circle');
       Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        console.log(e)
        makeAllPlay();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioEle.src=`${index+1}.mp3`;
        masterSongName.innerText = songs[index].songName;
        audioEle.currentTime = 0;
        audioEle.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
       
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(index>=8){
        index = 0
    }
    else{
        index += 1;
    }
    audioEle.src = `${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioEle.currentTime = 0;
    audioEle.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=0){
        index = 0
    }
    else{
        index -= 1;
    }
    audioEle.src = `${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioEle.currentTime = 0;
    audioEle.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})