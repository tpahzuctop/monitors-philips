export function isWebp() {
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        }
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function scrollBgEffect(BgItem) {
    document.addEventListener('scroll', () => {
        const elem = document.querySelectorAll(BgItem);
        const startPoint = Math.round(window.innerHeight*0.75);
        const middlePoint = Math.round(window.innerHeight*0.50);
        const lastPoint = Math.round(window.innerHeight*0.25);
        elem.forEach(item => {
            let rect = item.getBoundingClientRect();
            if( Math.round(rect.y) < startPoint) {
                item.style.transform = "scale(1.13)"
            }
            if( Math.round(rect.y) < middlePoint) {
                item.style.transform = "scale(1.2)"
            }
            if( Math.round(rect.y) < lastPoint) {
                item.style.transform = "scale(1.3)"
            }
        })
    });
}