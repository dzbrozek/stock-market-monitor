### stock-monitor

Simple app to monitor a company on a stock market

## Requirements

This app is build on top of Docker so to run it you have to install [Docker](https://docs.docker.com/install/)
and [Docker Compose](https://docs.docker.com/compose/install/)

# Running

To run the app move to the app directory and call

```docker-compose up -d```

After that verify that all containers are up and working

```docker-compose ps```

You should see something similar to that:

```
          Name                        Command              State           Ports         
-----------------------------------------------------------------------------------------
stock-monitor_backend_1    /app/start.sh                   Up      0.0.0.0:8000->8000/tcp
stock-monitor_db_1         docker-entrypoint.sh postgres   Up      0.0.0.0:5434->5432/tcp
stock-monitor_frontend_1   npm start                       Up      0.0.0.0:3000->3000/tcp
```

To see the app run `http://localhost:3000` in your web browser