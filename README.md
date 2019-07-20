# Test

## Getting Started

In order to get this app up and running, you'll need to follow these steps in order.

### Prerequisites

* Install [Docker](https://www.docker.com/)

### Setting up variables

* Create a `.env` file in root directory with following variables. Make sure you replace `ANY NAME YOU DESIRE`.

        NPM_SCRIPT=start
        APP_MOUNT_ID=react-root
        WEBSITE_NAME=ANY NAME YOU DESIRE

## Run App

### Run the following commands

* Start up docker container

        .sh/up

* Install all dependencies and start up webpack-dev-server

        .sh/follow_front_end

### Additional Commands

* Take down docker container

		.sh/down

* List all docker containers

		.sh/psa

* Build production

		.sh/build_prod

* Run tests

		.sh/test