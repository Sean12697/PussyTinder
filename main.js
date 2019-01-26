$(document).ready(() => {
    swipe(0);
    $("#like").click(() => {swipe(1);});
    $("#hate").click(() => {swipe(-1);});
});

function swipe(increment) {
    $.get("https://aws.random.cat/meow").then(res => {
        let file = res.file;
        $('#image').css("background-image", `url(${file}`);  
    });
}