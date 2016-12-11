class BackwardFormatterFactory {
  constructor() {
  }

  create(articles) {
    return new ArticlesBackwardFormatterDecorator(new ArticlesBackwardFormatter(articles));
  }
}