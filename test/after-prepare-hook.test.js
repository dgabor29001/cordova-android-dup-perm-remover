const fs = require('fs');
const hook = require('../src/after-prepare-hook');
const expect = require('chai').expect
const xml = fs.readFileSync(__dirname+'/files/ManifestWithDuplicate.xml').toString().trim();
const normalized =  fs.readFileSync(__dirname+'/files/ManifestWithoutDuplicate.xml').toString().trim();

const mockManifestFile = __dirname+'/mock/platforms/android/app/src/main/AndroidManifest.xml';

describe('afterPrepareHook', function(){

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

        expect(()=> hook(ctx)).to.not.throw(Error);
        expect(fs.readFileSync(mockManifestFile).toString()).to.eq(normalized);
    });
    
});