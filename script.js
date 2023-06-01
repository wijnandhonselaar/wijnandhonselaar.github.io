let data = null;
let results = [];
let scroll = false;

fetch('./reaction_gifs.json')
    .then((response) => response.json())
    .then((json) => {
        data = json
        // Convert the object into an array
        var valuesArray = Object.values(data);
        
        const currentDate = new Date();
        const gif_of_day = valuesArray[getRandomKeyForDate(currentDate, valuesArray)];
        gifOfTheDay(gif_of_day);
        // Shuffle the array
        var shuffledArray = shuffleArray(valuesArray);

        // // Retrieve the first 12 elements
        var randomValues = shuffledArray.slice(0, 6);
        results = results.concat(randomValues);

        displayResults(randomValues);
    }
    );

let search_input = document.getElementById('searchInput');
search_input.addEventListener('keydown', (e) => {
    if (e.code === "Enter") {
        search();
    }
});

document.addEventListener('scroll', (event) => {
    if(!scroll) {
        scroll = true;
        // document.removeEventListener('scroll');

    }
});

function getRandomKeyForDate(date, array) {
    const dateString = date.toDateString();
    const keyIndex = Math.floor(
      Array.from(dateString).reduce((acc, char) => acc + char.charCodeAt(0), 0)
    ) % array.length;
  
    return Object.keys(array)[keyIndex];
  }
  


function search() {
    const searchTerm = search_input.value.toLowerCase();
    const results = [];

    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        // Convert object values to lowercase for case-insensitive search
        const values = Object.values(item).map(value => value.toString().toLowerCase());

        if (values.some(value => value.includes(searchTerm))) {
            results.push(item);
        }
    }

    const gif_of_day_el = document.getElementsByClassName("gif_of_the_day")[0];
    if(!gif_of_day_el.className.includes('hidden')) {
        gif_of_day_el.classList.add("hidden");
    }

    displayResults(results);
}

function copyUrl(url) {
    navigator.clipboard.writeText(url)
}

function gifOfTheDay(item) {
    const resultsDiv = document.getElementById("gif_of_the_day");
    resultsDiv.innerHTML = "";

    let itemDiv = document.createElement("div");
    itemDiv.className = "result-container";
    itemDiv.innerHTML = itemToResult(item);
    resultsDiv.appendChild(itemDiv);
}

function displayResults(results) {
    const resultsElement = resultsDiv();
    resultsElement.innerHTML = "";

    if (results.length === 0) {
        resultsElement.textContent = "No results found.";
        return;
    }

    appendReults(resultsElement, results);
}

function appendReults(resultContainer, items) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        let itemDiv = document.createElement("div");
        itemDiv.className = "col-12 col-lg-3 result-container";
        itemDiv.innerHTML = itemToResult(item);;
        resultContainer.appendChild(itemDiv);
    }
}

let resultsDiv = () => { return document.getElementById("results"); }

function itemToResult(item) {
    return `<div class="result">
    <div class="d-flex justify-content-center image">
    <img alt="${item.name}" src="${item.url}" onClick="copyUrl('${item.url}')">
    </div>
    <div class="name">${item.name}</div>
    <div class="tags hidden">${item.tags}</div>
    </div>`;
}

// Function to shuffle the array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
