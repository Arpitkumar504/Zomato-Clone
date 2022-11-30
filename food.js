// slider
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 80,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // dynamicBullets:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Autoplay
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    // Make Responsive
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 80,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});

// profile swiper
var swiper = new Swiper(".profile-content", {
    slidesPerView: 3,
    spaceBetween: 150,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // dynamicBullets:true,
    },
    // Autoplay
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    // Make Responsive
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 120,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 80,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
        1200: {
            slidesPerView: 3,
        },
    }
});

// client slider
var swiper = new Swiper(".client-content", {
    slidesPerView: 3,
    spaceBetween: 120,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // dynamicBullets:true,
    },
    // Autoplay
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // Make Responsive
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 120,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
        1200: {
            slidesPerView: 3,
        },
    }
});

// Dark mode
const dark = document.querySelector('.darks');
dark.addEventListener('click', (e) => {
    const theme = e.currentTarget.parentElement;
    theme.classList.toggle('showtheme');
})

const theme = document.querySelectorAll('.theme');
theme.forEach(element => {
    element.addEventListener('click', (e) => {
        const data = e.currentTarget.dataset.theme;
        const datas = document.body.classList;
        for (let d = 0; d < datas.length; d++) {
            document.body.classList.remove(datas[d]);
        }
        document.body.classList.toggle(data);
    })
})



// Button toggle
const navbutton = document.querySelector('.navbutton');
navbutton.addEventListener('click', (e) => {
    const data = e.currentTarget.parentElement.parentElement;
    data.classList.toggle('active');
})

// Navitem Collapse
const navlink = document.querySelectorAll('.navlink');
navlink.forEach(element => {
    const button = element.querySelector('.navbtn');
    button.addEventListener('click', (e) => {
        navlink.forEach(item => {
            if (item !== element) {
                item.classList.remove('show');
            }
        })
        element.classList.toggle('show');
    })
})

// header fixed
const headers = document.querySelector('.header');
window.addEventListener('scroll', () => {
    const position = headers.getBoundingClientRect().height;
    if (Math.floor(window.scrollY) > position) {
        headers.classList.add('fixedheader');
    }
    else {
        headers.classList.remove('fixedheader');
    }
})

// Animate On Scroll(AOS)
AOS.init({
    offset: 200,
    delay: 200,
    duration: 600,
});
AOS.refresh();

// preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load', (e) => {
    preloader.style.display = 'none';
})

// searchbox
const search = document.querySelector('.search');
search.addEventListener('click', (e) => {
    const data = e.currentTarget.parentElement;
    data.classList.toggle('active');
})

// search box clear
const searchclear = document.querySelector('.searchclear');
searchclear.addEventListener('click', (e) => {
    const data = e.currentTarget.parentElement.firstElementChild;
    data.value = '';
})

// counter
const countersection = document.querySelector('.counter');
const workobserve = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    const counter = document.querySelectorAll('.counters');
    counter.forEach(element => {
        element.textContent = 0;
        let update = () => {
            const target = +element.dataset.target;
            let startingcounter = +element.textContent;
            let incr = target / 100;
            if (startingcounter < target) {
                element.textContent = `${Math.round(startingcounter + incr)}`;
                setTimeout(update, 10);
            }
            else {
                element.textContent = target;
            }
        }
        update();
    })
    // observer.unobserve(countersection);
}, {
    root: null,
    threshold: 0,

})
workobserve.observe(countersection);

// countdown
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
let countdown = () => {
    setInterval(() => {
        let future = new Date('25 August, 2022 10:00:00');
        let current = new Date();
        let mydate = future - current;
        let days = Math.floor(mydate / 1000 / 60 / 60 / 24);
        let hours = Math.floor(mydate / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(mydate / 1000 / 60) % 60;
        let seconds = Math.floor(mydate / 1000) % 60;
        if (seconds <= 9) {
            second.textContent = `0${seconds}`;
        }
        else if (seconds > 9) {
            second.textContent = seconds;
        }
        day.textContent = days;
        hour.textContent = hours;
        minute.textContent = minutes;

    }, 1000);
}
countdown();

// Product Filter
const cards = document.querySelectorAll('.item');
const bt = document.querySelectorAll('.button');
bt.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.currentTarget.dataset.filter;
        cards.forEach(e => {
            if (filter === 'all') {
                e.style.display = "block";
            }
            else {
                if (e.classList.contains(filter)) {
                    e.style.display = "block";
                }
                else {
                    e.style.display = "none";
                }
            }
        })
    });
});

const cardcontent = document.querySelectorAll('.cardcontent');
const searchbar = document.querySelector('.searchbars');
searchbar.addEventListener('keyup', (e) => {
    const d = e.currentTarget.value.trim().toLowerCase();
    cardcontent.forEach(element => {
        const e = element.parentElement;
        if (d == "all") {
            e.style.display = "block";
        }
        // using classname
        // else {
        //     if (element.className.includes(d)) {
        //         element.style.display = "block";
        //     }
        //     else {
        //         element.style.display = "none";
        //     }
        // }
        // using product name
        else {
            const filterdata = element.children[0].textContent.toLowerCase();
            if (filterdata.includes(d)) {
                e.style.display = "block";
            }
            else {
                e.style.display = "none";
            }
        }
    })
})

// FAQ
const question = document.querySelectorAll('.questioncards');
question.forEach(element => {
    const button = element.querySelector('.buttons');
    button.addEventListener('click', (e) => {
        question.forEach(item => {
            if (item !== element) {
                item.classList.remove('show');
            }
        })
        element.classList.toggle('show');
    })
})

// smooth scroll
const showbutton = document.querySelector('.scrollbutton');
window.addEventListener('scroll', () => {
    if (Math.floor(window.scrollY) > 500) {
        showbutton.classList.add('showbutton');
    }
    else {
        showbutton.classList.remove('showbutton');
    }
})

// model
const model = document.querySelector('.modeldata');
window.addEventListener('scroll', (e) => {
    if (Math.floor(window.scrollY) > 500) {
        model.classList.add('showmodel');
    }
    else {
        model.classList.remove('showmodel');
    }
})

const modelbtn = document.querySelector('.modelbtn');
modelbtn.addEventListener('click', (e) => {
    const data = e.currentTarget.parentElement.parentElement;
    data.classList.toggle('active');
})

// model form validation
const forms = document.querySelector('.formvalidate');
const submitbtn = document.querySelector('.submitbtn');
const names = document.querySelector('.name');
const emails = document.querySelector('.emails');
const messages = document.querySelector('.message');
const phones = document.querySelector('.phones');
const successmsg = document.querySelector('.successmsg');
const successicon = document.querySelector('.successicon')
const successbutton = document.querySelector('.successbutton');

submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const namevalidates = namesvalidate();
    const emailvalidates = emailsvalidate();
    const messagevalidates = messagesvalidate();
    const phonevalidates = phonesvalidate();
    if (namevalidates && emailvalidates && messagevalidates && phonevalidates) {
        const data = successmsg.parentElement.parentElement;
        data.classList.add('active');
        successicon.classList.replace('fa-xmark', 'fa-check');
        successmsg.textContent = "Submitted";
    }
    else {
        const data = successmsg.parentElement.parentElement;
        data.classList.add('active');
        successicon.classList.replace('fa-check', 'fa-xmark');
        successmsg.textContent = 'Not Submitted';
    }
})

successbutton.addEventListener('click', (e) => {
    const data = e.currentTarget.parentElement.parentElement;
    data.classList.remove('active');
})

const namesvalidate = () => {
    const namevali = forms.elements['name'];
    const data = namevali.value.trim();
    const position = names.nextElementSibling;
    const inputbox = names.parentElement;
    if (data.length > 0) {
        position.style.color = 'blue';
        inputbox.style.borderColor = 'blue';

    }
    else {
        position.style.color = 'black';
        inputbox.style.borderColor = 'black';
    }
    const msg = names.parentElement.parentElement.nextElementSibling.children[1].firstElementChild;
    const icons = names.parentElement.parentElement.nextElementSibling.children[0];
    icons.style.fontSize = '15px';
    icons.style.paddingLeft = '5px';
    icons.style.display = 'none';
    msg.style.fontSize = '15px';
    msg.style.margin = '0';
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const number = /\d/g;
    if (data == '' && data.length <= 5) {
        showerror(msg, 'Enter Name', position, icons);
        return (0);
    }
    else if (data.length <= 5) {
        showerror(msg, 'Name is less Than 5 words', position, icons);
        return (0);
    }
    else if (data.length >= 18) {
        showerror(msg, 'Please Enter less than 12 words', position, icons);
        return (0);
    }
    else if (specialChars.test(data)) {
        showerror(msg, 'Remove Special Character', position, icons);
        return (0);
    }
    else if (number.test(data)) {
        showerror(msg, 'Remove Numeric Digits', position, icons);
        return (0);
    }
    else {
        showsuccess(msg, position, icons, inputbox);
        return (1);
    }
}

const emailsvalidate = () => {
    const emailvali = forms.elements['email'];
    const data = emailvali.value.trim();
    const position = emails.nextElementSibling;
    const inputbox = emails.parentElement;
    if (data.length > 0) {
        position.style.color = 'blue';
        inputbox.style.borderColor = 'blue';

    }
    else {
        position.style.color = 'black';
        inputbox.style.borderColor = 'black';
    }
    const msg = emails.parentElement.parentElement.nextElementSibling.children[1].firstElementChild;
    const icons = emails.parentElement.parentElement.nextElementSibling.children[0];
    icons.style.fontSize = '15px';
    icons.style.paddingLeft = '5px';
    icons.style.display = 'none';
    msg.style.fontSize = '15px';
    msg.style.margin = '0';
    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (data == '' && data.length <= 5) {
        showerror(msg, 'Enter Email', position, icons);
        return (0);
    }
    else if (data.length <= 5) {
        showerror(msg, 'Email is less Than 5 words', position, icons);
        return (0);
    }
    else if (!emailRegex.test(data)) {
        showerror(msg, 'Email Not Valid', position, icons);
        return (0);
    }
    else {
        showsuccess(msg, position, icons, inputbox);
        return (1);
    }
}

const messagesvalidate = () => {
    const messagevali = forms.elements['message'];
    const data = messagevali.value.trim();
    const position = messages.nextElementSibling;
    const inputbox = messages.parentElement;
    if (data.length > 0) {
        position.style.color = 'blue';
        inputbox.style.borderColor = 'blue';

    }
    else {
        position.style.color = 'black';
        inputbox.style.borderColor = 'black';
    }
    const msg = messages.parentElement.parentElement.nextElementSibling.children[1].firstElementChild;
    const icons = messages.parentElement.parentElement.nextElementSibling.children[0];
    icons.style.fontSize = '15px';
    icons.style.paddingLeft = '5px';
    icons.style.display = 'none';
    msg.style.fontSize = '15px';
    msg.style.margin = '0';
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const number = /\d/g;
    if (data == '' && data.length <= 5) {
        showerror(msg, 'Enter Message', position, icons);
        return (0);
    }
    else if (data.length <= 5) {
        showerror(msg, 'Message is less Than 5 words', position, icons);
        return (0);
    }
    else if (data.length >= 50) {
        showerror(msg, 'Message is Greater Than 50 words', position, icons);
        return (0);
    }
    else if (specialChars.test(data)) {
        showerror(msg, 'Remove Special Character', position, icons);
        return (0);
    }
    else if (number.test(data)) {
        showerror(msg, 'Remove Numeric Digits', position, icons);
        return (0);
    }
    else {
        showsuccess(msg, position, icons, inputbox);
        return (1);
    }

}

const phonesvalidate = () => {
    const phonevali = forms.elements['phone'];
    const data = phonevali.value.trim();
    const position = phones.nextElementSibling;
    const inputbox = phones.parentElement;
    if (data.length > 0) {
        position.style.color = 'blue';
        inputbox.style.borderColor = 'blue';

    }
    else {
        position.style.color = 'black';
        inputbox.style.borderColor = 'black';
    }
    const msg = phones.parentElement.parentElement.nextElementSibling.children[1].firstElementChild;
    const icons = phones.parentElement.parentElement.nextElementSibling.children[0];
    icons.style.fontSize = '15px';
    icons.style.paddingLeft = '5px';
    icons.style.display = 'none';
    msg.style.fontSize = '15px';
    msg.style.margin = '0';
    if (data == '') {
        showerror(msg, 'Enter Phone Number', position, icons);
        return (0);
    }
    else if (data.length != 10) {
        showerror(msg, 'Phone is not equal to 10 Digit', position, icons);
        return (0);
    }
    else if (isNaN(data)) {
        showerror(msg, 'Phone Number is Not Valid Enter Only Numeric Digits', position, icons);
        return (0);
    }
    else {
        showsuccess(msg, position, icons, inputbox);
        return (1);
    }
}

const showerror = (message, showmessage, icon, icons) => {
    message.textContent = showmessage;
    icon.classList.replace('fa-circle-check', 'fa-circle-xmark');
    icons.style.display = 'block';

}

const showsuccess = (message, icon, icons, inputbox) => {
    icon.classList.replace('fa-circle-xmark', 'fa-circle-check');
    icon.style.color = "green";
    inputbox.style.borderColor = 'green';
    message.textContent = '';
    icons.style.display = 'none';
}

names.addEventListener('input', namesvalidate);
emails.addEventListener('input', emailsvalidate);
messages.addEventListener('input', messagesvalidate);
phones.addEventListener('input', phonesvalidate);