import { Checkbox } from "@/components/ui/checkbox";
import { Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ContractTypeFilterProps {
  selectedType: string | undefined;
  onSelectType: (type: string | undefined) => void;
}

const contractTypes = ["CDI", "CDD", "Interim", "Stage", "Apprentissage"];

export function ContractTypeFilter({
  selectedType,
  onSelectType,
}: ContractTypeFilterProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="contract-type">
        <AccordionTrigger>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-amber-600" />
            <span>Type de Contrat</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            {contractTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  checked={selectedType === type}
                  onCheckedChange={(checked) =>
                    onSelectType(checked ? type : undefined)
                  }
                />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
