# README

## Preliminary operations

1. Install the mongodb database;
   1. Installation specific view: <https://xiaozhuanlan.com/topic/4769152803>;
   2. Start: `brew services start mongodb/brew/mongodb-community`.
   3. shutdown: `brew services stop mongodb/brew/mongodb-community`.
   4. Use a visual tool to view the database: Navicat;
      1. specifically view: <https://xclient.info/s/navicat-premium.html>;
      2. add the database;
2. install nodejs: v16.15.1;

## Project Development

1. Go to the server directory;
2. `npm install`;
3. `npm run dev`;
4. You can visit <http://localhost:3001/template/index.html> | <http://localhost:3001/main/index.html> directly to view the page;

## Related technologies

1. [css library](https://www.tailwindcss.cn/docs/installation);

## Template adding process

1. Add a template page, similar to `'... /main/individual-staff.html', '... /template/staff-information.html'`;
2. perform a data-population operation on the page, `templatePage.renderPage = (data) => {`;
3. in the entry place, sequentially add the page jump address: server/views/common/utils.js, in the array of toStaffInfo methods;
