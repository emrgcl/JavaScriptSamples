const subscriptionId = [
  "0e6e9ede-e794-4d39-bd16-cdc402faee39",
  "8ec70249-6413-4a41-81a1-3f803650b44b",
];
const resources = [];
subscriptionId.map((item) => {
  fetch(`./data/resourcesList_${item}.json`)
    .then((response) => response.json())
    .then((data) => resources.concat(data))
    .then((data) => console.log(data));
});
console.log(resources);
