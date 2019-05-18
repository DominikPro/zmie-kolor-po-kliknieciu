function zmienKolor() {
    let clientX = event.clientX;
    let clientY = event.clientY;
    let clientXModulo = clientX % 2;
    let clientYModulo = clientY % 2;

    if (clientXModulo === 1 && clientYModulo === 1) {
        return document.body.style.backgroundColor = "red"
    }
    if (clientXModulo === 0) {
        if (clientYModulo === 0) {
            return document.body.style.backgroundColor = "blue"
        }
    } else((clientXModulo === 0 && clientYModulo === 1) || (clientXModulo === 1 && clientYModulo === 0))
    document.body.style.backgroundColor = "green"
};
let click = document.addEventListener('click', zmienKolor)