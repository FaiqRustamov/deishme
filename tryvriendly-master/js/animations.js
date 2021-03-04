// CONFIGURATION
let config = {
    rootMargin: '0px',
    //forwards
    threshold: [0, 0.25, 0.5, 0.75, 1]
    //alternative
    // threshold: 0.5
};
// ABOUT US SECTION
const headingAboutUs = document.querySelector('#about-us > div.about-us_first > div.about-us_first_text > h2');
headingAboutUsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            // console.log('in the view');
            entry.target.classList.add("animate-to-bottom");
            // observer.unobserve(entry.target);
        } else {
            // console.log('out of view');
            entry.target.classList.remove("animate-to-bottom");
        }
    });
}, config);
headingAboutUsObserver.observe(headingAboutUs);

const paragraphsAboutUs = document.querySelectorAll('#about-us > div.about-us_first > div.about-us_first_text > p');   
paragraphsAboutUsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top");
        } else {
            entry.target.classList.remove("animate-to-top");
        }
    });
}, config);
paragraphsAboutUs.forEach(paragraph => {
    paragraphsAboutUsObserver.observe(paragraph);
})

const aboutUsSecondRowOneImg = document.querySelector('#about-us > div.about-us_second > div.row1 > div.col1 > img');     
aboutUsSecondRowOneImgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-right");
        } else {
            entry.target.classList.remove("animate-to-right");
        }
    });
}, config);
aboutUsSecondRowOneImgObserver.observe(aboutUsSecondRowOneImg);

const aboutUsSecondRowOneTexts = document.querySelectorAll('#about-us > div.about-us_second > div.row1 > div.col2 > p');       
aboutUsSecondRowOneTextsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-bottom");
        } else {
            entry.target.classList.remove("animate-to-bottom");
        }
    });
}, config);
aboutUsSecondRowOneTexts.forEach(text => {
    aboutUsSecondRowOneTextsObserver.observe(text);
});

const aboutUsSecondRowTwoImg = document.querySelector('#about-us > div.about-us_second > div.row2 > div.col1 > img');   
aboutUsSecondRowTwoImgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-left");
        } else {
            entry.target.classList.remove("animate-to-left");
        }
    });
}, config);
aboutUsSecondRowTwoImgObserver.observe(aboutUsSecondRowTwoImg);

const aboutUsSecondRowTwoTexts = document.querySelectorAll('#about-us > div.about-us_second > div.row2 > div.col2 > p');
aboutUsSecondRowTwoTextsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-bottom");
        } else {
            entry.target.classList.remove("animate-to-bottom");
        }
    });
}, config);
aboutUsSecondRowTwoTexts.forEach(text => {
    aboutUsSecondRowTwoTextsObserver.observe(text);
});

// FEATURES SECTION
const headingFeatures = document.querySelector('#competitive-advantages > div.heading > h2');        
headingFeaturesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-bottom");
        } else {
            entry.target.classList.remove("animate-to-bottom");
        }
    });
}, config);
headingFeaturesObserver.observe(headingFeatures);

// ROADMAP SECTION
const headingRoadmap = document.querySelector('#roadmap > div.heading > h2');
headingRoadmapObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-bottom");
        } else {
            entry.target.classList.remove("animate-to-bottom");
        }
    });
}, config);
headingRoadmapObserver.observe(headingRoadmap);

// HAPPY CUSTOMERS SECTION
const headingHappyCustomers = document.querySelector('#customers > div.heading > h2');    
headingHappyCustomersObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-bottom");
        } else {
            entry.target.classList.remove("animate-to-bottom");
        }
    });
}, config);
headingHappyCustomersObserver.observe(headingHappyCustomers);

// GET STARTED SECTION
// const headingGetStarted = document.querySelector('#get-started > div.heading > h2'); 
// headingGetStartedObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.intersectionRatio > 0.25) {
//             entry.target.classList.add("animate-to-bottom");
//         } else {
//             entry.target.classList.remove("animate-to-bottom");
//         }
//     });
// }, config);
// headingGetStartedObserver.observe(headingGetStarted);

// OUR TEAM SECTION
const headingOurTeam = document.querySelector('#team > div.heading > h2');
headingOurTeamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-bottom");
        } else {
            entry.target.classList.remove("animate-to-bottom");
        }
    });
}, config);
headingOurTeamObserver.observe(headingOurTeam);

const ourTeamMemberImgs = document.querySelectorAll('#team > div.team-container > div.member > img');
ourTeamMemberImgsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-right");
        } else {
            entry.target.classList.remove("animate-to-right");
        }
    });
}, config);
ourTeamMemberImgs.forEach(img => {
    ourTeamMemberImgsObserver.observe(img);
});

const ourTeamMemberNames = document.querySelectorAll('#team > div.team-container > div > div > h3');   
ourTeamMemberNamesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
ourTeamMemberNames.forEach(text => {
    ourTeamMemberNamesObserver.observe(text);
});

const ourTeamMemberJobTitles = document.querySelectorAll('#team > div.team-container > div > div > p');    
ourTeamMemberJobTitlesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
ourTeamMemberJobTitles.forEach(text => {
    ourTeamMemberJobTitlesObserver.observe(text);
});

const ourTeamMemberSocialLinks = document.querySelectorAll('#team > div.team-container > div > div > div.social-links');
ourTeamMemberSocialLinksObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
ourTeamMemberSocialLinks.forEach(el => {
    ourTeamMemberSocialLinksObserver.observe(el);
});

// OUR PARTNER SECTION
const headingOurPartners = document.querySelector('#partners > div.heading > h2');
headingOurPartnersObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-bottom");
        } else {
            entry.target.classList.remove("animate-to-bottom");
        }
    });
}, config);
headingOurPartnersObserver.observe(headingOurPartners);

// FOOTER FOR BIG SCREENS
const headingFooterOurCompany = document.querySelector('#contact-us > div.footer-big-screen > div.upper > div.our-company > h2');
headingFooterOurCompanyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
headingFooterOurCompanyObserver.observe(headingFooterOurCompany);

const headingFooterWhatWeDo = document.querySelector('#contact-us > div.footer-big-screen > div.upper > div.what-we-do > h2');
headingFooterWhatWeDoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
headingFooterWhatWeDoObserver.observe(headingFooterWhatWeDo);

const headingFooterWhoWeAre = document.querySelector('#contact-us > div.footer-big-screen > div.upper > div.pricing > h2'); 
headingFooterWhoWeAreObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
headingFooterWhoWeAreObserver.observe(headingFooterWhoWeAre);

const headingFooterContactUs = document.querySelector('#contact-us > div.footer-big-screen > div.upper > div.contact-us > h2');
headingFooterContactUsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
headingFooterContactUsObserver.observe(headingFooterContactUs);

const footerOurCompanyLinks = document.querySelectorAll('#contact-us > div.footer-big-screen > div.upper > div.our-company > div > a');
footerOurCompanyLinksObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
footerOurCompanyLinks.forEach(el => {
    footerOurCompanyLinksObserver.observe(el);
});

const footerWhatWeDoLinks = document.querySelectorAll('#contact-us > div.footer-big-screen > div.upper > div.what-we-do > div > a');
footerWhatWeDoLinksObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
footerWhatWeDoLinks.forEach(el => {
    footerWhatWeDoLinksObserver.observe(el);
});

const footerWhoWeAreLinks = document.querySelectorAll('#contact-us > div.footer-big-screen > div.upper > div.pricing > div > a');
footerWhoWeAreLinksObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
footerWhoWeAreLinks.forEach(el => {
    footerWhoWeAreLinksObserver.observe(el);
});

const footerContactUsLink = document.querySelector("#contact-us > div.footer-big-screen > div.upper > div.contact-us > div.items > a#mail-to");
footerContactUsLinkObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
footerContactUsLinkObserver.observe(footerContactUsLink);

const footerContactUsAddress = document.querySelector('#contact-us > div.footer-big-screen > div.upper > div.contact-us > div.items > p#address');
footerContactUsAddressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
footerContactUsAddressObserver.observe(footerContactUsAddress);
const footerContactUsPhone = document.querySelector('#contact-us > div.footer-big-screen > div.upper > div.contact-us > div.items > p#phone');
footerContactUsPhoneObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
// footerContactUsPhoneObserver.observe(footerContactUsPhone);

const footerContactUsLinks = document.querySelector('#contact-us > div.footer-big-screen > div.upper > div.contact-us > div > div');
footerContactUsLinksObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
footerContactUsLinksObserver.observe(footerContactUsLinks);

const footerCopyright = document.querySelector('#contact-us > div.footer-big-screen > div.lower > div.copyright');
footerCopyrightObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
footerCopyrightObserver.observe(footerCopyright);

// FOOTER FOR SMALL SCREENS
const footerForSmScrnsOurCompany = document.querySelector('#contact-us > div.footer-sm-screen > div.our-company');
footerForSmScrnsOurCompanyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top3");
        } else {
            entry.target.classList.remove("animate-to-top3");
        }
    });
}, config);
footerForSmScrnsOurCompanyObserver.observe(footerForSmScrnsOurCompany);

const footerForSmScrnsWhatWeDo = document.querySelector('#contact-us > div.footer-sm-screen > div.what-we-do');
footerForSmScrnsWhatWeDoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top3");
        } else {
            entry.target.classList.remove("animate-to-top3");
        }
    });
}, config);
footerForSmScrnsWhatWeDoObserver.observe(footerForSmScrnsWhatWeDo);

const footerForSmScrnsWhoWeAre = document.querySelector('#contact-us > div.footer-sm-screen > div.pricing');
footerForSmScrnsWhoWeAreObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top3");
        } else {
            entry.target.classList.remove("animate-to-top3");
        }
    });
}, config);
footerForSmScrnsWhoWeAreObserver.observe(footerForSmScrnsWhoWeAre);

const footerForSmScrnsContactUs = document.querySelector('#contact-us > div.footer-sm-screen > div.contact-us');
footerForSmScrnsContactUsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top4");
        } else {
            entry.target.classList.remove("animate-to-top4");
        }
    });
}, config);
footerForSmScrnsContactUsObserver.observe(footerForSmScrnsContactUs);

const footerForSmScrnsAddress = document.querySelector('#contact-us > div.footer-sm-screen > div.address');
footerForSmScrnsAddressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top4");
        } else {
            entry.target.classList.remove("animate-to-top4");
        }
    });
}, config);
footerForSmScrnsAddressObserver.observe(footerForSmScrnsAddress);

const footerForSmScrnsPhone = document.querySelector('#contact-us > div.footer-sm-screen > div.phone');
footerForSmScrnsPhoneObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top4");
        } else {
            entry.target.classList.remove("animate-to-top4");
        }
    });
}, config);
footerForSmScrnsPhoneObserver.observe(footerForSmScrnsPhone);

const footerForSmScrnsCopyright = document.querySelector('#contact-us > div.footer-sm-screen > div.copyright');
footerForSmScrnsCopyrightObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("animate-to-top2");
        } else {
            entry.target.classList.remove("animate-to-top2");
        }
    });
}, config);
footerForSmScrnsCopyrightObserver.observe(footerForSmScrnsCopyright);