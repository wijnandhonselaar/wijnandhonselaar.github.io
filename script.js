let data = null;
fetch('./reaction_gifs.json')
    .then((response) => response.json())
    .then((data) => {
        // Convert the object into an array
        var valuesArray = Object.values(data);
        // Shuffle the array
        var shuffledArray = shuffleArray(valuesArray);

        // Retrieve the first 12 elements
        var randomValues = shuffledArray.slice(0, 8);

        displayResults(randomValues);
    }
    );



function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const results = [];

    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        // Convert object values to lowercase for case-insensitive search
        const values = Object.values(item).map(value => value.toString().toLowerCase());

        if (values.some(value => value.includes(searchTerm))) {
            results.push(item);
        }
    }

    displayResults(results);
}

function copyUrl(url) {
    navigator.clipboard.writeText(url)
}

function displayResults(results) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (results.length === 0) {
        resultsDiv.textContent = "No results found.";
        return;
    }

    for (let i = 0; i < results.length; i++) {
        const item = results[i];
        let res = `
        <div class="name">${item.name}</div>
        <div class="tags">${item.tags}</div>
        <div class="image"><img alt="${item.name}" src="${item.url}" onClick="copyUrl(${item.url})"></div>`;

        let itemDiv = document.createElement("div");
        itemDiv.className = "col-12 col-md-4 col-lg-3 result";
        itemDiv.innerHTML = res;
        resultsDiv.appendChild(itemDiv);
    }
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
