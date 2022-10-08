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
const resources = {
  value: [
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/CONTOSOALL/providers/Microsoft.Compute/disks/emreg-test01_OsDisk_1_2f95f087db74424482c8b64fc58ff0ad",
      name: "emreg-test01_OsDisk_1_2f95f087db74424482c8b64fc58ff0ad",
      type: "Microsoft.Compute/disks",
      sku: {
        name: "Premium_LRS",
        tier: "Premium",
      },
      managedBy:
        "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/Microsoft.Compute/virtualMachines/emreg-test01",
      location: "westeurope",
      zones: ["1"],
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/Microsoft.Compute/virtualMachines/emreg-test01",
      name: "emreg-test01",
      type: "Microsoft.Compute/virtualMachines",
      location: "westeurope",
      zones: ["1"],
      identity: {
        principalId: "d0123196-524e-483f-8352-bc944fd0b217",
        tenantId: "5fbae672-fcee-40a3-8c85-7c98274725e3",
        type: "SystemAssigned",
      },
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/Microsoft.Compute/virtualMachines/emreg-test01/extensions/AzureMonitorWindowsAgent",
      name: "emreg-test01/AzureMonitorWindowsAgent",
      type: "Microsoft.Compute/virtualMachines/extensions",
      location: "westeurope",
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/Microsoft.DevTestLab/schedules/shutdown-computevm-emreg-test01",
      name: "shutdown-computevm-emreg-test01",
      type: "Microsoft.DevTestLab/schedules",
      location: "westeurope",
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/Microsoft.Insights/dataCollectionRules/Contoso-Common-Perf-Collection",
      name: "Contoso-Common-Perf-Collection",
      type: "Microsoft.Insights/dataCollectionRules",
      kind: "Windows",
      location: "westeurope",
      tags: {
        Enivornment: "Prod",
        Workload: "AzureMonitor",
      },
      systemData: {
        createdBy: "emreguclu@hotmail.com",
        createdByType: "User",
        createdAt: "2022-09-26T09:06:57.1123634Z",
        lastModifiedBy: "emreguclu@hotmail.com",
        lastModifiedByType: "User",
        lastModifiedAt: "2022-10-06T10:44:02.8154154Z",
      },
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/microsoft.insights/workbooks/ec6b6784-ad58-472f-a029-e1af9e25005b",
      name: "ec6b6784-ad58-472f-a029-e1af9e25005b",
      type: "microsoft.insights/workbooks",
      kind: "shared",
      location: "eastus",
      identity: {
        type: "None",
      },
      tags: {
        "hidden-title": "Test Workbook",
      },
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/Microsoft.Network/networkInterfaces/emreg-test01797_z1",
      name: "emreg-test01797_z1",
      type: "Microsoft.Network/networkInterfaces",
      location: "westeurope",
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/Microsoft.Network/networkSecurityGroups/emreg-test01-nsg",
      name: "emreg-test01-nsg",
      type: "Microsoft.Network/networkSecurityGroups",
      location: "westeurope",
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/Microsoft.Network/publicIPAddresses/emreg-test01-ip",
      name: "emreg-test01-ip",
      type: "Microsoft.Network/publicIPAddresses",
      sku: {
        name: "Standard",
      },
      location: "westeurope",
      zones: ["1"],
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/Microsoft.Network/virtualNetworks/ContosoAll-vnet",
      name: "ContosoAll-vnet",
      type: "Microsoft.Network/virtualNetworks",
      location: "westeurope",
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/Microsoft.OperationalInsights/workspaces/Contoso-WS-Default",
      name: "Contoso-WS-Default",
      type: "Microsoft.OperationalInsights/workspaces",
      location: "westeurope",
      tags: {
        Environment: "Prod",
      },
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/Microsoft.OperationalInsights/workspaces/Contoso-WS-test2",
      name: "Contoso-WS-test2",
      type: "Microsoft.OperationalInsights/workspaces",
      location: "westeurope",
      tags: {},
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/DefaultResourceGroup-WEU/providers/Microsoft.Insights/dataCollectionRules/MSVMI-DefaultWorkspace-0e6e9ede-e794-4d39-bd16-cdc402faee39-WEU",
      name: "MSVMI-DefaultWorkspace-0e6e9ede-e794-4d39-bd16-cdc402faee39-WEU",
      type: "Microsoft.Insights/dataCollectionRules",
      location: "westeurope",
      systemData: {
        createdBy: "emreguclu@hotmail.com",
        createdByType: "User",
        createdAt: "2022-09-26T09:16:19.2204406Z",
        lastModifiedBy: "emreguclu@hotmail.com",
        lastModifiedByType: "User",
        lastModifiedAt: "2022-09-26T09:16:19.2204406Z",
      },
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/DefaultResourceGroup-WEU/providers/Microsoft.OperationalInsights/workspaces/DefaultWorkspace-0e6e9ede-e794-4d39-bd16-cdc402faee39-WEU",
      name: "DefaultWorkspace-0e6e9ede-e794-4d39-bd16-cdc402faee39-WEU",
      type: "Microsoft.OperationalInsights/workspaces",
      location: "westeurope",
    },
    {
      id: "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/NetworkWatcherRG/providers/Microsoft.Network/networkWatchers/NetworkWatcher_westeurope",
      name: "NetworkWatcher_westeurope",
      type: "Microsoft.Network/networkWatchers",
      location: "westeurope",
    },
  ],
};
const getResourceGroup = (id) => {
  const regex =
    /\/subscriptions\/[^\s/]+\/resourceGroups\/(?<resourceGroup>[^\s\/]+)/;
  matchResult = id.match(regex);
  return matchResult.groups.resourceGroup;
  //.groups.resourceGroup
};
//subscriptions.values.map(({id,subscriptionId})=>console.log('id: ', id, 'and SubscriptionId: ', subscriptionId))
// Remove unncesdsary properties,
// add resoruce group
// add if tag property dont exist
const newresources = resources.value.map((resource) => {
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
});

const resourceId =
  "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/DefaultResourceGroup-WEU/providers/Microsoft.OperationalInsights/workspaces/DefaultWorkspace-0e6e9ede-e794-4d39-bd16-cdc402faee39-WEU";
const resourceId2 =
  "/subscriptions/0e6e9ede-e794-4d39-bd16-cdc402faee39/resourceGroups/ContosoAll/providers/Microsoft.Network/virtualNetworks/ContosoAll-vnet";
const testobject = {
  Name: "Emre",
};
//console.log(getResourceGroup(resourceId));
console.log(newresources);
