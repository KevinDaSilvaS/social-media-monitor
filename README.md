## Running the app
#### Running on docker
`
    docker compose up
`

#### Running on podman
`
    podman compose up
`

## About the anomaly detection system
I implemented three filters to calculate mean, median and mode of the amount
of every batch of tweets loaded, and after it the software based on one
of the filters + plus a percentage calculates if the received amount is 
greater than the expected if it is triggers the alert, being an advantage
of only alerting when there's a really unexpected amount of tweets incoming

## Time taken for implementation
- 2 hours
    - Creating tweets mock api + investigation twitter api
    - Creating base nest.js app
- 4 hours and 30 minutes
    - Implementing the real time monitoring
    - Implementing clients for the apis
    - Implementing mappers
    - Implementing filters for anomaly detection
    - Implementing tests for filters

