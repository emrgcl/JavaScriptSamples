let emptyArray = [1, 2];
console.log("Empty Array:", emptyArray);

const mapTest = (item) => {
  item.map((iteminarray) => console.log(iteminarray));
};
//mapTest;

const subscriptions = {
  values: [
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
console.log(
  subscriptions.values.map(({ displayName }) => displayName).join(",")
);
