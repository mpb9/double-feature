# Make it a Double Feature

## Behind the Scenes

### MERN Stack

- MongoDB - NoSQL database
- Express.js - backend web app framework for Node.js
- React.js v19 - JavaScript library for building UIs
- Node.js: v22.14.0 - JavaScript runtime environment
- Additional tech:
  - ReactRouter - Handles server-side and client-side routing
  - Vite - fast frontend build tool
  - pnpM - fast, disk space efficient package manager
  - Python

### Structure

```shell
├── cli/                   # React frontend
│   ├── public/            # Static assets
│   ├── src/               # React source code
│   │   ├── assets/        # Static resources
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page-level components
│   │   ├── services/      # API client logic
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   ├── routes.js      # Frontend routing rules
│   │   └── index.css       
│   ├── .env               # Environment variables
│   ├── package.json       # Client dependencies
│   └── ...
├── server/                # Express backend
│   ├── apis/              # External API info
│   ├── controllers/       # Route handlers
│   ├── db/                # Database connections
│   ├── models/            # Data models
│   ├── routes/            # API routes
│   ├── config.env         # Environment variables
│   ├── index.js           # Express server setup
│   ├── package.json       # Server dependencies
│   └── ...
├── film-series/           # Film Series files
│   └── ...
├── letterboxd/            # Letterboxd files
│   └── ...
├── venv/                  # Python virtual env
│   └── ...
├── .gitignore             # Git ignore file
├── requirements.json      # venv dependencies
└── README.md
```

### Frontend (cli)

```shell
# ~/.../movies

# Initialize
pnpm create vite@latest cli -- --template react
cd cli
pnpm install
pnpm add tailwindcss @tailwindcss/vite @phosphor-icons/react prop-types axios

# Run Locally
pnpm dev
```

#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Backend (server)

```shell
# ~/.../movies

# Initialize
mkdir server && cd server
pnpm init
pnpm add mongodb express cors mongoose
pnpm add nodemon -D

# Run Locally
pnpm dev
```

#### NoSQL - MongoDB

Document-oriented database

##### Hierarchy

CLUSTER ⇨ DATABASE ⇨ COLLECTION ⇨ DOCUMENT ⇨ FIELD: VALUE

### Syntax

#### Database Variables

- cluster: ```cluster```
- database: ```db```
- collection: ```coll```
- document: ```doc```
- field: ```field```
- value: ```val```

#### REST Variables

- API Path: ```.../api/<coll>```
- GET
  - by id: ```/getById```
  - by field(s): ```/getBy<field>And<field>...```
  - entire collection: ```/getAll```
- POST
  - initialize collection: ```/create```
  - multiple: ```/postDocs```
  - individual: ```/postDoc```
- DELETE
  - by id: ```/deleteById```
  - by field(s): ```/deleteBy<field>And<field>...```
  - entire collection: ```/deleteAll```
- HTTP Responses
  - individual ```doc``` requested: ```<coll>``` *(no trailing "s")*
  - number of ```doc```s requested uncertain: ```<coll>s```
- Conflicts & Duplicates
  - keep existing over incoming conflict: **default**
  - override existing with incoming change: ```/<endpoint>Override```
  - ignore conflicts and duplicates: ```/<endpoint>Ignore```

## On-Screen

### Film Series

### Letterboxd

### Links

- Film Series
  - [Dossier](https://docs.google.com/document/d/1dl00sQH2cXBExBTZp5KaAWoJ_r9gFSnaCfZxn-lVTEM/edit?usp=sharing)

- Letterboxd
  - [Profile](https://letterboxd.com/michaelbeebe)
  - [Main Menu](https://letterboxd.com/michaelbeebe/list/main-menu/detail)
  - [Diary](https://letterboxd.com/michaelbeebe/films/diary)

## Ideas for the Future

### Short-term

- [ ] Make my profile location a reference to some movie location/quote (i.e. Wasteland, Arakis, etc.)
- [ ] Find movie with backdrop that either looks like a blu-ray main menu or some sort of remote for main menu list's backdrop
- [x] Make this the hub for my unfinished reviews / unlogged films bc i can't decide what to say / reviews i know i want to write in my head but too lazy so i just didnt log and dont want to forget about / etc.
- [ ] Create & link youtube playlists for trailers, music moments, etc. in list descriptions instead of having to add video links to each entry
- [ ] Create & link spotify playlists for soundracks, music moments, etc. in list descriptions instead of having to add song links to each entry
- [ ] Make the sides of one of my pages look like curtains in a theater (and the top)
- [ ] [editable data grid/spreadsheet](https://github.com/ag-grid/ag-grid)

### Long-term

- [Letterboxd API](https://api-docs.letterboxd.com)
