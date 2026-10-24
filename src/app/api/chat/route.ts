import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.ANTHROPIC_API_KEY;

    // Si hay ANTHROPIC_API_KEY en variables de entorno, conectar directamente a Claude
    if (apiKey) {
      const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-3-haiku-20240307",
          max_tokens: 300,
          system: `Eres el asistente virtual oficial de María Arias (Licensed Insurance Agent) en Florida, NC, SC, TX y NJ. Respondes con empatía en español a familias hispanas e inmigrantes sobre Obamacare (ACA), planes privados (Manhattan Life, MedBlue, UHOne sin estatus migratorio requerido), seguros de vida (National Life Group) y retiro. Siempre invita a agendar una consulta gratuita o llamar al (305) 555-0192 sin dar falsas promesas.`,
          messages: [{ role: "user", content: message }],
        }),
      });

      if (anthropicRes.ok) {
        const data = await anthropicRes.json();
        const reply = data.content?.[0]?.text;
        if (reply) {
          return NextResponse.json({ reply });
        }
      }
    }

    // Respuesta inteligente fallback adaptada a las reglas de María Arias
    const lower = (message || "").toLowerCase();
    let reply =
      "María Arias analiza tu caso personalmente en español y sin costo alguno en Florida, North Carolina, South Carolina, Texas y New Jersey. Puedes comunicarte al (305) 555-0192.";

    if (lower.includes("obamacare") || lower.includes("aca") || lower.includes("subsidio")) {
      reply =
        "El programa ACA / Obamacare otorga subsidios según tus ingresos de impuestos declarados. Muchas familias califican para planes con primas de $0 al mes. María puede verificar tu cálculo exacto de subsidio en 5 minutos. ¿Deseas solicitar una cotización gratuita?";
    } else if (
      lower.includes("papeles") ||
      lower.includes("estatus") ||
      lower.includes("asilo") ||
      lower.includes("sin seguro") ||
      lower.includes("privado")
    ) {
      reply =
        "¡Tu estatus migratorio no define tu acceso a la salud! Para personas con asilo pendiente, DACA o sin documentos definitivos, trabajamos con Planes Médicos Privados (Manhattan Life, MedBlue, UHOne) disponibles los 365 días del año sin requerir SSN definitivo.";
    } else if (lower.includes("vida") || lower.includes("muerte") || lower.includes("funeral")) {
      reply =
        "Ofrecemos pólizas modernas de seguro de vida con National Life Group con beneficios en vida (te indemnizan si sufres un infarto o cáncer), además de asistencia funeraria y repatriación con Assure For Life. ¿Buscas cobertura individual o familiar?";
    } else if (lower.includes("hogar") || lower.includes("casa") || lower.includes("propiedad")) {
      reply =
        "Actualmente nos especializamos en Seguros de Salud (Obamacare y Planes Privados), Seguro de Vida con beneficios en vida, Asistencia Funeraria y Planificación de Retiro / Anualidades. No ofrecemos seguros de hogar o propiedad. ¿Te gustaría consultar sobre salud, vida o retiro?";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      {
        reply:
          "Puedes comunicarte directamente con María Arias al (305) 555-0192 o completar el formulario para una respuesta inmediata.",
      },
      { status: 200 }
    );
  }
}
