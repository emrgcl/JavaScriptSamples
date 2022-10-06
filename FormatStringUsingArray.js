const newManagementURI = (uri,params) => {
    if (params != undefined) {
    for (const property in params)  {
        
        const regex = new RegExp(`\\{${property}\\}`);
        uri=uri.replace(regex,params[property]);
    
    }
    }
    
    return uri;
    
};
const uriParameters={
    subscriptionId : 'xxxx',
    tagName : 'Production'
};
let myURI= "https://management.azure.com/subscriptions/{subscriptionId}/tagNames/{tagName}?api-version=2021-04-01"

console.log(newManagementURI(myURI,uriParameters));
console.log(newManagementURI("http://sthsth"));