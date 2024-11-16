"use client";

import { useState } from "react";
import { PostData } from "@/app/dashboard/post/page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface BodyStepProps {
  postData: PostData;
  setPostData: (data: PostData) => void;
}

export default function BodyStep({ postData, setPostData }: BodyStepProps) {
  const [bodies, setBodies] = useState([
    `🔍 Voici les 3 piliers d'un post LinkedIn réussi :

1. La valeur ajoutée
- Partagez une expérience concrète
- Donnez des conseils actionnables
- Apportez un point de vue unique

2. La structure
- Des paragraphes courts
- Des puces pour la lisibilité
- Des émojis avec parcimonie

3. L'authenticité
- Votre voix personnelle
- Des exemples réels
- Une touche d'humilité

Le secret ? La consistance dans ces 3 aspects.`,
    // Autres exemples de corps de texte...
  ]);

  const [isGenerating, setIsGenerating] = useState(false);

  const generateNewBodies = async () => {
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Simuler la génération de nouveaux corps de texte
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Contenu principal</h2>
        <p className="text-muted-foreground mb-6">
          Choisissez et personnalisez le corps de votre post
        </p>
      </div>

      <div className="space-y-4">
        {bodies.map((body, index) => (
          <Card
            key={index}
            className={`p-4 cursor-pointer transition-all hover:shadow-md ${
              postData.selectedBody === body
                ? "border-primary ring-2 ring-primary ring-opacity-50"
                : ""
            }`}
            onClick={() => setPostData({ ...postData, selectedBody: body })}
          >
            <Textarea
              value={body}
              readOnly
              className="min-h-[200px] resize-none border-none focus-visible:ring-0"
            />
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={generateNewBodies}
          disabled={isGenerating}
        >
          <RefreshCw
            className={`mr-2 h-4 w-4 ${isGenerating ? "animate-spin" : ""}`}
          />
          Générer de nouveaux contenus
        </Button>
      </div>
    </div>
  );
}
