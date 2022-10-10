const subscriptions = {
  value: [
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39",
      authorizationSource: "Legacy",
      managedByTenants: [],
      subscriptionId: "0e6e9ede-e794-4d39-bd16-cdc402faee39",
      tenantId: "5fbae672-fcee-40a3-8c85-7c98274725e3",
      displayName: "Visual Studio Enterprise Subscription",
      state: "Enabled",
      subscriptionPolicies: {
        locationPlacementId: "Public_2014-09-01",
        quotaId: "MSDN_2014-09-01",
        spendingLimit: "On",
      },
    },
    {
      id: "/subscriptions/8ec70249-6413-4a41-81a1-3f803650b44b",
      authorizationSource: "Legacy",
      managedByTenants: [],
      subscriptionId: "8ec70249-6413-4a41-81a1-3f803650b44b",
      tenantId: "5fbae672-fcee-40a3-8c85-7c98274725e3",
      displayName: "My New Subscription",
      state: "Enabled",
      subscriptionPolicies: {
        locationPlacementId: "Public_2018-09-01",
        quotaId: "MSDN_2018-09-01",
        spendingLimit: "On",
      },
    },
  ],
};
const getResourceGroup = (resourceId) => {
  const regex =
    /\/subscriptions\/[^\s/]+\/resourceGroups\/(?<resourceGroup>[^\s\/]+)/;
  const matchResult = resourceId.match(regex);
  return matchResult.groups.resourceGroup;
};
let result = [];
subscriptions.value.forEach(({ subscriptionId }) => {
  fetch(`http://localhost:3005/subscriptions/${subscriptionId}`)
    .then((response) => response.json())
    .then(({ value }) => {
      value.forEach((item) => {
        result.push(item);
        console.log("item:", item);
      });
      //result = result.concat(value);
    });
});

console.log("result", result);
/*

let formattedResource = {};
        formattedResource["id"] = resource.id;
        formattedResource["name"] = resource.name;
        formattedResource["type"] = resource.type;
        formattedResource["location"] = resource.type;
        formattedResource["resourceGroup"] = getResourceGroup(resource.id);
        resource.tags == undefined
          ? (formattedResource["tags"] = {})
          : (formattedResource["tags"] = resource.tags);
        return formattedResource;
*/
