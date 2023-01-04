let titles= document.getElementById("title");
let button=document.getElementById("meme_btn");
let meme =document.getElementById("meme");

let url="https://meme-api.com/gimme/";

//array of subreddits of your choice
let subreddits=["catmemes","dogmemes","wholesomemes","me_irl"];

let updateDetails=(url,title)=>{
        meme.setAttribute("src",url);
        titles.innerHTML=title;
 };

let get_meme =()=>{
let randomSubreddits = subreddits[Math.floor(Math.random()*subreddits.length)];

fetch(url + randomSubreddits).then((resp)=>resp.json())
.then((data)=>{
    console.log(data);
    updateDetails(data.url,data.title);
    
});
};


button.addEventListener("click",get_meme);
// window.addEventListener("load",get_meme);
