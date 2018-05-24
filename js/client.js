particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 1,
            "density": {
                "enable": true,
                "value_area": 10
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "none",
            "stroke": {
                "width": 0.5,
                "color": "#7EC0EE"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#7EC0EE",
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": true,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 200,
                "opacity": 8,
                "speed": 555
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

var dropstate=false;

var curr = "aboutme";


function Load(PageName) {
    console.log(curr);

    document.getElementById(curr).style.display = "none";
    document.getElementById(PageName).style.display = "inline";
    console.log(document.getElementById(PageName).style.display)
    curr = PageName;
}

const dropdown = document.getElementById("drop-list");

function ShowDropdown(){

    if (dropstate){ 
        dropdown.style.display = "none"; 
    } 
    else { 
        dropdown.style.display = "inline"; 
    }
    dropstate ^= 1;
    
}