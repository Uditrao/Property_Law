"use client"

import { useState } from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Calendar, ArrowRight } from "lucide-react"

export default function Cases() {
  // Mock data for cases
  const cases = [
    {
      title: "Satish Motilal Bidri v. Union of India",
      court: "Bombay High Court",
      date: "March 15, 2024",
      category: "Movable Property Case",
      summary: "Satish Motilal Bidri challenged the Enforcement Directorate's attachment of his immovable property and bank accounts under the Prevention of Money Laundering Act (PMLA). He argued that the action was arbitrary and lacked legal basis. The Bombay High Court held that the attachment was illegal and that PMLA provisions could not be applied retrospectively.",
      outcome: "Attachment deemed illegal; PMLA provisions ruled not retroactive.",
      citation: "Not Provided",
      relevance: "High"
    },
    {
      title: "Ravinder Kaur Grewal v. Manjit Kaur & Ors.",
      court: "Supreme Court of India",
      date: "August 7, 2019",
      category: "Immovable Property Case",
      summary: "The Supreme Court addressed whether a person in adverse possession could initiate a suit for declaration of title. The Court held that such a person could file a suit to protect their possession and seek ownership rights, overturning previous judgments that restricted adverse possession to a defense mechanism. This landmark decision clarified that adverse possession could be used proactively to claim ownership.",
      outcome: "Supreme Court ruled in favor of the appellant, allowing suits based on adverse possession.",
      citation: "2019 SCC OnLine SC 1134",
      relevance: "High"
    },
    {
      title: "Pawan Kumar and Ors. v. Divisional Commissioner, Department of Revenue, Govt. of Delhi and Ors.",
      court: "Delhi High Court",
      date: "August 17, 2021",
      category: "Tangible Property Case",
      summary: "An elderly father filed a complaint under the Maintenance and Welfare of Parents and Senior Citizens Act, 2007, alleging that his sons were mistreating him and refusing to vacate the family home. The Delhi High Court upheld the eviction order against the sons, emphasizing the rights of senior citizens to live in peace and dignity in their own homes.",
      outcome: "Court ordered eviction of the sons from the family property.",
      citation: "2021 SCC OnLine Del 3765",
      relevance: "High"
    },
    {
      title: "Christian Louboutin SAS v. Ashish Bansal",
      court: "Delhi High Court",
      date: "May 31, 2022",
      category: "Intangible Property Case",
      summary: "Christian Louboutin SAS, known for its distinctive red-soled shoes, filed a trademark infringement suit against Ashish Bansal for selling counterfeit products bearing the red sole design. The Delhi High Court granted a permanent injunction, recognizing the red sole as a well-known trademark and protecting the brand's intellectual property rights.",
      outcome: "Court granted a permanent injunction restraining the defendants from selling products with the red sole trademark.",
      citation: "2022 SCC OnLine Del 1776",
      relevance: "High"
    },
    
    
  ]

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
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Previous Cases Database</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Browse through precedent cases to understand legal outcomes and apply relevant principles to your situation.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search cases by keyword, title, or citation..."
                  className="pl-10 bg-white text-slate-900"
                />
              </div>
              <Button className="md:w-auto w-full bg-white text-slate-900 hover:bg-slate-100">Search</Button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Select defaultValue="all">
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Case Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="boundary">Movable</SelectItem>
                    <SelectItem value="tenant">Imovable</SelectItem>
                    <SelectItem value="title">Tangible</SelectItem>
                    <SelectItem value="zoning">Intangible</SelectItem>
                    <SelectItem value="hoa">Public property</SelectItem>
                    <SelectItem value="eminent">Private property</SelectItem>
                    
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Select defaultValue="all">
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Court" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courts</SelectItem>
                    <SelectItem value="supreme">Supreme Court</SelectItem>
                    <SelectItem value="appeals">Court of Appeals</SelectItem>
                    <SelectItem value="district">District Court</SelectItem>
                    <SelectItem value="state">State Courts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Select defaultValue="relevance">
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="az">A-Z</SelectItem>
                    <SelectItem value="za">Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">All Cases</TabsTrigger>
              <TabsTrigger value="high">High Relevance</TabsTrigger>
              <TabsTrigger value="medium">Medium Relevance</TabsTrigger>
              <TabsTrigger value="low">Low Relevance</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {cases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}

              <div className="flex justify-center mt-8">
                <Button variant="outline" className="mr-2">
                  Previous
                </Button>
                <Button variant="outline" className="mx-1">
                  1
                </Button>
                <Button variant="outline" className="mx-1">
                  2
                </Button>
                <Button variant="outline" className="mx-1">
                  3
                </Button>
                <Button variant="outline" className="ml-2">
                  Next
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="high" className="space-y-6">
              {cases
                .filter((c) => c.relevance === "High")
                .map((caseItem) => (
                  <CaseCard key={caseItem.id} caseItem={caseItem} />
                ))}
            </TabsContent>

            <TabsContent value="medium" className="space-y-6">
              {cases
                .filter((c) => c.relevance === "Medium")
                .map((caseItem) => (
                  <CaseCard key={caseItem.id} caseItem={caseItem} />
                ))}
            </TabsContent>

            <TabsContent value="low" className="space-y-6">
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No low relevance cases found</h3>
                <p className="text-slate-600 mb-6">Try adjusting your search criteria</p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 bg-white p-6 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold mb-4">Need Help Understanding Case Law?</h2>
            <p className="mb-6">
              Our legal experts can help you understand how previous cases might apply to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/search-case">Search Your Case</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/find-lawyer">Find a Lawyer</Link>
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

function CaseCard({ caseItem }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div>
            <CardTitle className="text-xxl">{caseItem.title}</CardTitle>
            
          </div>
          <div className="flex flex-col items-start md:items-end">
            
            <span className="text-m text-slate-500 flex items-center mt-3">
              <Calendar className="h-4 w-4 mr-1" />
              {caseItem.date}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 ">
            <Badge variant="outline" className="bg-slate-100 px-2 py-1 text-base rounded-md">
              {caseItem.category}
            </Badge>
            <Badge variant="outline" className="bg-slate-100">
              {caseItem.court}
            </Badge>
            <Badge variant="outline" className="bg-slate-100">
              {caseItem.outcome}
            </Badge>
          </div>

          <p className="text-xl text-slate-700">
            {expanded ? caseItem.summary + "" : caseItem.summary.slice(0,100) + "..."}
          </p>
          {expanded && (
            <div className="text-slate-600 text-sm mt-2">
              <p><strong>Full Citation:</strong> {caseItem.citation}</p>
              <p><strong>Court:</strong> {caseItem.court}</p>
              <p><strong>Outcome:</strong> {caseItem.outcome}</p>
            </div>
          )}

        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-2">
        <Button onClick={() => setExpanded(!expanded)} className="flex items-center">
          {expanded ? "Hide Details" : "View Full Case"}
          
        </Button>
      </CardFooter>
    </Card>
  )
}
