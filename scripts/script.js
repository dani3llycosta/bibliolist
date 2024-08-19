let isHttpRequestVisible = false;

function handleSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const publisher = document.getElementById('publisher').value;
    const language = document.getElementById('language').value;
    const year = document.getElementById('year').value;

    localStorage.setItem('title', title);
    localStorage.setItem('author', author);
    localStorage.setItem('genre', genre);
    localStorage.setItem('publisher', publisher);
    localStorage.setItem('language', language);
    localStorage.setItem('year', year);

    window.location.href = 'formSent.html';
}

function displayHttpRequest() {
    const title = localStorage.getItem('title');
    const author = localStorage.getItem('author');
    const genre = localStorage.getItem('genre');
    const publisher = localStorage.getItem('publisher');
    const language = localStorage.getItem('language');
    const year = localStorage.getItem('year');

    const formData = `
        Título: ${title}<br>
        Autor: ${author}<br>
        Gênero: ${genre}<br>
        Editora: ${publisher}<br>
        Idioma: ${language}<br>
        Ano: ${year}
    `;

    document.querySelector('.displayForm').innerHTML = formData;
}

function showHttpRequest() {
    const title = localStorage.getItem('title');
    const author = localStorage.getItem('author');
    const genre = localStorage.getItem('genre');
    const publisher = localStorage.getItem('publisher');
    const language = localStorage.getItem('language');
    const year = localStorage.getItem('year');

    const postData = `title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&genre=${encodeURIComponent(genre)}&publisher=${encodeURIComponent(publisher)}&language=${encodeURIComponent(language)}&year=${encodeURIComponent(year)}`;
    const httpRequest = `POST /dummy_endpoint HTTP/1.0\r\n` +
        `Accept: text/html, application/xhtml+xml, application/xml\r\n` +
        `Content-Type: application/x-www-form-urlencoded\r\n` +
        `Content-Length: ${postData.length}\r\n\r\n` +
        postData;

    const httpRequestElement = document.getElementById('httpRequest');
    
    if (isHttpRequestVisible) {
        httpRequestElement.textContent = '';
        isHttpRequestVisible = false;
    } else {
        httpRequestElement.textContent = httpRequest;
        isHttpRequestVisible = true;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    displayHttpRequest(); 

    const showHttpRequestButton = document.getElementById('showHttpRequest');
    if (showHttpRequestButton) {
        showHttpRequestButton.addEventListener('click', showHttpRequest);
    }
});
