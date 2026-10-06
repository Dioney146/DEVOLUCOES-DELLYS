import { usuarioDaSessao } from "../../../lib/sessao";
import { carregarDevolucoes } from "../../../lib/devolucoes";

export const dynamic = "force-dynamic";

export async function GET(req) {
  if (!(await usuarioDaSessao())) return Response.json({ erro: "Faça login." }, { status: 401 });
  try {
    const fresco = new URL(req.url).searchParams.get("fresco") === "1";
    return Response.json(await carregarDevolucoes({ fresco }));
  } catch (e) {
    return Response.json({ erro: e.message }, { status: 500 });
  }
}
