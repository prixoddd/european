import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Truck, MapPin, Phone, Mail, Users, Shield, Navigation, Clock } from "lucide-react";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'services', 'fleet', 'partners', 'team'];
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
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Truck className="h-8 w-8 text-brand-red" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">European Express</h1>
                <p className="text-sm text-gray-600">LLC</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'welcome', label: 'Welcome' },
                { id: 'services', label: 'Services' },
                { id: 'fleet', label: 'Fleet' },
                { id: 'partners', label: 'Partners' },
                { id: 'team', label: 'Team' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-brand-blue border-b-2 border-brand-blue' 
                      : 'text-gray-600 hover:text-brand-blue'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="welcome" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Welcome to the 
                  <span className="text-brand-red"> European Express</span> Website!
                </h1>
                <div className="w-16 h-1 bg-brand-blue"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  European Express LLC was established in October 2000 as a company providing 
                  international road freight transport services. We are a member of the Estonian 
                  Association of Carriers.
                </p>
                <p>
                  For transportation solutions, we use both our own fleet and the vehicles of 
                  partner companies.
                </p>
                <p className="font-semibold text-brand-blue">
                  The goal of European Express is to provide high-quality and reliable services, 
                  combined with personal and professional customer care.
                </p>
                <p className="italic">
                  We look forward to pleasant cooperation,<br />
                  <span className="font-bold text-gray-900">EUROPEAN EXPRESS</span>
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx0cmFuc3BvcnRhdGlvbnxlbnwwfHx8fDE3NTg3Mzc5Nzh8MA&ixlib=rb-4.1.0&q=85" 
                  alt="European Express Truck" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-brand-red mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHx0cmFuc3BvcnRhdGlvbnxlbnwwfHx8fDE3NTg3Mzc5Nzh8MA&ixlib=rb-4.1.0&q=85" 
                alt="Freight containers" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Temperature-Controlled Transport</h3>
                  <p className="text-gray-700">
                    Our core business is the transportation of fruits, vegetables, and other temperature-sensitive 
                    goods from all over Europe — particularly from Spain, Portugal, France, Italy, Belgium, and 
                    Germany — to Scandinavia and the Baltic states.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <Navigation className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ferry Crossings</h3>
                  <p className="text-gray-700">
                    We also provide cargo transportation via ferry crossings, ensuring flexible and reliable 
                    logistics solutions across Europe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fleet</h2>
            <div className="w-16 h-1 bg-brand-blue mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Thanks to our dedicated team and an extensive network of reliable partners, 
                we provide professional service.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-brand-red" />
                  <span className="text-gray-700">More than ten modern trucks meeting Euro-5 and Euro-6 standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-brand-red" />
                  <span className="text-gray-700">Latest KRONE refrigerated trailers with Thermo King units</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-brand-red" />
                  <span className="text-gray-700">Each trailer accommodates 33 EUR pallets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Navigation className="h-5 w-5 text-brand-red" />
                  <span className="text-gray-700">Temperature range: -25°C to +25°C</span>
                </div>
              </div>
              
              <Card className="border-brand-blue/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Safety & Insurance</h4>
                  <p className="text-gray-700 mb-3">
                    All trucks and trailers are fully insured with CMR carrier liability and CMR forwarding insurance.
                  </p>
                  <p className="text-gray-700">
                    Equipped with GPS tracking systems: Seeme, Fleetboard, and Dynafleet Online for real-time monitoring.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1755728531186-4efe610d8502?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxsb2dpc3RpY3MlMjB0cnVja3N8ZW58MHx8fHwxNzU4NzM3OTczfDA&ixlib=rb-4.1.0&q=85" 
                alt="Fleet of trucks" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <div className="w-16 h-1 bg-brand-red mx-auto"></div>
          </div>
          
          <Card className="max-w-2xl mx-auto border-2 border-brand-blue/10">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-brand-blue mb-2">JJ Euroopa Express OY</h3>
                <p className="text-gray-600">Our main client in Finland</p>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-brand-red" />
                  <div>
                    <p className="font-medium">Keltintie 89</p>
                    <p className="text-gray-600">32730 Keikyä</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-red" />
                  <p>european.express@kponetti.net</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-red" />
                  <p>Fax: +358 (0)3 513 1525</p>
                </div>
                
                <Separator className="my-4" />
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-900">Jouko Järä</p>
                    <p className="text-brand-blue">+358 (0)50 550 6650</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Nadja Järä</p>
                    <p className="text-brand-blue">+358 (0)500 132 023</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <div className="w-16 h-1 bg-brand-blue mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-brand-red font-medium">{member.title}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-brand-blue" />
                      <p className="text-sm text-gray-700">{member.email}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-brand-blue" />
                      <p className="text-sm text-gray-700">{member.phone}</p>
                    </div>
                    {member.skype && (
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-brand-blue" />
                        <p className="text-sm text-gray-700">Skype: {member.skype}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Truck className="h-8 w-8 text-brand-red" />
                <div>
                  <h3 className="text-xl font-bold">European Express</h3>
                  <p className="text-gray-400">LLC</p>
                </div>
              </div>
              <p className="text-gray-400">
                Professional international road freight transport services since 2000.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Temperature-Controlled Transport</li>
                <li>Ferry Crossings</li>
                <li>European Logistics</li>
                <li>Fleet Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Coverage Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Spain, Portugal, France</li>
                <li>Italy, Belgium, Germany</li>
                <li>Scandinavia</li>
                <li>Baltic States</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 European Express LLC. All rights reserved.</p>
            <p className="mt-2">Member of the Estonian Association of Carriers</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;