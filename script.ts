const playBtn = document.querySelectorAll("svg") as NodeListOf<SVGElement>;
const audio = document.querySelectorAll("audio");
const video = document.querySelectorAll("video");



playBtn[0].onclick = () => {
    console.log("clicked")
    audio[0].play()
    audio[1].pause()
    audio[2].pause()
}

playBtn[0].ondblclick = () => {
    console.log("DBLclicked")
    audio[0].pause()
}

playBtn[1].onclick = () => {
    console.log("clicked")
    audio[1].play()
    audio[0].pause()
    audio[2].pause()
}

playBtn[1].ondblclick = () => {
    console.log("DBLclicked")
    audio[1].pause()
}

playBtn[2].onclick = () => {
    console.log("clicked")
    audio[2].play()
    audio[0].pause()
    audio[1].pause()
}

playBtn[2].ondblclick = () => {
    console.log("DBLclicked")
    audio[2].pause()
}


// VIDEOS
playBtn[3].onclick = () => {
    console.log("clicked")
    video[0].play()
    video[1].pause()
    video[2].pause()
}

playBtn[4].onclick = () => {
    console.log("clicked")
    video[1].play()
    video[0].pause()
    video[2].pause()
}

playBtn[5].onclick = () => {
    console.log("clicked")
    video[2].play()
    video[1].pause()
    video[0].pause()
}

playBtn[3].ondblclick = () => {
    console.log("DBLclicked")
    video[0].pause()
}

playBtn[4].ondblclick = () => {
    console.log("DBLclicked")
    video[1].pause()
}

playBtn[5].ondblclick = () => {
    console.log("DBLclicked")
    video[2].pause()
}