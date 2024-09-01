const images = [
    "images/recommandation/1.png",
    "images/recommandation/2.png",
    "images/recommandation/3.png",
    "images/recommandation/4.png",
    "images/recommandation/5.png",
    "images/recommandation/6.png",
    "images/recommandation/7.png"
];

images.forEach(myFunction);

function myFunction(oneImage) {

    var firstDiv = document.createElement("DIV");
    firstDiv.setAttribute("class", "col-md-6");


    var secondDiv = document.createElement("DIV");
    secondDiv.setAttribute("class", "services-inner-box polaroid");
    secondDiv.style.height = "200px";

    var thirddDiv = document.createElement("DIV");
    thirddDiv.setAttribute("class", "right-box-pro wow fadeIn");

    var anchor = document.createElement("a");
    anchor.setAttribute("href", oneImage);
    anchor.setAttribute("target", "_blank");

    var image = document.createElement("img");
    image.setAttribute("src", oneImage);
    image.setAttribute("class", "img-fluid");

    image.style.height = 'auto';
    image.style.maxHeight = 'none';


    var firstDiv4 = document.createElement("DIV");
    firstDiv4.setAttribute("class", "mycontainer");

    //the title
    // var name = document.createElement("P");
    // var nameText = document.createTextNode(course.name);
    // name.appendChild(nameText);
    // firstDiv4.appendChild(name);

    //the image
    anchor.appendChild(image);

    //third div
    thirddDiv.appendChild(anchor);
    thirddDiv.appendChild(firstDiv4);

    //second div :
    secondDiv.appendChild(thirddDiv);

    //main div
    firstDiv.appendChild(secondDiv);
    document.getElementById('recomandation').appendChild(firstDiv);
}