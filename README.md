# OVERVIEW
![Lifecycle:Maturing](https://img.shields.io/badge/Lifecycle-Maturing-007EC6)](<Redirect-URL>)

[Repository](https://github.com/bcgov/tti)
[Wiki](https://moag.atlassian.net/wiki/spaces/HRT/pages/1381302592/HRT+Openshift+Implementation+-+Intake+Forms)
[Agile Board](https://moag.atlassian.net/jira/software/projects/AMOS/boards/72/backlog)

See folders for README.md for each particular project
See folder docker for scripts and Dockerfiles to run each project

# REFERENCES
[DEV Individual Form 1.1](https://angular-on-nginx-2cf5e3-dev.apps.silver.devops.gov.bc.ca/hrt/hrt)
[DEV Group Form 1.3](https://angular-on-nginx-2cf5e3-dev.apps.silver.devops.gov.bc.ca/hrt/hrt-group)
[DEV Retaliation Form 1.4](https://angular-on-nginx-2cf5e3-dev.apps.silver.devops.gov.bc.ca/hrt/hrt-retaliation)
[DEV SalesForce](https://bchrt--qa.sandbox.lightning.force.com/lightning/page/home)
[TEST Individual Form 1.3](https://angular-on-nginx-2cf5e3-test.apps.silver.devops.gov.bc.ca/hrt/hrt)
[TEST Group Form 1.3](https://angular-on-nginx-2cf5e3-test.apps.silver.devops.gov.bc.ca/hrt/hrt-group)
[TEST Group Form 1.3](https://angular-on-nginx-2cf5e3-test.apps.silver.devops.gov.bc.ca/hrt/hrt-retaliation)
[TEST SalesForce](https://bchrt--staging.sandbox.lightning.force.com/lightning/page/home)

# NOTES
All Jenkins code is irrelevant and should be deleted
The docker-compose.yml does not seem to work, recommend using the scripts in the docker folder, see below 'RUN'
Comment out line 9 from main.ts, so the console.logs work locally

# RUN
To run everything, see the /docker folder. Run the following on WSL:
/docker/api/api.sh
/docker/db/db.sh
/docker/web/web.sh
