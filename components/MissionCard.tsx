// components/MissionCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mission } from "@/types/mission";

interface MissionCardProps {
  mission: Mission;
}

export function MissionCard({ mission }: MissionCardProps) {
  return (
    <Link href={`/missions/${mission.id}`} className="block">
      <Card className="hover:shadow-lg transition-all bg-white/80 backdrop-blur-sm hover:bg-amber-50/70 border-amber-100">
        <CardHeader>
          <CardTitle className="text-amber-900">{mission.nom}</CardTitle>
          <CardDescription>{mission.localisation}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div className="space-x-2">
            <span className="text-sm text-amber-700">
              {mission.type_contrat}
            </span>
            <span className="text-sm text-amber-600">{mission.salaire}</span>
          </div>
          <Button variant="outline" size="sm">
            Voir les détails
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
