import { NextResponse } from 'next/server'

export async function POST(request: Request) {

  await new Promise((resolve) => setTimeout(resolve, 1500))

  // return new NextResponse("Server Error", { status: 500 })

  const body = await request.json()
  const { nextIsLiked } = body

  return NextResponse.json({
    isLiked: nextIsLiked,
  })
}