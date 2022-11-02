```

```

# Project Introduction

This project is the integration sample code of UIKits Web SDK under ZEGOCLOUD company, written by next.js framework

Get the project configuration file from the [ZEGOCLOUD CONSOLE](http://console.zegocloud.com/account/login), click the deploy button below, fill in the corresponding configuration, you can quickly deploy your video session application

# Preconditions

Create your UIKits web project at [ZEGOCLOUD CONSOLE](http://console.zegocloud.com/account/login), you will get AppID, ServerSecret and project configuration

### AppID, ServerSecret:

![config](docs/appIDServerSecret.png)

### Project configuration

![config](docs/config.png)

# One-click deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FZEGOCLOUD%2Fnextjs-zegocloud-uikits&env=NEXT_PUBLIC_APPID,NEXT_PUBLIC_SERVER_SECRET,NEXT_PUBLIC_CONFIG&envDescription=project%20param&envLink=https%3A%2F%2Fgithub.com%2FZEGOCLOUD%2Fnextjs-zegocloud-uikits%23readme&project-name=nextjs-zegocloud-uikits&repo-name=nextjs-zegocloud-uikits)

# run the project locally

- Open the `.env.local` file, and fill in the obtained relevant configuration, as shown in the following figure:

![config](docs/envLocal.png)

- run on current project
  ````
   npm run install
   ````
- then run
  ````
   npm run dev
   ````