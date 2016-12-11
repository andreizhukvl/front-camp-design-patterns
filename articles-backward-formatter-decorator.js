class ArticlesBackwardFormatterDecorator {
  constructor(formatter) {
    this._formatter = formatter;
  }

  buildHtml() {
  	let formattedContent = this._formatter.buildHtml();

  	if (formattedContent)
  	{
  		return formattedContent + "<img class='decoration' src='decoration.jpg'></img><p>Image was added by decorator.</p>";
  	}

  	return formattedContent;
  }
}