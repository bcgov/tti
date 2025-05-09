# UPDATE March 14, 2025

This project has not been updated in 5 years. I had only partial success running the docker-compose, I would recommend using the subfolders in this docker folder to run the dockers individually i.e. api, db, and web. You can run the commands found in the .sh scripts.

Below is the documentation from 2020:

# Running with Docker Compose

The following instructions provide details on how to deploy the project using Docker Compose.  This method of deployment is intended for local development and demonstration purposes.  It is **NOT** intended to support production level deployments where security, availability, resilience, and data integrity are important.

All application services are exposed to the host so they may be easily accessed individually for development and testing purposes.

## Benefits

The benefits to using this approach are;
* Ease of getting the project up and running on your local system.
* Builds the images using the source code from your local working copy.  This allows you to test your changes without having to commit code it a branch.
* Fewer moving parts for developers to have to content with when developing locally; when compared with the OpenShift approach.
* Greater control.  You have greater control over which containers (services) are started up and how they are wired together.  For example, you could spin up an instance of just the client application and wire it to your Visual Studio development instance of the REST API, making it easy to test the effects of your API development on the client application.

## Prerequisites

* Docker and Docker Compose
  * Install and configure Docker and Docker Compose on your system.  The recommended approach is to use either [Homebrew](https://brew.sh/) (MAC) or [Chocolatey](https://chocolatey.org/) (Windows) to install Docker (which includes Docker Compose).
  * To configure Docker on WSL see https://docs.docker.com/desktop/features/wsl/ and check Docker Desktop -> Settings -> Resources -> WSL Integration -> Enable integration with additional distros: <select applicable profile>
* podman is possible but more work is required, see note on "podman" below
* The S2I CLI
  * Download and install the S2I CLI tool; [source-to-image](https://github.com/openshift/source-to-image)
    * To install on Linux 64-bit run
```
wget https://github.com/openshift/source-to-image/releases/download/v1.4.0/source-to-image-v1.4.0-d3544c7e-linux-amd64.tar.gz
tar -xvzf source-to-image-v1.4.0-d3544c7e-linux-amd64.tar.gz
sudo cp s2i /usr/local/bin
sudo cp sti /usr/local/bin
```
  * Make sure it is available on your `PATH`.  The `manage.sh` will look for the `s2i` executable on your `PATH`.  If it is not found you will get a message asking you to download and set it on your `PATH`.
* If you are working on Windows, use Git Bash (or equivalent shell) to run the scripts.
* Fork and clone a local working copy of the project source code.
* Open a command/shell window to the project's `./docker` folder.

## Management Script

The `manage.sh` script wraps the Docker and S2I process in easy to use commands.

To get full usage information on the script run:
```
./manage.sh -h
```
  
## Building the Images

The first thing you'll need to do is build the Docker images.  Since this requires a combination of Docker and S2I builds the process has been scripted inside `manage.sh`.  _The `docker-compose.yml` file does not perform any of the builds._

To build the images run:
```
./manage.sh build
```

### Troubleshooting the Building

If you get errors during the build that references scripts such as the following, check the line endings of your local copy of the file.  Replace `CRLF` line endings with `LF` and rebuild the image.

The `.gitattributes` file for the project has been updated, but if your local copy predates the update, your files may still be affected.

```
/bin/sh: 1: /usr/libexec/s2i/assemble-runtime: not found
error: Execution of post execute step failed
Build failed
ERROR: An error occurred: non-zero (13) exit code from angular-builder
```

In this example search your working copy for all instances of `assemble-runtime`.

## Starting the Project

To start the project run:
```
./manage.sh start
```

This will start the project interactively; with all of the logs being written to the command line.  Press `Ctrl-C` to shut down the services from the same shell window.

## Stopping the Project

To stop the project run:
```
./manage.sh stop
```

This will shut down and clean up all of the containers in the project.  This is a non-destructive process.  The containers are not deleted so they will be reused the next time you run start.

Since the services are started interactively, you will have to issue this command from another shell window.  This command can also be run after shutting down the services using the `Ctrl-C` method to clean up any services that may not have shutdown correctly.

## Using the Application

* The main UI is exposed at; http://localhost:8080/
* The API is exposed at; http://localhost:8081/
* Schema-Spy is exposed at; http://localhost:8082/
* PDF service is exposed at; http://localhost:8083/
* The database is exposed at; localhost:5432

## Notes

docker login -u jburditt "https://index.docker.io/v1/"

### Podman

The following steps will get you started on using docker instead of podman but more steps are required and the effort may not be worth it.
```
sudo apt-get podman
code ~/.bashrc
alias docker=podman  # add this to last line of .bashrc
docker --version     # verify podman alias
code /etc/containers/registries.conf
# add this line to bottom of registries.conf
unqualified-search-registries = ["docker.io"]
systemctl enable --user podman.socket
systemctl start --user podman.socket
systemctl status --user podman.socket
```