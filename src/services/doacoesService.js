import { apiFetch } from "./api";

export async function criarDoacao(dados) {
  return apiFetch("/doacoes", {
    method: "POST",
    body: JSON.stringify(dados),
  });
}

export async function obterTotalDoacoes() {
  return apiFetch("/doacoes/total");
}
