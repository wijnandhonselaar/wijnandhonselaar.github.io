let data = null;
fetch('./reaction_gifs.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        data = json;
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
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `Name: ${item.name}`;
        const imageEl = document.createElement('img');
        imageEl.setAttribute('src', item['url']);
        imageEl.setAttribute('onClick', "copyUrl('" + item.url+ "')");
        itemDiv.appendChild(imageEl);
        resultsDiv.appendChild(itemDiv);
    }
}
