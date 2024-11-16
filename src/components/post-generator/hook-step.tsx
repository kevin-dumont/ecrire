"use client";

import { useState } from "react";
import { PostData } from "@/app/dashboard/post/page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";

interface HookStepProps {
  postData: PostData;
  setPostData: (data: PostData) => void;
}

export default function HookStep({ postData, setPostData }: HookStepProps) {
  const [hooks, setHooks] = useState([
    "Découvrez les 3 erreurs qui plombent votre visibilité sur LinkedIn...",
    "Vous pensez tout savoir sur l'engagement ? Ce post va vous surprendre !",
    "J'ai testé cette technique pendant 30 jours. Les résultats sont bluffants.",
    "La vérité sur le marketing digital que personne n'ose avouer...",
    "Stop aux mythes ! Voici ce qui fonctionne vraiment en 2024.",
  ]);

  const [isGenerating, setIsGenerating] = useState(false);

  const generateNewHooks = async () => {
    setIsGenerating(true);
    // Simulation d'appel API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setHooks([
      "Comment j'ai multiplié mon engagement par 5 en seulement 2 semaines...",
      "La stratégie méconnue qui fait exploser vos conversions",
      "Révélation : l'astuce des top performers LinkedIn enfin dévoilée",
      "Attention : cette erreur commune vous coûte des opportunités chaque jour",
      "Le secret des posts viraux enfin révélé (et ce n'est pas ce que vous pensez)",
    ]);
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">
          Choisissez votre accroche
        </h2>
        <p className="text-muted-foreground mb-6">
          Sélectionnez l'accroche qui captera le mieux l'attention de votre
          audience
        </p>
      </div>

      <div className="space-y-4">
        {hooks.map((hook, index) => (
          <Card
            key={index}
            className={`p-4 cursor-pointer transition-all hover:shadow-md ${
              postData.selectedHook === hook
                ? "border-primary ring-2 ring-primary ring-opacity-50"
                : ""
            }`}
            onClick={() => setPostData({ ...postData, selectedHook: hook })}
          >
            <p>{hook}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={generateNewHooks}
          disabled={isGenerating}
        >
          <RefreshCw
            className={`mr-2 h-4 w-4 ${isGenerating ? "animate-spin" : ""}`}
          />
          Générer de nouvelles accroches
        </Button>
      </div>
    </div>
  );
}
