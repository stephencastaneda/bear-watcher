
import util from '../helpers/util.js'
import bearData from '../helpers/bearData.js';

 
 
 const selectBear = (e) => {
    const bearId = e.target.id;
    console.log("hello")
    bearData.setSelectedBear(bearId);
  }


const bearButtonEvent = (e) => {
    const bearButtons = document.getElementsByClassName('submit-new-bear');
    for(let i=0; i<bearButtons.length; i++){
      bearButtons[i].addEventListener('click', newBear);
    }
  }


  const bearBuilder = (e) => {
    const allBears = bearData.getBear();
    let domString = ''

    domString += '<div class="d-flex flex-wrap mx-auto">'
    allBears.forEach((bear) => {
     
      domString += '<div class="card" style="width: 18rem;">'
      domString += `<img src="${bear.imageUrl}" class="card-img-top" alt="...">`
      domString += '<div class="card-body">'
      domString += `<h5 class="card-title">${bear.name}</h5>`
      domString += '<a href="#" class="btn btn-primary">Go somewhere</a>'
      domString += '</div>'
      domString += '</div>'
     

      util.printToDom('bear-card', domString)
      bearButtonEvent();
    })
    domString += '</div>'
 };

bearBuilder();


const newBear = (e) => {
    e.preventDefault();
    const brandNewBear = {
        id: ``,
        name: document.getElementById('bear-name').value,
        imageUrl: document.getElementById('bear-image').value,
    }

    bearData.getBear().push(brandNewBear)
    // console.log(dinos);
    // document.getElementById('new-dino-form').reset();
    // document.getElementById('collapseOne').classList.remove('show');
    bearBuilder();
    
};

export default { bearBuilder, newBear, bearButtonEvent }