class ArticlesController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    let self = this;

    this.view.articleClicked.attach(function (sender, args) {
      self.selectArticle(args.index);
    });

    this.view.addButtonClicked.attach(function () {
      self.addArticle();
    });

    this.view.deleteButtonClicked.attach(function () {
      self.deleteArticle();
    });

    this.view.formatterButtonClicked.attach(function() {
      self.changeFormatter();
    });
  }

  addArticle() {
    
    let title = document.getElementById('articleTitle').value;
    let imageUrl = document.getElementById('articleImageUrl').value;
    let description = document.getElementById('articleDescription').value;
    let author = document.getElementById('articleAuthor').value;

    if (title) {
      this.model.addArticle(new Article(title, description, author, imageUrl));
    }
    else {
      alert("Please, specify Title");
    }
  }

  deleteArticle() {
    let index = this.model.getSelectedIndex();
    if (index !== -1) {
      this.model.removeArticle(index);
    }
  }

  selectArticle(index) {
    return this.model.selectArticle(index);
  }

  changeFormatter() {
    this.model.changeFormatter();
  }
}