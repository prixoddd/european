import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Truck, MapPin, Phone, Mail, Users, Shield, Navigation, Clock, Building2, Award, Globe, CheckCircle, Package, Target, Anchor, Map, Route } from "lucide-react";

const FinalEnhancedHomepage = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'services', 'routes', 'fleet', 'team'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <header className="fixed top-0 w-full bg-white border-b-2 border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://customer-assets.emergentagent.com/job_blissful-swartz-1/artifacts/xq650qom_european%20logo_Rajdhani%20copy.png" 
                  alt="European Express Logo" 
                  className="h-12 w-auto"
                />
                <div className="border-l-2 border-gray-200 pl-4">
                  <h1 className="text-xl font-bold text-gray-900 tracking-wide uppercase">European Express</h1>
                  <p className="text-xs text-gray-600 font-medium tracking-widest">LIMITED LIABILITY COMPANY</p>
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'welcome', label: 'ABOUT' },
                { id: 'services', label: 'SERVICES' },
                { id: 'routes', label: 'ROUTES' },
                { id: 'fleet', label: 'FLEET' },
                { id: 'team', label: 'TEAM' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-semibold tracking-wider transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-brand-red border-b-2 border-brand-red' 
                      : 'text-gray-700 hover:text-brand-blue border-b-2 border-transparent hover:border-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Updated Text */}
      <section id="welcome" className="pt-28 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-16 bg-brand-red"></div>
                  <div>
                    <Badge variant="outline" className="border-brand-blue text-brand-blue bg-white mb-4 px-4 py-1">
                      <Award className="w-4 h-4 mr-2" />
                      ESTABLISHED 2000
                    </Badge>
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                      <span className="text-brand-red">European Express</span><br />
                      <span className="text-brand-blue">Temperature-sensitive cargo across Europe</span>
                    </h1>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                <div className="bg-white p-8 border-l-4 border-brand-blue shadow-sm">
                  <p className="text-xl font-medium text-gray-900 mb-4">
                    European Express LLC was established in October 2000 as a company providing 
                    international road freight transport services.
                  </p>
                  <p className="mb-4">
                    We are a member of the Estonian Association of Carriers. For transportation 
                    solutions, we use both our own fleet and the vehicles of partner companies.
                  </p>
                  <div className="mt-6 p-6 bg-gray-50 border border-gray-200">
                    <p className="font-semibold text-brand-blue text-lg mb-2 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Our Mission
                    </p>
                    <p className="text-gray-800 italic">
                      "The goal of European Express is to provide high-quality and reliable services, 
                      combined with personal and professional customer care."
                    </p>
                  </div>
                  <div className="mt-6 text-right">
                    <p className="text-gray-600 font-medium">We look forward to pleasant cooperation,</p>
                    <p className="text-brand-red font-bold text-xl tracking-wider">EUROPEAN EXPRESS</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { value: "25+", label: "Years Experience", icon: Award },
                  { value: "33+", label: "Modern Trucks", icon: Truck },
                  { value: "100%", label: "Reliability", icon: Shield }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <p className="text-2xl font-bold text-brand-red">{stat.value}</p>
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-2 border-2 border-gray-200 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1636710899183-70d75ddf0036?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGxvZ2lzdGljcyUyMHJvdXRlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NTg3NDE3Mjh8MA&ixlib=rb-4.1.0&q=85" 
                  alt="European Express Professional Fleet" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-6 right-6 bg-white p-4 shadow-lg border border-gray-200">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">MEMBER OF</p>
                    <p className="text-xs font-bold text-brand-blue">ESTONIAN ASSOCIATION</p>
                    <p className="text-xs font-bold text-brand-blue">OF CARRIERS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gray-300 flex-1"></div>
              <div className="px-6">
                <Badge variant="outline" className="border-brand-red text-brand-red bg-white px-6 py-2 text-sm font-semibold tracking-wider">
                  OUR SERVICES
                </Badge>
              </div>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Professional Transportation Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized logistics solutions for temperature-sensitive cargo across European markets, 
              delivered with traditional reliability and modern efficiency.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-white border-2 border-gray-200 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1754388088242-9444d5d66710?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxldXJvcGVhbiUyMGxvZ2lzdGljcyUyMHJvdXRlcyUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NTg3NDE3Mjh8MA&ixlib=rb-4.1.0&q=85" 
                  alt="Multi-modal logistics operations" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-medium tracking-wide">MULTI-MODAL LOGISTICS OPERATIONS</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-brand-blue rounded-sm flex items-center justify-center flex-shrink-0">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Temperature-Controlled Transport</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our core business is the transportation of fruits, vegetables, and other temperature-sensitive 
                      goods from all over Europe — particularly from Spain, Portugal, France, Italy, Belgium, 
                      and Germany — to Scandinavia and the Baltic states.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center p-3 bg-gray-50 border border-gray-200">
                        <p className="font-bold text-brand-red">33</p>
                        <p className="text-xs text-gray-600">EUR Pallets</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 border border-gray-200">
                        <p className="font-bold text-brand-blue">-25°C to +25°C</p>
                        <p className="text-xs text-gray-600">Temperature Range</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-brand-red rounded-sm flex items-center justify-center flex-shrink-0">
                    <Anchor className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Ferry Crossings</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We also provide cargo transportation via ferry crossings, ensuring flexible and reliable 
                      logistics solutions across Europe with specialized maritime logistics expertise.
                    </p>
                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-brand-blue rounded-sm"></div>
                        <span className="text-sm text-gray-600">Maritime Routes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-brand-red rounded-sm"></div>
                        <span className="text-sm text-gray-600">Cross-Border Solutions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* European Service Routes Map Section */}
      <section id="routes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gray-300 flex-1"></div>
              <div className="px-6">
                <Badge variant="outline" className="border-brand-blue text-brand-blue bg-white px-6 py-2 text-sm font-semibold tracking-wider">
                  <Map className="w-4 h-4 mr-2" />
                  SERVICE COVERAGE MAP
                </Badge>
              </div>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">European Logistics Network</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive transportation network spans across major European markets, 
              connecting suppliers and customers with reliable, efficient logistics solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Card className="bg-white border-2 border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Globe className="w-6 h-6 mr-3 text-brand-blue" />
                    Countries We Serve
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { country: "🇪🇸 Spain", routes: "Southern Routes" },
                      { country: "🇵🇹 Portugal", routes: "Atlantic Routes" },
                      { country: "🇫🇷 France", routes: "Central Routes" },
                      { country: "🇮🇹 Italy", routes: "Mediterranean" },
                      { country: "🇧🇪 Belgium", routes: "Benelux Hub" },
                      { country: "🇩🇪 Germany", routes: "Central Europe" },
                      { country: "🇸🇪 Sweden", routes: "Scandinavian" },
                      { country: "🇳🇴 Norway", routes: "Nordic Routes" },
                      { country: "🇩🇰 Denmark", routes: "Baltic Gateway" },
                      { country: "🇫🇮 Finland", routes: "Ferry Routes" },
                      { country: "🇪🇪 Estonia", routes: "Baltic States" },
                      { country: "🇱🇻 Latvia", routes: "Regional Hub" },
                      { country: "🇱🇹 Lithuania", routes: "Eastern Access" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                        <div className="text-center">
                          <p className="font-bold text-lg mb-1">{item.country}</p>
                          <p className="text-xs text-gray-600">{item.routes}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="bg-brand-blue text-white p-6 rounded-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <Route className="w-5 h-5 mr-2" />
                      Coverage Statistics
                    </h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold">13</p>
                        <p className="text-sm">Countries</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">6</p>
                        <p className="text-sm">Major Routes</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">24/7</p>
                        <p className="text-sm">Operations</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-2 border-2 border-gray-200 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1606964212858-c215029db704?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxsb2dpc3RpY3N8ZW58MHx8fHwxNzU4NzQxNzM0fDA&ixlib=rb-4.1.0&q=85" 
                  alt="European logistics network map" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-medium tracking-wide">EUROPEAN TRANSPORTATION NETWORK</p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Navigation className="w-5 h-5 mr-2 text-brand-red" />
                  Key Route Connections
                </h3>
                <div className="space-y-3">
                  {[
                    "Spain/Portugal → Scandinavia & Baltic States",
                    "France/Italy → Northern European Markets",
                    "Germany/Belgium → Ferry Connections to Finland",
                    "Cross-border temperature-controlled corridors"
                  ].map((route, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-brand-blue flex-shrink-0" />
                      <span className="text-sm text-gray-700">{route}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gray-300 flex-1"></div>
              <div className="px-6">
                <Badge variant="outline" className="border-brand-blue text-brand-blue bg-white px-6 py-2 text-sm font-semibold tracking-wider">
                  OUR FLEET
                </Badge>
              </div>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Professional Fleet Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Thanks to our dedicated team and an extensive network of reliable partners, 
              we provide professional service with modern equipment and traditional values.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Truck className="w-6 h-6 mr-3 text-brand-blue" />
                  Fleet Specifications
                </h3>
                
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Our vehicle fleet is constantly being renewed. At present, we operate more than thirty-three
                    modern trucks that meet Euro-5 and Euro-6 standards.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 border border-gray-200">
                      <div className="w-8 h-8 bg-brand-blue rounded-sm flex items-center justify-center mx-auto mb-2">
                        <Truck className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-brand-blue">33+</p>
                      <p className="text-sm text-gray-600">Modern Trucks</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 border border-gray-200">
                      <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center mx-auto mb-2">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-brand-red">Euro 5-6</p>
                      <p className="text-sm text-gray-600">Standards</p>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-4">
                    {[
                      "Latest KRONE refrigerated trailers equipped with Thermo King units",
                      "Modern and well-maintained equipment ensures safe transport",
                      "Each refrigerated semi-trailer accommodates 33 EUR pallets",
                      "Temperature range of -25 °C to +25 °C for optimal cargo protection"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-blue text-white p-8 border-2 border-brand-blue">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-3" />
                  Insurance & Safety Standards
                </h4>
                <div className="space-y-3 text-sm">
                  <p>✓ Our trucks and trailers are insured and additionally covered by both CMR carrier liability and CMR forwarding insurance.</p>
                  <p>✓ All vehicles are equipped with navigation and tracking systems such as Seeme, Fleetboard, and Dynafleet Online.</p>
                  <p>✓ This allows us to monitor their location in real time and better coordinate their movements.</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-2 border-2 border-gray-200 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3N8ZW58MHx8fHwxNzU4NzQxNzM0fDA&ixlib=rb-4.1.0&q=85" 
                  alt="European Express fleet operations" 
                  className="w-full h-96 object-cover"
                />
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-medium tracking-wide">FLEET OPERATIONS AND MAINTENANCE FACILITY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gray-300 flex-1"></div>
              <div className="px-6">
                <Badge variant="outline" className="border-brand-blue text-brand-blue bg-white px-6 py-2 text-sm font-semibold tracking-wider">
                  OUR TEAM
                </Badge>
              </div>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Professional Team Members</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our experienced professionals who ensure the highest standards of service 
              delivery and customer satisfaction in European logistics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marta Novak",
                title: "OPERATIONS DIRECTOR",
                email: "marta.novak@euroexpress.ee",
                phone: "+372 52 314 709",
                skype: "ops.marta"
              },
              {
                name: "Erik Tamm",
                title: "BOARD MEMBER",
                email: "erik.tamm@euroexpress.ee",
                phone: "+372 58 427 183"
              },
              {
                name: "Ksenia Volkov",
                title: "LOGISTICS MANAGER",
                email: "ksenia.volkov@euroexpress.ee",
                phone: "+372 55 198 442",
                skype: "ksenia.logi"
              },
              {
                name: "Dmitri Korhonen",
                title: "CARGO MANAGER",
                email: "dmitri.korhonen@euroexpress.ee",
                phone: "+372 50 773 920",
                skype: "dk_cargo"
              },
              {
                name: "Anna Ruut",
                title: "SHIPMENT MANAGER",
                email: "anna.ruut@euroexpress.ee",
                phone: "+372 56 664 311",
                skype: "anna.ship"
              },
              {
                name: "Paavo Leht",
                title: "TRANSPORT COORDINATOR",
                email: "paavo.leht@euroexpress.ee",
                phone: "+372 57 240 559"
              },
              {
                name: "Ilona Sokolova",
                title: "CUSTOMER SERVICE MANAGER",
                email: "ilona.sokolova@euroexpress.ee",
                phone: "+372 53 982 207",
                skype: "ilona.cs"
              },
              {
                name: "Markus Saar",
                title: "FERRY OPERATIONS",
                email: "markus.saar@euroexpress.ee",
                phone: "+372 54 117 886",
                skype: "markus.ferry"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gray-100 border-2 border-gray-200 rounded-sm flex items-center justify-center">
                      <Users className="h-8 w-8 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 tracking-tight">{member.name}</h3>
                      <p className="text-sm text-brand-red font-semibold tracking-wider">{member.title}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 pb-2 border-b border-gray-100">
                      <Mail className="h-4 w-4 text-brand-blue" />
                      <p className="text-sm text-gray-700 font-medium">{member.email}</p>
                    </div>
                    <div className="flex items-center space-x-3 pb-2 border-b border-gray-100">
                      <Phone className="h-4 w-4 text-brand-red" />
                      <p className="text-sm font-bold text-gray-900">{member.phone}</p>
                    </div>
                    {member.skype && (
                      <div className="flex items-center space-x-3">
                        <Users className="h-4 w-4 text-green-600" />
                        <p className="text-sm text-gray-600">Skype: <span className="font-medium">{member.skype}</span></p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Logo */}
      <footer className="bg-gray-900 text-white py-16 border-t-4 border-brand-red">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <img 
                  src="https://customer-assets.emergentagent.com/job_blissful-swartz-1/artifacts/xq650qom_european%20logo_Rajdhani%20copy.png" 
                  alt="European Express Logo" 
                  className="h-16 w-auto"
                />
                <div className="border-l-2 border-gray-600 pl-4">
                  <h3 className="text-2xl font-bold tracking-wide">EUROPEAN EXPRESS</h3>
                  <p className="text-gray-400 text-sm tracking-widest">LIMITED LIABILITY COMPANY</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Professional international road freight transport services since 2000. 
                Committed to excellence in European logistics with traditional values and modern efficiency.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Years of Service", value: "25+" },
                  { label: "Modern Fleet", value: "33+" },
                  { label: "Countries Served", value: "13+" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-gray-800 border border-gray-700">
                    <p className="text-2xl font-bold text-brand-red">{stat.value}</p>
                    <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-white tracking-wider">SERVICES</h4>
              <ul className="space-y-3">
                {[
                  "Temperature-Controlled Transport",
                  "Ferry Crossings",
                  "European Logistics",
                  "Fleet Management",
                  "Real-time Tracking"
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue rounded-sm"></div>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-white tracking-wider">COVERAGE</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>🇪🇸 Spain • 🇵🇹 Portugal</li>
                <li>🇫🇷 France • 🇮🇹 Italy</li>
                <li>🇧🇪 Belgium • 🇩🇪 Germany</li>
                <li>🇸🇪 🇳🇴 🇩🇰 Scandinavia</li>
                <li>🇪🇪 🇱🇻 🇱🇹 Baltic States</li>
                <li>🇫🇮 Finland</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-12 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2024 European Express LLC. All rights reserved.</p>
              <p className="mt-1">Member of the Estonian Association of Carriers</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-gray-600 text-gray-400 bg-transparent">
                <Award className="w-4 h-4 mr-2" />
                Professional Excellence
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-400 bg-transparent">
                <Shield className="w-4 h-4 mr-2" />
                Fully Insured
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinalEnhancedHomepage;