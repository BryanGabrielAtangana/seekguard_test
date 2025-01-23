import { NextRequest, NextResponse } from "next/server";
import { jobsData } from "@/data/jobs";
import { Mission } from "@/types/mission";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  let filteredJobs: Mission[] = jobsData;

  const localisation = searchParams.get("localisation");
  const typeContrat = searchParams.get("type_contrat");
  const salaireMin = searchParams.get("salaire_min");

  if (localisation) {
    filteredJobs = filteredJobs.filter((job) =>
      job.localisation.toLowerCase().includes(localisation.toLowerCase())
    );
  }

  if (typeContrat) {
    filteredJobs = filteredJobs.filter(
      (job) => job.type_contrat === typeContrat
    );
  }

  if (salaireMin) {
    const minSalary = parseInt(salaireMin);
    filteredJobs = filteredJobs.filter((job) => {
      const salaryRange = job.salaire.replace("€/mois", "").split("-");
      const minJobSalary = parseInt(salaryRange[0]);
      return minJobSalary >= minSalary;
    });
  }

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedJobs,
    total: filteredJobs.length,
    page,
    totalPages: Math.ceil(filteredJobs.length / limit),
  });
}
