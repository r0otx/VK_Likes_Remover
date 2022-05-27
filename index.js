/*
Шагаем на URL: https://vk.com/feed?section=likes
Открываем в браузере консоль Ctrl+Shift+I
В нее вводим код ниже. Если вылезает капча, в 13 строке меняет setTimeout
на значение больше (1000ms = 1сек)
Реализован автоскрол страницы и удаление лайков.
*/

function removeLikes() {
    let deletePostLink = document.body.querySelectorAll('div.PostBottomAction._like.active[onclick^="Likes.toggle"]');
    for (let i = 0; i < deletePostLink.length; i++) {
        deletePostLink[i].click();
    }
    console.log(deletePostLink.length + ' likes deleted');
    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(removeLikes, 10000);
}
removeLikes();