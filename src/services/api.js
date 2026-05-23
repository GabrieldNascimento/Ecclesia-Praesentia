// services/api.js

const BASE_URL = "http://localhost:5262/api";

export async function apiFetch(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("Erro ao comunicar com a API");
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}