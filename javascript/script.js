document.getElementById("submit-btn").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("search-bar").value;
  if(value === "") {return;}
  //console.log(value);

  const url = 'https://gutendex.com/books?search=' + value;
  //alert(url);
  //console.log(url);

  fetch(url)
    .then(function(response) {
      //console.log(response);
      //console.log(response.json);
      return response.json();
    }).then(function(json) {
      //console.log(json);
      let bookData = "<div class='json-content'>";
      bookData += "<div class='search-header'><h4>Your search for " + value + " returned</h4></div>";
      bookData += "<div class='json-title'><h2>" + json.results[0].title + "</h2></div>";
      bookData += "<div class='json-book-cover'><img src='" + json.results[0].formats["image/jpeg"] + "'></div>"
      bookData += "<div class='json-author'><h3>" + json.results[0].authors[0].name + "</h3></div>";
      bookData += "<div class='json-book-link'><h4>Download and Read for Free from Project Gutenberg <a href='" + json.results[0].formats["text/html"] + "'>HERE</a></h4></div>";
      bookData += "</div>";
      document.getElementById("page-content").innerHTML = bookData;
    });
  });
