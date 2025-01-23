"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useMissionStore from "@/store/mission-store";

export default function MissionDetailsPage() {
  const { id } = useParams();
  const { selectedMission, selectMission, isLoading, error } =
    useMissionStore();

  useEffect(() => {
    if (!selectedMission) {
      fetch(`/api/jobs/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch mission");
          }
          return response.json();
        })
        .then((data) => selectMission(data))
        .catch((error) => console.error(error));
    }
  }, [id, selectedMission, selectMission]);

  if (!selectedMission) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Mission non trouvée
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-amber-100 py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-amber-900">
            Détails de la Mission
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle>{selectedMission.nom}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Localisation</h3>
                <p>{selectedMission.localisation}</p>
              </div>
              <div>
                <h3 className="font-semibold">Salaire</h3>
                <p>{selectedMission.salaire}</p>
              </div>
              <div>
                <h3 className="font-semibold">Type de Contrat</h3>
                <p>{selectedMission.type_contrat}</p>
              </div>
              <div>
                <h3 className="font-semibold">Expérience Requise</h3>
                <p>{selectedMission.experience_requise}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Certifications Requises</h3>
              <ul className="list-disc pl-5">
                {selectedMission.certifications_requises.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Description</h3>
              <p>{selectedMission.description}</p>
            </div>

            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">Date de Publication</h3>
                <p>
                  {new Date(
                    selectedMission.dates.publication
                  ).toLocaleDateString()}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Date d'Expiration</h3>
                <p>
                  {new Date(
                    selectedMission.dates.expiration
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <Link href="/missions">
                <Button
                  variant="outline"
                  className="text-amber-800 border-amber-300"
                >
                  Retour aux Missions
                </Button>
              </Link>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Postuler
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
