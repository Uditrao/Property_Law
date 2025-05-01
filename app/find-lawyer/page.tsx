"use client"
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Star, Phone, Mail, Filter } from "lucide-react"

export default function FindLawyer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [specialty, setSpecialty] = useState("")
  const [showFilters, setShowFilters] = useState(false)



  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });
  }, []);

  // Mock data for lawyers
  const lawyers = [
    {
      id: 3,
      name: "Deepak sharma",
      specialty: "Title Disputes & Real Estate",
      location: "Jaipur ,Rajasthan",
      rating: 4.8,
      reviews: 112,
      experience: "18 years",
      phone: "(312) 555-4321",
      email: "deepak@propertylaw.com",
      image: "/img3.jpg?height=100&width=100",
      availability: "Limited availability",
      expertise: ["Title Insurance", "Quiet Title Actions", "Real Estate Transactions", "Foreclosures"],
      education: "J.D., University of Chicago Law School",
      firm: "Chen Property Law",
    },
    {
      id: 5,
      name: "Savita Mishra",
      specialty: "Property Litigation",
      location: "Kanpur, UP",
      rating: 4.9,
      reviews: 135,
      experience: "20 years",
      phone: "(617) 555-2345",
      email: "savita@litigators.com",
      image: "/img5.jpg?height=100&width=100",
      availability: "Available for urgent matters",
      expertise: ["Trial Advocacy", "Property Disputes", "Appeals", "Negotiation"],
      education: "J.D., Boston University School of Law",
      firm: "Thompson Litigation",
    },
    {
      id: 4,
      name: "Robert Williams",
      specialty: "Zoning & Land Use",
      location: "Banglore",
      rating: 4.6,
      reviews: 87,
      experience: "10 years",
      phone: "(202) 555-8765",
      email: "Robwilliams@dclaw.com",
      image: "/img4.jpg?height=100&width=100",
      availability: "Available for consultation",
      expertise: ["Zoning Regulations", "Variances", "Land Development", "Administrative Appeals"],
      education: "J.D., Georgetown University Law Center",
      firm: "Williams & Partners",
    },
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Property Boundary Disputes",
      location: "New Delhi",
      rating: 4.9,
      reviews: 127,
      experience: "15 years",
      phone: "(212) 555-1234",
      email: "sarah.johnson@legalfirm.com",
      image: "/img1.jpg?height=100&width=100",
      availability: "Available for consultation",
      expertise: ["Movable Property", "Easements", "Land Use", "Litigation"],
      education: "J.D., Harvard Law School",
      firm: "Johnson & Associates",
    },
    {
      id: 2,
      name: "Michael ",
      specialty: "Landlord-Tenant Law",
      location: "Mumbai",
      rating: 4.7,
      reviews: 98,
      experience: "12 years",
      phone: "(310) 555-6789",
      email: "michael@legalgroup.com",
      image: "/img2.jpg?height=100&width=100",
      availability: "Available next week",
      expertise: ["Tenant Rights", "Evictions", "Lease Agreements", "Fair Housing"],
      education: "J.D., UCLA School of Law",
      firm: "Rodriguez Legal Group",
    },
    
    
    
    {
      id: 6,
      name: "Jennifer Lee",
      specialty: "Homeowners Association Law",
      location: "Miami, FL",
      rating: 4.7,
      reviews: 92,
      experience: "8 years",
      phone: "(305) 555-9876",
      email: "jlee@hoalaw.com",
      image: "/img6.jpg?height=100&width=100",
      availability: "Available for consultation",
      expertise: ["HOA Disputes", "Covenant Enforcement", "Board Representation", "Bylaw Amendments"],
      education: "J.D., University of Miami School of Law",
      firm: "Lee HOA Law",
    },
  ]

  // Filter lawyers based on search criteria
  const filteredLawyers = lawyers.filter((lawyer) => {
    const matchesSearch =
      searchQuery === "" ||
      lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawyer.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawyer.expertise.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesLocation = location === "" || lawyer.location.toLowerCase().includes(location.toLowerCase())

    const matchesSpecialty =
      specialty === "" ||
      lawyer.specialty.toLowerCase().includes(specialty.toLowerCase()) ||
      lawyer.expertise.some((e) => e.toLowerCase().includes(specialty.toLowerCase()))

    return matchesSearch && matchesLocation && matchesSpecialty
  })

  

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
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Find a Property Law Attorney</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Connect with qualified attorneys specializing in property law to help with your case.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search by name, specialty, or expertise..."
                  className="pl-10 bg-white text-slate-900"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="md:w-auto w-full bg-white text-slate-900 hover:bg-slate-100"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
              <Button className="md:w-auto w-full bg-white text-slate-900 hover:bg-slate-100">Search</Button>
            </div>

            {showFilters && (
              <div className="mt-4 p-4 bg-slate-700 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-white">
                      Location
                    </Label>
                    <Input
                      id="location"
                      placeholder="City, State"
                      className="bg-white text-slate-900"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialty" className="text-white">
                      Specialty
                    </Label>
                    <Select value={specialty} onValueChange={setSpecialty}>
                      <SelectTrigger id="specialty" className="bg-white text-slate-900">
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Specialties</SelectItem>
                        <SelectItem value="boundary">Boundary Disputes</SelectItem>
                        <SelectItem value="tenant">Landlord-Tenant Law</SelectItem>
                        <SelectItem value="title">Title Disputes</SelectItem>
                        <SelectItem value="zoning">Zoning & Land Use</SelectItem>
                        <SelectItem value="litigation">Property Litigation</SelectItem>
                        <SelectItem value="hoa">HOA Law</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <main className="flex-1 py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>

            <TabsContent value="list" className="space-y-6">
              {filteredLawyers.length > 0 ? (
                <>
                  <p className="text-slate-600 mb-4">{filteredLawyers.length} attorneys found</p>
                  {filteredLawyers.map((lawyer) => (
                    <LawyerCard key={lawyer.id} lawyer={lawyer} />
                  ))}
                </>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No attorneys found</h3>
                  <p className="text-slate-600 mb-6">Try adjusting your search criteria</p>
                  <Button
                    onClick={() => {
                      setSearchQuery("")
                      setLocation("")
                      setSpecialty("")
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="map">
  <div className="bg-slate-200 rounded-lg p-4 h-[400px]">
    <MapContainer
      center={[28.6139, 77.2090]} // Default center (e.g., New Delhi)
      zoom={10}
      className="h-full w-full rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      
      {/* Example Markers */}
      <Marker position={[28.6139, 77.2090]}>
        <Popup>New Delhi Attorney Office</Popup>
      </Marker>
      <Marker position={[28.4595, 77.0266]}>
        <Popup>Gurgaon Legal Aid</Popup>
      </Marker>
    </MapContainer>
  </div>
</TabsContent>
          </Tabs>

          <div className="mt-12 bg-white p-6 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold mb-4">Need Help Finding the Right Attorney?</h2>
            <p className="mb-6">
              Our legal referral service can match you with an attorney who specializes in your specific property law
              issue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Request a Referral</Button>
              <Button variant="outline">View Attorney Directory</Button>
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

function LawyerCard({ lawyer }) {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyDetails: '',
    caseDescription: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Card className="overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/4 p-6 flex justify-center items-start">
          <img
            src={lawyer.image || "/placeholder.svg"}
            alt={lawyer.name}
            className="w-29 h-29 object-cover border-4 border-slate-100"
          />
        </div>
        <div className="md:w-3/4">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <CardTitle className="text-xl">{lawyer.name}</CardTitle>
                <CardDescription className="text-base">{lawyer.specialty}</CardDescription>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-amber-500 mr-1 fill-amber-500" />
                <span className="font-medium">{lawyer.rating}</span>
                <span className="text-slate-500 ml-1">({lawyer.reviews} reviews)</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-start mb-3">
                  <MapPin className="h-5 w-5 text-slate-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-slate-700">{lawyer.location}</p>
                    <p className="text-slate-500 text-sm">{lawyer.firm}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <Badge variant="outline" className="mr-2">
                    {lawyer.experience} experience
                  </Badge>
                  <Badge variant="secondary">{lawyer.availability}</Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {lawyer.expertise.map((item, index) => (
                    <Badge key={index} variant="outline" className="bg-slate-100">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 text-slate-500 mr-2" />
                  <p className="text-slate-700">{lawyer.phone}</p>
                </div>
                <div className="flex items-center mb-3">
                  <Mail className="h-5 w-5 text-slate-500 mr-2" />
                  <p className="text-slate-700">{lawyer.email}</p>
                </div>
                <p className="text-slate-500 text-sm mt-2">{lawyer.education}</p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between border-t pt-4">
            {!showForm && (
              <Button onClick={() => setShowForm(true)}>Contact Now</Button>
            )}

            {showForm && !formSubmitted && (
              <form onSubmit={handleSubmit} className="w-full space-y-3 bg-gray-100 p-4 rounded">
                <input name="name" placeholder="Your Name" onChange={handleChange} required className="w-full p-2 border rounded" />
                <input name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full p-2 border rounded" />
                <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required className="w-full p-2 border rounded" />
                <input name="propertyDetails" placeholder="Property Address/Details" onChange={handleChange} required className="w-full p-2 border rounded" />
                <textarea name="caseDescription" placeholder="Brief Case Description" onChange={handleChange} required className="w-full p-2 border rounded" />
                <Button type="submit">Submit</Button>
              </form>
            )}

            {formSubmitted && (
              <div className="w-full p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you for your submission.<br />
                <strong>Disclaimer:</strong> Lawyer will respond within 24 hours.
              </div>
            )}
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

export { LawyerCard };
