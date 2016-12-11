class StandardFormatterFactory {
  constructor() {
  }

  create(articles) {
    return new ArticlesStandardFormatter(articles);
  }
}