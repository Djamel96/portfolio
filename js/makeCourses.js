class CoursesCategory {
    static personelDeve = 'PersonalDeveloppement'
    static backendDeveloppement = "BackendDeveloppement"
    static frontedDeveloppement = "FrontedDeveloppement"
    static graphicDesign = "GraphicDesign"
    static businessStartups = "BusinessStartups"
    static networkingSecurity = "NetworkingSecurity"
    static projectManagement = "ProjectManagement"
    static dataScience = "DataScience"

}

class Institute {
    static coursera = "coursera"
    static plurarsight = "plurarsight"
    static udemy = "udemy"
    static udacity = "udacity"
    static linkedIn = "linkedIn"
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
    new Course("Coursera Business English: Networking",
        CoursesCategory.personelDeve,
        "images/englishNetworking.png",
        "https://coursera.org/share/3654ecc5a291910ba1cd7d758e4335e3",
        Institute.coursera),
    new Course("Learn Technologie in the Information Age",
        CoursesCategory.personelDeve,
        "images/technologiePluralsight.png",
        "images/technologiePluralsight.png",
        Institute.coursera),
    new Course("Google DeveFest HACKATHON Algiers",
        CoursesCategory.personelDeve, "images/GDG HACKATHON.png",
        "images/GDG HACKATHON.png", Institute.other),
    new Course("Inter Agiers High Schools Culturel Competition",
        CoursesCategory.personelDeve, "images/Competition.png",
        "images/Competition.png", Institute.coursera),
    new Course("Udemy PHP 7 Base On the Official Documentation",
        CoursesCategory.backendDeveloppement,
        "images/udemyPHP7.png",
        "https://www.udemy.com/certificate/UC-04771455-4a2d-4858-8ac9-8696ce9bd243/",
        Institute.other),
    new Course("Coursera Building Web Applications in PHP",
        CoursesCategory.backendDeveloppement,
        "images/BuildingWeb ApplicationsInPHP.png",
        "http://www.coursera.org/verify/SDBL7M3MKGFN",
        Institute.coursera),
    new Course("Udemy Object Oriented PHP Programming",
        CoursesCategory.backendDeveloppement,
        "images/phpOOP.png",
        "https://www.udemy.com/certificate/UC-95f37ffc-32e5-4d05-a7e9-2368a427cf29/",
        Institute.coursera),
    new Course("Introduction to Structured Query Language (SQL)",
        CoursesCategory.dataScience,
        "images/sqlMechekeganCoursera.png",
        "https://www.coursera.org/account/accomplishments/verify/BULM3FB4N696",
        Institute.coursera),
    new Course("Intermediate Relational Database and SQL",
        CoursesCategory.dataScience,
        "images/courseraSql.png",
        "https://coursera.org/share/c0550b3231f3dd4d6fa399bde673ea0c",
        Institute.coursera),
    new Course("Coursera SQL Server Guided Project",
        CoursesCategory.dataScience,
        "images/sqlServer.png",
        "https://coursera.org/share/ef71c2ea71b623b66140d1e6ed258a47",
        Institute.coursera),
    new Course("Pluralsight Laravel Basics",
        CoursesCategory.backendDeveloppement,
        "images/laravel1.png",
        "images/laravel1.png",
        Institute.coursera),
    new Course("Pluralsight Laravel Model & Data",
        CoursesCategory.backendDeveloppement,
        "images/laravel2.png",
        "images/laravel2.png",
        Institute.coursera),
    new Course("Udacity Full Stack Web Developer",
        CoursesCategory.frontedDeveloppement,
        "images/fullstack2.png",
        "images/fullstack2.png",
        Institute.coursera),
    new Course("Udacity Android Native Developer",
        CoursesCategory.frontedDeveloppement,
        "images/android.png",
        "images/android.png",
        Institute.coursera),
    new Course("Pluralsight Flutter Fast Coding in Multiscreen App",
        CoursesCategory.frontedDeveloppement,
        "images/flutterManyScreens.png",
        "images/flutterManyScreens.png",
        Institute.coursera),
    new Course("Pluralsight Add Flutter to Android App",
        CoursesCategory.frontedDeveloppement,
        "images/addFlutterToAndroid.png",
        "images/addFlutterToAndroid.png",
        Institute.coursera),
    new Course("Udemy Logo Design Essentails",
        CoursesCategory.graphicDesign,
        "images/logoDesign.png",
        "https://www.udemy.com/certificate/UC-d405eb95-0c5c-4b3e-b24a-ab80b4f8dffe/",
        Institute.udemy),
    new Course("Pluralsight Fast Prototyping with Flutter & Kotlin",
        CoursesCategory.graphicDesign,
        "images/FlutterPrototyping.png",
        "images/FlutterPrototyping.png",
        Institute.plurarsight),
    new Course("Udemy Business Model Canvas",
        CoursesCategory.businessStartups,
        "images/bmc.png",
        "https://www.udemy.com/certificate/UC-6db5b369-f01e-4584-9fc8-a4e390b90665/",
        Institute.udemy),
    new Course("Udemy Business Mindset & How to Master Goals",
        CoursesCategory.businessStartups,
        "images/mindSet.png",
        "https://www.udemy.com/certificate/UC-f6a1220a-ef0c-4413-a6a6-842d958b0836/",
        Institute.udemy),
    new Course("Medafco Alinov Startup bootcamp",
        CoursesCategory.businessStartups,
        "images/Alinov.png",
        "images/Alinov.png",
        Institute.other),
    new Course("INJAZ Algeria Startup Creation Competition",
        CoursesCategory.businessStartups,
        "images/INJAZ.png",
        "images/INJAZ.png",
        Institute.other),
    new Course("Djezzy Algeria Startup Toolbox Competition",
        CoursesCategory.businessStartups,
        "images/Djezzy.png",
        "images/Djezzy.png",
        Institute.other),
    new Course("ELIP Design Thinking and Startup Competition",
        CoursesCategory.businessStartups,
        "images/ELIP.png",
        "images/ELIP.png",
        Institute.other),
    new Course("Udemy The Complete Ethical Hacking Course",
        CoursesCategory.networkingSecurity,
        "images/ethical.png",
        "https://www.udemy.com/certificate/UC-60151812-5a05-46f8-9fb8-e215372f73b2/",
        Institute.udemy),
    new Course("Cisco networking and security fundamentals",
        CoursesCategory.networkingSecurity,
        "images/CISCO.png",
        "images/CISCO.png",
        Institute.other),
    new Course("Udemy Agile Project Management with Scrum",
        CoursesCategory.projectManagement,
        "images/scrum.png",
        "https://www.udemy.com/certificate/UC-6f4fcbfb-50d8-483c-bfcb-932a2a5291da/",
        Institute.udemy),
    new Course("Udemy Complete Ms Powerpoint Guide",
        CoursesCategory.projectManagement,
        "images/powerpoint.png",
        "https://www.udemy.com/certificate/UC-73cbea43-95c6-40ff-b672-9eedb6e908b4/",
        Institute.udemy),
    new Course("Udemy Project Management : Deliver on Time",
        CoursesCategory.projectManagement,
        "images/diliver.png",
        "https://www.udemy.com/certificate/UC-e5f90fea-d225-4c90-b902-85503467ca00/",
        Institute.udemy),
    new Course("Udemy Google Advanced Search",
        CoursesCategory.projectManagement,
        "images/googleSearch.png",
        "https://www.udemy.com/certificate/UC-536a86f8-2964-4cd6-a708-fbe4dab83595/",
        Institute.udemy),
    new Course("Project Management with MsProject",
        CoursesCategory.projectManagement,
        "images/MS Project.png",
        "images/MS Project.png",
        Institute.other),
    new Course("Become a Sales Representative",
        CoursesCategory.businessStartups,
        "images/salespath.png",
        "images/salespath.png",
        Institute.linkedIn),
    new Course("Prepare Yourself for a Career in Sales",
        CoursesCategory.businessStartups,
        "images/PrepareYourselfforaCareerinSales.png",
        "images/PrepareYourselfforaCareerinSales.png",
        Institute.linkedIn),
    new Course("Sales Foundations",
        CoursesCategory.businessStartups,
        "images/SalesFoundations.png",
        "images/SalesFoundations.png",
        Institute.linkedIn),

    new Course("Learning Data Analytics",
        CoursesCategory.dataScience,
        "images/dataanallinkedin.png",
        "images/dataanallinkedin.png",
        Institute.linkedIn),
    new Course("Learning SQL Programming",
        CoursesCategory.dataScience,
        "images/sqlLinkedin.png",
        "images/sqlLinkedin.png",
        Institute.linkedIn),
    new Course("Sales Negotiation",
        CoursesCategory.businessStartups,
        "images/SalesNegotiation.png",
        "images/SalesNegotiation.png",
        Institute.linkedIn),
    new Course("Sell with stories",
        CoursesCategory.businessStartups,
        "images/sellwithStories.png",
        "images/sellwithStories.png",
        Institute.linkedIn),
    new Course("Soft Skills for Sales Professionals",
        CoursesCategory.businessStartups,
        "images/SoftSkillsforSalesProfessionals.png",
        "images/SoftSkillsforSalesProfessionals.png",
        Institute.linkedIn),
    new Course("Sales: Handling Objections",
        CoursesCategory.businessStartups,
        "images/SalesHandlingObjections.png",
        "images/SalesHandlingObjections.png",
        Institute.linkedIn),
    new Course("Asking Great Sales Questions",
        CoursesCategory.businessStartups,
        "images/AskingGreatSalesQuestions.png",
        "images/AskingGreatSalesQuestions.png",
        Institute.linkedIn),
    new Course("Sales: Closing Strategies",
        CoursesCategory.businessStartups,
        "images/SalesClosingStrategies.png",
        "images/SalesClosingStrategies.png",
        Institute.linkedIn),
    new Course("AWS Machine Learning",
        CoursesCategory.dataScience,
        "images/AWSMachineLearning.png",
        "images/AWSMachineLearning.png",
        Institute.udacity),
    new Course("Data Fluency: Exploring and Describing Data",
        CoursesCategory.dataScience,
        "images/datafluency.png",
        "images/datafluency.png",
        Institute.linkedIn),


];
//


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
    anchor.setAttribute("target", "_blank");

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