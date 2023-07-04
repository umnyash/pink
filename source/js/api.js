const sendData = async (url, body, onSuccess, onFail) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    });
    if (!response.ok) {
      throw new Error(`${response.status} – ${response.statusText}`);
    }
    onSuccess();
  } catch {
    onFail();
  }
};

export { sendData };
