document.addEventListener("DOMContentLoaded", () => {

    let btn1 = document.getElementById("mention");
    let btn2 = document.getElementById("Accueil");
    let btn3 = document.getElementById("Projets");

    let a = document.getElementById("titre");





    function mention(e) {
        let o = e.target.id

        console.log(o)

        let information = document.getElementById("information");
        let droi = document.getElementById("droit");
        let carroussel = document.getElementById("carousel");

        let pl = document.getElementById("paraGauche");
        let pr = document.getElementById("paraDroite");

        let il = document.getElementById("gauche");
        let ir = document.getElementById("droite");


        let i = 0;

        let Tab = new Array();
        let rab = new Array();

        let Tab2 = new Array();
        while (i < pl.classList.length) {
            Tab2.push(pl.classList[i]);
            i++;
        }

        i = 0;
        let Tab3 = new Array();
        while (i < pr.classList.length) {
            Tab3.push(pr.classList[i]);
            i++;
        }

        i = 0;

        while (i<carroussel.classList.length)
            {
                rab.push(carroussel.classList[i]);
                i++;
            }

            const kl = rab.find(function (rab) {
                return (rab.includes("project"));
            });

            i = 0;

        const k2 = Tab2.find(function (tab) {
            return (tab.includes("hide"));
        })

        const k3 = Tab3.find(function (tab) {
            return (tab.includes("hide"));
        })

        //cas mention légal

        if (o === "mention") {
            while (i < information.classList.length) {
                Tab.push(information.classList[i]);
                i++;
            }

            const k = Tab.find(function (tab) {
                return (tab.includes("d-flex"));
            });

            

            if (k === "d-flex") {
                information.classList.remove("d-flex")
                information.classList.add("hide");
                droi.classList.add("d-flex")
                droi.classList.remove("hide")
                if (k2 != "hide") {
                    pl.classList.add("hide")
                }

                if (k3 != "hide") {
                    pr.classList.add("hide")
                }
                
                a.textContent = "Mentions Légales"
            }

            if(kl === "project")
            {
                carroussel.classList.remove("project")
                carroussel.classList.add("hide");
                droi.classList.add("d-flex")
                droi.classList.remove("hide")
                a.textContent = "Mentions Légales"
            }
        }
        // cas Accueil
        else if (o === "Accueil") {

            while (i < droit.classList.length) {
                Tab.push(droit.classList[i]);
                i++;
            }
            const k = Tab.find(function (tab) {
                return (tab.includes("d-flex"));
            })

            if (k === "d-flex") {
                droi.classList.remove("d-flex")
                droi.classList.add("hide");
                information.classList.add("d-flex")
                information.classList.remove("hide")

                if((il!="hide"))
                {
                    ir.classList.remove("hide");
                    il.classList.remove("reduit");
                }
                
                if((ir!="hide"))
                {
                    il.classList.remove("hide");
                    ir.classList.remove("reduit");
                }

                a.textContent = "Qui Suis-je ?"
            }
            if(kl === "project")
            {
                carroussel.classList.remove("project")
                carroussel.classList.add("hide");
                information.classList.add("d-flex")
                information.classList.remove("hide")

                if((il!="hide"))
                {
                    ir.classList.remove("hide");
                    il.classList.remove("reduit");
                }
                
                if((ir!="hide"))
                {
                    il.classList.remove("hide");
                    ir.classList.remove("reduit");
                }

                a.textContent = "Qui Suis-je ?"
            }
        }
        //cas projets
        else if (o === "Projets") {

            information.classList.remove("d-flex")
            information.classList.add("hide")
            droi.classList.remove("d-flex")
            droi.classList.add("hide")
            carroussel.classList.remove("hide")
            carroussel.classList.add("project")

            if (k2 != "hide") {
                pl.classList.add("hide")
            }

            if (k3 != "hide") {
                pr.classList.add("hide")
            }

            a.textContent = "Mes Projets"

        }



    }




    btn1.addEventListener("click", (e) => {
        mention(e);
    });

    btn2.addEventListener("click", (e) => {
        mention(e);
    });

    btn3.addEventListener("click", (e) => {
        mention(e);
    });

});