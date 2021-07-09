







(function () {
    Array.from(document.getElementsByClassName('notification-container')).forEach((item) => {


        let circ = document.createElement('div');
        circ.classList.add("notification-circle");

        let value = item.getAttribute('data-val');
        let position = item.getAttribute('data-pos');
        let color = item.getAttribute('data-color');
        let click_state = item.getAttribute('data-select-hide');



        const offsetValue = "-10px";

        // Position
        switch (position) {
            case "top":
                circ.style.top = offsetValue;
                break;

            case "top-right":
                circ.style.top = offsetValue;
                circ.style.right = offsetValue;
                break;

            case "top-left":
                circ.style.top = offsetValue;
                circ.style.left = offsetValue;
                break;

            case "bottom":
                circ.style.bottom = offsetValue;
                break;

            case "bottom-right":
                circ.style.bottom = offsetValue;
                circ.style.right = offsetValue;
                break;

            case "bottom-left":
                circ.style.bottom = offsetValue;
                circ.style.left = offsetValue;
                break;


            default:
                circ.style.top = offsetValue;
                circ.style.right = offsetValue;
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
            circ.innerHTML = `+${(value / 1000).toFixed(1)}K`;
        } else if (value >= 100000) {
            circ.innerHTML = `+${(value / 1000000).toFixed(1)}M`;
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



