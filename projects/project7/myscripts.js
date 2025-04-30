// myscripts.js - Project 7

// Run logo rollover setup when the window loads
window.onload = function() {
    logoRollover();
};

function preloadImages() {
    const images = [
        "Images/Fullsize/SailingCoupleSmall.jpg",
        "Images/Fullsize/SailingSmall.jpg"
        // Add more full-size image paths as needed
    ];

    for (let i = 0; i < images.length; i++) {
        let img = new Image();
        img.src = images[i];
    }
}

function logoRollover() {
    const logo = document.getElementById("logo");
    logo.onmouseover = function () {
        this.src = "Images/ExtremeHoneymoonsLogoCopy2.jpg";
    };
    logo.onmouseout = function () {
        this.src = "Images/ExtremeHoneymoonsLogoCopy.jpg";
    };

    preloadImages();  // Call preload on page load
}