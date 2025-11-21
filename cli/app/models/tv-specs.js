import { toLowerCaseDash } from "../services/string-service";

export default class TvSpecs {
  id;
  title;
  url;
  year_start;
  year_end;
  seasons;
  episodes;
  country;
  directors;
  actors;
  genres;
  constructor(
    title,
    url,
    year_start,
    year_end,
    seasons,
    episodes,
    country,
    directors,
    actors,
    genres
  ) {
    this.id = `${toLowerCaseDash(title)}-${String(year_start)}`;
    this.title = String(title);
    this.url = String(url);
    this.year_start = String(year_start) || null;
    this.year_end = String(year_end) || null;
    this.seasons = String(seasons) || null;
    this.episodes = String(episodes) || null;
    this.country = String(country) || null;
    this.directors = [...String(directors)] || null;
    this.actors = [...String(actors)] || null;
    this.genres = [...String(genres)] || null;
  }
  //   constructor(json) {
  //   this.title = String(json.title);
  //   this.year_start = String(json.year_start) || null;
  //   this.year_end = String(json.year_end) || null;
  //   this.seasons = String(json.seasons) || null;
  //   this.episodes = String(json.episodes) || null;
  //   this.country = String(json.country) || null;
  //   this.showrunners = [...String(json.showrunners)] || null;
  //   this.actors = [...String(json.actors)] || null;
  //   this.genres = [...String(json.genres)] || null;
  // }
}
