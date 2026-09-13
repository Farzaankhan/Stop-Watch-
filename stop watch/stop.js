let count = 0;
let timer = null;
let setInver = false;
let btn = document.getElementById("btn");

function updating() {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60 ;

    minutes.toString().padStart("2","0");
    seconds.toString().padStart("2","0");

    let time = `${minutes} : ${seconds}`;
    document.getElementById("pera").textContent = time ;
    
    let mess = document.getElementById("hell");
    if (count === 0) {
        mess.textContent ="timer is over";
        mess.style.color = "red";

    }else{
        mess = "";
    }

}

function plus() {
    count+=60;
    updating();
}

function minus(){
    if (count >=1) {
        count--;    
    }
    updating();
}

function reset() {
    count = 0;
    updating();
}


function start() {
    if (!setInver) {
        setInver = true ;
        timer = setInterval(()=>{
            if (count >= 1) {
                count--;
            }
            updating();

        },1000)
    }
}

// function stop() {
//     if (setInver) {
//         clearInterval(timer);
//         setInterval= false;
//         btn.textContent="pause";
//     }else{
//         setInver = true ;
//           timer = setInterval(()=>{
//             count--;
//             updating();
//             btn.textContent = "isRunningNow"
//         },1000)
//     }
   
//  }


function stop() {
    if (setInver) {
        clearInterval(timer);
        setInver = false;
        btn.textContent = "STOP";
    } else {
        start();
        btn.textContent = "Pause";
    }
}


