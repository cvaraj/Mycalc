fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=d12664a776064cf799cc042f20002d88")
.then(response => response.text())      // 1
     .then(json => {                    // 2
          //log("typeof json: " + typeof json);
          console.log(json);
          //alert(json);

          var o=JSON.parse(json);
          console.log(o.totalResults);
          console.log(o.articles.length);
          for (var i=0;i<o.articles.length;i++)
			{  
			        title = o.articles[i].title;
			        description = o.articles[i].description;
			        name = o.articles[i].publishedAt;
			        url = o.articles[i].url;
			        urlToImage = o.articles[i].urlToImage;
			        //alert(description);
			        titles(title, description, name, url, urlToImage);
			        //contents(description)
			}

     })
     .catch(error => {                  // 3
          // handle error

     });

function titles(title, description, name, url, urlToImage) {
  var div = document.createElement("div");
  div.setAttribute('class', 'card')
 /* div.appendChild(document.createTextNode(title));*/
  document.body.appendChild(div);

   const h1 = document.createElement('h1')
   const a = document.createElement('a');
   const img = document.createElement('img');
   a.setAttribute('href', url);
   a.setAttribute('target', '_blank');
   img.src = urlToImage
   h1.appendChild(a);
   a.textContent = title;



   const p = document.createElement('p')
   p.textContent = description;

   const span = document.createElement('span')
   span.textContent = name;
   
   div.appendChild(img);
   div.appendChild(h1);
   div.appendChild(span);
   div.appendChild(p)
}
