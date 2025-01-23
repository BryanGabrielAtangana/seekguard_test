import { Checkbox } from "@/components/ui/checkbox";
import { Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SalaryFilterProps {
  selectedSalary: number | undefined;
  onSelectSalary: (salary: number | undefined) => void;
}

const salaryRanges = [
  { label: "Moins de 1500€", value: 0 },
  { label: "1500€ - 2500€", value: 1500 },
  { label: "2500€ - 3500€", value: 2500 },
  { label: "Plus de 3500€", value: 3500 },
];

export function SalaryFilter({
  selectedSalary,
  onSelectSalary,
}: SalaryFilterProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="salary">
        <AccordionTrigger>
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-amber-600" />
            <span>Salaire</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            {salaryRanges.map(({ label, value }) => (
              <div key={value} className="flex items-center space-x-2">
                <Checkbox
                  id={`salary-${value}`}
                  checked={selectedSalary === value}
                  onCheckedChange={(checked) =>
                    onSelectSalary(checked ? value : undefined)
                  }
                />
                <label htmlFor={`salary-${value}`}>{label}</label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
