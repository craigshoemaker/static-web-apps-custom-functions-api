# Volunteer Signup: An Azure Functions API

Take advantage of the flexibility of Azure Functions and leverage the ease-of-use of Azure Static Web Apps.

For context of how and why to use this application, see [Azure Static Web Apps with Custom Functions](https://github.com/craigshoemaker/static-web-apps-custom-functions#background).

## Prerequisites

- [Azure account](https://portal.azure.com/)
  - If you don't have one, get a [free trial](https://azure.microsoft.com/free)
- Create the following Azure services:
  - Azure Functions
  - Azure Storage account
    - Create a message queue named `messages`
    - Create a table named `volunteers`
- [Node.js](https://nodejs.org/)
- [Azure Functions VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)

## Get started

1. Clone the repository:

    `git clone https://github.com/craigshoemaker/static-web-apps-custom-functions-api`

1. Change folders:

    `cd static-web-apps-custom-functions-api`

1. Install dependencies:

    `npm install`

1. Rename example file:

    `git mv local.settings.EXAMPLE.json local.settings.json`

1. Open *local.settings.json* and paste the connection string to your Azure Storage account as the value for both `AzureWebJobsStorage` and `StorageConnectionString`;

1. Press <kbd>F5</kbd> to start a debugging session