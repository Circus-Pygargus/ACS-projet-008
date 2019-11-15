var navbar = document.querySelector('#header_top-bg');
var lastKnownPosition;

window.addEventListener('scroll', function(e) {
    console.log('last know position : ' + lastKnownPosition);
    console.log('scrollTop = ' + document.body.scrollTop + 'ou ' + document.documentElement.scrollTop);
    if (lastKnownPosition === undefined) {
        lastKnownPosition = this.window.scrollY;
    }
    // up or down ?    
    // scroll up
    else if (lastKnownPosition > this.window.scrollY) {
        lastKnownPosition = this.window.scrollY;
        console.log('new lastknowposition (up) : ' + lastKnownPosition);
         
        // we're enough down in the page
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            console.log('toggle class up');
            if (navbar.classList.contains('nav_default-place')) {
                navbar.classList.replace('nav_default-place', 'nav_on-scroll-up');
            }
            else if (navbar.classList.contains('nav_on-scroll-down')) {
                navbar.classList.replace('nav_on-scroll-down', 'nav_on-scroll-up');
            }
        }
        else if (document.body.scrollTop <= 900 || document.documentElement.scrollTop <= 900) {
            if (navbar.classList.contains('nav_on-scroll-up')) {
                navbar.classList.replace('nav_on-scroll-up', 'nav_default-place');
            }
        }
    }
    // scroll down
    else if (lastKnownPosition < this.window.scrollY) {
        lastKnownPosition = this.window.scrollY;
        console.log('new lastknowposition (down) : ' + lastKnownPosition);

        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            if (navbar.classList.contains('nav_on-scroll-up')) {
                navbar.classList.replace('nav_on-scroll-up', 'nav_on-scroll-down');
            }
        }
        // we're too high in the window
        else {
            lastKnownPosition = this.window.scrollY;
            if (navbar.classList.contains('nav_on-scroll-up')) {
                console.log('too high');
                navbar.classList.replace('nav_on-scroll-up', 'nav_on-scroll-down');
                this.setTimeout(NavbarPositionBackToAbsolute, 900);
            }
        }
    }
});

//     // up or down ?
//     console.log('scrollTop = ' + document.body.scrollTop + 'ou ' + document.documentElement.scrollTop);
// 	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//         // scroll up
//         if (lastKnownPosition > this.window.scrollY) {
//             lastKnownPosition = this.window.scrollY;
//             console.log('scrollY up = ' + this.window.scrollY);
//             if (navbar.classList.contains('nav_default-place') || navbar.classList.contains('nav_on-scroll-down')) {
//                 console.log('toggle class up');
//                 navbar.classList.replace('nav_default-place', 'nav_on-scroll-up');
//             }
//         }
//         // scrool down
//         else if (lastKnownPosition < this.window.scrollY) {
//             lastKnownPosition = this.window.scrollY;
//             console.log('scrollY down = ' + this.window.scrollY);
//             if (navbar.classList.contains('nav_on-scroll-up')) {
//                 console.log('toggle class down');
//                 navbar.classList.replace('nav_on-scroll-up', 'nav_on-scroll-down');
//             }
//         }
//     }
//     else {
//         lastKnownPosition = this.window.scrollY;
//         if (navbar.classList.contains('nav_on-scroll-up')) {
//             console.log('too higt');
//             navbar.classList.replace('nav_on-scroll-up', 'nav_on-scroll-down');
//             this.setTimeout(NavbarPositionBackToAbsolute, 900);
//         }
//     }
// });

function NavbarPositionBackToAbsolute () {
    console.log('navbar to default place');
    if (navbar.classList.contains('nav_on-scroll-up')) {
        navbar.classList.replace('nav_on-scroll-up', 'nav_default-place');
    }
    else if (navbar.classList.contains('nav_on-scroll-down')) {
        navbar.classList.replace('nav_on-scroll-down', 'nav_default-place');
    }
}