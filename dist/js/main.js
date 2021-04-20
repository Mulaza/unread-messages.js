
(function () {
    Array.from(document.getElementsByClassName('notification-container')).forEach((item) => {

        let circ = document.createElement('div');
        circ.classList.add("notification-circle");

        let position = item.getAttribute('data-pos');
        let color = item.getAttribute('data-color');


        // position
        switch (position) {
            case "top":
                circ.style.top = "-10px";
                break;

            case "top-right":
                circ.style.top = "-10px";
                circ.style.right = "-10px";
                break;

            case "top-left":
                circ.style.top = "-10px";
                circ.style.left = "-10px";
                break;

            case "bottom":
                circ.style.bottom = "-10px";
                break;

            case "bottom-right":
                circ.style.bottom = "-10px";
                circ.style.right = "-10px";
                break;

            case "bottom-left":
                circ.style.bottom = "-10px"
                circ.style.left = "-10px"
                break;


            default:
                circ.style.top = "-10px";
                circ.style.right = "-10px"
                break;
        }


        // color
        if (color === "") {
            circ.style.backgroundColor = "red";
        }
        circ.style.backgroundColor = color;


        // data
        if (item.getAttribute('data-val') >= 1000 && item.getAttribute('data-val') < 100000) {
            circ.innerHTML = `${(item.getAttribute('data-val') / 1000).toFixed(2)}K`;
        } else if (item.getAttribute('data-val') >= 100000) {
            circ.innerHTML = `${(item.getAttribute('data-val') / 1000000).toFixed(2)}M`;
        }
        else {
            circ.innerHTML = item.getAttribute('data-val'); // check if is a number

        }


        if (item.getAttribute('data-val') == "") {
            item.setAttribute('data-val', '0');
            circ.innerHTML = item.getAttribute('data-val');
        }




        item.appendChild(circ);

    })
})()



