let hours=document.querySelector("#hourhand");
let minutes=document.querySelector("#minutehand");
let seconds= document.querySelector("#secondhand");

function UPDATEClock(){
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();

    let secondPos = sc * 360/60;
    let minutePos = mn * 360/60;
    let hourPos = hr * 360/12 + minutePos * 15/60;

    hours.setAttribute("transform",`rotate(${hourPos}, 50,50)`);
    minutes.setAttribute("transform",`rotate(${minutePos}, 50,50)`);
    seconds.setAttribute("transform",`rotate(${secondPos}, 50,50)`);
}
setInterval(UPDATEClock,1000);