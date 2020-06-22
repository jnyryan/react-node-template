# React-Node-Template

Set up ReactJS to run via node express and proxy API calls to the express backend

This also allows developer mode to run with instant refresh for both react and node.

## Setup


```
git clone ...
cd my-app-name
create-react-app webclient --use-npm
npm install
```

Add the following line to ./webClient/package.config
see example in [./examples/webClient/package.config](./examples/webClient/package.config)

```
,"proxy": "http://localhost:5000/"
```
## Usage

### Production

Run app on a single port ( 5000 by default)

``` bash
npm start
```


``` bash
curl http://localhost:5000
curl http://localhost:5000/ping
```

### Development

Run app on 2 ports to avail of instant refresh and webpack dev server
 - react on 4000 by default
 - express server on port 5000 by default

The setup will proxy all calls to port 5000.

``` bash
npm run dev
```

``` bash
curl http://localhost:5000
curl http://localhost:5000/ping
