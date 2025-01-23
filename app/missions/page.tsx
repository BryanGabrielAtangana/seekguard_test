"use client";

import React, { useEffect } from "react";
import { Filter, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useMissionStore from "@/store/mission-store";
import { LocationFilter } from "@/components/filters/LocationFilter";
import { ContractTypeFilter } from "@/components/filters/ContractTypeFilter";
import { SalaryFilter } from "@/components/filters/SalaryFilter";
import { MissionCard } from "@/components/MissionCard";
import { Pagination } from "@/components/Pagination";

export default function MissionsPage() {
  const {
    missions,
    filters,
    isLoading,
    setFilters,
    clearFilters,
    totalMissions,
    page,
    limit,
    setPage,
  } = useMissionStore();

  useEffect(() => {
    useMissionStore.getState().fetchMissions();
  }, [page]);

  const totalPages = Math.ceil(totalMissions / limit);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <Card className="h-fit bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-amber-600" />
                <CardTitle>Filtres</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-amber-700 hover:text-amber-900"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Réinitialiser
              </Button>
            </CardHeader>

            <CardContent className="space-y-4">
              <LocationFilter
                value={filters.localisation || ""}
                onChange={(value) => setFilters({ localisation: value })}
              />
              <ContractTypeFilter
                selectedType={filters.type_contrat}
                onSelectType={(type) => setFilters({ type_contrat: type })}
              />
              <SalaryFilter
                selectedSalary={filters.salaire_min}
                onSelectSalary={(salary) => setFilters({ salaire_min: salary })}
              />
            </CardContent>
          </Card>

          {/* Jobs */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-amber-900">
                Missions Disponibles
                <span className="ml-2 text-sm text-amber-600">
                  ({totalMissions} missions)
                </span>
              </h2>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <p>Chargement des missions...</p>
              </div>
            ) : missions.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <p>Aucune mission ne correspond à vos critères.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {missions.map((mission) => (
                  <MissionCard key={mission.id} mission={mission} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(newPage) => setPage(newPage)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
