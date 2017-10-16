window.addEventListener('load', function () {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let user = JSON.parse(xhr.responseText);
            if (user && user.email && user.name) {
                let enterBlockEl = document.querySelector('#enter-tipi');
                enterBlockEl.classList = 'hide';
                let signedInBlockEl = document.querySelector('#logged-in');
                signedInBlockEl.querySelector('.tipi-name').textContent = `Hello ${user.name}!`;
                signedInBlockEl.classList = 'show';
            }
        }
    };
    xhr.open("GET", "/login", true);
    xhr.send(null);
});