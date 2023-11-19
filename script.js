//define the values
let previous=document.querySelector("#pre")
let justplay=document.querySelector("#play")
let next=document.querySelector("#next")
let title=document.querySelector("#title")
let artist=document.querySelector("#artist")
let range=document.querySelector("#duration")
let image=document.querySelector("#track_image")
let timer;
let autoplay=1;
let index_no=0;
let playing_song=false;
let track = document.createElement("audio")
// link the songs in array format
let all_song=[
{
    name:"Anbenum",
    path: "songs/anbenum.mp3",
    img:"img/parthi family.avif",
    artist:`"Anirudh Ravichander"`,
},
{
    name:"Badass",
    path: "songs/badass.mp3",
    img:"img/badass.jpg",
    artist:`"Anirudh Ravichander"`,
},
{
    name:"Villain yaaru",
    path: "songs/villain yaaru.mp3",
    img:"img/parthipan.jpg",
    artist:`"Anirudh Ravichander"`,
},
{
    name:"kadhaippoma",
    path: "songs/kadhaippoma.mp3",
    img:"img/kadhaippoma.jpg",
    artist:`" Leon James"`,
}

]
// declare the values
function load_track(index_no){
    clearInterval(timer);
    reset_slider();
    track.src=all_song[index_no].path;
    title.innerHTML=all_song[index_no].name;
    image.src = all_song[index_no].img;
    artist.innerHTML=all_song[index_no].artist;

    timer=setInterval(range,1000)
    total.innerHTML=all_song.length;
    present.innerHTML= index_no + 1;
}
load_track(index_no);
// play btn function
function play(){
    if(playing_song==false) {
        playsong();
    }
    else{
        pausesong();
    }
}
function reset_slider(){
    range.value=0;
}
// next play btn function
function next_play(){
    if(index_no<all_song.length - 1){
        index_no+=1;
       load_track(index_no);
       playsong();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}
// previous play btn function
function previous_play(){
    if(index_no<all_song.length + 1){
        index_no -=1;
       load_track(index_no);
       pausesong();
    }
    else{
        index_no = all_song.length;
        load_track(index_no);
        playsong();
    }
}
// play song and pause song function
function playsong(){
    track.play();
    playing_song=true;
    justplay.innerHTML=`<i class="fa fa-pause"></i>`
}
function pausesong(){
    track.pause();
    playing_song=false;
    justplay.innerHTML=`<i class="fa fa-play"></i>`
}
// track duration change function
function change_duration(){
    track.currentTime = track.duration * (range.value /100)
}

