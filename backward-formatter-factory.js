class BackwardFormatterFactory {
  constructor() {
  }

  create(articles) {
    return new ArticlesBackwardFormatter(articles);
  }
}