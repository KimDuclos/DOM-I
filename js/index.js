const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// nav
let nav1 = document.getElementsByTagName('a');
nav1[0].innerHTML = siteContent['nav']['nav-item-1'];

let nav2 = document.getElementsByTagName('a');
nav1[1].innerHTML = siteContent['nav']['nav-item-2'];

let nav3 = document.getElementsByTagName('a');
nav1[2].innerHTML = siteContent['nav']['nav-item-3'];

let nav4 = document.getElementsByTagName('a');
nav1[3].innerHTML = siteContent['nav']['nav-item-4'];

let nav5 = document.getElementsByTagName('a');
nav1[4].innerHTML = siteContent['nav']['nav-item-5'];

let nav6 = document.getElementsByTagName('a');
nav1[5].innerHTML = siteContent['nav']['nav-item-6'];


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Update the CTA text 
let CTAtext = document.getElementsByTagName('h1');
CTAtext[0].innerHTML = siteContent['cta']['h1'];

// Updates header image
let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent['cta']['img-src']);

// Button
let btn = document.getElementsByTagName("button");
btn[0].innerHTML = siteContent['cta']['button'];

// Features content
let featuresTitle = document.getElementsByTagName('h4');
featuresTitle[0].innerHTML = siteContent['main-content']['features-h4'];

let featuresContent = document.getElementsByTagName('p');
featuresContent[0].innerHTML = siteContent['main-content']['features-content'];

// About content
let aboutTitle = document.getElementsByTagName('h4');
aboutTitle[1].innerHTML = siteContent['main-content']['about-h4'];

let aboutContent = document.getElementsByTagName('p');
aboutContent[1].innerHTML = siteContent['main-content']['about-content'];

// Updates middle image
let middle = document.getElementById('middle-img');
middle.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Bottom content - Services
let servicesTitle = document.getElementsByTagName('h4');
servicesTitle[2].innerHTML = siteContent['main-content']['services-h4'];

let servicesContent = document.getElementsByTagName('p');
servicesContent[2].innerHTML = siteContent['main-content']['services-content'];

// Bottom content - Product
let productTitle = document.getElementsByTagName('h4');
productTitle[3].innerHTML = siteContent['main-content']['product-h4'];

let productContent = document.getElementsByTagName('p');
productContent[3].innerHTML = siteContent['main-content']['product-content'];

// Bottom content - Vision
let visionTitle = document.getElementsByTagName('h4');
visionTitle[4].innerHTML = siteContent['main-content']['vision-h4'];

let visionContent = document.getElementsByTagName('p');
visionContent[4].innerHTML = siteContent['main-content']['vision-content'];

// Contact
let contactTitle = document.getElementsByTagName('h4');
contactTitle[5].innerHTML = siteContent['contact']['contact-h4'];

// Contact Address
let address = document.getElementsByTagName('p');
address[5].innerHTML = siteContent['contact']['address'];

// Contact phone
let phone = document.getElementsByTagName('p');
phone[6].innerHTML = siteContent['contact']['phone'];

// Contact Email
let email = document.getElementsByTagName('p');
email[7].innerHTML = siteContent['contact']['email'];



