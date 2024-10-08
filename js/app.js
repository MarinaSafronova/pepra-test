(() => {
    "use strict";
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        if (bodyLockStatus) {
            const lockPaddingElements = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                lockPaddingElements.forEach((lockPaddingElement => {
                    lockPaddingElement.style.paddingRight = "";
                }));
                document.body.style.paddingRight = "";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        if (bodyLockStatus) {
            const lockPaddingElements = document.querySelectorAll("[data-lp]");
            const lockPaddingValue = window.innerWidth - document.body.offsetWidth + "px";
            lockPaddingElements.forEach((lockPaddingElement => {
                lockPaddingElement.style.paddingRight = lockPaddingValue;
            }));
            document.body.style.paddingRight = lockPaddingValue;
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    menuInit();
    const regionalSelect = document.getElementById("regional-select");
    const regionalMap = document.getElementById("regional-map");
    const regionalCH = document.getElementById("block-CH");
    const regionalBS = document.getElementById("block-BS");
    const regionalFR = document.getElementById("block-FR");
    const regionalLU = document.getElementById("block-LU");
    const regionalSG = document.getElementById("block-SG");
    if (regionalSelect) regionalSelect.addEventListener("change", (function() {
        if (regionalSelect.value === "CH") {
            regionalMap.dataset.kanton = regionalSelect.value;
            regionalCH.style.display = "block";
            regionalBS.style.display = "none";
            regionalFR.style.display = "none";
            regionalLU.style.display = "none";
            regionalSG.style.display = "none";
        }
        if (regionalSelect.value === "BS") {
            regionalMap.dataset.kanton = regionalSelect.value;
            regionalCH.style.display = "none";
            regionalBS.style.display = "block";
            regionalFR.style.display = "none";
            regionalLU.style.display = "none";
            regionalSG.style.display = "none";
        }
        if (regionalSelect.value === "FR") {
            regionalMap.dataset.kanton = regionalSelect.value;
            regionalCH.style.display = "none";
            regionalBS.style.display = "none";
            regionalFR.style.display = "block";
            regionalLU.style.display = "none";
            regionalSG.style.display = "none";
        }
        if (regionalSelect.value === "LU") {
            regionalMap.dataset.kanton = regionalSelect.value;
            regionalCH.style.display = "none";
            regionalBS.style.display = "none";
            regionalFR.style.display = "none";
            regionalLU.style.display = "block";
            regionalSG.style.display = "none";
        }
        if (regionalSelect.value === "SG") {
            regionalMap.dataset.kanton = regionalSelect.value;
            regionalCH.style.display = "none";
            regionalBS.style.display = "none";
            regionalFR.style.display = "none";
            regionalLU.style.display = "none";
            regionalSG.style.display = "block";
        }
    }));
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybuttonTop.style.display = "block";
            mybuttonTop.style.transform = "scale(1)";
        } else {
            mybuttonTop.style.display = "none";
            mybuttonTop.style.transform = "scale(0)";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const mybuttonTop = document.getElementById("arrow-top-scroll");
    if (mybuttonTop) {
        window.onscroll = function() {
            scrollFunction();
        };
        mybuttonTop.onclick = topFunction;
    }
})();