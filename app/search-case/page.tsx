"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, AlertTriangle, CheckCircle, BookOpen, Scale, ArrowRight, Shield } from "lucide-react"
import { CaseDialog } from "@/components/Case_Dialog"



export default function SearchCase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Define keywords and their associated legal information
  const keywordMap = {
    // Boundary dispute keywords
    copying: {
      category: "Intellectual Property (IP) Law",
      laws: [
        "Trade Marks Act, 1999 – Section 29 (Infringement)",
        "WIPO guidelines (international protection)Copyright Act, 1957 – Section 51",
        "IT Act, 2000 (for online copyright issues)",
        "Patents Act, 1970 – Sections 108–111",
      ],
      considerations: [
        "Is the trademark registered?",
        "Is the copy causing confusion among consumers?",
        "Was the use intentional or accidental?",
        "Is the copied mark used for commercial gain?",
      ],
      actions: [
        "Stop using the infringing mark (if they're the infringer).",
        "Collect proof of infringement (if they're the owner).",
        "Send a cease-and-desist letter.",
        "Consult a trademark lawyer.",
        "File a formal complaint with the Registrar of Trademarks.",
      ],
      resources: [
        {
          title: "Property Boundary Laws",
          description:
            "Comprehensive rements.",
          content: `
            <h2>Property Boundary Laws: A Comprehensive Guide</h2>
            
            <h3>Conclusion</h3>
            <p>Understanding of state-specific laws are crucial tools for resolution.</p>
          `,
        },
        {
          title: "Property",
          description:
            "Overview of fence .",
          content: `
            <p>ca.</p>
          `,
        },
        {
          title: "Easement Rights and Restrictions",
          description:
            "Explanation of dts.",
          content: `
            <h3>Conclusion</h3>
          `,
        },
      ],
      cases: [
        {
          title: "Smith v. Johnson (2022)",
          description:
            "Lands.",
          outcome:
            "The s.",
          citation: "123 S.Ct. 456 (2022)",
          content: `
            <h3>SUPREME COURT OF THE UNITED STATES</h3>
          `,
          parties: "Thomas and Maria Smith (Petitioners) v. William and Susan Johnson (Respondents)",
          date: "June 15, 2022",
          court: "Supreme Court of the United States",
        },
        {
          title: "Miller v. Thompson (2021)",
          description:
            "Case addressierties.",
          outcome:
            "The court upesults.",
          citation: "456 F.3d 789 (2021)",
          content: `
            <h3>UNITED STATES
          `,
          parties: "Robert Miller (Appellant) v. James Thompson (Appellee)",
          date: "November 12, 2021",
          court: "United States Court of Appeals for the Ninth Circuit",
        },
      ],
    },



    trademark: {
      category: "Intellectual Property (IP) Law",
      laws: [
        "Trade Marks Act, 1999 – Section 29 (Infringement)",
        "WIPO guidelines (international protection)Copyright Act, 1957 – Section 51",
        "IT Act, 2000 (for online copyright issues)",
        "Patents Act, 1970 – Sections 108–111",
      ],
      considerations: [
        "Is the trademark registered?",
        "Is the copy causing confusion among consumers?",
        "Was the use intentional or accidental?",
        "Is the copied mark used for commercial gain?",
      ],
      actions: [
        "Stop using the infringing mark (if they're the infringer).",
        "Collect proof of infringement (if they're the owner).",
        "Send a cease-and-desist letter.",
        "Consult a trademark lawyer.",
        "File a formal complaint with the Registrar of Trademarks.",
      ],
      resources: [
        {
          title: "Property",
          description:
            "Overview of fence .",
          content: `
            <p>ca.</p>
          `,
        },
        
      ],
      cases: [
        {
          title: "Smith v. Johnson (2022)",
          description:
            "Lands.",
          outcome:
            "The s.",
          citation: "123 S.Ct. 456 (2022)",
          content: `
            <h3>SUPREME COURT OF THE UNITED STATES</h3>
          `,
          parties: "Thomas and Maria Smith (Petitioners) v. William and Susan Johnson (Respondents)",
          date: "June 15, 2022",
          court: "Supreme Court of the United States",
        },
        
      ],
    },

    Patent: {
      category: "Intellectual Property (IP) Law",
      laws: [
        "Trade Marks Act, 1999 – Section 29 (Infringement)",
        "WIPO guidelines (international protection)Copyright Act, 1957 – Section 51",
        "IT Act, 2000 (for online copyright issues)",
        "Patents Act, 1970 – Sections 108–111",
      ],
      considerations: [
        "Is the trademark registered?",
        "Is the copy causing confusion among consumers?",
        "Was the use intentional or accidental?",
        "Is the copied mark used for commercial gain?",
      ],
      actions: [
        "Stop using the infringing mark (if they're the infringer).",
        "Collect proof of infringement (if they're the owner).",
        "Send a cease-and-desist letter.",
        "Consult a trademark lawyer.",
        "File a formal complaint with the Registrar of Trademarks.",
      ],
      resources: [
        {
          title: "Property",
          description:
            "Overview of fence .",
          content: `
            <p>ca.</p>
          `,
        },
        
      ],
      cases: [
        {
          title: "Smith v. Johnson (2022)",
          description:
            "Lands.",
          outcome:
            "The s.",
          citation: "123 S.Ct. 456 (2022)",
          content: `
            <h3>SUPREME COURT OF THE UNITED STATES</h3>
          `,
          parties: "Thomas and Maria Smith (Petitioners) v. William and Susan Johnson (Respondents)",
          date: "June 15, 2022",
          court: "Supreme Court of the United States",
        },
        
      ],
     },

     Copyright: {
      category: "Intellectual Property (IP) Law",
      laws: [
        "Trade Marks Act, 1999 – Section 29 (Infringement)",
        "WIPO guidelines (international protection)Copyright Act, 1957 – Section 51",
        "IT Act, 2000 (for online copyright issues)",
        "Patents Act, 1970 – Sections 108–111",
      ],
      considerations: [
        "Is the trademark registered?",
        "Is the copy causing confusion among consumers?",
        "Was the use intentional or accidental?",
        "Is the copied mark used for commercial gain?",
      ],
      actions: [
        "Stop using the infringing mark (if they're the infringer).",
        "Collect proof of infringement (if they're the owner).",
        "Send a cease-and-desist letter.",
        "Consult a trademark lawyer.",
        "File a formal complaint with the Registrar of Trademarks.",
      ],
      resources: [
        {
          title: "Property",
          description:
            "Overview of fence .",
          content: `
            <p>ca.</p>
          `,
        },
        
      ],
      cases: [
        {
          title: "Smith v. Johnson (2022)",
          description:
            "Lands.",
          outcome:
            "The s.",
          citation: "123 S.Ct. 456 (2022)",
          content: `
            <h3>SUPREME COURT OF THE UNITED STATES</h3>
          `,
          parties: "Thomas and Maria Smith (Petitioners) v. William and Susan Johnson (Respondents)",
          date: "June 15, 2022",
          court: "Supreme Court of the United States",
        },
        
      ],
    },
  
    Property: {
      category: "Adverse Possesion Claims",
      laws: [
        "The Limitation Act, 1963 (Article 65)*",
        "Indian Easements Act, 1882 (Section 15):- Prescriptive Rights: Similar to adverse possession, the prescriptive right",
        "Indian Evidence Act, 1872 (Section 110)",
        "Civil Procedure Code, 1908 (Order 21, Rule 97-101)",
      ],
      considerations: [
        "Has the claimant possessed the land for the required statutory period?",
        "Was the possession *actual*, meaning did they physically use the land?",
        "Was the possession *exclusive*, without sharing control with other?",
        "Was the possession *open and notorious*, visible enough for the true owner to notice?",
      ],
      actions: [
        "Regularly inspect your property .​",
        "Pay property tax and utility bills",
        "Keep strong evidence – of uninterrupted, hostile, and open possession for 12+ years.",
        "Initiate eviction proceedings quickly ",
        "Use affidavits or acknowledgment letters – to confirm that any occupants are staying with permission.",
      ],
      resources: [
        {
          title: "Property",
          description:
            "Overview of fence .",
          content: `
            <p>ca.</p>
          `,
        },
        
      ],
      cases: [
        {
          title: "Smith v. Johnson (2022)",
          description:
            "Lands.",
          outcome:
            "The s.",
          citation: "123 S.Ct. 456 (2022)",
          content: `
            <h3>SUPREME COURT OF THE UNITED STATES</h3>
          `,
          parties: "Thomas and Maria Smith (Petitioners) v. William and Susan Johnson (Respondents)",
          date: "June 15, 2022",
          court: "Supreme Court of the United States",
        },
        
      ],
    },

    dispute: {
      category: "Adverse Possesion Claims",
      laws: [
        "The Limitation Act, 1963 (Article 65)*",
        "Indian Easements Act, 1882 (Section 15):- Prescriptive Rights: Similar to adverse possession, the prescriptive right",
        "Indian Evidence Act, 1872 (Section 110)",
        "Civil Procedure Code, 1908 (Order 21, Rule 97-101)",
      ],
      considerations: [
        "Has the claimant possessed the land for the required statutory period?",
        "Was the possession *actual*, meaning did they physically use the land?",
        "Was the possession *exclusive*, without sharing control with other?",
        "Was the possession *open and notorious*, visible enough for the true owner to notice?",
      ],
      actions: [
        "Regularly inspect your property .​",
        "Pay property tax and utility bills",
        "Keep strong evidence – of uninterrupted, hostile, and open possession for 12+ years.",
        "Initiate eviction proceedings quickly ",
        "Use affidavits or acknowledgment letters – to confirm that any occupants are staying with permission.",
      ],
      resources: [
        {
          title: "Property",
          description:
            "Overview of fence .",
          content: `
            <p>ca.</p>
          `,
        },
        
      ],
      cases: [
        {
          title: "Smith v. Johnson (2022)",
          description:
            "Lands.",
          outcome:
            "The s.",
          citation: "123 S.Ct. 456 (2022)",
          content: `
            <h3>SUPREME COURT OF THE UNITED STATES</h3>
          `,
          parties: "Thomas and Maria Smith (Petitioners) v. William and Susan Johnson (Respondents)",
          date: "June 15, 2022",
          court: "Supreme Court of the United States",
        },
        
      ],
    },

    ownership: {
      category: "Adverse Possesion Claims",
      laws: [
        "The Limitation Act, 1963 (Article 65)*",
        "Indian Easements Act, 1882 (Section 15):- Prescriptive Rights: Similar to adverse possession, the prescriptive right",
        "Indian Evidence Act, 1872 (Section 110)",
        "Civil Procedure Code, 1908 (Order 21, Rule 97-101)",
      ],
      considerations: [
        "Has the claimant possessed the land for the required statutory period?",
        "Was the possession *actual*, meaning did they physically use the land?",
        "Was the possession *exclusive*, without sharing control with other?",
        "Was the possession *open and notorious*, visible enough for the true owner to notice?",
      ],
      actions: [
        "Regularly inspect your property .​",
        "Pay property tax and utility bills",
        "Keep strong evidence – of uninterrupted, hostile, and open possession for 12+ years.",
        "Initiate eviction proceedings quickly ",
        "Use affidavits or acknowledgment letters – to confirm that any occupants are staying with permission.",
      ],
      resources: [
        {
          title: "Property",
          description:
            "Overview of fence .",
          content: `
            <p>ca.</p>
          `,
        },
        
      ],
      cases: [
        {
          title: "Smith v. Johnson (2022)",
          description:
            "Lands.",
          outcome:
            "The s.",
          citation: "123 S.Ct. 456 (2022)",
          content: `
            <h3>SUPREME COURT OF THE UNITED STATES</h3>
          `,
          parties: "Thomas and Maria Smith (Petitioners) v. William and Susan Johnson (Respondents)",
          date: "June 15, 2022",
          court: "Supreme Court of the United States",
        },
        
      ],
    },


    freeze: {
      category: "Asset Freezing & Business Disruption",
      laws: [
        "Civil Procedure Code, 1908 (CPC)",
        "Code of Criminal Procedure, 1973 (CrPC)",
        "Prevention of Money Laundering Act, 2002 (PMLA)",
        "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002",
      ],
      considerations: [
        "Was the attachment linked to proven or alleged criminal proceeds?",
        "Were procedures under Section 5 of PMLA followed correctly?",
        "Was the property genuinely acquired legally and unrelated to criminal activity?",
        "Were due process and notice provided to the affected party?",
        " Benami Transactions (Prohibition) Act, 1988 Income Tax Act, 1961",
      ],
      actions: [
        "File an appeal before the Adjudicating Authority under PMLA.​",
        "Present proof that the property/assets were legally acquired.",
        "Challenge retroactive application of the law in court if applicable.",
        "Engage a property law or PMLA expert to represent the case.",
        "Request interim relief (like unfreezing accounts) through legal procedures.",
      ],
      resources: [
        {
          title: "Property",
          description:
            "Overview of fence .",
          content: `
            <p>ca.</p>
          `,
        },
        
      ],
      cases: [
        {
          title: "Smith v. Johnson (2022)",
          description:
            "Lands.",
          outcome:
            "The s.",
          citation: "123 S.Ct. 456 (2022)",
          content: `
            <h3>SUPREME COURT OF THE UNITED STATES</h3>
          `,
          parties: "Thomas and Maria Smith (Petitioners) v. William and Susan Johnson (Respondents)",
          date: "June 15, 2022",
          court: "Supreme Court of the United States",
        },
        
      ],
    },

    ED: {
      category: "Asset Freezing & Business Disruption",
      laws: [
        "Civil Procedure Code, 1908 (CPC)",
        "Code of Criminal Procedure, 1973 (CrPC)",
        "Prevention of Money Laundering Act, 2002 (PMLA)",
        "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002",
      ],
      considerations: [
        "Was the attachment linked to proven or alleged criminal proceeds?",
        "Were procedures under Section 5 of PMLA followed correctly?",
        "Was the property genuinely acquired legally and unrelated to criminal activity?",
        "Were due process and notice provided to the affected party?",
        " Benami Transactions (Prohibition) Act, 1988 Income Tax Act, 1961",
      ],
      actions: [
        "File an appeal before the Adjudicating Authority under PMLA.​",
        "Present proof that the property/assets were legally acquired.",
        "Challenge retroactive application of the law in court if applicable.",
        "Engage a property law or PMLA expert to represent the case.",
        "Request interim relief (like unfreezing accounts) through legal procedures.",
      ],
      resources: [
        {
          title: "Property",
          description:
            "Overview of fence .",
          content: `
            <p>ca.</p>
          `,
        },
        
      ],
      cases: [
        {
          title: "Smith v. Johnson (2022)",
          description:
            "Lands.",
          outcome:
            "The s.",
          citation: "123 S.Ct. 456 (2022)",
          content: `
            <h3>SUPREME COURT OF THE UNITED STATES</h3>
          `,
          parties: "Thomas and Maria Smith (Petitioners) v. William and Susan Johnson (Respondents)",
          date: "June 15, 2022",
          court: "Supreme Court of the United States",
        },
        
      ],
    },

    account: {
      category: "Asset Freezing & Business Disruption",
      laws: [
        "Civil Procedure Code, 1908 (CPC)",
        "Code of Criminal Procedure, 1973 (CrPC)",
        "Prevention of Money Laundering Act, 2002 (PMLA)",
        "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002",
      ],
      considerations: [
        "Was the attachment linked to proven or alleged criminal proceeds?",
        "Were procedures under Section 5 of PMLA followed correctly?",
        "Was the property genuinely acquired legally and unrelated to criminal activity?",
        "Were due process and notice provided to the affected party?",
        " Benami Transactions (Prohibition) Act, 1988 Income Tax Act, 1961",
      ],
      actions: [
        "File an appeal before the Adjudicating Authority under PMLA.​",
        "Present proof that the property/assets were legally acquired.",
        "Challenge retroactive application of the law in court if applicable.",
        "Engage a property law or PMLA expert to represent the case.",
        "Request interim relief (like unfreezing accounts) through legal procedures.",
      ],
      resources: [
        {
          title: "Property",
          description:
            "Overview of fence .",
          content: `
            <p>ca.</p>
          `,
        },
        
      ],
      cases: [
        {
          title: "Smith v. Johnson (2022)",
          description:
            "Lands.",
          outcome:
            "The s.",
          citation: "123 S.Ct. 456 (2022)",
          content: `
            <h3>SUPREME COURT OF THE UNITED STATES</h3>
          `,
          parties: "Thomas and Maria Smith (Petitioners) v. William and Susan Johnson (Respondents)",
          date: "June 15, 2022",
          court: "Supreme Court of the United States",
        },
        
      ],
    },
    
    asset: {
      category: "Asset Freezing & Business Disruption",
      laws: [
        "Civil Procedure Code, 1908 (CPC)",
        "Code of Criminal Procedure, 1973 (CrPC)",
        "Prevention of Money Laundering Act, 2002 (PMLA)",
        "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002",
      ],
      considerations: [
        "Was the attachment linked to proven or alleged criminal proceeds?",
        "Were procedures under Section 5 of PMLA followed correctly?",
        "Was the property genuinely acquired legally and unrelated to criminal activity?",
        "Were due process and notice provided to the affected party?",
        " Benami Transactions (Prohibition) Act, 1988 Income Tax Act, 1961",
      ],
      actions: [
        "File an appeal before the Adjudicating Authority under PMLA.​",
        "Present proof that the property/assets were legally acquired.",
        "Challenge retroactive application of the law in court if applicable.",
        "Engage a property law or PMLA expert to represent the case.",
        "Request interim relief (like unfreezing accounts) through legal procedures.",
      ],
      resources: [
        {
          title: "Property",
          description:
            "Overview of fence .",
          content: `
            <p>ca.</p>
          `,
        },
        
      ],
      cases: [
        {
          title: "Smith v. Johnson (2022)",
          description:
            "Lands.",
          outcome:
            "The s.",
          citation: "123 S.Ct. 456 (2022)",
          content: `
            <h3>SUPREME COURT OF THE UNITED STATES</h3>
          `,
          parties: "Thomas and Maria Smith (Petitioners) v. William and Susan Johnson (Respondents)",
          date: "June 15, 2022",
          court: "Supreme Court of the United States",
        },
        
      ],
    },









}

    // Function to search for relevant legal information based on keywords
  const handleSearch = () => {
    if (!searchQuery.trim()) return

    setIsLoading(true)

    // Simulate search delay
    setTimeout(() => {
      const query = searchQuery.toLowerCase()
      const matchedKeywords = []

      // Check for keyword matches
      Object.keys(keywordMap).forEach((keyword) => {
        if (query.includes(keyword.toLowerCase())) {
          matchedKeywords.push(keyword)
        }
      })

      // If no direct matches, try to find partial matches
      if (matchedKeywords.length === 0) {
        Object.keys(keywordMap).forEach((keyword) => {
          // Check if any word in the query is similar to our keywords
          const queryWords = query.split(/\s+/)
          for (const word of queryWords) {
            if (word.length > 3 && keyword.toLowerCase().includes(word)) {
              matchedKeywords.push(keyword)
              break
            }
          }
        })
      }

      // Get unique categories from matched keywords
      const matchedCategories = [...new Set(matchedKeywords.map((keyword) => keywordMap[keyword].category))]

      // Combine all relevant information from matched keywords
      const combinedResults = {
        keywords: matchedKeywords,
        categories: matchedCategories,
        laws: [],
        considerations: [],
        actions: [],
        resources: [],
        cases: [],
      }

      // Populate combined results
      matchedKeywords.forEach((keyword) => {
        const info = keywordMap[keyword]
        combinedResults.laws = [...combinedResults.laws, ...info.laws]
        combinedResults.considerations = [...combinedResults.considerations, ...info.considerations]
        combinedResults.actions = [...combinedResults.actions, ...info.actions]
        combinedResults.resources = [...combinedResults.resources, ...info.resources]
        combinedResults.cases = [...combinedResults.cases, ...info.cases]
      })

      // Remove duplicates
      combinedResults.laws = [...new Set(combinedResults.laws)]
      combinedResults.considerations = [...new Set(combinedResults.considerations)]
      combinedResults.actions = [...new Set(combinedResults.actions)]

      // Remove duplicate resources and cases by title
      const uniqueResources = {}
      combinedResults.resources.forEach((resource) => {
        uniqueResources[resource.title] = resource
      })
      combinedResults.resources = Object.values(uniqueResources)

      const uniqueCases = {}
      combinedResults.cases.forEach((case_) => {
        uniqueCases[case_.title] = case_
      })
      combinedResults.cases = Object.values(uniqueCases)

      setSearchResults(matchedKeywords.length > 0 ? combinedResults : null)
      setIsLoading(false)
    }, 1000)
  }

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
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Search Your Case</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Describe your property dispute situation and get relevant legal information and guidance.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Describe your property issue (e.g., 'boundary dispute with neighbor' or 'tenant not paying rent')"
                  className="pl-10 bg-white text-slate-900 py-6 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch()
                    }
                  }}
                />
              </div>
              <Button
                className="md:w-auto w-full bg-white text-slate-900 hover:bg-slate-100 py-6 px-8"
                onClick={handleSearch}
                disabled={isLoading}
              >
                {isLoading ? "Searching..." : "Search"}
              </Button>
            </div>
            <p className="text-slate-300 text-sm mt-2">
              Try searching for specific issues like "fence dispute," "security deposit," "HOA covenant," or "zoning
              variance"
            </p>
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
          ) : searchResults ? (
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
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="text-lg font-semibold flex items-center text-blue-800 mb-2">
                        <Search className="h-5 w-5 mr-2" />
                        Search Summary
                      </h3>
                      <p className="text-slate-700 mb-3">
                        Your search for "{searchQuery}" relates to {searchResults.categories.join(", ")} issues. We've
                        found relevant information based on the following keywords: {searchResults.keywords.join(", ")}.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {searchResults.categories.map((category, index) => (
                          <Badge key={index} className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h3 className="text-lg font-semibold flex items-center text-green-800 mb-2">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Applicable Laws
                        </h3>
                        <ul className="space-y-2 text-slate-700">
                          {searchResults.laws.slice(0, 5).map((law, index) => (
                            <li key={index}>• {law}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <h3 className="text-lg font-semibold flex items-center text-amber-800 mb-2">
                          <AlertTriangle className="h-5 w-5 mr-2" />
                          Key Considerations
                        </h3>
                        <ul className="space-y-2 text-slate-700">
                          {searchResults.considerations.slice(0, 5).map((consideration, index) => (
                            <li key={index}>• {consideration}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-100 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-semibold flex items-center mb-2">
                        <Scale className="h-5 w-5 mr-2" />
                        Recommended Actions
                      </h3>
                      <ol className="space-y-2 text-slate-700 list-decimal pl-5">
                        {searchResults.actions.slice(0, 5).map((action, index) => (
                          <li key={index}>{action}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>

              
              <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg border border-slate-200">
                <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
                <p className="mb-6">
                  Based on your search, we recommend the following actions to help resolve your property dispute:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Button asChild size="lg" className="h-auto py-6 flex items-center justify-center">
                    <Link href="/defend-yourself" className="flex flex-col items-center">
                      <Shield className="h-8 w-8 mb-2" />
                      <span className="text-lg font-medium">Explore Self-Defense Strategies</span>
                      <span className="text-sm font-normal mt-1">Learn how to protect your property rights</span>
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="h-auto py-6 flex items-center justify-center">
                    <Link href="/find-lawyer" className="flex flex-col items-center">
                      <Scale className="h-8 w-8 mb-2" />
                      <span className="text-lg font-medium">Find a Property Law Attorney</span>
                      <span className="text-sm font-normal mt-1">Connect with legal experts in your area</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ) : searchQuery ? (
            <div className="text-center py-12 max-w-2xl mx-auto">
              <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No specific legal information found</h3>
              <p className="text-slate-600 mb-6">
                We couldn't find specific legal information related to your search. Try using more specific terms
                related to property law issues.
              </p>
              <div className="bg-slate-100 p-4 rounded-lg text-left mb-6">
                <h4 className="font-medium mb-2">Try searching for specific issues like:</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>"boundary dispute with neighbor"</li>
                  <li>"tenant not paying rent"</li>
                  <li>"HOA covenant violation"</li>
                  <li>"zoning variance request"</li>
                  <li>"property easement rights"</li>
                </ul>
              </div>
              <Button onClick={() => setSearchQuery("")}>Try a New Search</Button>
            </div>
          ) : (
            <div className="text-center py-12 max-w-2xl mx-auto">
              <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Search for Property Law Information</h3>
              <p className="text-slate-600 mb-6">
                Enter details about your property law issue in the search bar above to find relevant legal information,
                applicable laws, and recommended actions.
              </p>
              <div className="bg-slate-100 p-4 rounded-lg text-left">
                <h4 className="font-medium mb-2">Popular search topics:</h4>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("boundary fence dispute with neighbor")
                      handleSearch()
                    }}
                  >
                    Boundary Disputes
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("security deposit not returned by landlord")
                      handleSearch()
                    }}
                  >
                    Security Deposits
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("HOA covenant violation notice")
                      handleSearch()
                    }}
                  >
                    HOA Issues
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("zoning variance for home addition")
                      handleSearch()
                    }}
                  >
                    Zoning Problems
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("easement on my property")
                      handleSearch()
                    }}
                  >
                    Easements
                  </Button>
                </div>
              </div>
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




function ResourceCard({ title, description, icon }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full flex items-center justify-center">
          View Resource
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

function CaseResourceCard({ title, description, outcome, citation }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="h-6 w-6 text-slate-700 mr-2" />
          {title}
        </CardTitle>
        <CardDescription>{citation}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
          <p className="font-medium text-slate-700">Outcome:</p>
          <p className="text-slate-600">{outcome}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full flex items-center justify-center">
          Read Full Case
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

