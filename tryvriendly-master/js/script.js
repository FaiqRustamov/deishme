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
// ABOUT US MOUSE MOVE EFFECT
const aboutUs = document.querySelector(".about-us_first");
const text = aboutUs.querySelector("h1");
const walk = 200;

function shadow(e) {
    const {offsetWidth: width, offsetHeight: height} = aboutUs;
    let {offsetX: x, offsetY: y} = e;
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = Math.round((x / width) * walk - walk / 2.5);
    const yWalk = Math.round((y / height) * walk - walk / 2.5);
    text.style.textShadow = `
${(yWalk * -1) / 2}px ${xWalk / 3}px 0 rgba(115, 0, 253, 0.25)
`;
}

aboutUs.addEventListener("mousemove", shadow);

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

// VIDEO CONTROLS
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const videoOverlay = document.querySelector("#video > div > img");
const playerButton = player.querySelector(".play-button");

function togglePlay() {
    const method = video.paused ? "play" : "pause";
    video[method]();
    videoOverlay.style.opacity = 0;
    setTimeout(() => {
        videoOverlay.style.display = "none";
    }, 500);
    const icon = video.paused ? "►" : "❚❚";
    playerButton.textContent = icon;
}

function updateButton() {
    const icon = video.paused ? "►" : "❚❚";
    playerButton.textContent = icon;
}

function showButton() {
    videoOverlay.style.display = "block";
    setTimeout(() => {
        videoOverlay.style.opacity = 1;
    }, 50);
    playerButton.textContent = "►";
    video.removeAttribute("controls", true);
    setTimeout(() => {
        playerButton.style.display = "flex";
        setTimeout(() => {
            playerButton.style.opacity = 1;
            playerButton.style.cursor = "pointer";
        }, 250);
    }, 250);
}

function hideButton() {
    setTimeout(() => {
        playerButton.style.opacity = 0;
        setTimeout(() => {
            video.setAttribute("controls", true);
            playerButton.style.cursor = "none";
            playerButton.style.display = "none";
        }, 250);
    }, 1000);
}

playerButton.addEventListener("click", togglePlay);
video.addEventListener("play", hideButton);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("ended", showButton);

// NAVIGATION
const navButton = document.querySelector("header > div.nav-button");
const navMenu = document.querySelector("header nav.small-screen");
const menuItems = document.querySelector("header nav.small-screen ul");
const menuLinks = document.querySelectorAll("header nav.small-screen ul li > .items a");
const menuLinkUpcoming = document.querySelector("header nav.small-screen ul li.upcoming a");
const menuLinkSignUpForBeta = document.querySelector("header nav.small-screen ul li.sign-up-for-beta a");
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
//
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

// // SOUND ON/OFF
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
// const menuHeadingWhoWeAre = document.querySelector("body > header > nav.big-screen > ul > li.pricing > p");
const menuHeadingUpcoming = document.querySelector("body > header > nav.big-screen > ul > li.upcoming");
const menuHeadingSignUpForBeta = document.querySelector("body > header > nav.big-screen > ul > li.sign-up-for-beta");
const ourCompany = document.querySelector("body > header > nav.big-screen > ul > li.our-company > div.items");
const whatWeDo = document.querySelector("body > header > nav.big-screen > ul > li.what-we-do > div.items");
const orderVriendly = document.querySelector("body > header > nav.big-screen > ul > li.order-vriendly > div.items");
// const whoWeAre = document.querySelector("body > header > nav.big-screen > ul > li.pricing > div.items");
const ourCompanyItems = document.querySelectorAll("body > header > nav.big-screen > ul > li.our-company > div > a");
const whatWeDoItems = document.querySelectorAll("body > header > nav.big-screen > ul > li.what-we-do > div > a");
const orderVriendlyItems = document.querySelectorAll("body > header > nav.big-screen > ul > li.order-vriendly > div > a");
// const whoWeAreItems = document.querySelectorAll("body > header > nav.big-screen > ul > li.pricing > div > a");
menuHeadingOurCompany.addEventListener('mouseenter', openOurCompany);
menuHeadingWhatWeDo.addEventListener('mouseenter', openWhatWeDo);
menuHeadingOrderVriendly.addEventListener('mouseenter', openOrderVriendly);
// menuHeadingWhoWeAre.addEventListener('mouseenter', openWhoWeAre);
menuHeadingUpcoming.addEventListener('mouseenter', closeOthers);
menuHeadingSignUpForBeta.addEventListener('mouseenter', closeOthers);
ourCompany.addEventListener('mouseleave', closeOurCompany);
whatWeDo.addEventListener('mouseleave', closeWhatWeDo);
// whoWeAre.addEventListener('mouseleave', closeWhoWeAre);

const aboutUsMe = document.querySelector('.about-us');

// aboutUsMe.addEventListener('click', () => {
//     console.log(aboutUsMe);
//     console.log(window.location);
// });


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
    // closeWhoWeAre();
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
    // closeWhoWeAre();
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
    // closeWhoWeAre();
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
    // closeWhoWeAre();
    closeWhatWeDo();
    let el = menuHeadingOrderVriendly.childNodes[0];
    el.classList.add('three-d-rotate');
    setTimeout(() => {
        orderVriendlyItems.forEach(item => {
            item.classList.add('fade-down');
        });
    }, 300);
}

// function openWhoWeAre() {
//     closeOurCompany();
//     closeWhatWeDo();
//     closeOrderVriendly();
//     let el = menuHeadingWhoWeAre.childNodes[0];
//     el.classList.add('three-d-rotate');
//     setTimeout(() => {
//         whoWeAreItems.forEach(item => {
//             item.classList.add('fade-down');
//         });
//     }, 300);
// }

function closeOthers() {
    closeOurCompany();
    closeWhatWeDo();
    // closeWhoWeAre();
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

// function closeWhoWeAre() {
//     let el = menuHeadingWhoWeAre.childNodes[0];
//     el.classList.remove('three-d-rotate');
//     setTimeout(() => {
//         whoWeAreItems.forEach(item => {
//             item.classList.remove('fade-down');
//         });
//     }, 10);
// }

// Home cta button
// --------------------
document.querySelector('.home-cta-button').addEventListener('click', () => {
    location.replace("https://www.vriendly.co/try-vriendly.html");
});


// --------------------
// ABOUT US IMAGE OVERLAY
// const abtImgOne = document.querySelector('#about-us > div.about-us_second > div.row1 > div.col1 > img:nth-child(1)');
// const abtImgOneGalleryIcon = document.querySelector('#about-us > div.about-us_second > div.row1 > div.col1 > img:nth-child(2)');
// abtImgOne.addEventListener('mouseenter', showOverlayAndIcon);
// abtImgOne.addEventListener('mouseleave', hideOverlayAndIcon);
// function showOverlayAndIcon() {
//   setTimeout(() => {
//     abtImgOneGalleryIcon.style.display = "block";
//     abtImgOne.style.opacity = .8;
//     setTimeout(() => {
//       abtImgOneGalleryIcon.style.opacity = 1;
//     }, 450);
//   }, 40);
// }
// function hideOverlayAndIcon() {
//   setTimeout(() => {
//     abtImgOneGalleryIcon.style.opacity = 0;
//     setTimeout(() => {
//       abtImgOne.style.opacity = 1;
//       abtImgOneGalleryIcon.style.display = "none";
//     }, 450);
//   }, 40);
// }