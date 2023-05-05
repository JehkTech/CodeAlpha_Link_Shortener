async function shortenUrl() {
    const urlInput = document.getElementById('url-input');
    const shortenBtn = document.getElementById('shorten-btn');
    const shortenedUrl = document.getElementById('shortened-url');
    
    shortenBtn.disabled = true;
    shortenedUrl.innerText = 'Shortening...';
    
    const url = urlInput.value;
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (response.ok) {
        shortenedUrl.innerHTML = `
          Shortened URL: 
          <a href="${data.result.full_short_link}" target="_blank">${data.result.full_short_link}</a>
        `;
      } else {
        shortenedUrl.innerText = 'Error shortening URL';
      }
    } catch (error) {
      shortenedUrl.innerText = 'Error shortening URL';
    } finally {
      shortenBtn.disabled = false;
      urlInput.value = '';
    }
  }
  