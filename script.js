"use strict";
const playBtn = document.querySelectorAll("svg");
const audio = document.querySelectorAll("audio");
playBtn[0].onclick = () => {
    console.log("clicked");
    audio[0].play();
    audio[1].pause();
    audio[2].pause();
};
playBtn[0].ondblclick = () => {
    console.log("DBLclicked");
    audio[0].pause();
};
playBtn[1].onclick = () => {
    console.log("clicked");
    audio[1].play();
    audio[0].pause();
    audio[2].pause();
};
playBtn[2].onclick = () => {
    console.log("clicked");
    audio[2].play();
    audio[0].pause();
    audio[1].pause();
};
