import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Truck, MapPin, Phone, Mail, Users, Shield, Navigation, Clock, Building2, Award, Globe, CheckCircle } from "lucide-react";

const CorporateHomepage = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'services', 'fleet', 'partners', 'team'];
      const scrollPosition = window.scrollY + 100;
      setIsScrolled(window.scrollY > 0);

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

    handleScroll();
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
      {/* Corporate Navigation Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-sm'
            : 'bg-white/95 border-b border-gray-100 shadow-sm backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img
                    src="https://customer-assets.emergentagent.com/job_blissful-swartz-1/artifacts/xq650qom_european%20logo_Rajdhani%20copy.png"
                    alt="European Express Logo"
                    className="h-12 w-auto"
                />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">European Express</h1>
                <p className="text-sm text-gray-500 font-medium">LIMITED LIABILITY COMPANY</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-1">
              {[
                { id: 'welcome', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'fleet', label: 'Fleet' },
                { id: 'team', label: 'Team' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`px-6 py-2 text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'bg-brand-blue text-white shadow-md' 
                      : 'text-gray-600 hover:text-brand-blue hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Corporate Hero Section */}
      <section id="welcome" className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-950">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="outline" className="text-brand-blue border-brand-blue/20 bg-brand-blue/5 px-4 py-2">
                  <Building2 className="w-4 h-4 mr-2" />
                  Since 2000 • Estonian Carriers Member
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  European
                  <span className="text-brand-red block"> Logistics</span>
                  <span className="text-brand-blue block"> Excellence</span>
                </h1>
                  <div className="w-40 h-1.5 bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-blue)] rounded-full" />
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="text-xl font-medium text-gray-800">
                  European Express LLC delivers world-class international road freight transport
                  services across Europe with unmatched reliability and professional excellence.
                </p>
                <p>
                  Established in October 2000, we leverage both our modern fleet and strategic
                  partner networks to provide comprehensive transportation solutions.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <p className="font-bold text-brand-blue text-lg mb-2">
                    Our Mission
                  </p>
                  <p className="text-gray-700">
                    To provide high-quality and reliable services, combined with personal
                    and professional customer care that exceeds expectations.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-brand-red" />
                  <span className="text-sm font-medium text-gray-700">25 Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-brand-blue" />
                  <span className="text-sm font-medium text-gray-700">Europe-Wide Coverage</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-red/10 rounded-3xl transform rotate-3"></div>
                <img
                  src="https://media.istockphoto.com/id/1310394787/photo/truck-on-the-road.jpg?s=1024x1024&w=is&k=20&c=JkQYEQltS9q1VCrFMS2_BBo2TBEIBPinuGn6HYS9GN8="
                  alt="European Express Fleet"
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-blue">33+</p>
                    <p className="text-sm text-gray-600">Modern Trucks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-brand-blue border-brand-blue/20 bg-brand-blue/5 px-4 py-2 mb-6">
              <Truck className="w-4 h-4 mr-2" />
              Our Service Portfolio
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Logistics Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized transportation services designed to meet the demanding requirements
              of temperature-sensitive cargo across European markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Card className="overflow-hidden border-0 shadow-lg">
                <img
                  src="https://media.istockphoto.com/id/855984178/photo/wegetables-in-a-warehouse.jpg?s=1024x1024&w=is&k=20&c=j0NBJXllN1VvrRPKnBlGDya4F70A816PUReIygjK3dI="
                  alt="International freight operations"
                  className="w-full h-80 object-cover"
                />
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-l-4 border-l-brand-blue bg-gradient-to-r from-blue-50/50 to-transparent">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <Truck className="h-7 w-7 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900">Temperature-Controlled Transport</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Specialized transportation of fruits, vegetables, and temperature-sensitive goods
                        from major European markets including Spain, Portugal, France, Italy, Belgium,
                        and Germany to Scandinavia and the Baltic states.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">Fresh Produce</Badge>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">Temperature Control</Badge>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">-25°C to +25°C</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-brand-red bg-gradient-to-r from-red-50/50 to-transparent">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                      <Navigation className="h-7 w-7 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900">Ferry Crossing Services</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Comprehensive cargo transportation via ferry crossings, ensuring flexible
                        and reliable logistics solutions across European maritime routes.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">Maritime Routes</Badge>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Cross-Border</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Fleet Section */}
      {/*<section id="fleet" className="py-20 bg-gradient-to-br from-blue-950 via-white to-gray-50">*/}
      <section id="fleet" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-brand-red border-brand-red/20 bg-brand-red/5 px-4 py-2 mb-6 bg-white">
              <Shield className="w-4 h-4 mr-2" />
              Fleet & Technology
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">State-of-the-Art Fleet Management</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our modern fleet and cutting-edge
              technology systems that ensure safe, efficient cargo delivery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Truck className="w-6 h-6 mr-3 text-brand-blue" />
                    Fleet Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <p className="text-2xl font-bold text-brand-blue">33+</p>
                      <p className="text-sm font-medium text-gray-700">Modern Trucks</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <p className="text-2xl font-bold text-green-600">Euro 6</p>
                      <p className="text-sm font-medium text-gray-700">Standards</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-blue" />
                      <span className="text-gray-700">KRONE refrigerated trailers with Thermo King units</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-blue" />
                      <span className="text-gray-700">33 EUR pallets capacity per trailer</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-blue" />
                      <span className="text-gray-700">Full temperature range: -25°C to +25°C</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-blue" />
                      <span className="text-gray-700">Continuously renewed and maintained fleet</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-brand-blue to-brand-red text-white border-0">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-3" />
                    Insurance & Safety
                  </h4>
                  <div className="space-y-3">
                    <p className="text-blue-100">
                      ✓ Comprehensive CMR carrier liability insurance
                    </p>
                    <p className="text-blue-100">
                      ✓ Additional CMR forwarding insurance coverage
                    </p>
                    <p className="text-blue-100">
                      ✓ Real-time GPS tracking: Seeme, Fleetboard, Dynafleet Online
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="overflow-hidden border-0 shadow-2xl">
                <img
                  src="https://media.istockphoto.com/id/1163486626/photo/benavente-transport-terminal-in-northwest-spain-one-of-the-most-important-logistics-centers.jpg?s=1024x1024&w=is&k=20&c=v2uM9MoXuegyVBj16g_8ojXeRsSTMEGHl-RdyABpjYA="
                  alt="European Express fleet of trucks"
                  className="w-full h-96 object-cover"
                />
                {/*<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>*/}
              </Card>
            </div>
          </div>
        </div>
      </section>

        {/* Corporate Partners Section */}
      {/*  <section id="partners" className="py-20 bg-white">*/}
      {/*      <div className="max-w-7xl mx-auto px-8">*/}
      {/*          <div className="text-center mb-16">*/}
      {/*      <Badge variant="outline" className="text-brand-blue border-brand-blue/20 bg-brand-blue/5 px-4 py-2 mb-6">*/}
      {/*        <Building2 className="w-4 h-4 mr-2" />*/}
      {/*        Strategic Partnership*/}
      {/*      </Badge>*/}
      {/*      <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Business Partners</h2>*/}
      {/*      <p className="text-xl text-gray-600 max-w-3xl mx-auto">*/}
      {/*        Building lasting relationships with trusted partners across European markets*/}
      {/*        to ensure comprehensive logistics coverage and service excellence.*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*    <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30">*/}
      {/*      <CardContent className="p-12">*/}
      {/*        <div className="text-center mb-10">*/}
      {/*          <div className="w-20 h-20 bg-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-6">*/}
      {/*            <Building2 className="w-10 h-10 text-white" />*/}
      {/*          </div>*/}
      {/*          <h3 className="text-3xl font-bold text-brand-blue mb-3">JJ Euroopa Express OY</h3>*/}
      {/*          <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-1">*/}
      {/*            Primary Partner • Finland*/}
      {/*          </Badge>*/}
      {/*        </div>*/}

      {/*        <div className="grid md:grid-cols-2 gap-8">*/}
      {/*          <Card className="bg-white border border-gray-100">*/}
      {/*            <CardContent className="p-6 space-y-4">*/}
      {/*              <h4 className="font-bold text-gray-900 flex items-center">*/}
      {/*                <MapPin className="w-5 h-5 mr-2 text-brand-red" />*/}
      {/*                Corporate Address*/}
      {/*              </h4>*/}
      {/*              <div className="text-gray-700">*/}
      {/*                <p className="font-medium">Keltintie 89</p>*/}
      {/*                <p>32730 Keikyä, Finland</p>*/}
      {/*              </div>*/}
      {/*            </CardContent>*/}
      {/*          </Card>*/}

      {/*          <Card className="bg-white border border-gray-100">*/}
      {/*            <CardContent className="p-6 space-y-4">*/}
      {/*              <h4 className="font-bold text-gray-900 flex items-center">*/}
      {/*                <Mail className="w-5 h-5 mr-2 text-brand-red" />*/}
      {/*                Contact Information*/}
      {/*              </h4>*/}
      {/*              <div className="text-gray-700 space-y-1">*/}
      {/*                <p>european.express@kponetti.net</p>*/}
      {/*                <p>Fax: +358 (0)3 513 1525</p>*/}
      {/*              </div>*/}
      {/*            </CardContent>*/}
      {/*          </Card>*/}
      {/*        </div>*/}

      {/*        <Separator className="my-8" />*/}

      {/*        <div className="grid sm:grid-cols-2 gap-6">*/}
      {/*          <Card className="bg-gradient-to-r from-blue-50 to-transparent border border-blue-100">*/}
      {/*            <CardContent className="p-6">*/}
      {/*              <h5 className="font-bold text-gray-900 mb-3">Jouko Järä</h5>*/}
      {/*              <p className="text-brand-blue font-semibold text-lg">+358 (0)50 550 6650</p>*/}
      {/*            </CardContent>*/}
      {/*          </Card>*/}
      {/*          <Card className="bg-gradient-to-r from-red-50 to-transparent border border-red-100">*/}
      {/*            <CardContent className="p-6">*/}
      {/*              <h5 className="font-bold text-gray-900 mb-3">Nadja Järä</h5>*/}
      {/*              <p className="text-brand-red font-semibold text-lg">+358 (0)500 132 023</p>*/}
      {/*            </CardContent>*/}
      {/*          </Card>*/}
      {/*        </div>*/}
      {/*      </CardContent>*/}
      {/*    </Card>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Corporate Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-brand-red border-brand-red/20 bg-brand-red/5 px-4 py-2 mb-6">
              <Users className="w-4 h-4 mr-2" />
              Leadership Team
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our experienced leadership team driving European Express forward with
              dedication, expertise, and commitment to service excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marta Novak",
                title: "OPERATIONS DIRECTOR",
                email: "marta.novak@euroexpress.ee",
                phone: "+372 52 314 709",
                skype: "ops.marta",
                color: "blue"
              },
              {
                name: "Erik Tamm",
                title: "BOARD MEMBER",
                email: "erik.tamm@euroexpress.ee",
                phone: "+372 58 427 183",
                color: "red"
              },
              {
                name: "Ksenia Volkov",
                title: "LOGISTICS MANAGER",
                email: "ksenia.volkov@euroexpress.ee",
                phone: "+372 55 198 442",
                skype: "ksenia.logi",
                color: "green"
              },
              {
                name: "Dmitri Korhonen",
                title: "CARGO MANAGER",
                email: "dmitri.korhonen@euroexpress.ee",
                phone: "+372 50 773 920",
                skype: "dk_cargo",
                color: "purple"
              },
              {
                name: "Anna Ruut",
                title: "SHIPMENT MANAGER",
                email: "anna.ruut@euroexpress.ee",
                phone: "+372 56 664 311",
                skype: "anna.ship",
                color: "orange"
              },
              {
                name: "Paavo Leht",
                title: "TRANSPORT COORDINATOR",
                email: "paavo.leht@euroexpress.ee",
                phone: "+372 57 240 559",
                color: "cyan"
              },
              {
                name: "Ilona Sokolova",
                title: "CUSTOMER SERVICE MANAGER",
                email: "ilona.sokolova@euroexpress.ee",
                phone: "+372 53 982 207",
                skype: "ilona.cs",
                color: "pink"
              },
              {
                name: "Markus Saar",
                title: "FERRY OPERATIONS",
                email: "markus.saar@euroexpress.ee",
                phone: "+372 54 117 886",
                skype: "markus.ferry",
                color: "indigo"
              }
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      member.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      member.color === 'red' ? 'from-red-500 to-red-600' :
                      member.color === 'green' ? 'from-green-500 to-green-600' :
                      member.color === 'purple' ? 'from-purple-500 to-purple-600' :
                      member.color === 'orange' ? 'from-orange-500 to-orange-600' :
                      member.color === 'cyan' ? 'from-cyan-500 to-cyan-600' :
                      member.color === 'pink' ? 'from-pink-500 to-pink-600' :
                      'from-indigo-500 to-indigo-600'
                    } rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200`}>
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">{member.name}</h3>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs font-medium">
                        {member.title}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-brand-blue flex-shrink-0" />
                      <p className="text-sm text-gray-700 truncate">{member.email}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-brand-red flex-shrink-0" />
                      <p className="text-sm font-medium text-gray-700">{member.phone}</p>
                    </div>
                    {member.skype && (
                      <div className="flex items-center space-x-3">
                        <Users className="h-4 w-4 text-green-600 flex-shrink-0" />
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

      {/* Corporate Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                    <img
                        src="https://customer-assets.emergentagent.com/job_blissful-swartz-1/artifacts/xq650qom_european%20logo_Rajdhani%20copy.png"
                        alt="European Express Logo"
                        className="h-12 w-auto"
                    />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">European Express</h3>
                  <p className="text-gray-400">Limited Liability Company</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Professional international road freight transport services since 2000.
                Delivering excellence across European markets with reliability and innovation.
              </p>
              <div className="flex items-center space-x-6">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                  <Award className="w-4 h-4 mr-2" />
                  25 Years
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                  <Shield className="w-4 h-4 mr-2" />
                  Fully Insured
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-blue" />
                  <span>Temperature-Controlled Transport</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-blue" />
                  <span>Ferry Crossings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-blue" />
                  <span>European Logistics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-blue" />
                  <span>Fleet Management</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Coverage Areas</h4>
              <ul className="space-y-3 text-gray-300">
                <li>🇪🇸 Spain • 🇵🇹 Portugal</li>
                <li>🇫🇷 France • 🇮🇹 Italy</li>
                <li>🇧🇪 Belgium • 🇩🇪 Germany</li>
                <li>🇸🇪 🇳🇴 🇩🇰 Scandinavia</li>
                <li>🇪🇪 🇱🇻 🇱🇹 Baltic States</li>
              </ul>
            </div>
          </div>

          <Separator className="my-12 bg-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2025 European Express LLC. All rights reserved.</p>
              <p className="mt-1">Member of the Estonian Association of Carriers</p>
            </div>
            {/*<div className="flex items-center space-x-2 text-gray-400">*/}
            {/*  <Building2 className="w-4 h-4" />*/}
            {/*  <span className="text-sm">Professional Logistics Excellence</span>*/}
            {/*</div>*/}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CorporateHomepage;
