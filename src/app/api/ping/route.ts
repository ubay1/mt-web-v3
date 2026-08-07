import { NextResponse } from "next/server";

export async function GET() {
  // return NextResponse.json({ error: "terjadi kesalahan" }, { status: 500 });
  return NextResponse.json({ data: "ok" });
}