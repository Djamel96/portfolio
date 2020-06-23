class CoursesCategory {
    static personelDeve = 'PersonalDeveloppement'
    static backendDeveloppement = "BackendDeveloppement"
    static frontedDeveloppement = "FrontedDeveloppement"
    static graphicDesign = "GraphicDesign"
    static businessStartups = "BusinessStartups"
    static networkingSecurity = "NetworkingSecurity"
    static projectManagement = "ProjectManagement"
    static databases = "Databases"
}

class Institute {
    static coursera = "coursera"
    static plurarsight = "plurarsight"
    static udemy = "udemy"
    static udacity = "udacity"
    static other
}


class Course {
    constructor(name, category, certificatePath, certificateUrl, institute) {
        this.name = name
        this.category = category
        this.certificatePath = certificatePath
        this.certificateUrl = certificateUrl != "" ? certificateUrl : certificatePath
        this.institute = institute

    }
}

var myCourses = [
    new Course("Coursera Business English: Networking", CoursesCategory.personelDeve, "images/englishNetworking.png", "https://coursera.org/share/3654ecc5a291910ba1cd7d758e4335e3", Institute.coursera),
    new Course("Learn Technologie in the Information Age", CoursesCategory.personelDeve, "images/technologiePluralsight.png", "images/technologiePluralsight.png", Institute.coursera),
    new Course("Google DeveFest HACKATHON Algiers", CoursesCategory.personelDeve, "images/GDG HACKATHON.png", "images/GDG HACKATHON.png", Institute.other),
    new Course("Inter Agiers High Schools Culturel Competition", CoursesCategory.personelDeve, "images/Competition.png", "images/Competition.png", Institute.coursera),
    new Course("Udemy PHP 7 Base On the Official Documentation", CoursesCategory.backendDeveloppement, "images/udemyPHP7.png", "https://www.udemy.com/certificate/UC-04771455-4a2d-4858-8ac9-8696ce9bd243/", Institute.other),
    new Course("Coursera Building Web Applications in PHP", CoursesCategory.backendDeveloppement, "images/BuildingWeb ApplicationsInPHP.png", "coursera.org/verify/SDBL7M3MKGFN", Institute.coursera),
    new Course("Udemy Object Oriented PHP Programming", CoursesCategory.backendDeveloppement, "images/phpOOP.png", "https://www.udemy.com/certificate/UC-95f37ffc-32e5-4d05-a7e9-2368a427cf29/", Institute.coursera),
    new Course("Introduction to Structured Query Language (SQL)", CoursesCategory.databases, "images/sqlMechekeganCoursera.png", "https://www.coursera.org/account/accomplishments/verify/BULM3FB4N696", Institute.coursera),
    new Course("Intermediate Relational Database and SQL", CoursesCategory.databases, "images/courseraSql.png", "https://coursera.org/share/c0550b3231f3dd4d6fa399bde673ea0c", Institute.coursera),
    new Course("Coursera SQL Server Guided Project", CoursesCategory.databases, "images/sqlServer.png", "https://coursera.org/share/ef71c2ea71b623b66140d1e6ed258a47", Institute.coursera),
    new Course("Pluralsight Laravel Basics", CoursesCategory.backendDeveloppement, "images/laravel1.png", "images/laravel1.png", Institute.coursera),
    new Course("Pluralsight Laravel Model & Data", CoursesCategory.backendDeveloppement, "images/laravel2.png", "images/laravel2.png", Institute.coursera),
    new Course("Udacity Full Stack Web Developer", CoursesCategory.frontedDeveloppement, "images/fullstack2.png", "images/fullstack2.png", Institute.coursera),
    new Course("Udacity Android Native Developer", CoursesCategory.frontedDeveloppement, "images/android.png", "images/android.png", Institute.coursera),
    new Course("Pluralsight Flutter Fast Coding in Multiscreen App", CoursesCategory.frontedDeveloppement, "images/flutterManyScreens.png", "images/flutterManyScreens.png", Institute.coursera),
    new Course("Pluralsight Add Flutter to Android App", CoursesCategory.frontedDeveloppement, "images/addFlutterToAndroid.png", "images/addFlutterToAndroid.png", Institute.coursera),
    new Course("Pluralsight Laravel Model & Data", CoursesCategory.frontedDeveloppement, "images/laravel2.png", "images/laravel2.png", Institute.coursera),
];



myCourses.forEach(myFunction);

function myFunction(course) {

    var firstDiv = document.createElement("DIV");
    firstDiv.setAttribute("class", "col-md-4");

    var secondDiv = document.createElement("DIV");
    secondDiv.setAttribute("class", "services-inner-box polaroid");

    var thirddDiv = document.createElement("DIV");
    thirddDiv.setAttribute("class", "right-box-pro wow fadeIn");

    var anchor = document.createElement("a");
    anchor.setAttribute("href", course.certificateUrl);

    var image = document.createElement("img");
    image.setAttribute("src", course.certificatePath);
    image.setAttribute("class", "img-fluid img-rounded fat-ab");


    var firstDiv4 = document.createElement("DIV");
    firstDiv4.setAttribute("class", "mycontainer");

    //the title
    var name = document.createElement("P");
    var nameText = document.createTextNode(course.name);
    name.appendChild(nameText);
    firstDiv4.appendChild(name);

    //the image
    anchor.appendChild(image);

    //third div
    thirddDiv.appendChild(anchor);
    thirddDiv.appendChild(firstDiv4);

    //second div :
    secondDiv.appendChild(thirddDiv);

    //main div
    firstDiv.appendChild(secondDiv);
    document.getElementById(course.category).appendChild(firstDiv);
}