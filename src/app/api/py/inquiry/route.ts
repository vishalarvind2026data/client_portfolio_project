import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 7).replace("-", "");
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    const refId = `AB-MC-${dateStr}-${randomHex}`;

    console.log("VIP Portfolio Inquiry registered:", {
      reference_id: refId,
      timestamp: now.toISOString(),
      name: body.name,
      email: body.email,
      inquiry_type: body.inquiry_type,
      message: body.message,
    });

    return NextResponse.json({
      status: "DISPATCHED",
      reference_id: refId,
      timestamp: now.toISOString(),
      message: `Inquiry registered under reference ${refId}. Aryan Batra has received your message.`,
      candidate: "Aryan Batra // Aspiring Yacht Broker",
    });
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { error: "Invalid request payload" },
      { status: 400 }
    );
  }
}
