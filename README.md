# starter-react-app

https://github.com/Denijar/starter-react-app/actions/workflows/build.yml/badge.svg

Boilerplate starter React app with Heroku deployment

## How to use

- Copy the contents of this repo to your new repo
- Run `npm install` in the root directory and in the `client` directory
- Commit your changes (the pre-commit hook should run) and push to your remote
- Replace the `badge.svg` link at the top of this README to reference your remote

### Deploy on Heroku

- Go to your Heroku dashboard and select 'Create new app'
- Give your app a name. You don't need to add a pipeline
- Select 'GitHub' as the deployment method
- Select your remote as the repository to connect to
- Check 'Wait for CI to pass before deploy'
- Click 'Enable Automatic Deploys'

Your application is now configured with automatic Heroku deployment. Any new pushes to main on your remote should automatically trigger a Heroku build.
