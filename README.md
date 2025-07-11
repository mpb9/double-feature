# Make it a Double Feature :clapper:

Home to all of my film-based endeavours, featuring articles, reviews, lists, and more…

## Links :link:

- ***[Make it a Double Feature](https://makeitadoublefeature.com)***
- *[Personal Website](https://michael-beebe.com)*
- *[Letterboxd Profile](https://letterboxd.com/michaelbeebe)*

## Behind the Scenes :movie_camera:

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
├─ cli/                         # FRONTEND - REACT
│   ├── app/                    # React source code
│   │   ├── components/         # Reusable components
│   │   ├── data/               # Frontend data
│   │   ├── layouts/            # Reusaable component containers
│   │   ├── models/             # Classes for frontend data
│   │   ├── routes/             # Page-level components
│   │   ├── services/           # API client logic
│   │   ├── styles/             # CSS Styling
│   │   ├── root.jsx            # Entry point
│   │   ├── routes.js           # Frontend routing rules
│   │   └── constants.js       
│   ├── public/                 # Static assets
│   ├── .env                    # Environment variables
│   ├── Dockerfile              # Frontend Docker file
│   ├── package.json            # Client dependencies
│   ├── react-router.config.js    
│   ├── vite.config.js                    
│   └── ...
├── server/                     # BACKEND - EXPRESS/MONGO
│   ├── apis/                   # External API info
│   ├── controllers/            # Route handlers
│   ├── db/                     # Database connections
│   ├── models/                 # Data models
│   ├── routes/                 # API routes
│   ├── config.env              # Environment variables
│   ├── Dockerfile              # Backend Docker file
│   ├── index.js                # Express server setup
│   ├── package.json            # Server dependencies
│   └── ...
├── .env                        # Environment variables
├── .gitignore                  # Git ignore file
├── docker-compose.yml          # Docker Compose file
├── docker-redeploy.sh          # Script to redeploy via Docker files
└── README.md
```

### Frontend (cli)

```shell
# ~/.../double-feature

# Initialize
pnpm create vite@latest cli -- --template react
cd cli
pnpm install
pnpm add tailwindcss @tailwindcss/vite @phosphor-icons/react prop-types axios

# Run Locally
cd ~/dev/double-feature/cli
nvm use node
npm run dev
```

#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Backend (server)

```shell
# ~/.../double-feature

# Initialize
mkdir server && cd server
pnpm init
pnpm add mongodb express cors mongoose
pnpm add nodemon -D

# Run Locally
cd ~/dev/double-feature/server
nvm use node
npm run dev
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

### Deployment

**GitHub** - [mpb9/double-feature](https://github.com/mpb9/double-feature)
**SquareSpace** - [domains/managed/makeitadoublefeature](https://account.squarespace.com/domains/managed/makeitadoublefeature.com)

#### /cli Only

```shell
cd cli && pnpm run deploy
```

#### Guides

- [react > github-pages](https://create-react-app.dev/docs/deployment/#github-pages)

## On-Screen :tv:
