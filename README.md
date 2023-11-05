# Sugar Free Crypto - A risk free cryptocurrency experience

Welcome to the README for my application. Below is the basic constructs of my client side capstone project while at Nashville Software School!

# Instructions to deploy app

- Be sure to open the Sugar-Free-Crypto-Database repository (also pinned on profile) and read instructions. Recommend deploying JSON database before deploying React app

1. clone this repository into your Workspace directory
2. cd into the repository Sugar-Free-Crypto
3. npm install
4. npm start (If application does not start properly, ensure you have cloned and are actively running the JSON database. See instructions on line 7 of this ReadMe)

## Description

Bitcoin was created by the presumed pseudonymous name Satoshi Nakamto in 2009. Since then, Cryptocurrency has witnessed adoption rates as fast as when the internet was first introduced in the 1990s. Currently, venturing into Cryptocurrencies for the first time can be daunting and provide a user an overwhelming experience. Many web pages overload a new user, from needing to provide personal information, as well as bank information. However, Sugar Free Crypto solves this by taking out all the bad stuff and providing a user with a sugar free, healthy experience. Sugar Free Crypto only asks users for an email so each individual has a personalized experience. Additionally, all cryptocurrency interactions are simulated so there is no need for Know Your Customer (KYC), but still providing the user with live price updates each minute!

### Wireframe and ERD

Wireframe: https://miro.com/app/board/uXjVMnF_kic=/?moveToWidget=3458764563464158353&cot=14
ERD: https://dbdiagram.io/d/Sugar-Free-Crypto-64fa269302bd1c4a5e2bbd09

#### Description of the user type

The user of this application is an individual who is beginning to venture into cryptocurrency. All interactions are simulated, however, the user is presented with real time price data. The user is provided education articles, cryptocurrency prices, and a favorites page where they can create and customize notes. Additionally, the user can make a post on their X account with the click of a button.

##### List of features

- User specific views based on validation
- CRUD capabilities
- Public API provided by CoinGecko
- Over 40 modules adhering to clean code practices and modularization

##### User Awareness

Some items are simulated, for example, the 'add some sugar' button within the Favorites Page after creating a resource will automatically make a draft post on the social media application 'X'. However, if user testing application does not have X, the action may not work properly.

User functionality to delete favorite education links and favorite cryptos has not been added as of yet (stretch goal)
