let variable = document.getElementById('url');
let response = document.getElementById('response');

let url = "https://demo.condize.net/shortny/";

const setQuery = (e) => {
    if (e.keyCode == '13') {
        getResult(variable.value)
    }
}


const getResult = (short) => {
    let query = `${url}api.php?url=${short}`;

    fetch(query)
        .then(response => response.json())
        .then(json => {

            if (!json.error) {
                response.innerHTML = `<p style="color: #FFFFFF">Your short url is:</p></br><p>${json.shorturl}</p>`;
                response.style.display = "block";
            }else {
                response.innerHTML = `<p><b>Error: </b>${json.error}</p>`;
                variable.innerText = "";
            }
            console.log(json);
            console.log(json.shorturl);

        });
}

variable.addEventListener('keypress', setQuery)