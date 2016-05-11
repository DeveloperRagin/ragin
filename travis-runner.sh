#!/bin/bash -e
set -o pipefail
if [ "$TRAVIS_BRANCH" = "master" ] && [ "$TRAVIS_PULL_REQUEST" = "false" ]  && [ "$TRAVIS_NODE_VERSION" = "5.1" ]
then
  # Test using web-component-tester
  then wct -s '.ragin/test/'

  git config --global user.email "vandeurenglenn@gmail.com"
  git config --global user.name "auto deployer"

  deploy_demo() {
    # Deploying
    echo Deploying Demo...
    gulp deploy:demo
  }

  deploy() {
    # Deploying
    echo Deploying...
    # Remove .ragin folder
    # echo Removing .ragin folder...
    # rm .ragin
    # move dist to src
    # echo Moving dist to src...
    # cp dist src

    gulp deploy
  }

  deploy_demo
  deploy
elif [ "$TRAVIS_BRANCH" = "master" ] && [ "$TRAVIS_PULL_REQUEST" = "false" ]  && [ "$TRAVIS_NODE_VERSION" != "5.1" ]
then
  echo "Deploy with Node 5.1 only"
fi
