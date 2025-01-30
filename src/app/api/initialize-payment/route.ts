import { NextResponse } from 'next/server'

const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY
const CHAPA_API_URL = 'https://api.chapa.co/v1/transaction/initialize'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { amount, currency, email, first_name, last_name, tx_ref } = body
    console.log(amount, currency, email, first_name, last_name, tx_ref)
    const response = await fetch(CHAPA_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Number.parseInt(amount),
        currency,
        email,
        first_name,
        last_name,
        tx_ref,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-payment`,
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
      }),
    })
    const data = await response.json()
    console.log(data)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error initializing payment:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

