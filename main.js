//`endpoint: https://lanciweb.github.io/demo/api/pictures/
const contenitoreCard = document.querySelector(".row")

fetch("https://lanciweb.github.io/demo/api/pictures/")
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(element => {
       contenitoreCard.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4 position-relative mb-3">
              <div class="card p-2">
                <img class="position-absolute top-0 start-50 translate-middle" src="img/pin.svg" width="20px" class="pin-photo" alt="">
                <img src="${element.url}" class="card-img-top" alt="..."> 
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.date}</p>
                </div>
              </div> 
          </div>
       `
    });
    
})
.catch(error => {
    console.log(error);
})
