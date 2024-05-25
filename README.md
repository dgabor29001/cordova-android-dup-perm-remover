# cordova-android-dup-perm-remover
 Remove duplicate permission from AndroidManifest.xml file


 ## Installation

 ```bash
    npm i @hollax/cordova-android-dup-perm-remover
 ```

## Usage
    
1. Add the following definition to `config.xml` to tell Cordova to run `afterPrepare.js` script before each platform build.

```xml
    <hook type="after_prepare" src="scripts/afterPrepare.js" />
```

2. Create `scripts/afterPrepare.js` file and add the following implementation

```javascript
const {afterPrepareHook} = require('@hollax/cordova-android-dup-perm-remover')
module.exports = afterPrepareHook;
```

3. Run the project

 ```bash
    cordova run android
 ```
 
## Testing

Test uses `chai` and `mocha`.

**Install the dependencies**

 ```bash
    npm i
 ```

Run the tests

 ```bash
    npm test
 ```
    
