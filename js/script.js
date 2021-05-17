const $html = document.querySelector('html');
const $checkbox = document.querySelector('#input-switch');

$checkbox.addEventListener ('change', function() {
    $html.classList.toggle('darkmode');
})