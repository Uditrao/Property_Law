"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, AlertTriangle, CheckCircle, BookOpen, Scale, ArrowRight, Shield } from "lucide-react"




export default function TrademarkSearch() {
    const [textQuery, setTextQuery] = useState('');
    const [textResult, setTextResult] = useState<any>(null);
    const [imageResult, setImageResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false)

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const trademarks = [
      {
        name: "Tick Mark",
        description: [
            { type: "heading", text: "Overview of the NIKE Trademark:" },
            { type: "point", text: "Trademark Holder: Nike, Inc., Beaverton, Oregon, USA" },
            { type: "point", text: "Trademark Feature: Word 'NIKE' and the Swoosh logo" },
            { type: "point", text: "Pantone Color (Logo):White Swoosh – Pantone Safe White Black Background – Pantone Black C" },
            { type: "point", text: "Trademark Type: Word mark, Design mark, Combined mark" }
          ],
        image: "/images/Nike1.jpg",
        image2: "/images/Nike2.jpg",
        image3: "/images/Nike3.jpg",

      },
      {
        name: "Red Sole",
        description: [
            { type: "heading", text: "Overview of the Red Sole Trademark:" },
            { type: "point", text: "Trademark Holder: Christian Louboutin S.A." },
            { type: "point", text: "Trademark Feature: A red-colored outsole (sole) of a high-heeled shoe." },
            { type: "point", text: "Pantone Color: The red is often specifically identified as Pantone 18-1663 TPX" },
            { type: "point", text: "Trademark Type: Non-traditional trademark — specifically a color mark applied to a specific part of a product (the sole)." }
          ],
          
          
        image: "/images/red1.png",
        image2: "/images/red2.jpeg",
        image3: "/images/red3.jpeg",

      },
      {
        name: "Black Leaf",
        description: [
            { type: "heading", text: "Overview of the Freed Perry Trademark:" },
            { type: "point", text: "Trademark Holder: Fred Perry Ltd., London, UK" },
            { type: "point", text: "Trademark Feature: The iconic laurel wreath logo, symbolizing victory and excellence" },
            { type: "point", text: "The laurel wreath logo often appears in Pantone 123 C (Gold) or Pantone Black C, depending on the garment's design" },
            { type: "point", text: "Trademark Type: Word mark ('Fred Perry') and Design mark (laurel wreath)" }
          ],
        image: "/images/Leaf1.jpg",
        image2: "/images/Leaf2.jpg",
        image3: "/images/Leaf3.jpg",

      },
    ];


    // Function to search for relevant legal information based on keywords
    const handleTextSearch = () => {
        const match = trademarks.find(t => t.name.toLowerCase() === textQuery.toLowerCase());
        setTextResult(match || { name: 'Not Found', description: 'No trademark matched.', image: null });
      };
    
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
    
        const uploadedName = file.name.toLowerCase();
        const match = trademarks.find(t =>
          t.image.toLowerCase().includes(uploadedName.split('.')[0])
        );
    
        setImageResult(match || { name: 'Not Found', description: 'No matching image found.', image: null });
      };

      

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xl">PL</span>
              </div>
              <Link href="/" className="text-xl font-bold">
                Property Law Portal
              </Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-slate-300 font-medium">
                Home
              </Link>
              <Link href="/search-case" className="hover:text-slate-300 font-medium">
                Search Your Case
              </Link>
              <Link href="/defend-yourself" className="hover:text-slate-300 font-medium">
                Defend Yourself
              </Link>
              <Link href="/find-lawyer" className="hover:text-slate-300 font-medium">
                Find a Lawyer
              </Link>
              <Link href="/cases" className="hover:text-slate-300 font-medium">
                Previous Cases
              </Link>
              <Link href="/trademark" className="hover:text-slate-300 font-medium">
                Trademark
              </Link>
              
            </nav>
            <Button variant="outline" className="md:hidden" size="icon">
              <span className="sr-only">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Search Your Trademark</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Describe your trademark and get relevant legal information.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Enter trademark name"
                  className="pl-10 bg-white text-slate-900 py-6 text-lg"
                  value={textQuery}
                  onChange={e => setTextQuery(e.target.value)}
                  onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleTextSearch()
                    }
                }}
                />
              </div>
              <Button
                className="md:w-auto w-full bg-white text-slate-900 hover:bg-slate-100 py-6 px-8"
                onClick={handleTextSearch}
                disabled={isLoading}
              >
                {isLoading ? "Searching..." : "Search"}
              </Button>
            </div>
          </div>     
        </div>
      </div>
      <main className="flex-1 py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-full bg-slate-200 h-16 w-16 mb-4"></div>
                <div className="h-4 bg-slate-200 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-slate-200 rounded w-1/4 mb-2"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2 mb-2"></div>
              </div>
              <p className="text-slate-500 mt-4">Searching for relevant legal information...</p>
            </div>
          ) : textResult ? (
            <div className="space-y-8">
              <Card className="max-w-4xl mx-auto">
                <CardHeader className="bg-slate-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">Your Case Analysis</CardTitle>
                      <CardDescription>
                        Based on your search, we've identified relevant legal information.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h3 className="text-lg font-semibold flex items-center text-green-800 mb-2">
                          <CheckCircle className="h-5 w-5 mr-2" />{textResult.name}
                        </h3>
                        <ul className="space-y-2 text-slate-700">
                             {Array.isArray(textResult.description) &&
                               textResult.description.map((item: any, index: number) => {
                                 if (item.type === "heading") {
                                   return (
                                     <li key={index} className="text-lg font-semibold text-slate-900">
                                       {item.text}
                                     </li>
                                   );
                                 }
                                 return (
                                   <li key={index} className="list-disc list-inside">
                                     {item.text}
                                   </li>
                                 );
                               })}
                            </ul>
                      </div>                    
                    </div>
                  </div>
                </CardContent>
              </Card>

              
              <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg border border-slate-200">
                <h2 className="text-2xl font-bold mb-4">{textResult.name}</h2>
                
                <div className="grid md:grid-cols-3 gap-4">
                {textResult.image && (
                        <img
                            src={textResult.image}
                            alt={textResult.name}
                        className="mx-auto mt-2 h-60 object-contain"
                        />
                        )}
                {textResult.image && (
                       <img
                            src={textResult.image2}
                            alt={textResult.name}
                        className="mx-auto mt-2 h-60 object-contain"
                        />
                )}
                {textResult.image && (
                       <img
                            src={textResult.image3}
                            alt={textResult.name}
                        className="mx-auto mt-2 h-60 object-contain"
                        />
                )}
                </div>
              </div>
            </div>
          ) : textQuery ? (
            <div className="text-center py-12 max-w-2xl mx-auto">
              <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No specific legal information found</h3>
              <p className="text-slate-600 mb-6">
                We couldn't find specific trademark related to your search. Try using more specific terms
                related to the trademark.
              </p>
              <Button onClick={() => setTextQuery("")}>Try a New Search</Button>
            </div>
          ) : (
            <div className="text-center py-12 max-w-2xl mx-auto">
              <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Search for Trademark</h3>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Property Law Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


