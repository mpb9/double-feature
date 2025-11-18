import { toLowerCaseDash } from "../services/string-service";
import FilmSpecs from "./film-specs";
import TvSpecs from "./tv-specs";

export class ArticleSpecs {
  id;
  title;
  published;
  url;
  external_host;
  tags;
  img;
  // film_specs_arr = [];
  // tv_specs_arr = [];
  // film_ids;
  // tv_ids;

  constructor(
    id = "",
    title = "",
    img = "",
    external_host = false,
    url = "",
    tags = [],
    published = ""
    // film_ids = [],
    // tv_ids = []
  ) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.external_host = external_host;
    this.url = url;
    this.tags = tags;
    this.published = published;
    // this.film_ids = film_ids;
    // this.tv_ids = tv_ids;

    // this.setFilmSpecsArr();
    // this.setTvSpecsArr();
  }

  // setFilmSpecsArr() {
  //   this.film_ids.forEach((id) => {
  //     this.film_specs_arr.push(getFilmSpecsById(id));
  //   });
  // }

  // setTvSpecsArr() {
  //   this.tv_ids.forEach((id) => {
  //     this.tv_specs_arr.push(getTvSpecsById(id));
  //   });
  // }
}

// ! NEW (not in use)
export class ArticleSpecs_NEW {
  id;
  title;
  published;
  // release_date;
  url;
  external_host = false;
  tags = []; // ? delete this later
  img;
  film_specs_arr;
  tv_specs_arr;

  constructor(
    title,
    published,
    url,
    film_specs_arr = [new FilmSpecs()],
    tv_specs_arr = [new TvSpecs()],
    img_file_format = "jpeg"
  ) {
    this.id = toLowerCaseDash(title);
    this.title = String(title);
    this.url = String(url);
    this.published = String(published);
    this.img = `${this.id}.${img_file_format}`;

    this.film_specs_arr = film_specs_arr;
    if (
      this.film_specs_arr.length === 1 &&
      this.film_specs_arr[0]?.title === undefined
    ) {
      this.film_specs_arr = null;
    }

    this.tv_specs_arr = tv_specs_arr;
    if (
      this.tv_specs_arr.length === 1 &&
      this.tv_specs_arr[0]?.title === undefined
    ) {
      this.tv_specs_arr = null;
    }

    // this.release_date = this.film_specs ? String(this.film_specs.year) : null;
    // if (this.tv_specs) {
    //   this.release_date = String(this.tv_specs.year_start);
    // }
  }
}
