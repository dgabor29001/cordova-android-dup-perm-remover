
module.exports = function(content){
    const manifestLines = content.split("\n");
    const normalized  = [];
    const added = {};
    for(let line of manifestLines){
        let result = /android\:name\="([^"]+)"/.exec(line);
        let permission = result && result[1];
        if(permission){

            if(added[permission]){
                continue;
            }
            added[permission] = true; 
        }
        normalized.push(line);
    }
    return normalized.join("\n")
}