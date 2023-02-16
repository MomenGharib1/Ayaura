export const getPosts = async () =>
  await fetch("https://ayaura.azurewebsites.net/getImages")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((jsonRes) => jsonRes);

export const Generate = async (text) =>
  await fetch(`https://api.openai.com/v1/images/generations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({
      model: "image-alpha-001",
      prompt: text,
      num_images: 1,
      size: "1024x1024",
      response_format: "b64_json",
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((jsonRes) => jsonRes);
