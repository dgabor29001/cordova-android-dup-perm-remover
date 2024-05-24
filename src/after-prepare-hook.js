module.exports = function (context) {
    const fs = require('fs');
    const fix = require('./remove-duplicate');
    
    //target only android
    if (!context.opts.platforms.includes('android')) {
        return;
    };
     
    const manifestPath = context.opts.projectRoot + '/platforms/android/app/src/main/AndroidManifest.xml';
    const androidManifest = fs.readFileSync(manifestPath).toString();
    
    fs.writeFileSync(manifestPath, fix(androidManifest));
};
