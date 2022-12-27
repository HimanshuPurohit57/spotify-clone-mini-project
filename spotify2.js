console.log("Welcome to Spotify");
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('progress');
let gif=document.getElementById('gif2');
 let songIndex=0; 
let record=document.getElementById('record');
let songItem=Array.from(document.getElementsByClassName('sing'));
let masterSongName=document.getElementById('mastersongname');

let songs=[
    {songName:"Arjit Singh", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Atif Aslam", filePath:"songs/2.mp3", coverPath:"covers/1.jpg"},
    {songName:"Sonu Nigam", filePath:"songs/3.mp3", coverPath:"covers/1.jpg"},
    {songName:"Jubin Nautiyal", filePath:"songs/4.mp3", coverPath:"covers/1.jpg"},
    {songName:"Neha Kakkar", filePath:"songs/5.mp3", coverPath:"covers/1.jpg"},
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        record.style.opacity=1;
         
         
    }
    else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
    record.style.opacity=0;
    makeAllPlays();
     
    }
})
audioElement.addEventListener('timeupdate', ()=>{
let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value=progress;

})
myProgressBar.addEventListener('change', ()=>{
     audioElement.currentTime=parseInt(myProgressBar.value*audioElement.duration/100);
    console.log(progress);
    myProgressBar.value=progress;
    
    })
// songItem.forEach((element,i) => {
//   document.getElementsByClassName("name-text-center")[i].innerText=songs[i].songName;  
// })
const makeAllPlays=()=>{
Array.from(document.getElementsByClassName('myclass')).forEach((element) => {
    
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
         
})
}
 

Array.from(document.getElementsByClassName('myclass')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
          songIndex=parseInt(e.target.id);
        audioElement.src=`songs/${songIndex+1}.mp3`;
         
        
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        record.style.opacity=1;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterSongName.innerText=songs[songIndex].filePath;
         songIndex++;
         
       
    })
 });
 
 document.getElementById('prev').addEventListener('click',()=>{
 
    
    if(songIndex<0)songIndex=4;
    else songIndex--; 
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    makeAllPlays();
    audioElement.play();
    gif.style.opacity=1;
        record.style.opacity=1;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterSongName.innerText=songs[songIndex].filePath;
})
  
 document.getElementById('next').addEventListener('click',()=>{
     
       
        if(songIndex>4)songIndex=0;
        else songIndex++;
        makeAllPlays();
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
          gif.style.opacity=1;
            record.style.opacity=1;
            masterPlay.classList.add('fa-circle-pause');
            masterPlay.classList.remove('fa-circle-play');
            masterSongName.innerText=songs[songIndex].filePath;
    })
      