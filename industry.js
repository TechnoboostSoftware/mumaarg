var mentorObj = [
    {
        "name": "Mukesh Ghuraiya",
        "domain": "Branding/Marketing",
        "about": "Chief Marketing Officer - Modi Naturals | 14+ Years in Consumer Business | Digital Evangelist | Award-Winning Marketer | Speaker & Mentor | Fueling Growth through Ideas and Storytelling.",
        "img": "../../img/industryExperts-0.svg",
        "mobileImg": "../../img/mobileIndustryExperts-0.webp",
        "calendarLink": "https://calendly.com/mukesh_ghuraiya/pgp-rise-aspirants?guests=mastersunion@mymaarg.com",
        "linkedin": "https://www.linkedin.com/in/mukeshghuraiya/"
    },

    {
        "name": "Havish Madhvapaty",
        "domain": "Consulting",
        "about": "Founder @ Havish M Consulting | Harvard Online Data Science | 40u40 Analytics | Faculty at IMT Ghaziabad, Masters' Union and SRCC | ET Masterclass Instructor | AuthorX20 | MOS MCT MCDA",
        "img": "../../img/industryExperts-1.svg",
        "mobileImg": "../../img/mobileIndustryExperts-1.webp",
        "calendarLink": "https://calendly.com/havish_madhvapaty/30min?guests=mastersunion@mymaarg.com",
        "linkedin": "https://www.linkedin.com/in/havishm/"
    },

    {
        "name": "Animesh Chandra",
        "domain": "Tech",
        "about": "Lead Product Manager- Expedia group | ex-Zomato| IIT Roorkee | Product Mentor",
        "img": "../../img/industryExperts-2.svg",
        "mobileImg": "../../img/mobileIndustryExperts-2.webp",
        "calendarLink": "https://calendly.com/chandra-animesh18/30min?guests=mastersunion@mymaarg.com",
        "linkedin": "https://www.linkedin.com/in/animeshchandra/"
    },

    // {
    //     "name": "Sindhu Biswal",
    //     "domain": "Digital/Growth Marketing",
    //     "about": "Head of Growth - White.Inc | Ex-FilterCopy, PayTm, Jupiter, Betterhalf",
    //     "img": "../../img/industryExperts-3.svg",
    //     "mobileImg": "../../img/mobileIndustryExperts-3.webp",
    //     "calendarLink": "",
    //     "linkedin": "https://www.linkedin.com/in/sindhubiswal/"
    // },

    {
        "name": "Jitesh Goel",
        "domain": "Tech",
        "about": "Product at UBER | Previously at - Blinkit, upGrad",
        "img": "../../img/industryExperts-4.svg",
        "mobileImg": "../../img/mobileIndustryExperts-4.webp",
        "calendarLink": "https://calendly.com/jiteshgoel/60min?guests=mastersunion@mymaarg.com",
        "linkedin": "https://www.linkedin.com/in/jitesh-goel/"
    },

    // {
    //     "name": "Vikrant Khorana",
    //     "domain": "Fintech/Operations",
    //     "about": "Operating Partner - FinTech | Chief Innovation Officer - Payswiff",
    //     "img": "../../img/industryExperts-5.svg",
    //     "mobileImg": "../../img/mobileIndustryExperts-5.webp",
    //     "calendarLink": "",
    //     "linkedin": "https://www.linkedin.com/in/vikrant-khorana-ba61a42/"
    // },

    // {
    //     "name": "Asif Masani",
    //     "domain": "Finance",
    //     "about": "Author of All About FP&A | Blogger | Content Creator | Ex Citi & EY | Chartered Accountant",
    //     "img": "../../img/industryExperts-6.svg",
    //     "mobileImg": "../../img/mobileIndustryExperts-6.webp",
    //     "calendarLink": "",
    //     "linkedin": "https://www.linkedin.com/in/asifmasani/"
    // },

    {
        "name": "Siddharth Menon",
        "domain": "Sales,Marketing,Strategy",
        "about": "Specialist in the Consumer and Retail space | Ex CMO - Epigamia",
        "img": "../../img/industryExperts-7.svg",
        "mobileImg": "../../img/mobileIndustryExperts-7.webp",
        "calendarLink": "https://calendly.com/siddrmenon/30min?guests=mastersunion@mymaarg.com",
        "linkedin": "https://www.linkedin.com/in/siddarthmenon/"
    }
]


var mentorsOrder = [0, 1, 2, 3, 4]
$(document).ready(function () {
    initilise();
})

function initilise() {
    filterApplied = false
    domainFiltered = "";

    var filterObj = {
        "domain": [],
    }

    for (key in filterObj) {
        filterObj[key] = [...new Set(mentorObj.map((element) => element[key]))];
    }

    createMentorCard(mentorObj)
    createFilter(filterObj)
}


function createMentorCard(mentorObj) {
    let mentorHtml = ''
    // if(mentorObj.length == 0){
    //    mentorHtml= '<div class="flex items-center gap-y-3 py-3"><p> No Data Found ! Please change filter and try again</p></div>';
    //    $("#mentorList").html(mentorHtml)
    //     return
    // }
    if (filterApplied) {
        for (let i = 0; i < mentorObj.length; i++) {
            // let i = mentorsOrder[j]
            mentorHtml += ` <div class="flex items-center gap-y-3 py-3">
            <div class="flex  w-full gap-x-5 items-center grid grid-cols-12 rounded-lg"
                style="border: 1px solid #60BBE0; background: #F7F8FB;">
                <div class="md:col-span-3 col-span-12 md:flex hidden items-center justify-center h-full w-full bgRounded"
                    style="background: rgba(96, 187, 224, 0.10);">
                    <div class="flex justify-center items-center"><img src="${mentorObj[i].img}"
                            class="w-full pb-2"></div>
                </div>
                <div class="md:col-span-3 col-span-12 flex items-center md:hidden block">
                    <img src="${mentorObj[i].mobileImg}" class="xl:w-3/4 w-full">
                </div>
                <div class="md:col-span-6 col-span-12 py-5 md:px-0 px-5">
                    <div class="flex flex-col justify-start md:items-start items-center">
                        <div class="flex items-center md:justify-start justify-center gap-x-3 mb-3">
                            <span
                                class="mentorName font-bold text-2xl text-main">${mentorObj[i].name}</span>
                            <a href="${mentorObj[i].linkedin}" target="_blank"><img src="../../img/masterLinkedin.png"
                                    target="_blank" class="mentorLinked mt-1"></a>
                        </div>
                        
                        <div class="flex flex-col gap-y-3 md:pt-0 pt-5">
                            <div class="flex gap-x-3 items-start">
                                <img src="../../img/briefcase.svg" class="mt-1 mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main w-4/5">
                                    ${mentorObj[i].about}</p>
                            </div>

                            <div class="flex gap-x-3 items-center">
                                <img src="../../img/cude.svg" class="mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main"><span
                                        class="text-base font-bold">Domain -</span> ${mentorObj[i].domain}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:col-span-3 col-span-12 py-5 md:pr-5 md:pl-0 px-5">
                    <div class=" md:flex hidden items-center justify-center">
                        <img src="../../img/maarg-logo.svg" class = "w-24">
                    </div>
                    <div class="">
                        <div class="md:mt-5 m-0">
                            <a href="javascript:;" onclick="openCalendar('${mentorObj[i].calendarLink}')"
                                class="w-full flex items-center justify-center text-sm text-white btn-Bg font-semibold py-2 text-center rounded-lg">
                                <span>Book Now</span> </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>`
            $("#mentorList").html(mentorHtml)
        }
    } else {
        for (let j = 0; j < mentorsOrder.length; j++) {
            let i = mentorsOrder[j]
            mentorHtml += ` <div class="flex items-center gap-y-3 py-3">
            <div class="flex  w-full gap-x-5 items-center grid grid-cols-12 rounded-lg"
                style="border: 1px solid #60BBE0; background: #F7F8FB;">
                <div class="md:col-span-3 col-span-12 md:flex hidden items-center justify-center h-full w-full bgRounded"
                    style="background: rgba(96, 187, 224, 0.10);">
                    <div class="flex justify-center items-center"><img src="${mentorObj[i].img}"
                            class="w-full pb-2"></div>
                </div>
                <div class="md:col-span-3 col-span-12 flex items-center md:hidden block">
                    <img src="${mentorObj[i].mobileImg}" class="xl:w-3/4 w-full">
                </div>
                <div class="md:col-span-6 col-span-12 py-5 md:px-0 px-5">
                    <div class="flex flex-col justify-start md:items-start items-center">
                        <div class="flex items-center md:justify-start justify-center gap-x-3 mb-3">
                            <span
                                class="mentorName font-bold text-2xl text-main">${mentorObj[i].name}</span>
                            <a href="${mentorObj[i].linkedin}" target="_blank"><img src="../../img/masterLinkedin.png"
                                    target="_blank" class="mentorLinked mt-1"></a>
                        </div>
                        
                        <div class="flex flex-col gap-y-3 md:pt-0 pt-5">
                            <div class="flex gap-x-3 items-start">
                                <img src="../../img/briefcase.svg" class="mt-1 mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main w-4/5">
                                    ${mentorObj[i].about}</p>
                            </div>

                            <div class="flex gap-x-3 items-center">
                                <img src="../../img/cude.svg" class="mentorLinked">
                                <p class="mentorName font-normal md:text-base text-sm text-main"><span
                                        class="text-base font-bold">Domain -</span> ${mentorObj[i].domain}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:col-span-3 col-span-12 py-5 md:pr-5 md:pl-0 px-5">
                    <div class=" md:flex hidden items-center justify-center">
                        <img src="../../img/maarg-logo.svg" class = "w-24">
                    </div>
                    <div class="">
                        <div class="md:mt-5 m-0">
                        <a href="javascript:;" onclick="openCalendar('${mentorObj[i].calendarLink}')"
                        class="w-full flex items-center justify-center text-sm text-white btn-Bg font-semibold py-2 text-center rounded-lg">
                        <span>Book Now</span></a>
                        </div>
                    </div>

                </div>
            </div>

        </div>`
            $("#mentorList").html(mentorHtml)
        }
    }
}

function createFilter(filterObj) {
    createDomainFilter(filterObj['domain'])
}

function createDomainFilter(filter) {
    filterHtml = ''
    filterHtml += ' <ul class="filter">'
    filter.forEach(element => {
        filterHtml += ' <li class="flex gap-x-3 py-2">';
        filterHtml += '<input type="radio" class=""   name="domain" value="' + element + '" onclick="applyFilter(this,`domain`)">';
        filterHtml += '<span class="text-sm text-main">' + element + '</span>';
        filterHtml += '</li>';
    });
    filterHtml += '</ul>';
    $("#domain").html(filterHtml)
}

function applyFilter(elem, filter) {

    if (!filterApplied) {
        clonedMentorObj = [...mentorObj]
        filterApplied = true
    }

    let currentFilter = elem.value;


    if (filter == 'domain') {
        clonedMentorObj = [...mentorObj]
        domainFiltered = clonedMentorObj.filter(d => d['domain'] == currentFilter)
        createMentorCard(domainFiltered)

    }

}

function dropDownAnswer(element) {
    if (element.parentElement.classList.contains('close')) {
        element.parentElement.classList.remove('close');
        element.parentElement.classList.add('open');
    }
    else {
        element.parentElement.classList.add('close');
        element.parentElement.classList.remove('open');
    }
}

function resourcesDropDown(id, name) {
    if (id == 'web' && name == 'resouce') {
        $("#resourcesDropDownResouce").toggleClass("hidden")
    }
    else if (id == 'web' && name == 'college') {
        $("#resourcesDropDownCollege").toggleClass("hidden")
    }
    else if (id == 'phone' && name == 'resouce') {
        $("#resourcesDropDownMobileResource").toggleClass("hidden")
    }
    else {
        $("#resourcesDropDownMobileCollege").toggleClass("hidden")
    }
}

function lessDisplay() {
    $(".mentorBoxes").addClass("hidden")
    $(".less").addClass("hidden")
    $(".more").removeClass("hidden")

}

function displayMore() {
    $(".mentorBoxes").removeClass("hidden")
    $(".more").addClass("hidden")
    $(".less").removeClass("hidden")
}

function filterTypeDrop(id) {
    $('.dontShowMobile').addClass('hidden')
    $('#' + id).removeClass('hidden')
}

function filterDrop(id) {
    $('#' + id).toggleClass('hidden')
    $('#arrowUp').toggleClass('dropUp')
}

function mobileFilterDisplay(id) {
    $(id).toggleClass('hidden')
}

function openCalendar(calendarLink) {
    if (calendarLink == "") {
        alert("Something went wrong ! please try after sometime")
    } else {
        Calendly.initPopupWidget({ url: calendarLink })
    }

}