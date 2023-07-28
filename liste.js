document.querySelector("body").onload = () => {
    if (localStorage.getItem("index") != null) {
        var sup = parseInt(localStorage.getItem("index"));
        for (let j = 0; j < sup; j++){
            document.querySelector(".tachesdiv").innerHTML += "<div class='taic'> <div class='tache'>" + JSON.parse(localStorage.getItem("list"))[j] + "</div> <div class='icon'> <svg class='w-6 h-6 edit' id='" + creat_id2(j + 1) + "'  fill='currentColor' viewBox = '0 0 20 20' xmlns = 'http://www.w3.org/2000/svg' > <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'> </path> </svg > <svg class='w-6 h-6 edit hidden' id='"+ creat_id3(j+1) +"' fill = 'currentColor' viewBox = '0 0 20 20' xmlns = 'http://www.w3.org/2000/svg' > <path fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clip-rule='evenodd'></path></svg > <svg class='w-6 h-6 sup' id='" + creat_id(j + 1) + "' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z' clip-rule='evenodd'> </path> </svg></div >  </div >";
            for (let j2 = 0; j2 <= j; j2++){
            document.querySelector("#" + creat_id(j2 + 1)).onclick=()=>{
            let value = document.querySelector("#" + creat_id(j2 + 1)).parentElement.parentElement.innerText;
            document.querySelector("#" + creat_id(j2 + 1)).parentElement.parentElement.remove();
            supelement(value);
                localStorage.setItem("index", parseInt(localStorage.getItem("index")) - 1);
                document.querySelectorAll(".notif")[1].classList.remove("hidden");
                setTimeout(() => {
                document.querySelectorAll(".notif")[1].classList.add("hidden");
                },1000);
            };
            
                
            document.querySelector("#" + creat_id2(j2 + 1)).onclick = () => {
            let save = document.querySelector("#" + creat_id2(j2 + 1)).parentElement.parentElement.innerText;
            document.querySelector("#" + creat_id3(j2 + 1)).classList.remove("hidden");
            document.querySelector("#" + creat_id2(j2 + 1)).classList.add("hidden");
            document.querySelector("#" + creat_id2(j2 + 1)).parentElement.parentElement.firstElementChild.setAttribute("contenteditable", "true");

            document.querySelector("#" + creat_id3(j2 + 1)).onclick = () => {
            document.querySelector("#" + creat_id3(j2 + 1)).classList.add("hidden");  
            document.querySelector("#" + creat_id2(j2 + 1)).classList.remove("hidden");  
            document.querySelector("#" + creat_id2(j2 + 1)).parentElement.parentElement.firstElementChild.setAttribute("contenteditable", "false");
                replace(save, document.querySelector("#" + creat_id2(j2 + 1)).parentElement.parentElement.innerText);
                document.querySelectorAll(".notif")[2].classList.remove("hidden");
                setTimeout(() => {
                document.querySelectorAll(".notif")[2].classList.add("hidden");
                },1000);
            };

        };   
            }
        }
    }
};


function creat_id(z) {
    let str = "i";
    str += z;
    return str;
}
function creat_id2(x) {
    let str = "j";
    str += x;
    return str;
}

function creat_id3(y) {
    let str = "k";
    str += y;
    return str;
}

function supelement(value) {
    let t1 = JSON.parse(localStorage.getItem("list"));
    let t2 = [];
    let inx = 0;
    for (let i2 = 0; i2 <  parseInt(localStorage.getItem("index")); i2++){
        if (t1[i2] != value) {
            t2[inx] = t1[i2];
            inx = inx + 1;
        }
    }
    localStorage.removeItem("list");
    localStorage.setItem("list", JSON.stringify(t2) );
}

function replace(val1,val2) {
    
    let tab = JSON.parse(localStorage.getItem("list"));
    let i = 0;
    while (tab[i] !== val1) {
        i++;
    }
    tab[i] = val2;
    localStorage.setItem("list", JSON.stringify(tab) );
}


function add() {
  
    if (localStorage.getItem("index") == null) {
        let tab = []; 
        tab[0] = document.querySelector(".inp").value;
        localStorage.setItem("list", JSON.stringify(tab));
        localStorage.setItem("index", 1);
    }
    else {
        let index = parseInt(localStorage.getItem("index"));     
        let tab = JSON.parse(localStorage.getItem("list")); 
        tab[index] = document.querySelector(".inp").value;
        localStorage.setItem("list", JSON.stringify(tab));
        index += 1;
        localStorage.setItem("index", index); 
    }
    document.querySelector(".tachesdiv").innerHTML += "<div class='taic'> <div class='tache'>" + document.querySelector(".inp").value + "</div> <div class='icon'> <svg class='w-6 h-6 edit' id='" + creat_id2(localStorage.getItem("index")) + "'  fill='currentColor' viewBox = '0 0 20 20' xmlns = 'http://www.w3.org/2000/svg' > <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'> </path> </svg > <svg class='w-6 h-6 edit hidden' id='"+ creat_id3(localStorage.getItem("index")) +"' fill = 'currentColor' viewBox = '0 0 20 20' xmlns = 'http://www.w3.org/2000/svg' > <path fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clip-rule='evenodd'> </path> </svg > <svg class='w-6 h-6 sup' id='" + creat_id(localStorage.getItem("index")) + "' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z' clip-rule='evenodd'> </path> </svg></div >  </div > ";
    document.querySelectorAll(".notif")[0].classList.remove("hidden");
    setTimeout(() => {
        document.querySelectorAll(".notif")[0].classList.add("hidden");
    },1000);
    let index = parseInt(localStorage.getItem("index"))
    for (let id = 0; id < index; id++) {
        
        if (document.querySelector("#" + creat_id(id + 1)) != null) {
            document.querySelector("#" + creat_id(id + 1)).onclick =()=> {
                let value = document.querySelector("#" + creat_id(id + 1)).parentElement.parentElement.innerText;
                document.querySelector("#" + creat_id(id + 1)).parentElement.parentElement.remove();
                supelement(value);
                localStorage.setItem("index", parseInt(localStorage.getItem("index")) - 1);
                document.querySelectorAll(".notif")[1].classList.remove("hidden");
                setTimeout(() => {
                document.querySelectorAll(".notif")[1].classList.add("hidden");
                },1000);
            };

            document.querySelector("#" + creat_id2(id + 1)).onclick = () => {
                let save = document.querySelector("#" + creat_id2(id + 1)).parentElement.parentElement.innerText;
                document.querySelector("#" + creat_id3(id + 1)).classList.remove("hidden");
                document.querySelector("#" + creat_id2(id + 1)).classList.add("hidden");
                document.querySelector("#" + creat_id2(id + 1)).parentElement.parentElement.firstElementChild.setAttribute("contenteditable", "true");

                document.querySelector("#" + creat_id3(id + 1)).onclick = () => {
                    document.querySelector("#" + creat_id3(id + 1)).classList.add("hidden");
                    document.querySelector("#" + creat_id2(id + 1)).classList.remove("hidden");
                    document.querySelector("#" + creat_id2(id + 1)).parentElement.parentElement.firstElementChild.setAttribute("contenteditable", "false");
                    replace(save, document.querySelector("#" + creat_id2(id + 1)).parentElement.parentElement.innerText);
                    document.querySelectorAll(".notif")[2].classList.remove("hidden");
                    setTimeout(() => {
                    document.querySelectorAll(".notif")[2].classList.add("hidden");
                    },1000);
                };
             

            };
        }
    }
    document.querySelector("input").value = "";
    return false;
}

document.querySelector(".clear").onclick = () => {
    localStorage.removeItem("list");
    localStorage.removeItem("index");
    document.querySelectorAll(".notif")[3].classList.remove("hidden");
    setTimeout(() => {
        document.querySelectorAll(".notif")[3].classList.add("hidden");
        location.reload();
    },1000);
};

document.querySelector(".inputdiv").addEventListener("submit", (e) => {
    e.preventDefault(); // pour ne pas actualiser   
    return add();
});





