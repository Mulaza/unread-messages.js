
(function () {
    Array.from(document.getElementsByClassName('notification-container')).forEach((item) => {

        let circ = document.createElement('div');
        circ.classList.add("notification-circle");

        let value = item.getAttribute('data-val');
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
        if (value >= 1000 && value < 100000) {
            circ.innerHTML = `${(value / 1000).toFixed(2)}K`;
        } else if (value >= 100000) {
            circ.innerHTML = `${(value / 1000000).toFixed(2)}M`;
        }
        else {
            circ.innerHTML = value; // check if is a number
        }


        // Touch Listener 
        function shrink() {
            circ.classList.add('circle-shrink');
        };

        if (click_state == null || click_state === "true" || click_state === "True") {
            item.addEventListener('click', shrink);
        } else if (click_state == 'false' || click_state == 'False') {
            // No need to add the event listener
            item.style.cursor = "default"
        }

        if (!['true', 'false', 'True', 'False', null].includes(click_state)) {
            console.error('Unsupported value: ', click_state)
        }


        // Default number value
        if (value == "" || value < 0) {
            value = '0';
            circ.innerHTML = value;
        }


        // 
        item.appendChild(circ);

    })
})()



