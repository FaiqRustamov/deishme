// CONFIGURATION
let config = {
    rootMargin: '0px',
    //forwards
    threshold: [0, 0.25, 0.5, 0.75, 1]
    //alternative
    // threshold: 0.5
};





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

const headingFooterWhoWeAre = document.querySelector('#contact-us > div.footer-big-screen > div.upper > div.who-we-are > h2');
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

const footerWhoWeAreLinks = document.querySelectorAll('#contact-us > div.footer-big-screen > div.upper > div.who-we-are > div > a');
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

const footerForSmScrnsWhoWeAre = document.querySelector('#contact-us > div.footer-sm-screen > div.who-we-are');
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