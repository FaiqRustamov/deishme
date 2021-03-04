// //-------------- register your region --------------------------


// //-----------region select
// // constants
// // const regionSelectOptions = document.querySelector('.region-select-options'),
// //     regionOptions = [...regionSelectOptions.children],
// //     regionValue = document.querySelector('.region-value'),
// //     // formRegionSelect = document.querySelector('.form-region-select'),
// //     regionArrow = document.querySelector('.region-arrow-icon'),
// //     otherRegionInput = document.querySelector('.other-region-type');


// // make visible or hidden region select options
// // formRegionSelect.addEventListener('click', (e) => {
// //     if (regionArrow.classList[1] === "active") {
// //         hideRegionOptions();
// //     } else {
// //         hideDeviceOptions();
// //         showRegionOptions();
// //     }
// // });

// // function hideRegionOptions() {
// //     regionArrow.classList.remove('active');
// //     regionSelectOptions.style.visibility = "hidden";
// //     regionSelectOptions.style.opacity = 0;
// // }

// // function showRegionOptions() {
// //     regionArrow.classList.add('active');
// //     regionSelectOptions.style.visibility = "visible";
// //     regionSelectOptions.style.opacity = 1;
// // }


// // ----- Device choosing

// // remove options active class
// // function removeRegionActive() {
// //     for (let option in regionOptions) {
// //         if (regionOptions[option].innerHTML !== "Other*") {
// //             // console.log(options[option].innerHTML);
// //             otherRegionInput.style.display = "none";
// //         }
// //         regionOptions[option].classList.remove('active');
// //     }
// // }


// // get active element value
// // function regionActiveElementValue() {
// //     for (let option in regionOptions) {
// //         if (regionOptions[option].classList[1] === "active") {
// //             if (regionOptions[option].innerHTML === "Other*") {
// //                 // console.log(options[option].innerHTML);
// //                 otherRegionInput.style.display = "block";
// //             }
// //             return regionOptions[option].innerHTML;
// //         }
// //     }
// // }

// // // chose Region select option
// // regionSelectOptions.addEventListener('click', (e) => {
// //     const selectedOption = e.target;
// //     removeRegionActive();
// //     selectedOption.classList.add('active');
// //     regionValue.innerHTML = regionActiveElementValue()
// // });


// // -------device select
// // constants
// // const deviceSelectOptions = document.querySelector('.device-select-options'),
// //     deviceOptions = [...deviceSelectOptions.children],
// //     deviceValue = document.querySelector('.device-value'),
// //     // formDeviceSelect = document.querySelector('.form-device-select'),
// //     deviceArrow = document.querySelector('.device-arrow-icon'),
// //     otherDeviceInput = document.querySelector('.other-device'),
// //     bottomText = document.querySelector('.bottom-text'),
// //     formSubmitBtn = document.querySelector('.form-submit'),
//     // registerContainer = document.querySelector('.register-container');


// // make visible or hidden select options
// // formDeviceSelect.addEventListener('click', (e) => {
// //     if (deviceArrow.classList[1] === "active") {
// //         hideDeviceOptions();

// //     } else {
// //         hideRegionOptions();
// //         showDeviceOptions();
// //     }
// // });

// // function hideDeviceOptions() {
// //     deviceArrow.classList.remove('active');
// //     deviceSelectOptions.style.visibility = "hidden";
// //     deviceSelectOptions.style.opacity = 0;
// //     // regionArrow.style.display = "block";
// //     // formRegionSelect.style.position = "relative"
// // }

// function showDeviceOptions() {
//     deviceArrow.classList.add('active');
//     deviceSelectOptions.style.visibility = "visible";
//     deviceSelectOptions.style.opacity = 1;
//     deviceSelectOptions.style.overflow = "hidden";
//     regionArrow.style.display = "none";
//     formRegionSelect.style.position = "static";
// }


// // ----- Device choosing

// // remove options active class
// function removeActive() {
//     for (let option in deviceOptions) {
//         if (deviceOptions[option].innerHTML !== "Other*") {
//             // console.log(options[option].innerHTML);
//             otherDeviceInput.style.display = "none";
//         }
//         deviceOptions[option].classList.remove('active');
//     }
// }


// // get active element value
// function ActiveElementValue() {
//     for (let option in deviceOptions) {
//         if (deviceOptions[option].classList[1] === "active") {
//             if (deviceOptions[option].innerHTML === "Other*") {
//                 console.log(deviceOptions[option].innerHTML);
//                 otherDeviceInput.style.display = "block";
//             }
//             return deviceOptions[option].innerHTML;
//         }
//     }
// }

// // reset form
// function resetForm() {
//     registerForm.reset();
//     regionValue.innerHTML = "Region type";
//     deviceValue.innerHTML = "Device";
//     removeActive();
//     removeRegionActive();
// }

// function showBottomTexts() {

//     bottomText.style.display = "flex";
//     bottomText.style.visibility = "visible";
//     bottomText.style.opacity = 1;
//     registerContainer.style.paddingBottom = "100px";
//     formSubmitBtn.value = "DONE !"

// }

// // chose select option
// deviceSelectOptions.addEventListener('click', (e) => {
//     const selectedOption = e.target;
//     removeActive();
//     selectedOption.classList.add('active');
//     deviceValue.innerHTML = ActiveElementValue()
// });


// // post request
// function postData(data) {
//     fetch('https://mail-app-12.herokuapp.com/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': '*/*',
//             'Content-Encoding': 'gzip, deflate, br'
//         },
//         json: true,
//         mode: 'cors',
//         body: JSON.stringify(data),
//     })
//         .then(response => response.json())
//         .then((data) => {
//             console.log('Success:', data);
//         })
// }

// const user = {
//     fullName: "",
//     email: "",
//     organization: "",
//     region: "",
//     device: "",
//     message: "",
//     regionType: "",
//     // countUsers: '',
//     // countHours: '',
// };

// //--------------- on submit
// const registerForm = document.querySelector('.register-form');
// registerForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // putting writing values in the form to the user object
//     for (let element = 0; element < 9; element = element + 1) {


//         if (((e.target.children[element].value || e.target.children[element].innerText) !== "") || ((e.target.children[element].innerText) === "Device") || ((e.target.children[element].innerText) === "Region type")) {
//             user[(e.target.children[element].name || e.target.children[element].id)] = (e.target.children[element].value || e.target.children[element].innerText);
//         }
//         // console.log("elementin keyi -- " + (e.target.children[element].name || e.target.children[element].id));
//         // console.log("elementin valuesu -- " + (e.target.children[element].value || e.target.children[element].innerText));
//         // console.log(user);
//         // console.log("------------------------------------------");
//     }


//     const userArray = Object.keys(user);

//     function userIsFull() {
//         for (let key of userArray) {
//             if (user[key] === "" || user[key] === "Device" || user[key] === "Region type") {
//                 return
//             }
//         }
//         return true
//     }

//     if (userIsFull()) {
//         postData(user);
//         showBottomTexts();
//         resetForm();
//         console.log(user);
//         formSubmitBtn.disabled = true;
//     } else {
//         alert("Please fill all cells !")
//     }

//     // console.log(user);
// });


// --------------------------------------------------------------------

// LOADING SCREEN
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const headerBg = document.querySelector(".header-bg");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
// MOUSE TRACKER
const mediaQuery = window.matchMedia("(min-width: 1026px)");

function myFunction(mediaQuery) {
    if (mediaQuery.matches) {
        const tracker = document.querySelector(".tracker");
        document.addEventListener("mousemove", e => {
            tracker.setAttribute(
                "style",
                "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
            );
            // console.log("added");
        });
        document.addEventListener("click", () => {
            tracker.classList.add("clicked");
            setTimeout(() => {
                tracker.classList.remove("clicked");
            }, 640);
        });
    } else {
        const tracker = document.querySelector(".tracker");
        // console.log(tracker);
        tracker.style.display = "none";
    }
}

myFunction(mediaQuery);
mediaQuery.addListener(myFunction);

// LOADING
function loading() {
    setTimeout(() => {
        wrapper.style.display = "none";
        wrapper.style.opacity = 0;
        headerBg.style.display = "block";
        setTimeout(() => (headerBg.style.height = "auto"), 50);
        header.style.display = "flex";
        setTimeout(() => (header.style.opacity = 1), 50);
        main.style.display = "block";
        setTimeout(() => (main.style.opacity = 1), 50);
        footer.style.display = "flex";
        setTimeout(() => (footer.style.opacity = 1), 50);
        // HEADER BG REVEAL
        window.onscroll = function () {
            scrollFunction();
        };
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener(
        "load",
        function () {
            setTimeout(() => {
                loading();
            }, 1000);
        },
        false
    );
});

// NAVIGATION
const navButton = document.querySelector("header > div.nav-button");
const navMenu = document.querySelector("header nav.small-screen");
const menuItems = document.querySelector("header nav.small-screen ul");
const menuLinks = document.querySelectorAll("header nav.small-screen ul li > .items a");
const menuLinkUpcoming = document.querySelector("header nav.small-screen ul li.upcoming a");
const patternSmScreen = document.querySelector(
    "body > header > img.pattern-sm-screen"
);
navButton.addEventListener("click", openMenu);
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", closeMenu);
});

// menuLinkRegister.addEventListener("click", () => {
//     setTimeout(() => {
//         closeMenu();
//     }, 680)
// });

// menuLinkUpcoming.addEventListener("click", () => {
//     setTimeout(() => {
//         closeMenu();
//     }, 680)
// });

function openMenu() {
    navButton.classList.toggle("close");
    navMenu.classList.toggle("open");
    menuItems.classList.toggle("menu-items-appear");
    patternSmScreen.classList.toggle("show-pattern");
}

function closeMenu() {
    navButton.classList.remove("close");
    navMenu.classList.remove("open");
    menuItems.classList.remove("menu-items-appear");
    patternSmScreen.classList.remove("show-pattern");
}

// SOUND ON/OFF
// const soundIcon = document.querySelector(
//     "body>header>div.sound-lang-wrapper>div.sound>img"
// );
// let timesClicked = 0;
// soundIcon.addEventListener("click", checkTimes);

// function checkTimes() {
//     if (timesClicked === 0) {
//         soundOff();
//     } else if (timesClicked === 1) {
//         soundOn();
//     }
// }

// function soundOff() {
//     soundIcon.src = "./images/sound-off-icon-min.png";
//     timesClicked = 1;
// }

// function soundOn() {
//     soundIcon.src = "./images/sound-on-icon-min.png";
//     timesClicked = 0;
// }

// // LANGUAGE SELECTION
// const langContainer = document.querySelector(
//     "body>header>div.sound-lang-wrapper>div.lang-container"
// );
// const languageSelected = document.querySelector(
//     "body>header>div.sound-lang-wrapper>div.lang-container>div>p:nth-child(1)"
// );
// const languages = document.querySelectorAll(
//     "body>header>div.sound-lang-wrapper>div.lang-container>.languages>p:not(:first-child)"
// );
// const downArrow = document.querySelector(
//     "body>header>div.sound-lang-wrapper>div.lang-container>.down-arrow"
// );
// downArrow.addEventListener("click", showOptions);

// function showOptions() {
//     languages.forEach(language => {
//         language.classList.toggle("fade-down");
//     });
//     downArrow.classList.toggle("rotate-arrow");
// }

// languages.forEach(language => {
//     language.addEventListener("click", selectLanguage);
// });

// function selectLanguage(e) {
//     let langOption = e.target.innerHTML;
//     let selectedOption = languageSelected.innerHTML;
//     languageSelected.innerHTML = langOption;
//     e.target.innerHTML = selectedOption;
// }

// NAVIGATION FOR BIG SCREENS
const navBigScreen = document.querySelector("body > header > nav.big-screen");
const menuHeadingOurCompany = document.querySelector("body > header > nav.big-screen > ul > li.our-company > p");
const menuHeadingWhatWeDo = document.querySelector("body > header > nav.big-screen > ul > li.what-we-do > p");
const menuHeadingOrderVriendly = document.querySelector("body > header > nav.big-screen > ul > li.order-vriendly > p");
const menuHeadingWhoWeAre = document.querySelector("body > header > nav.big-screen > ul > li.who-we-are > p");

const menuHeadingUpcoming = document.querySelector("body > header > nav.big-screen > ul > li.upcoming");
const ourCompany = document.querySelector("body > header > nav.big-screen > ul > li.our-company > div.items");
const whatWeDo = document.querySelector("body > header > nav.big-screen > ul > li.what-we-do > div.items");
const orderVriendly = document.querySelector("body > header > nav.big-screen > ul > li.order-vriendly > div.items");
const whoWeAre = document.querySelector("body > header > nav.big-screen > ul > li.who-we-are > div.items");

const ourCompanyItems = document.querySelectorAll("body > header > nav.big-screen > ul > li.our-company > div > a");
const whatWeDoItems = document.querySelectorAll("body > header > nav.big-screen > ul > li.what-we-do > div > a");
const orderVriendlyItems = document.querySelectorAll("body > header > nav.big-screen > ul > li.order-vriendly > div > a");
const whoWeAreItems = document.querySelectorAll("body > header > nav.big-screen > ul > li.who-we-are > div > a");

menuHeadingOurCompany.addEventListener('mouseenter', openOurCompany);
menuHeadingWhatWeDo.addEventListener('mouseenter', openWhatWeDo);
menuHeadingOrderVriendly.addEventListener('mouseenter', openOrderVriendly);
menuHeadingWhoWeAre.addEventListener('mouseenter', openWhoWeAre);

menuHeadingUpcoming.addEventListener('mouseenter', closeOthers);
ourCompany.addEventListener('mouseleave', closeOurCompany);
whatWeDo.addEventListener('mouseleave', closeWhatWeDo);
 whoWeAre.addEventListener('mouseleave', closeWhoWeAre);

navBigScreen.addEventListener('mouseenter', () => {
        if (
            document.body.scrollTop < 80 ||
            document.documentElement.scrollTop < 80
        ) {
            showBackground();
        }
    }
);

navBigScreen.addEventListener('mouseleave', () => {
        if (
            document.body.scrollTop < 80 ||
            document.documentElement.scrollTop < 80
        ) {
            hideBackground();
            scrollFunction();
        }
    }
);

function showBackground() {
    setTimeout(() => {
        document.querySelector(".header-bg").style.display = "block";
        setTimeout(() => {
            document.querySelector(".header-bg").style.opacity = 1;
        }, 5);
    }, 5);
}

function hideBackground() {
    closeOurCompany();
    closeWhatWeDo();
     closeWhoWeAre();

    closeOrderVriendly();
    setTimeout(() => {
        document.querySelector(".header-bg").style.opacity = 0;
        setTimeout(() => {
            document.querySelector(".header-bg").style.display = "block";
        }, 5);
    }, 5);
}

function openOurCompany() {
    closeWhatWeDo();
     closeWhoWeAre();

    closeOrderVriendly();
    let el = menuHeadingOurCompany.childNodes[0];
    el.classList.add('three-d-rotate');
    setTimeout(() => {
        ourCompanyItems.forEach(item => {
            item.classList.add('fade-down');
        })
    }, 300);
}

function openWhatWeDo() {
    closeOurCompany();
     closeWhoWeAre();

    closeOrderVriendly();
    let el = menuHeadingWhatWeDo.childNodes[0];
    el.classList.add('three-d-rotate');
    setTimeout(() => {
        whatWeDoItems.forEach(item => {
            item.classList.add('fade-down');
        });
    }, 300);
}

function openOrderVriendly() {
    closeOurCompany();
     closeWhoWeAre();

    closeWhatWeDo();
    let el = menuHeadingOrderVriendly.childNodes[0];
    el.classList.add('three-d-rotate');
    setTimeout(() => {
        orderVriendlyItems.forEach(item => {
            item.classList.add('fade-down');
        });
    }, 300);
}

 function openWhoWeAre() {
     closeOurCompany();
     closeWhatWeDo();
     closeOrderVriendly();
     let el = menuHeadingWhoWeAre.childNodes[0];
     el.classList.add('three-d-rotate');
     setTimeout(() => {
         whoWeAreItems.forEach(item => {
             item.classList.add('fade-down');
         });
     }, 300);
 }


function closeOthers() {
    closeOurCompany();
    closeWhatWeDo();
     closeWhoWeAre();

    closeOrderVriendly();
}

function closeOurCompany() {
    let el = menuHeadingOurCompany.childNodes[0];
    el.classList.remove('three-d-rotate')
    setTimeout(() => {
        ourCompanyItems.forEach(item => {
            item.classList.remove('fade-down');
        })
    }, 10);
}

function closeWhatWeDo() {
    let el = menuHeadingWhatWeDo.childNodes[0];
    el.classList.remove('three-d-rotate')
    setTimeout(() => {
        whatWeDoItems.forEach(item => {
            item.classList.remove('fade-down');
        });
    }, 10);
}

function closeOrderVriendly() {
    let el = menuHeadingOrderVriendly.childNodes[0];
    el.classList.remove('three-d-rotate');
    setTimeout(() => {
        orderVriendlyItems.forEach(item => {
            item.classList.remove('fade-down');
        });
    }, 10);
}

function closeWhoWeAre() {
    let el = menuHeadingWhoWeAre.childNodes[0];
    el.classList.remove('three-d-rotate');
    setTimeout(() => {
        whoWeAreItems.forEach(item => {
            item.classList.remove('fade-down');
        });
    }, 10);
}



function scrollFunction() {
    if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
    ) {
        setTimeout(() => {
            document.querySelector(".header-bg").style.display = "block";
            setTimeout(() => {
                document.querySelector(".header-bg").style.opacity = 1;
            }, 5);
        }, 5);
    } else {
        setTimeout(() => {
            document.querySelector(".header-bg").style.opacity = 0;
            setTimeout(() => {
                document.querySelector(".header-bg").style.display = "block";
            }, 5);
        }, 5);
    }
}