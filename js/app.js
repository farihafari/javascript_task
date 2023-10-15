const span_count = document.querySelector("#count");

window.onload = () => {
    if(!localStorage.getItem('visitor-count')){
        localStorage.setItem('visitor-count', 1);
    }else{
        let count = Number(localStorage.getItem('visitor-count'));
        localStorage.setItem('visitor-count', ++count);
    }
    span_count.innerText = localStorage.getItem('visitor-count');
}
