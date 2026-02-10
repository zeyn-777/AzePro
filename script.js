function openVideo(id){
  window.location.href = "video.html?id=" + id;
}

function searchVideos(){
  let input = document.getElementById("search").value.toLowerCase();
  let videos = document.getElementsByClassName("video");

  for(let v of videos){
    v.style.display = v.innerText.toLowerCase().includes(input) ? "block" : "none";
  }
}
