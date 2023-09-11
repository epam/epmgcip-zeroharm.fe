# Zero harm frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

NodeJs and npm installed on your machine.

### Installation

1. Clone the repository:

`git clone https://git.epam.com/epm-gcip/zero-harm/zeroharm-frontend.git`

2. Open the project with your code editor in a root directory run command:

`npm install`

3. Once installation complete execute command to install husky:

`npm run prepare`

### Starting the application

1. To start application run command:

`npm start`

### Cors error

1. Install browser extension (Cors Unblock) https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino.
2. Allow extension in InPrivate mode.
  2.1. Open extension menu
  2.2. Choose "Manage extension"
  3.3. In extension configuration enable option "Allow in InPrivate".

## Contributing to the Project

1. To make your improvements create new branch from main branch. Make sure that local main branch has last updates.
2. Name branch as FE-{number}. {number} - ticket number that you work on. In case if there is no ticket number use
NO#-{description} for naming your branch.
3. Push your branch with changes to remote repo and open Merge Request.

```
git checkout main
git pull origin main
git branch -b FE-{number} or NO#-{description}
git commit -m "describe you changes"
git push origin FE-{number} or NO#-{description}
```

4. Open Merge Request to main branch
5. Merge Request should be named as FE-{number}: {description}
6. In MR Provide following details:

```
- Add tag (label)
- Assign a reviewer
- Attach a link to the ticket
- Attach screenshots for visual changes
```

### Commit name
Project uses git hooks to format your commit messages as:

`FE-{number}: your commit message`

When making commit just provide description without prefix.

## Code review

Everyone should participate in code review and give an approval before 
merging branch.