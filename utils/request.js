export async function dbRequest(url, config = {}) {
  try {
    const response = await fetch(url, config);
    const data = await response.json();
    return {
      code: response.status,
      data: data,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      code: null,
      data: null,
      error: error,
    };
  }
}