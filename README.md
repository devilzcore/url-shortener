# Demo
<img src="https://raw.githubusercontent.com/devilzcore/url-shortener/main/assets/home.jpg" alt="Demo"/>

# Installation
```yarn is required```
## Server
```
yarn install
```

First compile for javascript (will automatically create the dist, after enter commands below)
```
yarn build:watch 
```

After
```
yarn dev
```

```Connection URL with MongoDb in the folder config/Constants.ts line 4```

## Client

Go to the folder client and run code in terminal
```
yarn install
```

and after
```
yarn start
```

```Proxy config in the folder client/src/setupProxy.js```

# Test API 

HTTP Method Post
> URL "http://url_local/shorten"
```
{
  "originURL": "you_url"
}
```