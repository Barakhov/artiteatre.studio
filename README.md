# 🎨🎭 Artiteatre Website - Astro & Decap CMS

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## How to setup authentication

the main issue you will face will deploying the site is authentication. to solve this issue please use the guide bellow

You need to create an API application and make note of the `Client ID` and a Client Secret so that you can use them in your Netlify configuration.

1. In GitHub, go to your account Settings and select Developer Settings, then OAuth Apps or use this [shortcut](https://github.com/settings/developers).
2. Select Register a new application.
3. For the Authorization callback URL, enter `https://api.netlify.com/auth/done`. The other fields can contain anything you want.
4. ![template](https://d33wubrfki0l68.cloudfront.net/67edd5b656c432888d736cd40125cb61376905bb/120ac/images/visitor-access-github-oauth-config.png)
5. On your new application’s GitHub overview page, make note of the `Client ID`.
6. Generate a `Client Secret` and make note of it for later. You can’t access this secret again.

When you complete application registration with GitHub, you need to add the Client ID and Client Secret to your Netlify site:

1. Go to [Site configuration > Access control > OAuth](https://app.netlify.com/sites/astro-decapcms-starter/configuration/access#oauth). (https://app.netlify.com/sites/APP-NAME/configuration/access#oauth)
2. Under Authentication Providers, select Install Provider
3. Select GitHub and enter the Client ID and Client Secret from earlier, then save.

[Original repo](https://github.com/gxanshu/astro-decap-cms-starter).
