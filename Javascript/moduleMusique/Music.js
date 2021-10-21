document.addEventListener("DOMContentLoaded", () => {

    let btn1 = document.getElementById("musique");
    let change = document.getElementById("icone")
    let sound = document.getElementById("son");
    sound.volume = 0.05;

    function music() {
        console.log(sound.volume)

        if (sound.volume != 0.05) {
            sound.volume = 0.05;
            change.classList.remove("fa-volume-off");
            change.classList.add("fa-volume-up");
        }
        else {
            sound.volume = 0;
            change.classList.remove("fa-volume-up");
            change.classList.add("fa-volume-off");
        }

        // if (sound.paused) {
        //     sound.volume=0.5;
        //     sound.play();
        // } else {
        //     sound.pause();
        // }
    }



    btn1.addEventListener("click", (e) => {
        music();
    });

});