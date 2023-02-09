export const getPosts = async () =>
  await fetch("https://ayaura.azurewebsites.net/getImages")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((jsonRes) => jsonRes);
