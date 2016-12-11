class ArticlesStandardFormatter {
  constructor(articles) {
    this._articles = articles;
  }

  buildHtml() {
  	var resultHTML = "";

  	for(let i = 0; i < this._articles.length; i++){
      resultHTML += `<div class="article standard">
      <h1 class="title">${this._articles[i].title}</h1>
      <img src="${this._articles[i].imageUrl}"></img>
      <p class="description">${this._articles[i].description}</p>
      <p class="author">By ${this._articles[i].author} on ${new Date().toLocaleString()}</p>
      <p class="articleIndex">${i}</p>
      </div>`;
    }

    return resultHTML;
  }
}