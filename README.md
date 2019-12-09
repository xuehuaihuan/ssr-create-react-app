# ssr-create-react-app
## Build server-side rendering based on create react app scaffold

##  common rules

- React naming rules: import, `Camel Case`, eg: camelCaseStyle;
React Component, or Class name, `Pascal`(first letter upper case + Camel Case), eg: PascalStyleComponent;
constant, `Under Score Case`, eg: UNDER_SCORE_CASE_STYLE;
- JavaScript style:   `standard`, `standard-react`;


## development enviroment

- install dependencies, `npm install`;
- first, `npm run server:build:dev`;
- then, `npm run server:start:dev`;
- or, `npm run start:ssr` twice at first time;


## production enviroment

 - first, `npm run build:ssr`;
 - then, `npm run server:start:prd`;
 