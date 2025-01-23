import { NextResponse } from "next/server";
import { jobsData } from "@/data/jobs";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const job = jobsData.find((job) => job.id === parseInt(params.id));

    if (!job) {
      return NextResponse.json({ error: "Mission not found" }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
