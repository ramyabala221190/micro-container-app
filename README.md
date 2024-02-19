Building a npm package and using it in a container application

1. Create a workspace without creating an application.

ng new micros --create-application=false

2. Add a library to this workspace

ng g library clickTracker

3. Navigate to the src/lib folder of the library and create a directive there.

C:\Users\User\angular\microfrontends\micros\projects\click-tracker\src\lib>ng g directive eventTrack

4. Update public-api.ts to export the directive and remove unecessary imports.

5. In the package.json, update the "build" command to build the library using
production configuration

"build":"ng build clickTracker --configuration production"

Run the build command to generate dist folder.

6. Make sure you have an npm account.

7.  Login into the npm account using "npm login".

8. Update the version of the library using "npm version <version number>"
eg: C:\Users\User\angular\microfrontends\micros\dist\click-tracker>npm version 1.0.1

9. Now publish the library to npm using "npm publish"

C:\Users\User\angular\microfrontends\micros\dist\click-tracker>npm publish

10. In your npm account, go to packages and check the package you have uploaded.
https://www.npmjs.com/package/click-tracker

11. Everytime the package is updated, repeat steps 5,8 and 9.
For every change you want to push,
=>Build the changes,
=>Version the change
=>Publish the change

11. Create an application using "ng new container-app". This is the current application you are in.

12. Install the npm package and follow the instructions in the README of the npm package
to test the package in this container application.

13. This is an example of build-time integration of micro frontends.

Each micro frontend will be a library published as an npm package.
Each library will have its own repository and deployed/published independently.

In the container application, we need to keep updating the npm package version each
time the package is updated to see the latest updates.