"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Zap, Target, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                Créez des posts LinkedIn{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(153,65%,65%)] to-[hsl(153,65%,55%)]">
                  qui convertissent
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                Générez des posts LinkedIn professionnels et engageants en
                quelques clics grâce à notre assistant IA spécialisé.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 button-gradient">
                    Commencer gratuitement <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-card rounded-lg p-8">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-6">
                    <feature.icon className="h-6 w-6 text-[hsl(153,65%,55%)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Tarification Simple
            </h2>
            <p className="text-xl text-gray-400">
              Un seul plan. Tout inclus. Sans surprise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto"
          >
            <div className="feature-card p-8 rounded-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Plan Pro</h3>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-5xl font-extrabold text-white">
                    20€
                  </span>
                  <span className="text-xl text-gray-400 ml-2">/mois</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Zap className="text-[hsl(153,65%,55%)] h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/signup" className="block">
                <Button className="w-full button-gradient" size="lg">
                  Commencer maintenant
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    title: "Posts optimisés",
    description:
      "Créez des posts LinkedIn parfaitement structurés qui captent l'attention et génèrent de l'engagement.",
    icon: Zap,
  },
  {
    title: "Processus guidé",
    description:
      "Notre assistant vous guide étape par étape pour créer du contenu pertinent et professionnel.",
    icon: Target,
  },
  {
    title: "Résultats garantis",
    description:
      "Augmentez votre visibilité et générez plus d'opportunités commerciales sur LinkedIn.",
    icon: Trophy,
  },
];

const pricingFeatures = [
  "Génération illimitée de posts",
  "Tous les types de contenus (TOFU, MOFU, BOFU)",
  "Suggestions d'accroches multiples",
  "Édition assistée par IA",
  "Analyse de performance",
  "Support prioritaire",
  "Garantie satisfait ou remboursé",
];
