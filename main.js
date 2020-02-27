
const bears = [
    {
        name: '',
        imageUrl: '',
        id: '',
    }
    ];
    
    const printToDom = (divId, textToPrint) => {
        const selectedDiv = document.getElementById(divId);
        selectedDiv.innerHTML = textToPrint;
      };
      
    
    
const bearFormBuilder = () => {
    let domString = ``
    for(let i=0; i < bears.length; i++) {
       domString += '<form>'
       domString += '<div class="row">'
       domString += '<div class="col">'
       domString += `<input type="text" class="form-control" placeholder="${bears.name}"></div>`
       domString += '<div class="col">'
       domString += `<input type="text" class="form-control" placeholder="${bears.imageUrl}"></div>`
       domString += '</div>'
       domString += '</form>'
       domString += '<button type="button" class="btn btn-primary">New Bear</button>'
    
       printToDom('bear-card', domString)
    }
};
    bearFormBuilder();