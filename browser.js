var obj = [
    {
        "name": "Abhishek Kumar",
        "stream": "Science",
        "college": "Shaheed Sukhdev College of Business Studies",
        "course": "BBA - Financial Investment Analysis",
        "pic": 'img/browserMentor-0.svg',
        "yog": '2024'
    },
    {
        "name": "Maduwanthan Madhav Kumar L R",
        "stream": "Commerce",
        "college": "IIM Rohtak",
        "course": "IPM - Integrated Programme in Management",
        "pic": 'img/browserMentor-1.svg',
        "yog": '2023'
    },
    {
        "name": "Aman Kumar",
        "stream": "Other",
        "college": "Kristu Jayanti College",
        "course": "BBA - Finance and Marketing",
        "pic": 'img/browserMentor-2.svg',
        "yog": '2024'
    },
    {
        "name": "Sneha Arora",
        "stream": "Commerce",
        "college": "IIM Indore",
        "course": "IPM - Integrated Programme in Management ",
        "pic": 'img/browserMentor-3.svg',
        "yog": '2021'
    },
    {
        "name": "Shivin",
        "stream": "Commerce",
        "college": "Christ University Bangalore",
        "course": "BBA - Finance and International Business",
        "pic": 'img/browserMentor-4.svg',
        "yog": '2024'
    },
    {
        "name": "Nitya Patidar",
        "stream": "Commerce",
        "college": "IIM Ranchi",
        "course": "IPM - Integrated Programme In Management",
        "pic": 'img/browserMentor-5.svg',
        "yog": '2026'
    },
    {
        "name": "Naveen Kumar",
        "stream": "Commerce",
        "college": "Shri Ram College of Commerce",
        "course": "B.Com Hons",
        "pic": 'img/browserMentor-6.svg',
        "yog": '2026'
    },
    {
        "name": "Guruansh Singh",
        "stream": "Commerce",
        "college": "Christ University, Bangalore",
        "course": "BBA Hons - Marketing",
        "pic": 'img/browserMentor-7.svg',
        "yog": '2024'
    },
    {
        "name": "Amir Raza",
        "stream": "Other",
        "college": "Jamia Millia Islamia",
        "course": "BBA",
        "pic": 'img/browserMentor-8.svg',
        "yog": '2026'
    },
    {
        "name": "Vasu Golyan",
        "stream": "Commerce",
        "college": "Shaheed Sukhdev College of Business Studies",
        "course": "BBA - Financial Investment Analysis",
        "pic": 'img/boyDummy.svg',
        "yog": '2025'
    },
    {
        "name": "Sahil J",
        "stream": "Commerce",
        "college": "MIT-WPU Pune",
        "course": "BBA - Finance",
        "pic": 'img/boyDummy.svg',
        "yog": '2022'
    },
    {
        "name": "Kirti Giyamalani",
        "stream": "Commerce",
        "college": "Symbiosis Centre For Management Studies, Pune",
        "course": "BBA - Finance and Marketing",
        "pic": 'img/girlDummy.svg',
        "yog": '2024'
    },
    {
        "name": "Diya Shah",
        "stream": "Commerce",
        "college": "Mount Carmel College",
        "course": "BBA",
        "pic": 'img/girlDummy.svg',
        "yog": '2023'
    },
    {
        "name": "Dharshan Sagar G",
        "stream": "Science",
        "college": "IIM Rohtak",
        "course": "IPM - Integrated Programme in Management",
        "pic": 'img/boyDummy.svg',
        "yog": '2023'
    }

]

$(document).ready(function () {
    createMentors()
})

function createMentors() {
    $("#number").text(obj.length)
    let html = ""
    for (let i = 0; i < obj.length; i++) {
        html += `<div class="md:col-span-4 col-span-12 ">
        <div class="rounded flex flex-col p-3 h-full" style="background-color: rgba(247, 248, 251, 1);">
            <div class="grid grid-cols-12 flex items-center md:gap-x-3 gap-x-6">
                <div class="col-span-5 flex justify-center">
                    <img src="${obj[i].pic}" class="md:h-32 md:w-32 h-28 w-28 px-3">
                </div>
                <div class="col-span-7">
                    <div class="flex flex-col gap-y-3">
                        <div class="flex">
                            <div class="flex items-center rounded-full gap-x-2 bg-white border px-5 py-1">
                                <img src="img/crown.svg" class="w-5">
                                <p class="text-xs font-medium">New Mentor</p>
                            </div>
                        </div>
                        <p class="text-xl font-bold text-main">${obj[i].name}</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-y-3 md:py-4 py-6">
                <div class="flex items-center gap-x-2">
                    <img src="img/teacher.svg" alt="">
                    <p class="text-sm font-semibold text-lightBlue">${obj[i].course}</p>
                </div>
                <div class="flex items-center gap-x-2">
                    <img src="img/school.svg" alt="">
                    <p class="text-sm font-normal text-main">${obj[i].college}</p>
                </div>
                <div class="flex items-center gap-x-2">
                    <img src="img/calender.svg" alt="">
                    <p class="text-sm font-normal text-main"><span
                            class="text-sm font-semibold text-main">Graduation Year</span> - ${obj[i].yog}</p>
                </div>
                <div class="flex items-center gap-x-2">
                    <img src="img/teacher.svg" alt="">
                    <p class="text-sm font-normal text-main"><span
                            class="text-sm font-semibold text-main">High School Stream</span> - ${obj[i].stream}</p>
                </div>
            </div>
            <button class="btn-Bg text-sm text-white font-semibold w-full rounded-lg py-2">Get Early
                Access</button>
        </div>
    </div>`
        $('#browsermentors').html(html)
    }
}