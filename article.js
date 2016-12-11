class Article {
  constructor(title, description, author, imageUrl) {
    this._title = title;
    this._description = description;
    this._author = author;
    this._imageUrl = imageUrl;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get author() {
    if (this._author) {
      return this._author;
    }

    return "Unknown author";
  }

  set author(value) {
    this._author = value;
  }

  get imageUrl() {
    if (this._imageUrl) {
      return this._imageUrl;
    }

    return "empty_image.png";
  }

  set imageUrl(value) {
    this._imageUrl = value;
  }

  get description() {
    if (this._description) {
      return this._description;
    }

    return "Empty description.";
  }

  set description(value) {
    this._description = value;
  }
}