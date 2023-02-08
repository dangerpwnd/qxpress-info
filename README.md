A NextJS project to display Qxpress information

## Knex Config

The config file needs to be configured as such:

const config = {
client: 'mssql',
connection: {
host: 'name of SQL Server',
user: 'name of user',
password: 'password for user',
database: 'database name',
options: {
instanceName: 'name of instance',

      OR BUT NOT BOTH

      port: port number
    },

},
};

module.exports = config;

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Known Errors

If you run into the following webpack error when running scripts "Error: error:0308010C:digital envelope routines::unsupported", please run the following:
$env:NODE_OPTIONS="--openssl-legacy-provider"
