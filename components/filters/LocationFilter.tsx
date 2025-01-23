import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

interface LocationFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function LocationFilter({ value, onChange }: LocationFilterProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center space-x-2">
        <MapPin className="h-4 w-4 text-amber-600" />
        <span>Localisation</span>
      </label>
      <Input
        placeholder="Ville, région"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
    </div>
  );
}
