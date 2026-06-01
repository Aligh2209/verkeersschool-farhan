import { NextRequest, NextResponse } from 'next/server'
import createMollieClient from '@mollie/api-client'

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const params = new URLSearchParams(body)
    const id = params.get('id')

    if (!id) return NextResponse.json({ ok: false }, { status: 400 })

    const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! })
    const payment = await mollie.payments.get(id)

    if (payment.status === 'paid') {
      const meta = payment.metadata as Record<string, string>
      console.log(`✅ Betaling ontvangen: ${meta.naam} — ${meta.datum} ${meta.tijd} — ${meta.locatie}`)

      // Stuur WhatsApp bericht naar Farhan via eigen notificatie
      // (optioneel: koppel hier Twilio of een eenvoudige e-mail service)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Webhook error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
