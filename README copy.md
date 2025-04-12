# update web site:
change in src -> merge to main 



# actions
## get the Runner token at
/web-auto-deploy/settings/actions/runners/new?arch=x64&os=linux

## set env variables
export RUNNER_TOKEN=""
export REPO_URL="https://github.com/Cemu0/web-auto-deploy"


## test local
`docker run -d --name github-runner \
  -e RUNNER_TOKEN=$RUNNER_TOKEN \
  -e REPO_URL=$REPO_URL\
  -p 8123:80 \
  webautodeploy:latest`