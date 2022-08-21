# CoinMENA technical task

## Test user
```
admin  
000000
```

Authorization is done in demo mode by checking credentials stored is js file. You can add users in file `src/services/Api.ts` 

## Run project
1. Install all dependencies with `npm i`
2. Run `npm start` for development or `npm run start:prod` for production build
3. Navigate your browser to [app](http://localhost:8080/)

## Linting
Run `npm run type-check` to check if no Typescript errors  
Run `npm run lint` or `npm run lint:fix` to check if no EsLint errors
