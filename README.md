# WebAPP_Template.Frontend

This repository provides a structured template for a React frontend application written in TypeScript. The project is set up with Vite for fast development and follows a modular and scalable architecture.

## Features
- React with TypeScript
- React Router for client-side navigation
- i18next for internationalization
- JWT decoding for authentication handling
- Date handling with dayjs and date-fns
- Dependency injection with Inversify
- TailwindCSS and React Bootstrap for styling

## Project Structure

```
WebAPP_Template.Frontend
└───src
    ├───components
    │   ├───breadcrumbs
    │   ├───card
    │   └───content-header
    ├───hooks
    ├───locales
    │   └───it
    ├───models
    │   ├───dtos
    │   └───errors
    ├───modules
    │   └───main
    ├───pages
    ├───repositories
    │   └───abstractions
    ├───services
    ├───styles
    ├───utils
    └───views
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Project Initialization Commands
To create the project from scratch and install necessary dependencies, the following commands were used:
```sh
npm create vite@latest name-of-your-project -- --template react-ts

npm install react-router-dom i18next react-i18next i18next-http-backend jwt-decode dayjs 

npm install --save-dev @types/jwt-decode

npm install --save-dev @types/node

npm install date-fns inversify reflect-metadata --save react-bootstrap tailwindcss
```

## Contributing
Feel free to fork this repository and contribute improvements. Open an issue or submit a pull request for any changes.

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

