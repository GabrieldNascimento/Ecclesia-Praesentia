import { apiFetch } from "./api";

export async function listarEventos() {
  return apiFetch("/eventos");
}

export async function criarEvento(dados) {
  return apiFetch("/eventos", {
    method: "POST",
    body: JSON.stringify(dados),
  });
}
