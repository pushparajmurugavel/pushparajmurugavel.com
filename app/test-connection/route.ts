import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { error } = await supabase
    .from("orders")
    .select("id")
    .limit(1);

  if (error) {
    console.error("Supabase query failed:", error.message);

    return NextResponse.json(
      {
        success: false,
        message:
          "Supabase is reachable, but the orders table query was denied.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Supabase query successful!",
  });
}