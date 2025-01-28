async function searchImage() {
    const query = document.getElementById('searchText').value;
    const apiKey = 'YOUR_BING_SEARCH_API_KEY';
    const url = `https://api.bing.microsoft.com/v7.0/images/search?q=${encodeURIComponent(query)}&count=1`;

    const response = await fetch(url, {
        headers: { 'Ocp-Apim-Subscription-Key': apiKey }
    });
    const data = await response.json();
    const imageUrl = data.value[0].contentUrl;

    document.getElementById('imageContainer').innerHTML = `<img src="${imageUrl}" alt="${query}">`;
}
