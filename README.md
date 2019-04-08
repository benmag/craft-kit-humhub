# Craft Kit - HumHub
This craft kit is for HumHub - the flexible open source social network kit. 
```
$ mason craft benmag/craft-kit-humhub
```

Craft kits let you Dockerize your application with one command. They are an excellent way to ease into building Docker powered apps without having to learn the ins and outs of Docker.

Then with [Codemason](https://codemason.io), you can deploy your app to a server in a matter of minutes!

## Requirements 
This guide assumes you have:
- Installed the [Mason CLI](https://codemason.io/docs/installation)

## Quickstart
Clone HumHub
```
$ git clone https://github.com/humhub/humhub.git
```

Craft your HumHub app with Docker. Make sure you set your `GITHUB_TOKEN` as explained in the Configruation section of this README.
```
$ mason craft benmag/craft-kit-humhub
```

Generate a GitHub Personal Access Token for Composer 
```
https://github.com/settings/tokens/new?scopes=repo&description=Composer
```

Then set the token as environment variable for `app` in your new `Dockerfile`
```
ENV GITHUB_TOKEN xxxxxxxxxxxxxxxxxxxxx
```

Add your Docker files to source control.
```
$ git add .
$ git commit -m "Docker"
```

Spin up your development environment with Docker (use the `-d` flag to the command to run in detached mode)
``` 
$ docker-compose up -d
```

Install composer dependencies for local development. 
```
$ docker-compose run --rm app composer install
```

> NOTE: It will take time for all the dependencies to install. If you have `composer` installed locally, run `composer install` locally as it will be faster.

That's all! You're now running your HumHub application with Docker!

You'll be able to access your application at http://<docker-ip>, where <docker-ip> is the boot2docker ip or localhost if you are running Docker natively.

## Deployment
Deploying is just as easy with [Codemason](https://codemason.io). For more detailed instructions, see our [documentation](http://codemason.io/docs/quickstart#deploy-dreams).

Create an application on Codemason for your app
```
$ mason create humhub-app
```

Push your code to your Codemason Git remote to build it into a Docker image
```
$ git push codemason master 
```

Deploy
```
$ mason deploy humhub-app
```

