import { NextRequest, NextResponse } from 'next/server'
import createMollieClient, { PaymentMethod } from '@mollie/api-client'

export async function POST(req: NextRequest) {
  try {
    const { naam, email, telefoon, locatie, datum, tijd } = await req.json()

    if (!naam || !email || !locatie || !datum || !tijd) {
      return NextResponse.json({ error: 'Vul alle velden in.' }, { status: 400 })
    }

    const apiKey = process.env.MOLLIE_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Betaalsysteem niet geconfigureerd.' }, { status: 500 })
    }

    const mollie = createMollieClient({ apiKey })
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verkeersschool-farhan.vercel.app'

    const payment = await mollie.payments.create({
      amount: { currency: 'EUR', value: '60.00' },
      description: `Proefles Verkeersschool Farhan — ${datum} om ${tijd} in ${locatie}`,
      redirectUrl: `${siteUrl}/boeken/success?naam=${encodeURIComponent(naam)}&datum=${encodeURIComponent(datum)}&tijd=${encodeURIComponent(tijd)}&locatie=${encodeURIComponent(locatie)}`,
      webhookUrl: `${siteUrl}/api/payment-webhook`,
      metadata: { naam, email, telefoon, locatie, datum, tijd },
      method: [PaymentMethod.ideal, PaymentMethod.creditcard],
    })

    const checkoutUrl = payment.getCheckoutUrl()
    return NextResponse.json({ checkoutUrl })
  } catch (err) {
    console.error('Mollie error:', err)
    return NextResponse.json({ error: 'Betaling aanmaken mislukt. Probeer het opnieuw.' }, { status: 500 })
  }
}
