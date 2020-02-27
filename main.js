import util from './helpers/util.js';


const bears = [
    {
        name: 'Stephen',
        imageUrl: 'https://cottagelife.com/wp-content/uploads/2018/06/animal-bear-brown-bear-35435-1200x796.jpg',
        id: 'bear1',
    }
];

    
// const selectBear = (e) => {
//     const bearId = e.target.id;
//     console.log(bearId)

//   }


// const bearSubmitEvent = (e) => {
//     const bearButtons = document.getElementsByClassName('new-Bear');
//     for(let i=0; i<bearButtons.length; i++){
//       bearButtons[i].addEventListener('click', selectBear);
//     }
//   }
   
    
    
// const bearFormBuilder = () => {
//     let domString = ``
//     for(let i=0; i < bears.length; i++) {
//        domString += '<form>'
//        domString += '<div class="row">'
//        domString += '<div class="col">'
//        domString += `<input type="text" class="form-control" placeholder="${bears.name}"></div>`
//        domString += '<div class="col">'
//        domString += `<input type="text" class="form-control" placeholder="${bears.imageUrl}"></div>`
//        domString += '</div>'
//        domString += '</form>'
//        domString += `<button type="button" id="${bears.id}" class="btn btn-primary new-Bear">New Bear</button>`
    
//        util.printToDom('bear-form', domString)
//        document.getElementById(bears.id).addEventListener('click', bearFormBuilder);
//        console.log()

//     }
// };
//     bearFormBuilder();

const bearBuilder = () => {
    let domString = ''
    for (let i =0; i < bears.length; i++) {
      domString += '<div class="card" style="width: 18rem;">'
      domString += `<img src="${bears.imageUrl}" class="card-img-top" alt="...">`
      domString += '<div class="card-body">'
      domString += `<h5 class="card-title">${bears.name}</h5>`
      domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>'
      domString += '<a href="#" class="btn btn-primary">Go somewhere</a>'
      domString += '</div>'
      domString += '</div>'

      util.printToDom('bear-card', domString)
// document.getElementById('').addEventListener('click', bearBuilder);
 }
};

bearBuilder();

    