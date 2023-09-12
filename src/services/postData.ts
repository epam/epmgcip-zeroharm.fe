export const postData = <T>(values: T, path: string) => {
  fetch(`${process.env.REACT_APP_ZERO_HARM_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  }).catch((err) => {
    throw new Error(err.message);
  });
};
