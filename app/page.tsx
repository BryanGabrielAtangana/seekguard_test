import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, Croissant } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-amber-100 py-6 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <Store className="h-10 w-10 text-amber-600" />
            <h1 className="text-2xl font-bold text-amber-900">
              Grain de Folie
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        <Card className="bg-amber-50 border-amber-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <Croissant className="h-8 w-8 text-amber-600" />
              <span>
                Votre Passerelle vers l'Emploi en Boulangerie-Pâtisserie
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-amber-800 mb-6">
              Grain de Folie est votre plateforme dédiée pour trouver les
              meilleures opportunités dans le monde de la boulangerie et de la
              pâtisserie. Nous agrégeons les offres de France Travail pour vous
              simplifier la recherche d'emploi.
            </p>
            <Link href="/missions">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Découvrir les Missions
              </Button>
            </Link>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/029/269/375/non_2x/bakery-store-illustration-with-various-types-of-bread-products-for-sale-and-shop-interior-in-flat-cartoon-background-design-template-vector.jpg"
            alt="Boulangerie"
          />
        </div>
      </main>

      <footer className="bg-amber-100 py-6">
        <div className="container mx-auto text-center text-amber-900">
          © 2024 Grain de Folie. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
