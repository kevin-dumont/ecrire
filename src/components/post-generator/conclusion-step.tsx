"use client";

import { useState } from "react";
import { PostData } from "@/app/dashboard/post/page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw, Copy, Check } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface ConclusionStepProps {
  postData: PostData;
  setPostData: (data: PostData) => void;
}

export default function ConclusionStep({
  postData,
  setPostData,
}: ConclusionStepProps) {
  const [conclusions, setConclusions] = useState([
    "👉 Vous voulez améliorer votre présence sur LinkedIn ? Laissez un '✋' en commentaire et je vous partage mon guide complet en MP !",
    "🤔 Qu'en pensez-vous ? Partagez votre expérience en commentaire !",
    "💡 Si ce post vous a été utile, n'hésitez pas à le partager avec votre réseau !",
  ]);

  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateNewConclusions = async () => {
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Simuler la génération de nouvelles conclusions
    setIsGenerating(false);
  };

  const copyToClipboard = async () => {
    const fullPost = `${postData.selectedHook}\n\n${postData.selectedBody}\n\n${postData.selectedConclusion}`;
    await navigator.clipboard.writeText(fullPost);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">
          Conclusion et Call-to-Action
        </h2>
        <p className="text-muted-foreground mb-6">
          Finalisez votre post avec une conclusion engageante
        </p>
      </div>

      <div className="space-y-4">
        {conclusions.map((conclusion, index) => (
          <Card
            key={index}
            className={`p-4 cursor-pointer transition-all hover:shadow-md ${
              postData.selectedConclusion === conclusion
                ? "border-primary ring-2 ring-primary ring-opacity-50"
                : ""
            }`}
            onClick={() =>
              setPostData({ ...postData, selectedConclusion: conclusion })
            }
          >
            <p>{conclusion}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={generateNewConclusions}
          disabled={isGenerating}
        >
          <RefreshCw
            className={`mr-2 h-4 w-4 ${isGenerating ? "animate-spin" : ""}`}
          />
          Générer de nouvelles conclusions
        </Button>

        <Button
          variant="default"
          onClick={copyToClipboard}
          disabled={
            !postData.selectedHook ||
            !postData.selectedBody ||
            !postData.selectedConclusion
          }
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Copié !
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" /> Copier le post
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
