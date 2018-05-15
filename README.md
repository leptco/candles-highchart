# candles-highchart

[Highcharts angular](https://github.com/highcharts/highcharts-angular)

## Install
1.  Download source files
2.  Run `npm install` to install all dependencies.
3.  Run `npm run build` to bundle `js/app.js` into `dist/bundle.js`

## Open application

1.  Open `index.html` in a browser.

## Note

Notice that imports should be done as the following:

```javascript
// Do this. Import entire module into a single variable.
import * as Highcharts from 'highcharts';
import * as Highcharts from 'highcharts/highstock';
// Do not do this. Works only with modules who exports a default
import Highcharts from 'highcharts';
```
