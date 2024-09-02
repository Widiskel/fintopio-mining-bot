# Fintopio Mining BOT

## Table Of Contents
- [Fintopio Mining BOT](#fintopio-mining-bot)
  - [Table Of Contents](#table-of-contents)
  - [Fintopio Airdrop](#fintopio-airdrop)
  - [BOT FEATURE](#bot-feature)
  - [Prerequisite](#prerequisite)
  - [Setup \& Configure BOT](#setup--configure-bot)
    - [Linux](#linux)
    - [Windows](#windows)
  - [Update Bot](#update-bot)
  - [Setup Accounts](#setup-accounts)
  - [Session Troubleshoot](#session-troubleshoot)
  - [Note](#note)
  - [CONTRIBUTE](#contribute)
  - [SUPPORT](#support)

## Fintopio Airdrop
New Airdrops : Fintopio
🪂 Register : https://fintop.io/2uMXWWVQKR 

💎 Let's earn $HOLD together 

📈 Join me in farming HP points now 

🫂 Invite more friends for 10% bonus HP 

💰 Let's get Rich together


Airdop wallet, its usually jackpot

## BOT FEATURE

- Multi Account With Proxy Support
- Support Telegram Sessions and Telegram Query (Query May Expired)
- Auto Daily Check In
- Auto Start Mining / Farming
- Auto Claim Mining / Farming
- Auto Complete Missions (Completable Missions)
- Auto Claim Mission Reward
- Auto Break And Claim Diamond Reward

## Prerequisite

- Git
- Node JS
- TELEGRAM_APP_ID & TELEGRAM_APP_HASH Get it from [Here](https://my.telegram.org/auth?to=apps) (REQUIRED IF YOU WANT USE SESSIONS)
- Fintopio Account , Create [Here](https://fintop.io/2uMXWWVQKR) join and claim join reward

## Setup & Configure BOT

### Linux
1. clone project repo `git clone https://github.com/Widiskel/fintopio-mining-bot.git` and cd to project dir `cd fintopio-mining-bot`
2. run `npm install`
3. run `npm i telegram@2.22.2`
4. run `mkdir -p accounts && mkdir -p app/config`.
5. run `cp config/config_tmp.js config/config.js && cp config/proxy_list_tmp config/proxy_list.js`.
6. (If You Use Telegram Sessions) To configure the app, run `nano src/config/config.js` and add your telegram app id and hash there.
7. (If You Use Proxy) To configure the Proxy, run `nano src/config/proxy_list.js` and add your proxy list there, it currently only support https proxy.
8. to start the app run `npm run start`.
   
### Windows
1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repo `git clone https://github.com/Widiskel/fintopio-mining-bot.git` and cd to project dir `cd fintopio-mining-bot`
3. Run `npm install`
4. Run `npm i telegram@2.22.2`
5. Navigate to `fintopio-bot` directory. 
6. Make new folder named `accounts`.
7. Manual copy the `config` folder to `/app` folder. 
8. Navigate to `app/` folder and paste the the `config` folder before.
9. Navigate to `config` folder.
10. At `/app/config/` folder, rename the `config_tmp.js` to `config.js` also the `proxy_list_tmp.js` to `proxy_list.js`.
11. To configure the app, open `config.js` and add your telegram app id and hash there.
12. To configure the Proxy, open `proxy_list.js` and add your proxy list there, it currently only support https proxy.
13. Now back to the `fintopio-bot` folder
14. To start the app open your `Command Prompt` or `Power Shell` again and run `node app/index.js`.

## Update Bot

To update bot follow this step :
1. run `git pull` or `git pull rebase` , if error run `git stash && git pull`
2. run `npm update`
3. start the bot

## Setup Accounts

1. Run bot `npm run start`
2. Choose option `1` to create account
3. Choose account type `Query` or `Sessions`
4. `Session` Type
   1. Enter Account Name
   2. Enter your phone number starting with countrycode ex : `+628xxxxxxxx`
   3. You will be asked for verification code and password (if any)
   4. Start The bot Again after account creation complete
5. `Query` Type
   1. Enter Account Name
   2. Enter Telegram Query
   3. Start The bot Again after account creation complete
6.  after bot started choose option 3 start bot
7.  if something wrong with your Account, reset Account (option 2) first or just delete problematic a, to cancel running bot press `ctrl+c` twice, and start again [from No 1.](#setup-session).
   

## Session Troubleshoot
If you asked to enter phone number again after sessions creation, it mean session not initialized correctly, try to delete the created sessions. 

Example Case
- example you already have 1 session (sessionA) and all good when you run bot. After that you create another session, but when you run bot, the bot asked to enter phone number again, so the problem is on (sessionB), to fix it just remove the `accounts/sessionB` folder and re create it.

## Note

Don't use bot with `session` type if you using telegram account that bought from someone because it can make your telegram account deleted. instead of using `session` type, use `query` type.

This bot can use Telegram Query and Telegram Sessions. if you want to use sessions, and ever use one of my bot that use telegram sessions, you can just copy the sessions folder to this bot. Also for the telegram APP ID and Hash you can use it on another bot. If you want to use Telegram Query, get your query manually.

if you got error `Invalid ConstructorId` try to run this ```npm i telegram@2.22.2```

## CONTRIBUTE

Feel free to fork and contribute adding more feature thanks.

## SUPPORT

want to support me for creating another bot ?
**star** my repo or buy me a coffee on

EVM : `0x0fd08d2d42ff086bf8c6d057d02d802bf217559a`

SOLANA : `3tE3Hs7P2wuRyVxyMD7JSf8JTAmEekdNsQWqAnayE1CN`
