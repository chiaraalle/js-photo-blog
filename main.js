//`endpoint: https://lanciweb.github.io/demo/api/pictures/
const contenitoreCard = document.querySelector(".row")
const modal = document.querySelector(".modal")

//chiamata API
fetch("https://lanciweb.github.io/demo/api/pictures/")
.then(response => response.json())
.then(data => {
    console.log(data);
    
    let photoCards = document.querySelectorAll('.cards');


  //forEach per inserire tutte le card
    data.forEach(element => {
       contenitoreCard.innerHTML += `
        <div class= "cards col-sm-12 col-md-6 col-lg-4 position-relative mb-3" data-id=${element.id}>
              <div class="card p-2">
                <img class="position-absolute top-0 start-50 translate-middle" src="img/pin.svg" width="20px" class="pin-photo" alt="">
                <img src="${element.url}" class="card-img-top" alt="..."> 
                <div class="card-body">
                  <h5 class="card-title text-uppercase">${element.title}</h5>
                  <p class="card-text">${element.date}</p>
                </div>
              </div> 
          </div>
       `
       photoCards = document.querySelectorAll('.cards')
       
    });

    //addeventlistener per aprire la modale cliccando sulla foto
    photoCards.forEach(element=> {
      let cardId = element.getAttribute("data-id");
      element.addEventListener("click", function(){
          modal.classList.remove("hidden");
          modal.innerHTML = `<button id="closeBtn" class="close-button">chiudi</button>
          <img id="chosenPhoto" src="https://marcolanci.it/boolean/assets/pictures/${cardId}.png" alt="">`
          // addeventlistener per nascondere la modale
          const closeBtn = document.getElementById("closeBtn");
          closeBtn.addEventListener("click", function() {
              modal.classList.add("hidden"); 
          });
        })
        
        
      });
})
.catch(error => {
    console.log(error);
})


