class ArticlesView {
  constructor(model, elements) {
    this.model = model;
    this.elements = elements;

    this.articleClicked = new Observer(this);
    this.addButtonClicked = new Observer(this);
    this.deleteButtonClicked = new Observer(this);
    this.formatterButtonClicked = new Observer(this);

    this.standardFormatterFactory = new StandardFormatterFactory();
    this.backwardFormatterFactory = new BackwardFormatterFactory();

    this.formatterFactory = this.model.useStandardFormatter ? this.standardFormatterFactory : this.backwardFormatterFactory;

    let self = this;

    this.model.articleAdded.attach(function () {
      self.rebuildList();
    });

    this.model.articleRemoved.attach(function () {
      self.rebuildList();
    });

    this.model.articleSelected.attach(function (sender, args) {
      self.highlightArticle(args.previous);
    });

    this.model.formatterChanged.attach(function () {
      self.rebuildList();
    });

    this.elements.addButton.addEventListener("click", function () {
        self.addButtonClicked.notify();
    });

    this.elements.deleteButton.addEventListener("click", function () {
        self.deleteButtonClicked.notify();
    });

    this.elements.formatterButton.addEventListener("click", function () {
        self.formatterButtonClicked.notify();
    });
  }

  show() {
    this.rebuildList();
  }

  rebuildList() {
    let list, articles, key, listContent = "";

    list = this.elements.list;

    articles = this.model.getArticles();

    this.formatterFactory = this.model.useStandardFormatter ? this.standardFormatterFactory : this.backwardFormatterFactory;

    let formatter = this.formatterFactory.create(articles);
    list.innerHTML = formatter.buildHtml();

    let self = this;

    this.model.selectArticle(-1);

    let articlesElements = this.elements.list.getElementsByClassName("article");
    if (articlesElements)
    {
      [].forEach.call(articlesElements, (element) => {
        element.addEventListener("click", function (e) {
          let articleContainer = e.target.classList.contains('article') ? e.target : e.target.parentElement;
          self.articleClicked.notify({ index : articleContainer.getElementsByClassName("articleIndex")[0].innerText });
        });
      });
    }
  }

  highlightArticle(previousIndex) {
    let selectedIndex = this.model.getSelectedIndex();

    if (previousIndex !== -1) {
      let previouslySelectedArticle = document.getElementsByClassName("article")[previousIndex];
      if (previouslySelectedArticle) {
        document.getElementsByClassName("article")[previousIndex].classList.remove("selected");
      }
    }

    if (selectedIndex !== -1) {
      document.getElementsByClassName("article")[selectedIndex].classList.add("selected");
    }

  }
}