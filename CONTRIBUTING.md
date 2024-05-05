# Contributing to OpenDevHub

## Prerequisites

> Before getting into it, make sure you have a package manager either [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/), [prisma](https://prisma.io) as ORM installed.

## Setting up the project locally

1. Fork the project

2. Clone the repo

   ```bash
   git clone https://github.com/<your-github-username->/open-dev-hub
   ```

3. Go into the project directory
   ```sh
    cd open-dev-hub
   ```
4. Copy the contents of `.env.example` to an `.env` file

   ```sh
   cp .env.example .env
   ```

- Get a MongoDB cloud instance running or run MongoDB locally and change the value of `MONGODB_URI` in the `.env` to the `connection string` you get. [for reference](https://www.mongodb.com/docs/manual/reference/connection-string/).
- Set `NEXTAUTH_SECRET` present in the `.env` to any `random string` or you can quickly create a good value on the command line via this `openssl command`.
  <br>

```sh
 openssl rand -base64 32
```

5. Get GitHub/Google Client_ID & Client_Secret for NextAuth validation and add them to `.env`

- You need a Client_ID and Client_Secret for auth validation in the app.
- For GitHub go to their [website](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app)
- For Google check their [docs](https://developers.google.com/identity/protocols/oauth2)

6. Install all the dependencies

   ```sh
   npm / yarn install
   ```

7. Build the app (recommended when setting up for the first time)

   ```sh
   npm run build/ yarn build
   ```

8. Start the application development server
   ```sh
   npm / yarn run dev
   ```

**Now you're all set to contribute to the project.**
