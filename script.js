document.addEventListener("DOMContentLoaded", function () {
    /* 
       MOBILE MENU
     */
    const sidemenu = document.getElementById("sidemenu");
    window.openmenu = function () {
        if (sidemenu) {
            sidemenu.style.right = "0";
        }
    };
    window.closemenu = function () {
        if (sidemenu) {
            sidemenu.style.right = "-200px";
        }
    };
    /* 
       CLOSE MOBILE MENU WHEN NAV LINK IS CLICKED
     */
    if (sidemenu) {
        const navLinks =
            sidemenu.querySelectorAll("a");
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                if (window.innerWidth <= 600) {
                    sidemenu.style.right = "-200px";
                }
            });
        });
    }
    /* 
       PROJECT SEE MORE / SHOW LESS
     */
    const seeMoreBtn =
        document.getElementById("seeMoreBtn");
    const moreProjects =
        document.getElementById("moreProjects");
    if (seeMoreBtn && moreProjects) {
        seeMoreBtn.addEventListener(
            "click",
            function () {
                moreProjects.classList.toggle("show");
                if (
                    moreProjects.classList.contains("show")
                ) {
                    seeMoreBtn.innerHTML =
                        "Show Less ↑";
                } else {
                    seeMoreBtn.innerHTML =
                        "See More Projects ↓";
                }
            }
        );
    }
    /* 
       CONTACT FORM
     */
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxXcgR4gN_AzWtu1VC0syw1sVElVr2a7P84Hrbf-aaP9U4ON274UZ_Fd5xm5qm55IYA/exec";
    const form =
        document.forms["Submit_to_Contact_Form"];
    const msg =
        document.getElementById("msg");
    if (form && msg) {
        form.addEventListener(
            "submit",
            function (e) {
                e.preventDefault();
                const formData =
                    new FormData(form);
                fetch(scriptURL, {
                    method: "POST",
                    body: formData,
                    mode: "no-cors"
                })
                .then(function () {
                    msg.innerHTML =
                        "Message sent successfully";
                    msg.style.display =
                        "block";
                    form.reset();
                    setTimeout(
                        function () {
                            msg.innerHTML =
                                "";
                            msg.style.display =
                                "none";
                        },
                        3000
                    );
                })
                .catch(function (error) {
                    console.error(
                        "Error!",
                        error
                    );
                });
            }
        );
    }
    /* 
       CERTIFICATIONS SEE MORE / SHOW LESS
     */
    const seeMoreCertificatesBtn =
        document.getElementById(
            "seeMoreCertificatesBtn"
        );
    const moreCertificates =
        document.getElementById(
            "moreCertificates"
        );
    if (
        seeMoreCertificatesBtn &&
        moreCertificates
    ) {
        seeMoreCertificatesBtn.addEventListener(
            "click",
            function () {
                const isShowing =
                    moreCertificates.classList.toggle(
                        "show"
                    );
                if (isShowing) {
                    seeMoreCertificatesBtn.innerHTML =
                        'Show Less Certificates <span>↑</span>';
                } else {
                    seeMoreCertificatesBtn.innerHTML =
                        'See More Certificates <span>↓</span>';
                }
            }
        );
    }
    /* 
       EXPERIENCE / ACHIEVEMENT CERTIFICATES
     */
    window.achievementCertificates = [
        "image/pitchperk.png",
        "image/bharatiya_antirashtriya.png",
        "image/adobe_hackathon.png",
        "image/hackfusion.png",
        "image/innovation_unbound.png",
        "image/dev_arena.png",
        "image/drestien.png",
        "image/nptel_python.png",
        "image/nptel_joy_python.png"
    ];
    window.currentCertificateIndex = 0;
    /* 
       OPEN CERTIFICATE
     */
    window.openCertificate = function (imagePath) {
        const lightbox =
            document.getElementById(
                "certificateLightbox"
            );
        const fullImage =
            document.getElementById(
                "certificateFullImage"
            );
        if (!lightbox || !fullImage) {
            return;
        }
        let index =
            window.achievementCertificates.indexOf(
                imagePath
            );
        if (index === -1) {
            index = 0;
        }
        window.currentCertificateIndex =
            index;
        fullImage.src =
            window.achievementCertificates[
                window.currentCertificateIndex
            ];
        lightbox.classList.add(
            "active"
        );
        document.body.style.overflow =
            "hidden";
    };
    /* 
       CLOSE CERTIFICATE
     */
    window.closeCertificate = function () {
        const lightbox =
            document.getElementById(
                "certificateLightbox"
            );
        if (!lightbox) {
            return;
        }
        lightbox.classList.remove(
            "active"
        );
        document.body.style.overflow =
            "";
    };
    /* 
       NEXT / PREVIOUS CERTIFICATE
     */
    window.changeCertificate = function (
        direction
    ) {
        window.currentCertificateIndex +=
            direction;
        if (
            window.currentCertificateIndex < 0
        ) {
            window.currentCertificateIndex =
                window.achievementCertificates.length - 1;
        }
        if (
            window.currentCertificateIndex >=
            window.achievementCertificates.length
        ) {
            window.currentCertificateIndex =
                0;
        }
        const fullImage =
            document.getElementById(
                "certificateFullImage"
            );
        if (fullImage) {
            fullImage.src =
                window.achievementCertificates[
                    window.currentCertificateIndex
                ];
        }
    };
    /* 
       CERTIFICATE CLICK OUTSIDE
     */
    const certificateLightbox =
        document.getElementById(
            "certificateLightbox"
        );
    if (certificateLightbox) {
        certificateLightbox.addEventListener(
            "click",
            function (event) {
                if (
                    event.target ===
                    certificateLightbox
                ) {
                    window.closeCertificate();
                }
            }
        );
    }
    /* 
       CERTIFICATE KEYBOARD CONTROLS
     */
    document.addEventListener(
        "keydown",
        function (event) {
            const lightbox =
                document.getElementById(
                    "certificateLightbox"
                );
            if (
                !lightbox ||
                !lightbox.classList.contains(
                    "active"
                )
            ) {
                return;
            }
            if (
                event.key === "Escape"
            ) {
                window.closeCertificate();
            }
            if (
                event.key === "ArrowLeft"
            ) {
                window.changeCertificate(
                    -1
                );
            }
            if (
                event.key === "ArrowRight"
            ) {
                window.changeCertificate(
                    1
                );
            }
        }
    );
    /* 
       ABOUT SECTION TABS
     */
    const tabLinks =
        document.querySelectorAll(
            ".tab-links"
        );
    const tabContents =
        document.querySelectorAll(
            ".tab-contents"
        );
    tabLinks.forEach(
        function (tab) {
            tab.addEventListener(
                "click",
                function () {
                    const target =
                        this.getAttribute(
                            "data-tab"
                        );
                    /* Remove active tab */
                    tabLinks.forEach(
                        function (link) {
                            link.classList.remove(
                                "active-link"
                            );
                        }
                    );
                    /* Hide all contents */
                    tabContents.forEach(
                        function (content) {
                            content.classList.remove(
                                "active-tab"
                            );
                        }
                    );
                    /* Activate clicked tab */
                    this.classList.add(
                        "active-link"
                    );
                    /* Show selected content */
                    const selectedContent =
                        document.getElementById(
                            target
                        );
                    if (selectedContent) {
                        selectedContent.classList.add(
                            "active-tab"
                        );
                    }
                }
            );
        }
    );
    /* 
       EXPERIENCE SEE MORE / SHOW LESS
       INITIAL:
       01   02
       03   04
       AFTER CLICK:
       01   02   03
       04   05   06
       07   08   09
     */
    const seeMoreAchievementsBtn =
        document.getElementById(
            "seeMoreAchievementsBtn"
        );
    const achievementGrid =
        document.getElementById(
            "achievementGrid"
        );
    if (
        seeMoreAchievementsBtn &&
        achievementGrid
    ) {
        seeMoreAchievementsBtn.addEventListener(
            "click",
            function () {
                const isShowing =
                    achievementGrid.classList.toggle(
                        "expanded"
                    );
                if (isShowing) {
                    seeMoreAchievementsBtn.innerHTML =
                        'Show Less Achievements <span>↑</span>';
                } else {
                    seeMoreAchievementsBtn.innerHTML =
                        'See More Achievements <span>↓</span>';
                }
            }
        );
    }
});