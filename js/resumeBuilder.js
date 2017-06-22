/*
var formattedSkills = HTMLskills.replace("%data%", skills);
var name = "Jocleyn Chen";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Designer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
*/

//个人信息
var bio = {
    "name" : "Jocleyn Chen",
    "role" : "Web Designer",
    "contacts" : {
        "mobile": "18750281283",
        "email": "cxlwill@outlook.com",
        "github": "cxlwill",
        "Wechat": "cxlwill",
        "location": "Xiamen"
    },
    "pictureURL" : "",
    "welcomeMessage" : "Hello, World!",
    "skills" : ["cube", "programming", "front-end"]
};
//工作情况
var work = {
    "jobs" :[
        {
            "employer": "Beijing Yingke Lawfirm",
            "title": "Legal Assistant",
            "location": "Xiamen",
            "dates": "June, 2016 - December, 2016",
            "description": "Assisted Senior Lawyers in legal research, information disclosure and contracts drafting, involving areas of Capital Market, Real Estate and Construction."

        },
        {
            "employer": "Guotai Junan Securities Co. Ltd.",
            "title": "Intern",
            "location": "Shanghai",
            "dates": "March, 2014.3 - May, 2014",
            "description": "Assisted in bidding and distribution of government bonds and financial bonds, including drafting distribution agreements and collect published information."
        }
    ]
};
//项目背景
var projects = {
    "projects" :[
        {
            "title": "Animal Card",
            "dates": 2017,
            "description": "A page shows Black Face Sheep's information.",
            "images": ""
        },
        {
            "title": "Project Showpage",
            "dates": 2017,
            "description": "A page shows all projected finished in Udacity Front-end nanodegree.",
            "images":""
        }
    ]
};
//教育背景
var education = {
    "school": [
        {
            "name": "Fudan University",
            "city": "Shanghai, CN",
            "degree": "BA",
            "majors": ["Law"],
            "minor": "Account",
            "Graduation": 2014
        },
        {
            "name": "Queen Mary University of London",
            "city": "London, GB",
            "degree": "Masters",
            "majors": ["International Business Law"],
            "minor": "Finance",
            "Graduation": 2015
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-end Nanodgree",
            "school": "Udacity",
            "dates": 2017,
            "url" : ""
        }
    ]
};
//技能展示
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);


//工作展示
work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        //格式化所有属性
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formatteddates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        //调用显示
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formatteddates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
)
//项目展示
projects.display = function() {
    projects.projects.forEach(function (project) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);

    if (project.images.length > 0) {
        project.images.forEach(function (image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
                    }
                )
            }
        }
    )
}

projects.display();

//练习
function locationizer(work_obj) {
    var locationArray = [];
    work_obj.jobs.forEach(function (job) {
        locationArray.push(job.location);
    }
    );
    return locationArray;
}

console.log(locationizer(work));

//练习-改名

function inName() {
    var name = bio.name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    name = name[0] + " " + name[1];
    console.log(name);
}


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
