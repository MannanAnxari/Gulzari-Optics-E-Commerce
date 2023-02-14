

function openproduct(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

window.addEventListener("load", function () {
    document.getElementById("box").style.display = "block";
});
const testimonials = [
    {
        name: "Eva Sawyer",
        testimonial:
            "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur"
    },
    {
        name: "Katey Topaz",
        testimonial:
            "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla"
    },
    {
        name: "Jae Robin",
        testimonial:
            "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis"
    },
    {
        name: "Nicola Blakely",
        testimonial:
            "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
    }
];
let i = 0; // current slide
let j = testimonials.length; // total slides
let testimonialContainer = document.getElementById("testimonial-container");
function next() {
    i = (j + i + 1) % j;
    displayTestimonial();
}

function prev() {
    i = (j + i - 1) % j;
    displayTestimonial();
}
function next1() {
    i = (j + i + 1) % j;
    displayTestimonial();
}

function prev1() {
    i = (j + i - 1) % j;
    displayTestimonial();
}
let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p> 
        <h3>${testimonials[i].name}</h3>
        `;
};
window.onload = displayTestimonial;

$(function () {
    $(".HeartAnimation").click(function () {
        $(this).toggleClass("animate");
    });
});