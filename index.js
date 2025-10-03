const btn = document.querySelectorAll(".btn button"); // sab buttons select
const inp = document.getElementById("inp"); // input field select

btn.forEach(buttons => {
    buttons.addEventListener("click", () => { // yahan buttons (singular) pe lagana hai
        let value = buttons.textContent;

        if (value === 'AC') {
            inp.value = ""
        } else if (value === "DEL") {
            inp.value = inp.value.slice(0, -1);
        } else if (value === "=") {
            try {
                inp.value = eval(inp.value)

            } catch (error) {
                inp.value = "error"
            }
        } else {
            inp.value += value
        }

    });
});
