import {
  toLowerCaseDash,
  toLowerCaseUnderscore,
} from "../services/string-service";
import FilmSpecs from "./film-specs";
import TvSpecs from "./tv-specs";

export class ArticleSpecs {
  constructor(
    id = "",
    title = "",
    img = "",
    src = "",
    url = "",
    tags = [],
    publish_date = ""
  ) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.src = src;
    this.url = url;
    this.tags = tags;
    this.publish_date = publish_date;
  }
}

// ! NEW (not in use)
export class ArticleSpecs_NEW {
  id;
  title;
  publish_date;
  release_date;
  url;
  img;
  film_specs;
  tv_specs;

  constructor(
    title,
    publish_date,
    url,
    img_file_format = "jpeg",
    film_specs = new FilmSpecs(),
    tv_specs = new TvSpecs()
  ) {
    this.id = toLowerCaseDash(title);
    this.title = String(title);
    this.url = String(url);
    this.publish_date = String(publish_date);

    // this.film_specs = film_specs ? FilmSpecs(...film_specs) : null;
    this.film_specs = film_specs.title !== undefined ? film_specs : null;
    // this.film_specs = film_specs;
    // this.tv_specs = tv_specs ? TvSpecs(...tv_specs) : null;
    this.tv_specs = tv_specs.title !== undefined ? tv_specs : null;
    // this.tv_specs = tv_specs;

    this.release_date = this.film_specs ? String(this.film_specs.year) : null;
    if (this.tv_specs) {
      this.release_date = String(this.tv_specs.year_start);
    }

    // const img_file_format = String(img_file_format);
    this.img = `${this.id}.${img_file_format}`;
  }
}
