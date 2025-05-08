export class FileSpecs {
  constructor(
    id = "",
    title = "",
    img = "",
    src = "",
    url = "",
    tags = [],
    date = ""
  ) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.src = src;
    this.url = url;
    this.tags = tags;
    this.date = date;
  }
}
