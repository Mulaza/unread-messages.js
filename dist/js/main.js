
(function () {
    Array.from(document.getElementsByClassName('notification-container')).forEach((item) => {

        let circ = document.createElement('div');
        circ.classList.add("notification-circle");

        let position = item.getAttribute('data-pos');
        let color = item.getAttribute('data-color');
        let click_state = item.getAttribute('data-select-hide');


        // Position
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

        if (!['top', 'top-right', 'top-left', 'bottom', 'bottom-right', 'bottom-left', null].includes(position)) {
            console.error('Unsupported position ', position);
        }


        // Color
        if (color === "") {
            circ.style.backgroundColor = "red";
        }
        circ.style.backgroundColor = color;


        // Data
        if (item.getAttribute('data-val') >= 1000 && item.getAttribute('data-val') < 100000) {
            circ.innerHTML = `${(item.getAttribute('data-val') / 1000).toFixed(2)}K`;
        } else if (item.getAttribute('data-val') >= 100000) {
            circ.innerHTML = `${(item.getAttribute('data-val') / 1000000).toFixed(2)}M`;
        }
        else {
            circ.innerHTML = item.getAttribute('data-val'); // check if is a number
        }


        // // Max Value displayed
        // if (item.getAttribute('data-max-val') != null) {
        //     let MAX_VALUE = parseInt(item.getAttribute('data-max-val'));
        //     console.log(parseInt(item.getAttribute('data-max-val')), 'was defined');
        // }


        // Touch Listener 
        function shrink() {
            circ.classList.add('circle-shrink');
        };

        if (click_state == null || click_state === "true" || click_state === "True") {
            item.addEventListener('click', shrink);
        } else if (click_state == 'false' || click_state == 'False') {
            // No need to add the event listener
        }

        if (!['true', 'false', 'True', 'False', null].includes(click_state)) {
            console.error('Unsupported value: ', click_state)
        }




        // Default number value
        if (item.getAttribute('data-val') == "") {
            item.setAttribute('data-val', '0');
            circ.innerHTML = item.getAttribute('data-val');
        }









        item.appendChild(circ);

    })
})()



