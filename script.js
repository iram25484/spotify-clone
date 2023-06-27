console.log("hello");

let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songsName:"mystery of love", filePath:"mystery.mp3",coverPath:"cover/mystery.jpg"},
    {songsName:"My-heart-will-go-on", filePath:"My-heart-will-go-on.mp3",coverPath:"cover/titanic.jpeg"},
    {songsName:"amplifier", filePath:"amplifier.mp3",coverPath:"cover/amplifier.jpeg"},
    {songsName:"crazy in love", filePath:"Beyonc_ft_Jay_Z_-_Crazy_In_Love.mp3",coverPath:"cover/crazy.jpeg"},
    {songsName:"Sajna Ve ", filePath:"Sajna Ve - Vishal Mishra And Lisa Mishra 128 Kbps",coverPath:"cover/sajnave.jpeg"},
    {songsName:"Avicii_Wake_Me_Up", filePath:"Avicii_-_Wake_Me_Up.mp3",coverPath:"cover/avicii.jpeg"},
    {songsName:"Locked-Away", filePath:"R.-City-Locked-Away-feat.-Adam-Levine.mp3",coverPath:"cover/lockedaway.jpeg"},

]

songitem.forEach((element,i) => {
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songname")[0].innerText=songs[i].songsName;
})

//click pause play
masterPlay.addEventListener('click',()=>{
if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();    
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
}
})

audioElement.addEventListener('timeupdate',()=>{

    progress=parseFloat((audioElement.currentTime/audioElement.duration)*100);
   
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('click',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})


const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeallplays();

      songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
audioElement.src=`${songIndex}.mp3`;
gif.style.opacity=1;    
       mastersongname.innerText=songs[songIndex-1].songsName;

audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
    })
});
   
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex-1].songsName;

    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{   
        songIndex-=1;
    }
    audioElement.src=`${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex-1].songsName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})