import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Truck, MapPin, Phone, Mail, Users, Shield, Navigation, Clock, Building2, Award, Globe, CheckCircle, Zap, Star, ArrowRight } from "lucide-react";

const ModernHomepage = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-blue/10 to-brand-red/10 rounded-full blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-brand-red/10 to-purple-400/10 rounded-full blur-3xl animate-float-delayed"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        ></div>
      </div>

      {/* Modern Glass Navigation */}
      <header className="fixed top-0 w-full z-50">
        <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 group">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-red rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Truck className="h-7 w-7 text-white animate-pulse" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-brand-blue/20 to-brand-red/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    European Express
                  </h1>
                  <p className="text-sm text-gray-500 font-medium">Modern Logistics Solutions</p>
                </div>
              </div>
              
              <nav className="hidden md:flex space-x-2">
                {[
                  { id: 'welcome', label: 'Home', icon: Building2 },
                  { id: 'services', label: 'Services', icon: Truck },
                  { id: 'fleet', label: 'Fleet', icon: Shield },
                  { id: 'partners', label: 'Partners', icon: Globe },
                  { id: 'team', label: 'Team', icon: Users }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                        activeSection === item.id 
                          ? 'bg-gradient-to-r from-brand-blue to-brand-red text-white shadow-lg shadow-brand-blue/25' 
                          : 'text-gray-600 hover:text-brand-blue hover:bg-white/60 hover:shadow-md'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </Button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Animated Hero Section */}
      <section id="welcome" className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg animate-bounce-in">
                  <Star className="w-4 h-4 text-yellow-500 mr-2 animate-spin-slow" />
                  <span className="text-sm font-medium text-gray-700">Since 2000 • Premium Logistics</span>
                  <Zap className="w-4 h-4 text-brand-blue ml-2" />
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent animate-gradient">
                    European
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-brand-red via-red-500 to-brand-red bg-clip-text text-transparent animate-gradient-delayed">
                    Express
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-brand-blue via-blue-500 to-brand-blue bg-clip-text text-transparent animate-gradient">
                    Logistics
                  </span>
                </h1>
                
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-red via-purple-500 to-brand-blue rounded-full animate-pulse-glow"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed animate-fade-in-up-delayed">
                <p className="text-2xl font-medium text-gray-800 animate-type-writer">
                  Revolutionizing European logistics with cutting-edge technology and 
                  unmatched reliability since 2000.
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  We leverage advanced fleet management and strategic partnerships to deliver 
                  world-class transportation solutions across Europe.
                </p>
                
                <div className="relative bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-red/5 rounded-3xl"></div>
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <Award className="w-6 h-6 text-brand-blue mr-3 animate-bounce" />
                      <h3 className="font-bold text-xl text-gray-900">Our Mission</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      To provide high-quality and reliable services, combined with personal 
                      and professional customer care that exceeds expectations through innovation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6 animate-fade-in-up-delayed">
                {[
                  { icon: Award, text: "24+ Years", color: "from-yellow-400 to-orange-500" },
                  { icon: Globe, text: "Europe-Wide", color: "from-green-400 to-blue-500" },
                  { icon: Shield, text: "Fully Insured", color: "from-purple-400 to-pink-500" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="relative group">
                {/* Animated border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-purple-500 to-brand-red rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-500 animate-gradient-border"></div>
                
                <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx0cmFuc3BvcnRhdGlvbnxlbnwwfHx8fDE3NTg3Mzc5Nzh8MA&ixlib=rb-4.1.0&q=85" 
                    alt="Modern European Express Fleet" 
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/30 animate-float">
                  <div className="text-center">
                    <p className="text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">
                      10+
                    </p>
                    <p className="text-sm font-medium text-gray-600">Modern Trucks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg mb-8">
              <Truck className="w-5 h-5 text-brand-blue mr-2 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">Premium Services Portfolio</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Next-Gen Logistics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced transportation services engineered for the future of European logistics 
              with temperature-precision technology.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-fade-in-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHx0cmFuc3BvcnRhdGlvbnxlbnwwfHx8fDE3NTg3Mzc5Nzh8MA&ixlib=rb-4.1.0&q=85" 
                    alt="Advanced freight operations" 
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in-right">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Card className="relative bg-white/70 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <Truck className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-brand-blue/20 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">Temperature-Controlled Excellence</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Precision transportation of fresh produce and temperature-sensitive goods 
                          across major European markets with real-time monitoring and control systems.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {[
                            { text: "Fresh Produce", color: "from-green-400 to-emerald-500" },
                            { text: "Smart Monitoring", color: "from-blue-400 to-cyan-500" },
                            { text: "-25°C to +25°C", color: "from-purple-400 to-pink-500" }
                          ].map((badge, idx) => (
                            <Badge key={idx} variant="secondary" className={`bg-gradient-to-r ${badge.color} text-white border-0 px-3 py-1 animate-bounce-in`}>
                              {badge.text}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-red/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Card className="relative bg-white/70 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <Navigation className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-brand-red/20 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">Advanced Ferry Solutions</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Seamless maritime logistics with optimized ferry crossings ensuring 
                          flexible and reliable cargo transportation across European waters.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {[
                            { text: "Maritime Routes", color: "from-cyan-400 to-blue-500" },
                            { text: "Cross-Border", color: "from-indigo-400 to-purple-500" }
                          ].map((badge, idx) => (
                            <Badge key={idx} variant="secondary" className={`bg-gradient-to-r ${badge.color} text-white border-0 px-3 py-1 animate-bounce-in`}>
                              {badge.text}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Fleet Section */}
      <section id="fleet" className="py-20 bg-white/40 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <Shield className="w-5 h-5 text-brand-red mr-2 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">Advanced Fleet Technology</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Smart Fleet Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of logistics with our intelligent fleet equipped with 
              cutting-edge technology and real-time monitoring systems.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    Smart Fleet Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      <p className="text-3xl font-bold bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">10+</p>
                      <p className="text-sm font-medium text-gray-700">Smart Trucks</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      <p className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Euro 5-6</p>
                      <p className="text-sm font-medium text-gray-700">Standards</p>
                    </div>
                  </div>
                  
                  <Separator className="bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  
                  <div className="space-y-4">
                    {[
                      "KRONE refrigerated trailers with Thermo King units",
                      "33 EUR pallets capacity per trailer",
                      "Full temperature range: -25°C to +25°C",
                      "Continuously renewed and maintained fleet"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 group">
                        <div className="w-6 h-6 bg-gradient-to-r from-brand-blue to-cyan-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-brand-blue via-purple-600 to-brand-red text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <CardContent className="relative p-8">
                  <h4 className="text-2xl font-bold mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 animate-pulse" />
                    Advanced Security & Insurance
                  </h4>
                  <div className="space-y-4">
                    {[
                      "Comprehensive CMR carrier liability insurance",
                      "Additional CMR forwarding insurance coverage", 
                      "Real-time GPS tracking: Seeme, Fleetboard, Dynafleet Online"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 group">
                        <CheckCircle className="w-5 h-5 text-green-300 animate-bounce" />
                        <p className="text-white/90 group-hover:text-white transition-colors duration-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-500 animate-gradient-border"></div>
                <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1755728531186-4efe610d8502?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxsb2dpc3RpY3MlMjB0cnVja3N8ZW58MHx8fHwxNzU4NzM3OTczfDA&ixlib=rb-4.1.0&q=85" 
                    alt="Modern European Express fleet" 
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Partners Section */}
      <section id="partners" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg mb-8">
              <Building2 className="w-5 h-5 text-brand-blue mr-2 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">Strategic Partnerships</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Global Network Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building the future of logistics through innovative partnerships and 
              collaborative excellence across European markets.
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-blue to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Building2 className="w-12 h-12 text-white animate-pulse" />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/20 to-purple-600/20 rounded-3xl blur-xl animate-pulse-glow"></div>
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-brand-blue to-purple-600 bg-clip-text text-transparent mb-4">
                  JJ Euroopa Express OY
                </h3>
                <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-6 py-2 text-sm">
                  Primary Partner • Finland Operations
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm border border-white/30 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <h4 className="font-bold text-xl text-gray-900 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-red to-pink-500 rounded-lg flex items-center justify-center mr-3">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      Headquarters
                    </h4>
                    <div className="text-gray-700 space-y-2">
                      <p className="font-semibold">Keltintie 89</p>
                      <p>32730 Keikyä, Finland</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-white/80 to-green-50/80 backdrop-blur-sm border border-white/30 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <h4 className="font-bold text-xl text-gray-900 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      Contact Hub
                    </h4>
                    <div className="text-gray-700 space-y-2">
                      <p>european.express@kponetti.net</p>
                      <p>Fax: +358 (0)3 513 1525</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Separator className="my-10 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { name: "Jouko Järä", phone: "+358 (0)50 550 6650", color: "from-blue-500 to-cyan-500" },
                  { name: "Nadja Järä", phone: "+358 (0)500 132 023", color: "from-red-500 to-pink-500" }
                ].map((contact, idx) => (
                  <Card key={idx} className={`bg-gradient-to-r ${contact.color} text-white border-0 hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                    <CardContent className="p-8">
                      <h5 className="font-bold text-xl mb-3">{contact.name}</h5>
                      <p className="text-lg font-semibold opacity-90">{contact.phone}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modern Team Section */}
      <section id="team" className="py-20 bg-white/40 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <Users className="w-5 h-5 text-brand-red mr-2 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">Leadership Excellence</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Innovative Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet our visionary leaders driving European Express into the future with 
              expertise, innovation, and unwavering commitment to excellence.
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
                gradient: "from-blue-500 via-blue-600 to-indigo-600"
              },
              {
                name: "Erik Tamm", 
                title: "BOARD MEMBER",
                email: "erik.tamm@euroexpress.ee",
                phone: "+372 58 427 183",
                gradient: "from-red-500 via-red-600 to-pink-600"
              },
              {
                name: "Ksenia Volkov",
                title: "LOGISTICS MANAGER", 
                email: "ksenia.volkov@euroexpress.ee",
                phone: "+372 55 198 442",
                skype: "ksenia.logi",
                gradient: "from-green-500 via-green-600 to-emerald-600"
              },
              {
                name: "Dmitri Korhonen",
                title: "CARGO MANAGER",
                email: "dmitri.korhonen@euroexpress.ee",
                phone: "+372 50 773 920",
                skype: "dk_cargo", 
                gradient: "from-purple-500 via-purple-600 to-violet-600"
              },
              {
                name: "Anna Ruut",
                title: "SHIPMENT MANAGER",
                email: "anna.ruut@euroexpress.ee",
                phone: "+372 56 664 311",
                skype: "anna.ship",
                gradient: "from-orange-500 via-orange-600 to-red-600"
              },
              {
                name: "Paavo Leht",
                title: "TRANSPORT COORDINATOR",
                email: "paavo.leht@euroexpress.ee", 
                phone: "+372 57 240 559",
                gradient: "from-cyan-500 via-cyan-600 to-blue-600"
              },
              {
                name: "Ilona Sokolova",
                title: "CUSTOMER SERVICE MANAGER",
                email: "ilona.sokolova@euroexpress.ee",
                phone: "+372 53 982 207",
                skype: "ilona.cs",
                gradient: "from-pink-500 via-pink-600 to-rose-600"
              },
              {
                name: "Markus Saar", 
                title: "FERRY OPERATIONS",
                email: "markus.saar@euroexpress.ee",
                phone: "+372 54 117 886",
                skype: "markus.ferry",
                gradient: "from-indigo-500 via-indigo-600 to-purple-600"
              }
            ].map((member, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <Users className="h-10 w-10 text-white animate-pulse" />
                      </div>
                      <div className={`absolute -inset-2 bg-gradient-to-br ${member.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-gray-800 transition-colors duration-200">{member.name}</h3>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs font-medium mt-1">
                        {member.title}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-cyan-500 rounded-lg flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-200">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-sm text-gray-700 truncate group-hover/item:text-gray-900 transition-colors duration-200">{member.email}</p>
                    </div>
                    <div className="flex items-center space-x-3 group/item">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-red to-pink-500 rounded-lg flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-200">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">{member.phone}</p>
                    </div>
                    {member.skype && (
                      <div className="flex items-center space-x-3 group/item">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-200">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">Skype: {member.skype}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-red/10"></div>
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  <Truck className="h-8 w-8 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">European Express</h3>
                  <p className="text-gray-400">Next-Gen Logistics Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Revolutionizing European logistics since 2000 with cutting-edge technology, 
                sustainable practices, and unwavering commitment to excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Award, text: "24+ Years", color: "from-yellow-400 to-orange-500" },
                  { icon: Shield, text: "Fully Insured", color: "from-green-400 to-emerald-500" },
                  { icon: Globe, text: "Europe-Wide", color: "from-blue-400 to-cyan-500" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-white">Premium Services</h4>
              <ul className="space-y-3">
                {[
                  "Temperature-Controlled Transport",
                  "Advanced Ferry Crossings", 
                  "Smart Fleet Management",
                  "Real-time Tracking"
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-brand-blue to-cyan-500 rounded-full transform group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-white">Global Coverage</h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  "🇪🇸 Spain • 🇵🇹 Portugal",
                  "🇫🇷 France • 🇮🇹 Italy", 
                  "🇧🇪 Belgium • 🇩🇪 Germany",
                  "🇸🇪 🇳🇴 🇩🇰 Scandinavia",
                  "🇪🇪 🇱🇻 🇱🇹 Baltic States"
                ].map((area, idx) => (
                  <li key={idx} className="hover:text-white transition-colors duration-200 cursor-default">{area}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <Separator className="my-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2024 European Express LLC. All rights reserved.</p>
              <p className="mt-1">Member of the Estonian Association of Carriers • Future of Logistics</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-red rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white animate-pulse" />
              </div>
              <span className="text-sm text-gray-400">Powered by Innovation</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernHomepage;