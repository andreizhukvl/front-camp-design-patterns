class ArticlesModel {
  constructor(articles) {
    this.articles = articles;
    this.selectedIndex = -1;
    this.useStandardFormatter = true;

    this.articleAdded = new Observer(this);
    this.articleRemoved = new Observer(this);
    this.articleSelected = new Observer(this);
    this.formatterChanged = new Observer(this);
  }

  getArticles() {
    return [].concat(this.articles);
  }

  addArticle(article) {
    this.articles.push(article);
    this.articleAdded.notify();
  }

  removeArticle(index) {
    let article = this.articles[index];
    this.articles.splice(index, 1);
    this.articleRemoved.notify();
    if (index === this.selectedIndex) {
      this.selectedIndex = -1;
    }
  }

  getSelectedIndex() {
    return this.selectedIndex;
  }

  selectArticle(index) {
    let previousIndex = this.selectedIndex;
    this.selectedIndex = index;
    this.articleSelected.notify({ previous : previousIndex });
  }

  changeFormatter() {
    this.useStandardFormatter = !this.useStandardFormatter;
    this.formatterChanged.notify();
  }
}