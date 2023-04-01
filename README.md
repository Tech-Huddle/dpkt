# Dutta Para Kali Puja Trust
[![DPKT Pipeline](https://github.com/Tech-Huddle/dpkt/actions/workflows/github-actions.yml/badge.svg?branch=main)](https://github.com/Tech-Huddle/dpkt/actions/workflows/github-actions.yml)

## Branching Strategy
Please follow the below strategy in order to avoid conflicts and keep maintainability.

### Protected Branches

`main` -> Dev deployment goes from here

`stage` -> Stage deployment goes from here

`release` -> Production deployment goes from here


### Development strategy

1. Try to follow the below branch naming for development `feature/<feature-name>`

2. After development raise **Pull Request** to `main` branch. Upon mergeing the request it would deploy the dev changes to **dev** environment

### Deployment strategy
1. Upon merging PR to `main` branch a **dev** deployment would be initiated.
2. To deploy from any `feature` branch commit the changes with message `deploy=dev`

     ### Example
     ```
     git commit -m "deploy=dev | updating index.html"
     ```

## Access
|Environment|Link  |
|--|--|
| Dev | https://dpkt-dev.s3.ap-south-1.amazonaws.com/index.html |
