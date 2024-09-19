
/**
 * 
 * @param {string} content
 * @param {string[]} filter Lines to be include in the content
 * @param {string[]} exclude Permissions to to no include in the content
 * @returns 
 */
module.exports = function(content, filter = ['uses-permission', 'uses-feature'], exclude = []){    
    const manifestLines = content.split("\n");
    const normalized  = [];
    const added = {};
    for(let line of manifestLines){
        if(filter && filter.some(f => line.includes(f))){
            let result = /android\:name\="([^"]+)"/.exec(line);
            let permission = result && result[1];
            if(permission){
                /*
                if(filter && !filter.some(f => line.includes(f))){
                    continue;
                }
                */
                if(exclude && exclude.indexOf(permission) !== -1){
                    continue;
                }
    
                if(added[permission]){
                    continue;
                }
                added[permission] = true; 
            }
        }
        normalized.push(line);
    }
    return normalized.join("\n")
}
