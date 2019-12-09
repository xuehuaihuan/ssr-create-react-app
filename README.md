# ssr-create-react-app
- Build server-side rendering based on create react app scaffold

##  common rules

* React naming rules
  - export, import, `Camel Case`, eg: camelCaseStyle;
  - React Component, or Class name, `Pascal`(first letter upper case + Camel Case), eg: PascalStyleComponent;
  - constant, `Under Score Case`, eg: UNDER_SCORE_CASE_STYLE;
* JavaScript style, use `standardx` and `eslint` override part of `standard` rules;
* CSS, `styled-components`, `stylelint`, `stylelint-config-standard`;
* server, `express`;
* editor, `VS code`, or `Sublime`, `autoFixOnSave` JavaScript standard style and stylelint standard style;


## development enviroment

- install dependencies, `npm install`;
- first, `npm run server:build:dev`;
- then, `npm run server:start:dev`;
- or, `npm run start:ssr` twice at first time;
- If you don't want to use SSR, you can  execute `npm start` or `npm run build` as usual;


## production enviroment

 - first, `npm run build:ssr`;
 - then, `npm run server:start:prd`;
 