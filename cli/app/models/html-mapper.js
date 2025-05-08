export class HtmlMapper {
  constructor(id = "", element = "", content = "", parentId = "") {
    this.id = id;
    this.element = element;
    this.content = content;
    this.parentId = parentId;
  }
  static fromJson(json) {
    return new FileContent(json.id, json.element, json.content, json.parentId);
  }
  toJson() {
    return {
      id: this.id,
      element: this.element,
      content: this.content,
      parent: this.parentId,
    };
  }
}
