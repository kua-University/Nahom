import { NextResponse } from 'next/server'

const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY
const CHAPA_API_URL = 'https://api.chapa.co/v1/transaction/verify/'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { tx_ref } = body

    if (!tx_ref) {
      return NextResponse.json({ error: 'Transaction reference is required' }, { status: 400 })
    }

    const response = await fetch(`${CHAPA_API_URL}${tx_ref}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    })
    const result = await response.json()
    if (result.status !== 'success') {
      throw new Error('Failed to verify payment')
    }

    const data = await response.json()

    // Check if the payment was successful
    if (data.status === 'success') {
      // Payment was successful
      // You should update your database here to mark the order as paid
      console.log('Payment verified successfully:', data)

      // Return a success response
      return NextResponse.json({ 
        message: 'Payment verified successfully',
        data: data.data
      }, { status: 200 })
    } else {
      // Payment was not successful
      console.log('Payment verification failed:', data)

      // Return a failure response
      return NextResponse.json({ 
        error: 'Payment verification failed',
        data: data.data
      }, { status: 400 })
    }
  } catch (error) {
    console.error('Error verifying payment:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

