import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Pariwat Wonginchan",
    studentId: "650612089",
  });
};
