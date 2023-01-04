let title= document.getElementById("title");
let button=document.getElementById("meme_btn");
let meme =document.getElementById("meme");

let url="https://meme-api.com/gimme/";

//array of subreddits of your choice
let subreddits=["catmemes","dogmemes","wholesomemes","me_irl"];


let get_meme =()=>{
let randomSubreddits = subreddits[Math.floor(Math.random()*subreddits.length)];

fetch(url + randomSubreddits).then((resp)=>resp.json())
.then((data)=>{
    console.log(data);
    let meme_img = new Image();
    meme_img.onload=()=>{
        meme.src=data.url;
        title.innerHTML=data.title;
    };
    meme_img.src=data.url;
});
}
button.addEventListener("click",get_meme);
window.addEventListener("load",get_meme);