# Internet Archive e-Book download

## Setup Process:
* Download this repository as zip from above and extract it
* Install node.js ver 10.16.0 from https://nodejs.org/dist/v10.16.0/node-v10.16.0-x64.msi
* After installation, open the extracted folder in command prompt
* execute the following commands for the intended action as mentioned below:
    * ``npm run clean`` to clean the workspace and get ready for a new download (MANDATORY step)
    * ``npm run https`` to download each individual page of the book
    * ``npm run join`` to form pairs and join the the downloaded images
    * ``npm run topdf`` to create a pdf from the paired images produced in the previous step

