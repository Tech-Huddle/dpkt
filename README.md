# Dutta Para Kali Puja Trust

## Branching Strategy
Please follow the below strategy in order to avoid conflicts and keep maintainability.

### Protected Branches

`main` -> Dev deployment goes from here

`stage` -> Stage deployment goes from here

`release` -> Production deployment goes from here


### Development strategy

1. Try to follow the below branch naming for development `feature/<feature-name>`

2. After development raise **Pull Request** to `main` branch. Upon mergeing the request it would deploy the dev changes to ***dev* environment

