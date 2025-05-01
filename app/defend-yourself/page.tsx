"use client"
import { useState } from "react";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, FileText, AlertTriangle, Scale, BookOpen } from "lucide-react"



export default function DefendYourself() {
  const [loading, setLoading] = useState(false);

  const handleOpen = (url) => {
    setLoading(true);
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setLoading(false); // Reset loading after 1 second
    }, 1000);
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
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold">Defend Yourself</h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Learn effective strategies to protect your property rights and navigate legal disputes.
          </p>
        </div>
      </div>

      <main className="flex-1 py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="Movable" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="Movable">Movable Property</TabsTrigger>
              <TabsTrigger value="Immovable">Immovable Property</TabsTrigger>
              <TabsTrigger value="Tangible">Tangible Property</TabsTrigger>
              <TabsTrigger value="Intangible">Intangible Property</TabsTrigger>
            </TabsList>

            <TabsContent value="Movable" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-6 w-6 mr-2 text-amber-500" />
                    Movable Property
                  </CardTitle>
                  <CardDescription>
                    Learn about the common causes and legal frameworks for property boundary conflicts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Movable Property Issues</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>🧾 Theft or Robbery</li>
                      <li>🛑 Misappropriation of Entrusted Property</li>
                      <li>🧑‍⚖️ Consumer Fraud or Sale of Defective Items</li>
                      <li>🔧 Damage or Loss by Third Parties</li>
                      <li>🔁 Criminal Breach of Trust</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6">Self-Defense Strategies</h3>
                    <div className="space-y-4">
                      <StrategyCard
                        title="✅ Keep Ownership Records:"
                        description="Bills of purchase, registration certificates, insurance papers."
                      />
                      <StrategyCard
                        title="🔒 Use Security Measures:"
                        description="Anti-theft devices, locks, and GPS trackers for valuables like vehicles."
                      />
                      <StrategyCard
                        title="📦 Label and Inventory:"
                        description="Especially useful in shared accommodations or joint family settings."
                      />
                      <StrategyCard
                        title="📸 Photographic Evidence:"
                        description="Maintain images of valuable items for claim or dispute resolution"
                      />
                      
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                      <h4 className="text-lg font-semibold flex items-center text-blue-800">
                        <FileText className="h-5 w-5 mr-2" />
                        Legal Forms and Resources
                      </h4>
                      <p className="text-blue-700 mb-4">
                        Access these helpful resources to strengthen your position in a boundary dispute:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="justify-start w-full hover:bg-red-300 transform transition-transform duration-300 hover:-translate-y-2"
                        onClick={() => handleOpen("/docs/Movable.pdf")}
                        disabled={loading}
                       >
                        {loading ? "Opening..." : "Movable Property Defence Template"}
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start w-full hover:bg-red-300 transform transition-transform duration-300 hover:-translate-y-2"
                        onClick={() => handleOpen("/docs/Public.pdf")}
                        disabled={loading}
                       >
                        {loading ? "Opening..." : "Public form for complain"}
                      </Button>
  
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              
            </TabsContent>

            <TabsContent value="Immovable" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-6 w-6 mr-2 text-amber-500" />
                    Imovable Property
                  </CardTitle>
                  <CardDescription>
                    Effective approaches for resolving conflicts between property owners and tenants.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Common Immovable property Issues</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>🧾 Title Disputes</li>
                      <li>🏚️ Illegal Encroachment</li>
                      <li>💸 Delayed Possession by Builders</li>
                      <li>🧱 Unauthorized Constructions</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6">Self-Defense Strategies</h3>
                    <div className="space-y-4">
                      <StrategyCard
                        title="✅  Verify Title and Encumbrance"
                        description="Always check ownership records at the Sub-Registrar Office and get an encumbrance certificate."
                      />
                      <StrategyCard
                        title="📝 Register All Transactions"
                        description="Register all deeds (sale, gift, lease) to avoid future ownership disputes."
                      />
                      <StrategyCard
                        title="🧾 Pay Property Taxes"
                        description="Keep receipts of property tax, utility bills, and society dues as proof of possession."
                      />
                      <StrategyCard
                        title="🔍  Monitor Vacant Properties"
                        description="Visit periodically, put up boundary walls/fencing, or appoint caretakers."
                      />
                    </div>

                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                      <h4 className="text-lg font-semibold flex items-center text-blue-800">
                        <FileText className="h-5 w-5 mr-2" />
                        Legal Forms and Resources
                      </h4>
                      <p className="text-blue-700 mb-4">Access these helpful resources for landlord-tenant disputes:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="justify-start w-full hover:bg-red-300 transform transition-transform duration-300 hover:-translate-y-2"
                        onClick={() => handleOpen("/docs/Immovable.pdf")}
                        disabled={loading}
                       >
                        {loading ? "Opening..." : "Immovable property Defence template"}
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start w-full hover:bg-red-300 transform transition-transform duration-300 hover:-translate-y-2"
                        onClick={() => handleOpen("/docs/Immovable.pdf")}
                        disabled={loading}
                       >
                        {loading ? "Opening..." : "Property Line Agreement Form"}
                      </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="Tangible" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-amber-500" />
                    Tangible Property
                  </CardTitle>
                  <CardDescription>Strategies for addressing challenges to your property ownership.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Common Tangible Dispute Issues</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>🧾 Theft or Loss</li>
                      <li>🏚️ Unauthorized Possession</li>
                      <li>🛠️ Damage or Misuse</li>
                      <li>👨‍👩‍👧‍👦 Family or Inheritance Disputes</li>
                      <li>🛒 Consumer Grievances</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6">Self-Defense Strategies</h3>
                    <div className="space-y-4">
                      <StrategyCard
                        title="✅ Maintain Ownership Proof"
                        description="Keep invoices, registration documents, warranty cards, and other legal documents."
                      />
                      <StrategyCard
                        title="🔐 Secure Your Property"
                        description="Use locks, safes, GPS tracking (for vehicles), and CCTV monitoring."
                      />
                      <StrategyCard
                        title="📝 Use Agreements"
                        description="For lending or leasing tangible items (vehicles, equipment), use proper agreements or receipts."
                      />
                      <StrategyCard
                        title="💼 7. Insure Valuable Property"
                        description="Insure cars, electronics, or luxury items to avoid financial loss from damage or theft."
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                      <h4 className="text-lg font-semibold flex items-center text-blue-800">
                        <FileText className="h-5 w-5 mr-2" />
                        Legal Forms and Resources
                      </h4>
                      <p className="text-blue-700 mb-4">Access these helpful resources for title disputes:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="justify-start w-full hover:bg-red-300 transform transition-transform duration-300 hover:-translate-y-2"
                        onClick={() => handleOpen("/docs/Tangible.pdf")}
                        disabled={loading}
                       >
                        {loading ? "Opening..." : "Tangible property Defence template"}
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-start w-full hover:bg-red-300 transform transition-transform duration-300 hover:-translate-y-2"
                        onClick={() => handleOpen("/docs/Family.pdf")}
                        disabled={loading}
                       >
                        {loading ? "Opening..." : "Family dispute Form"}
                      </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="Intangible" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-6 w-6 mr-2 text-amber-500" />
                    Intangible Property
                  </CardTitle>
                  <CardDescription>How to respond to intangible complaints and navigate local regulations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Common Intangible property ralated Issues</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>🔒 Copyright Infringement</li>
                      <li>💡 Patent Violation</li>
                      <li>🛑 Trademark Misuse</li>
                      <li>👥 Trade Secret Theft</li>
                      <li>🧑‍💻 Digital Asset Theft or Hacking</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6">Self-Defense Strategies</h3>
                    <div className="space-y-4">
                      <StrategyCard
                        title="✅ Register Intellectual Property"
                        description="Register trademarks, copyrights, and patents to establish legal ownership."
                      />
                      <StrategyCard
                        title="📜 Use NDAs and Confidentiality Clauses"
                        description="Sign Non-Disclosure Agreements when sharing trade secrets or sensitive ideas."
                      />
                      <StrategyCard
                        title="📝 Draft Strong Licensing Agreements"
                        description="Clearly define ownership, scope, duration, and rights in contracts."
                      />
                      <StrategyCard
                        title="🔐 Use Strong Digital Security"
                        description="Secure online accounts with 2FA, encryption, and secure storage for keys and credentials."
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                      <h4 className="text-lg font-semibold flex items-center text-blue-800">
                        <FileText className="h-5 w-5 mr-2" />
                        Legal Forms and Resources
                      </h4>
                      <p className="text-blue-700 mb-4">Access these helpful resources for zoning issues:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="justify-start w-full hover:bg-red-300 transform transition-transform duration-300 hover:-translate-y-2"
                        onClick={() => handleOpen("/docs/Intangible.pdf")}
                        disabled={loading}
                       >
                        {loading ? "Opening..." : "Intangible Property Defence Template"}
                      </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 bg-slate-100 p-6 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-slate-700" />
              Need More Help?
            </h2>
            <p className="mb-6">
              If you're facing a complex property dispute, consider consulting with a qualified attorney who specializes
              in property law.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/find-lawyer">Find a Property Law Attorney</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/search-case">Search Your Case</Link>
              </Button>
            </div>
          </div>
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

function StrategyCard({ title, description }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-slate-200 ">
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}
