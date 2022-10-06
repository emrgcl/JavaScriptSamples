 const newRequest = (method,endpoint,body )=>  {
    let request = {
        method: method,
        'endpoint': endpoint
    }
    if (body != undefined) {
        request.body = body
    }
    return request;
};
const requestbody = {
    'ResourceID' : 'xxxxxx',
    'ResourceTags': {
        'Environment': 'Prod',
        'Workload': 'FrontEnd'
    }
}
console.log(newRequest('Post', 'subscription', requestbody));
