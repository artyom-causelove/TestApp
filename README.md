# TestApp for BGS Group

## How to start

#### Clone repository
```bash
$ git clone https://github.com/artyom-causelove/TestApp
```

#### Build project
```bash
$ npm install
$ npm run build
$ npm run start
```

#### Open app
Open page http://localhost:3000/ in your browser

## How to run project in docker

#### Build image
```bash
$ docker build -t testapp ./docker
```

#### Run container
```bash
$ docker container run -p 321:3000 testapp
```

#### Open app
Open issued url in your browser