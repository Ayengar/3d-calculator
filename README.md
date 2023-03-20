This is 3d-calculator.
App for calculating 3d-printing price and previewing 3d model within browser without need to install 3d-software.

Model viewing is implemented with three.js; File uploading - uppy.io; Price calculated based on model volume using common formula.
Front is made with React, Back - with Express.js.

App was built intentionally without state manager, but as goals risen it will be changed using Redux.

Next goals are:
- Create server-side slicing on VM using cura-engine to deliver very accurate price.
- Make a realistic render of a printed object as it would look like in real life.
