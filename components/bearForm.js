import util from '../helpers/util.js'

const bearFormBuilder = (e) => {
    // const bearId = e.target.closest('.card').id;
    // const selectedBear = bear.find((x) => bearId === x.id);
    let domString = ''

domString += '<div class="col-10 offset-1">'
domString += '<div class="accordion" id="accordionExample">'
domString += '<div class="card">'
domString += '<div class="card-header" id="headingOne">'
domString += '<h2 class="mb-0">'
domString += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">'
domString += '<i class="fas fa-plus-circle"></i> Add Bear'
domString += '</h2>'
domString += '</div>'
domString += '<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">'
domString += '<div class="card-body">'
domString += '<form class="row" id= "new-bear-form">'
domString += '<div class="col-6">'
domString += '<div class="form-group">'
domString += '<label for="bear-name">Name</label>'
domString += '<input type="text" class="form-control" id="bear-name" aria-describedby="nameHelp" placeholder="Enter name">'
domString += '</div>'
domString += '<div class="form-group">'
domString += '<label for="bear-image">Image</label>'
domString += '<input type="text" class="form-control" id="bear-image" aria-describedby="ageHelp" placeholder="Enter picture">'
domString += '</div>'
domString += '<button type="submit" class="submit-new-bear" class="btn btn-primary">Submit</button>'
domString += '</form>'
domString += '</div>'
domString += '</div>'
domString += '</div>'
domString += '</div>'

util.printToDom('bear-form', domString)

}


export default { bearFormBuilder }

