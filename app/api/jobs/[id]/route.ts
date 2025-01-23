import { NextRequest, NextResponse } from "next/server";
import { jobsData } from "@/data/jobs";
import { Mission } from "@/types/mission";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const job = jobsData.find((job: Mission) => job.id === id);

  if (!job) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.json(job);
}
