# CICD

The application is managed via Github Actions.

| GitHub Action    | Builds/Deploys From         | Description                                                                                     |
|------------------|------------------------------|-------------------------------------------------------------------------------------------------|
| `api-build`      | `master`                     | Builds the API; always uses the `master` branch.                                                |
| `api-deploy`     | `master`                     | Deploys the API; only deploys builds from the `master` branch.                                  |
| `portal-build`   | Current workflow branch      | Chain build that builds the Angular app and packages it into an Nginx image, deployed to `dev`. |
| `portal-deploy`  | `latest built image`                     | Deploys the Portal; If deploying for test, it deploys the latest image, if deploying for prod it deploys from test.                              |


This application has no defined deployment strategy. Because it is in maintenance mode, a suggested pattern is as follows:

1. Checkout your feature/bugfix branch from master
2. Make and test your changes
3. Deploy your branch (if portal) and test in OCP dev environment
4. Merge your PR (this kicks of builds/and deploys for master branch)
5. Run deploy workflows to deploy to higher environments (test and prod)
