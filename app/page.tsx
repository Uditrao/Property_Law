"use client"

import { useState } from "react"


import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Calendar } from "lucide-react"
// import {bg.jpg} from "public\images"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img src="/images/logo.jpg" alt="Logo" className="w-14 h-14 object-cover" />
              </div>
              <h1 className="text-xl font-bold">नियय संपत्ति</h1>
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-slate-800 text-white py-16">
          
        <div className="absolute top-15 left-10">
          {/*<img src="/images/logo.jpg" alt="Logo" className="w-40 h-40 rounded-full bg-white p-0.5 object-cover shadow-md"/>*/}
        </div>
          <div className="container mx-auto px-4 text-center">
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Property Law Information Portal</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your official resource for property law information, legal assistance, and dispute resolution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-slate-100 text-slate-900 hover:bg-white transform transition-transform duration-300 hover:scale-110">
                <Link href="/search-case">Search Your Case</Link>
              </Button>
              <Button asChild variant="outline" className="bg-slate-100 text-slate-900 hover:bg-whitex  transform transition-transform duration-300 hover:scale-110">
                <Link href="/defend-yourself">Defend Yourself</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white ">
        {/* <img src="/images/bg.jpg" alt=""/> */}
          <div className="container mx-auto px-4">
          
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Property Law Information"
                description="Access comprehensive information about property laws, regulations, and rights."
                icon={
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
                    className="h-10 w-10"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                }
                href="/property-law"
              />
              <FeatureCard
                title="Defend Yourself"
                description="Learn strategies and approaches to defend your property rights effectively."
                icon={
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
                    className="h-10 w-10"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m12 8-4 4 4 4" />
                    <path d="m16 12-4-4" />
                    <path d="m16 12-4 4" />
                  </svg>
                }
                href="/defend-yourself"
              />
              <FeatureCard
                title="Find a Lawyer"
                description="Connect with qualified property law attorneys in your area."
                icon={
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
                    className="h-10 w-10"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 18h.01" />
                    <path d="M12 18h.01" />
                    <path d="M16 18h.01" />
                  </svg>
                }
                href="/find-lawyer"
              />
              <FeatureCard
                title="Previous Cases"
                description="Browse through precedent cases to understand legal outcomes."
                icon={
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
                    className="h-10 w-10"
                  >
                    <path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5" />
                    <path d="M5.5 5.1 2 12v6c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-6l-3.4-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.8 1.1z" />
                  </svg>
                }
                href="/cases"
              />
              <FeatureCard
                title="Trademark Search"
                description="Browse through the trademark information for IP law"
                icon={          
                    <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                    height="24"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      stroke-linecap="round" 
                     stroke-linejoin="round" 
                     className="h-10 w-10"
                      >
                     <path d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>

                   
                }
                href="/trademark"
              />
            </div>
          </div>
        </section>

        {/* Search Case Section */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Search Your Case</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Describe your property dispute situation and get relevant legal information and guidance.
            </p>
            <div className="max-w-xl mx-auto">
              <Button asChild className="flex items-center gap-2 mx-auto transform transition-transform duration-300 hover:scale-110">
                <Link href="/search-case">
                  <Search className="h-5 w-5" />
                  Start Your Case Search
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Recent Updates Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Updates</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <UpdateCard
                title="New Property Registration Guidelines"
                date="April 15, 2025"
                description="Updated guidelines for property registration have been released to streamline the process."
              />
              <UpdateCard
                title="Supreme Court Ruling on Boundary Disputes"
                date="March 28, 2025"
                description="A landmark ruling that affects how boundary disputes are resolved between neighboring properties."
              />
              <UpdateCard
                title="Tenant Rights Expansion Act"
                date="February 10, 2025"
                description="New legislation expanding the rights of tenants in residential rental properties."
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Some FAQ</h2>
            <div className="space-y-6">
              <FAQCard
                title="What should I do if my bank account is frozen due to a legal case?"
                date="April 15, 2025"
                description="First, obtain the freezing order details from your bank. Then consult a lawyer to file for a limited release of funds for essential expenses. Maintain all transaction records to show legitimate business needs."
              />
              <FAQCard
                title="How can I resolve a family property dispute without going to court?"
                date="March 28, 2025"
                description="Family mediation is often the best first step. Many district legal services authorities offer free mediation services. Document any agreements reached during mediation to make them legally enforceable."
              />
              <FAQCard
                title="How do I check if my business is accidentally violating IP laws?"
                date="February 10, 2025"
                description="The free trademark search database on the IP India website. For comprehensive checks, attend one of the free IP awareness workshops conducted regularly by the government."
              />
            </div>
          </div>
        </section>



      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Property Law Portal</h3>
              <p className="text-slate-300">
                Your official resource for property law information and dispute resolution.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/property-law" className="text-slate-300 hover:text-white">
                    Property Law
                  </Link>
                </li>
                <li>
                  <Link href="/defend-yourself" className="text-slate-300 hover:text-white">
                    Defend Yourself
                  </Link>
                </li>
                <li>
                  <Link href="/find-lawyer" className="text-slate-300 hover:text-white">
                    Find a Lawyer
                  </Link>
                </li>
                <li>
                  <Link href="/cases" className="text-slate-300 hover:text-white">
                    Previous Cases
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/forms" className="text-slate-300 hover:text-white">
                    Legal Forms
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-slate-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/glossary" className="text-slate-300 hover:text-white">
                    Legal Glossary
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-300 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic text-slate-300">
                <p>123 Government Plaza</p>
                <p>Washington, DC 20001</p>
                <p className="mt-2">Phone: (555) 123-4567</p>
                <p>Email: info@propertylawportal.gov</p>
              </address>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; 2025 Property Law Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description, icon, href }) {
  return (
    <Link href={href} className="block group">
      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 transition-all duration-200 hover:shadow-md hover:bg-slate-200 hover:border-slate-300 hover:scale-105">
        <div className="text-slate-700 mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </Link>
  )
}

function UpdateCard({ title, date, description }) {
  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
      <span className="text-sm text-slate-500 block mb-2">{date}</span>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      
    </div>
  )
}

function FAQCard({ title, date, description }) {
   const [expanded, setExpanded] = useState(false)
  return (
    <Card>
      <CardHeader>
      <span className="text-sm text-slate-500 flex items-center mt-1">
              <Calendar className="h-4 w-4 mr-1" />
              {date}
            </span>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          <div className="flex flex-col items-start md:items-end">
          <Button onClick={() => setExpanded(!expanded)} className="flex items-center">
          {expanded ? "Hide" : "Show answer"}
          
        </Button>
          </div>
        </div>
        <p className="text-slate-700">
            {expanded ? description + "" : description.slice(0, 0) + ""}
          </p>
      </CardHeader>   
    </Card>
  )
}

