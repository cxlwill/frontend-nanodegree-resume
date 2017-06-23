//个人信息
var bio = {
    "name" : "Jocleyn Chen",
    "role" : "Web Designer",
    "contacts" : {
        "mobile": "18750281283",
        "email": "cxlwill@outlook.com",
        "github": "cxlwill",
        "wechat": "cxlwill",
        "blog": "cxlwill.com",
        "location": "Xiamen"
    },
    "welcomeMessage": "A lawyer who loves coding.",
    "biopic" : "images/avatar.jpg",
    "skills" : ["HTML/CSS", "JavaScript","Python","R","Cube", "Sudoku", "Legal skills"]
};
//工作情况
var work = {
    "jobs" :[
        {
            "employer": "Beijing Yingke Lawfirm",
            "title": "Legal Assistant",
            "location": "Xiamen, CN",
            "dates": "June, 2016 - December, 2016",
            "description": "Assisted Senior Lawyers in legal research, information disclosure and contracts drafting, involving areas of Capital Market, Real Estate and Construction."

        },
        {
            "employer": "Guotai Junan Securities Co. Ltd.",
            "title": "Intern",
            "location": "Shanghai, CN",
            "dates": "March, 2014 - May, 2014",
            "description": "Assisted in bidding and distribution of government bonds and financial bonds, including drafting distribution agreements and collect published information."
        }
    ]
};
//项目背景
var projects = {
    "projects" :[
        {
            "title": "MagicMirror",
            "dates": "Summer, 2017",
            "description": "A homemade MagicMirror driven by Raspberry Pi, including Chatbot(Chinese and English supported), home assistant system, built-in homebridge(Apple Homekit Support) and Showpage.",
            "images": ["images/MagicMirror.jpg"],
            "url": "https://github.com/cxlwill/MagicMirror"
        },
        {
            "title": "MM-Chatbot",
            "dates": "Summer, 2017",
            "description": "A Chinese Chatbot written in Python, using Baidu ASR&TTS and Tuling Robot.",
            "images": ["images/Chatbot.jpg"],
            "url": "https://github.com/cxlwill/MagicMirrorChatbot"
        },
        {
            "title": "Project Showpage",
            "dates": "June, 2017",
            "description": "A page shows all projected finished in Udacity Front-end nanodegree.",
            "images": ["images/website.jpg"],
            "url": "https://github.com/cxlwill/Udacity_FEND_P3"
        }
    ]
};
//教育背景
var education = {
    "schools": [
        {
            "name": "Fudan University",
            "location": "Shanghai, CN",
            "degree": "BA",
            "majors": ["Law"],
            "dates": "September, 2010 - June, 2014",
            "url": "http://www.fudan.edu.cn"
        },
        {
            "name": "Queen Mary University of London",
            "location": "London, GB",
            "degree": "Masters",
            "majors": ["International Business Law"],
            "dates": "September, 2014 - November, 2015",
            "url": "http://www.qmul.ac.uk/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-end Nanodgree",
            "school": "Udacity",
            "dates": "Summer, 2017",
            "url" : "https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic"
        }
    ]
};

//信息展示
bio.display = function () {
    //头部信息
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName, formattedRole);
    //联系方式
    var formattedContacts = function () {
        HTMLcontactGeneric.replace("%contact%", "Contacts");
        HTMLcontactGeneric.replace("data", "");
    };
    $("#topContacts").append(formattedContacts());
    //具体联系方式
    //var contactsLength = Object.keys(bio.contacts).length;
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedWechat = HTMLwechat.replace("%data%", bio.contacts.wechat);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedContacts = formattedMobile + formattedEmail + formattedWechat + formattedGithub +formattedBlog +formattedLocation;
    $("#topContacts").append(formattedContacts);
    if (Object.keys(bio.contacts).length > 0) {
        $("#footerContacts").append(formattedContacts);
    }
    //头像及问候语
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedWelcomeMsg, formattedPic);
    //技能展示
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        })
    }
}
bio.display();
//工作展示
work.display = function () {
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
        $(".work-entry:last").append(formattedEmployerTitle, formatteddates, formattedLocation, formattedDescription);
        }
    )
}
work.display();
//项目展示
projects.display = function() {
    projects.projects.forEach(function (project) {
        $("#projects").append(HTMLprojectStart);
        var Title = HTMLprojectTitle.replace("%data%", project.title);
        var formattedTitle = Title.replace("#", project.url);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        if (project.images.length > 0) {
            project.images.forEach (function (image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
                })
            }
        }
    )
}
projects.display();
//教育信息展示
education.display = function() {
    //全日制教育
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolTitle =  formattedSchoolName + formattedSchoolDegree;
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchoolTitle, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
            }
        )
    //在线教育
    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            var formattedCourseTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedCourseSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedCourseHeader = formattedCourseTitle + formattedCourseSchool;
            var formattedCourseDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedURL = HTMLonlineURL.replace("%data%", course.url);
            var formattedCourseURL = formattedURL.replace("#", course.url);
            $(".education-entry:last").append(formattedCourseHeader, formattedCourseDates, formattedCourseURL);
            }
            )
        }
    }
education.display();
//地图展示
$("#mapDiv").append(googleMap);
//d3.js尝试
var data = [6, 5, 7, 5, 8, 9, 8];

var width = 200,
    barHeight = 29;

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 10);

//练习-定位
/*
*function locationizer(work_obj) {
*    var locationArray = [];
*    work_obj.jobs.forEach(function (job) {
*        locationArray.push(job.location);
*    }
*    );
*    return locationArray;
*}
*console.log(locationizer(work));
*/

//练习-改名
/*function inName() {
*    var name = bio.name.trim().split(" ");
*    name[1] = name[1].toUpperCase();
*    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
*    name = name[0] + " " + name[1];
*    console.log(name);
*}
*$("#main").append(internationalizeButton);
*/