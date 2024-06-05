const fs = require('fs');
const creatHook = require('../src/create-after-prepare-hook');
const expect = require('chai').expect
const xml = fs.readFileSync(__dirname+'/files/ManifestWithDuplicate.xml').toString().trim();
const normalized =  fs.readFileSync(__dirname+'/files/ManifestWithoutDuplicate.xml').toString().trim();
const filtered =  fs.readFileSync(__dirname+'/files/ManifestWithFIlteredPermissions.xml').toString().trim();

const mockManifestFile = __dirname+'/mock/platforms/android/app/src/main/AndroidManifest.xml';

describe('create After Prepare Hook', function(){

    before(function(){
        fs.writeFileSync(mockManifestFile, xml);
    });

    it('Removes duplicate permissions from the AndroidManifest.xml filevu', function(){
        const ctx = {
            opts:{
                projectRoot:__dirname+'/mock',
                platforms:{
                    includes: function(platform){
                        return true;
                    }
                }
            }
        }

        expect(()=> creatHook()(ctx)).to.not.throw(Error);
        expect(fs.readFileSync(mockManifestFile).toString()).to.eq(normalized);
    });
    it('Remove  permissions from the AndroidManifest.xml file', function(){
        const ctx = {
            opts:{
                projectRoot:__dirname+'/mock',
                platforms:{
                    includes: function(platform){
                        return true;
                    }
                }
            }
        }

        expect(()=> {
            const hook = creatHook({
                exclude:['android.permission.BLUETOOTH']
            });
            hook(ctx);
    }).to.not.throw(Error);
        expect(fs.readFileSync(mockManifestFile).toString()).to.eq(filtered);
    });
    
});