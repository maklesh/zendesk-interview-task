# Zendesk QA Interview Task

It is a set of e2e tests Zendesk Sell web application

See project description:
 * Zendesk Sell [application](https://www.zendesk.com/apps/support/zendesk-sell/)

ToC:
 * [Installation](#installation)
 * [Run](#run)
 * [Coding](#coding)
 
## Installation 

Project uses `npm` as package manager. You will need installed `npm` ver. `6.13.7` and `Node.js` version
`v12.14.1` or newer on your machine.

Install dependencies from `package.json` by:

```
npm install
```

## Run

Fill your `.env` file with Zendesk Sell user mail, pass and url to your company login page, 
remember don't push your `.env` file to repo, `.gitignore` should help ;)

By default tests are running in headless mode. You can change it with GUI changing in `jest-puppeteer.config` the `headless: true` to `headless: false`.

Start tests:

```
npm run test
```

### Running using Docker compose in headless mode

Please provide valid values of variables in `.env` file

To build docker compose use:
```
docker-compose build test
```

Then, run tests:

```
docker-compose run --rm test
```

## Coding

 * e2e shouldn't mock any Zendesk Sell app behaviour
 * use page object pattern
 * try not repeat yourself

 ## TO DO
 * So far tests launched in docker work only headless mode...