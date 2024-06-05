![test](https://github.com/hollax/cordova-android-dup-perm-remover/actions/workflows/node.js.yml/badge.svg)

# Cordova Android Duplicate Permissions Remover 

 This is a Node.js tool specifically designed for Cordova projects to prevent build failures caused by duplicate permissions in the generated `AndroidManifest.xml` file. This tool automatically removes duplicate permissions during the build process, ensuring a smooth and error-free build.

## Features

- Automatically removes duplicate permissions from `AndroidManifest.xml`.
- Integrates seamlessly with the Cordova build process using the `after_prepare` hook.
- Easy to install and use as a Node package.

## Installation

Install the package via npm:

```sh
npm install @hollax/cordova-android-dup-perm-remover --save-dev
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
 
## Exclude Permission

Since `v1.2`, you can specify permissions to be ecluded from the generated `AndroidManifest.xml`

Edit `scripts/afterPrepare.js` 
```javascript
const {createAfterPrepareHook} = require('@hollax/cordova-android-dup-perm-remover')
module.exports = createAfterPrepareHook({
   exclude:['android.permission.BLUETOOTH']
});
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
    

## License

This project is licensed under the MIT License (2024).

## Author

**Wakeel Ogunsanya**

- **Email**: [wakeel.oguns@gmail.com](mailto:wakeel.oguns@gmail.com)
- **LinkedIn**: [Wakeel Ogunsanya](https://ng.linkedin.com/in/wakeel-ogunsanya)

---

For more information, visit the [GitHub repository](https://github.com/hollax/cordova-android-dup-perm-remover).


 

