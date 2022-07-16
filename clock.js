function setClock(){
    const dateInfo = new Date(); 
    const hour = String(dateInfo.getHours()).padStart(2, "0");
    const min = String(dateInfo.getMinutes()).padStart(2, "0");
    const sec = String(dateInfo.getSeconds()).padStart(2, "0");
    const year = dateInfo.getFullYear();
    const month = dateInfo.getMonth()+1;
    const date = dateInfo.getDate();
    document.getElementById("timerBanner").innerHTML = hour + ":" + min  + ":" + sec;
}


window.addEventListener('load', () => {
    setClock();
    setInterval(setClock,1000);
});