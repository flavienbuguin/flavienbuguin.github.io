document.addEventListener("DOMContentLoaded", () => {

    let btn1 = document.getElementById("gauche");
    let btn2 = document.getElementById("droite");
    let lef = document.getElementsByClassName("left");
    let rig = document.getElementsByClassName("right");

    let retourG = document.getElementById("rg");
    let retourD = document.getElementById("rd");
 

    function animation(e) {
        let a = e.target.classList;
        let i=0;
        let Tab = new Array();

        while(i<a.length)
        {
            Tab.push(a[i]);
            i++;
        }

        const k = Tab.find(function(tab){
            return (tab.includes("left")) || (tab.includes("right"));
        })

            if(k==="left")
        {
            btn2.classList.add("hide")
            btn1.classList.add("reduit")
            lef[0].classList.remove("hide")
        }
            else if(k==="right")
        {

            btn1.classList.add("hide")
            btn2.classList.add("reduit")
            rig[0].classList.remove("hide")
        }
    }


    function retour(e)
    {
        let a = e.target.classList;
        let i=0;
        let Tab = new Array();

        while(i<a.length)
        {
            Tab.push(a[i]);
            i++;
        }

        const k = Tab.find(function(tab){
            return (tab.includes("left")) || (tab.includes("right"));
        })

        if(k==="left")
        {
            btn2.classList.remove("hide")
            btn1.classList.remove("reduit")
            lef[0].classList.add("hide")
        }
            else if(k==="right")
        {
            btn1.classList.remove("hide")
            btn2.classList.remove("reduit")
            rig[0].classList.add("hide")
        }
    }



    btn1.addEventListener("click", (e) => {
        animation(e);
    });

    btn2.addEventListener("click", (e) => {
        animation(e);
    });

    retourG.addEventListener("click", (e) => {
        retour(e);
    });

    retourD.addEventListener("click", (e) => {
        retour(e);
    });


});