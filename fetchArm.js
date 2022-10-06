  const TestFetch = () => {
  const uri = 'https://management.azure.com/subscriptions?api-version=2020-01-01';
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuYXp1cmUuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNWZiYWU2NzItZmNlZS00MGEzLThjODUtN2M5ODI3NDcyNWUzLyIsImlhdCI6MTY2NDk4MTQ3MSwibmJmIjoxNjY0OTgxNDcxLCJleHAiOjE2NjQ5ODY2NTAsImFjciI6IjEiLCJhaW8iOiJBVVFBdS84VEFBQUFST1J3UmNnd3RENXExdTRqMW13VHBCc0dBTWpHaFdTczRSbkNmdWZldDJUVnNEeDFjN3Btc0pNTWU3RVFFak9zcW45YUNPUmdVekZweWZUbVc3YjllQT09IiwiYWx0c2VjaWQiOiIxOmxpdmUuY29tOjAwMDY0MDAwODREREZERTkiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiZTk2ZjNlMGYtYTllYi00ZWI4LTgwYzAtYTY5ZTA5MjZiM2NhIiwiYXBwaWRhY3IiOiIwIiwiZW1haWwiOiJlbXJlZ3VjbHVAaG90bWFpbC5jb20iLCJmYW1pbHlfbmFtZSI6IkfDvMOnbMO8IiwiZ2l2ZW5fbmFtZSI6IkVtcmUiLCJncm91cHMiOlsiNTI3ZmFjYTUtODAyMC00NzMxLWEyZWEtYmFiMGExMmMyNzNiIl0sImlkcCI6ImxpdmUuY29tIiwiaXBhZGRyIjoiMTc2LjIzNC4xMzUuMTk0IiwibmFtZSI6IkVtcmUgR8O8w6dsw7wiLCJvaWQiOiJiYjI3YjU2Yi1iMWM0LTQ3MTItOGE4ZS1jNzVmYzQ2NGY3ZjMiLCJwdWlkIjoiMTAwMzdGRkU5NTY4Mjc1NiIsInJoIjoiMC5BUkVBY3VhNlgtNzhvMENNaFh5WUowY2w0MFpJZjNrQXV0ZFB1a1Bhd2ZqMk1CTVJBTHcuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoib21INFZnblB0bElub0tLQnNVNUUxTW1uU2pwakF1YWV3WWp6dWp0bExOUSIsInRpZCI6IjVmYmFlNjcyLWZjZWUtNDBhMy04Yzg1LTdjOTgyNzQ3MjVlMyIsInVuaXF1ZV9uYW1lIjoibGl2ZS5jb20jZW1yZWd1Y2x1QGhvdG1haWwuY29tIiwidXRpIjoidHVWbmpFaGI4VXk0YjdoUVFaRXJBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc190Y2R0IjoxNDUwODk0NjY3fQ.hpN7Hc13R4WLLa3LW9oymMHl46DYMimCzq603Eg5ThIhGdKK6LeTqdhIWaVTMbk4fw4wYvD_WjfcAEPZzbbFBNkkrnM37ARMV-p3A4F3Y5AMETBNONuflErjMxN3Gfk4D7gYrBRiIOPgJdqMrWzl9Qvod55_JFXsyi2GWOjp9u9fdkm4Td0M5CvywjhCksSiysnW-ubETFo8YZ8SGQ4nIcOi-K0OS09hlZpmL7HI5uZCR_c2h3v76mZlLRprtZ_Bw6mctD7zUQ3jW7F9BXkEJ2ZjsqaEUnOma2VVZeWrhLIpyuykINtHvCPL64ARV5oJI0Qs7oq-yu4HXJXsomDwtw';
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;
  const body = undefined;
  console.log("bearer: ", bearer);
  headers.append("Authorization", bearer);
  const customheader= {
    'Authorization': bearer,
    'Content-Type': 'application/json'
};
  const options = {
    method: 'get',
    headers: headers
};
  if (body != undefined) {
    options.body = body;
  }
  console.log(options);
  return fetch(uri, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
TestFetch().then((data)=> console.log(data.value));

