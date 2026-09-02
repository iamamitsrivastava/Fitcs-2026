'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Car, Wifi, Utensils, Accessibility, Bus, Projector, Share } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'

export default function Venue() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)

  const venueImages = [
    {
      src: '/assets/main_gate_v2.png',
      alt: 'Parul University Main Gate',
      title: 'Main Gate'
    },
    {
      src: '/assets/pu_admin_side.webp',
      alt: 'Admin Side',
      title: 'Admin Side'
    },
    {
      src: '/assets/ilovepu.webp',
      alt: 'I Love PU',
      title: 'I Love PU'
    }
  ]

  const facilities = [
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Free high-speed internet throughout the venue',
      details: 'Enterprise-grade WiFi with 24/7 technical support and backup connections.'
    },
    {
      icon: Projector,
      title: 'Modern AV Equipment',
      description: 'State-of-the-art audio-visual systems',
      details: 'Professional projectors, sound systems, and recording facilities in all halls.'
    },
    {
      icon: Utensils,
      title: 'Catering Services',
      description: 'Professional catering and dining facilities',
      details: 'Multiple dining options including vegetarian, vegan, and international cuisine.'
    },
    {
      icon: Car,
      title: 'Ample Parking',
      description: 'Secure parking for 500+ vehicles',
      details: 'Covered and open parking areas with 24/7 security surveillance.'
    },
    {
      icon: Accessibility,
      title: 'Accessibility',
      description: 'Fully accessible for people with disabilities',
      details: 'Wheelchair ramps, accessible restrooms, and dedicated seating areas.'
    },
    {
      icon: Bus,
      title: 'Transportation',
      description: 'Easy access via multiple transport options',
      details: 'Direct bus routes, taxi services, and shuttle arrangements available.'
    }
  ]

  const handleFeatureClick = (featureTitle: string) => {
    const feature = facilities.find(f => f.title === featureTitle)
    if (feature) {
      // alert(`${feature.title}: ${feature.details}`)
    }
  }

  const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7173104615913!2d73.3634204!3d22.2886958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fda2400192473%3A0xc319c9237f2928e8!2sParul%20University!5e0!3m2!1sen!2sin!4v1758734374591!5m2!1sen!2sin");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const getDirections = (mode: string) => {
    // For Air and Train, we don't need their live location. 
    // We should route them from the destination's nearest Airport/Station to the University.
    if (mode === 'air') {
      const url = `https://maps.google.com/maps?f=d&source=s_d&saddr=Vadodara+Airport,+Gujarat&daddr=Parul+University+Vadodara,+Gujarat&dirflg=d&t=m&z=12&output=embed`;
      setMapUrl(url);
      return;
    } else if (mode === 'train') {
      const url = `https://maps.google.com/maps?f=d&source=s_d&saddr=Vadodara+Railway+Station,+Gujarat&daddr=Parul+University+Vadodara,+Gujarat&dirflg=d&t=m&z=12&output=embed`;
      setMapUrl(url);
      return;
    }

    // For Road, we use their live location
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLoadingLocation(false);
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Using exact coordinates for both source and destination works much better in iframes
        // Parul University approx coordinates: 22.2887° N, 73.3634° E
        const newUrl = `https://maps.google.com/maps?f=d&source=s_d&saddr=${lat},${lng}&daddr=22.2887,73.3634&dirflg=d&t=m&z=12&output=embed`;
        setMapUrl(newUrl);
      },
      (error) => {
        setIsLoadingLocation(false);
        alert("Unable to retrieve your location. Please ensure location permissions are granted.");
        console.error("Geolocation error:", error);
      }
    );
  };

  // Keep the other functions unchanged, just moving them up...
  const openGoogleMaps = () => {
    window.open('https://maps.google.com/maps?q=Parul+University+Vadodara', '_blank')
  }
  const openAppleMaps = () => {
    window.open('https://maps.apple.com/?q=Parul+University+Vadodara', '_blank')
  }
  const shareLocation = () => {
    if (navigator.share) {
      navigator.share({
        title: 'AISCT 2026-27 Conference Venue',
        text: 'Parul University, Vadodara',
        url: 'https://maps.google.com/maps?q=Parul+University+Vadodara'
      })
    } else {
      navigator.clipboard.writeText('Parul University, PO Limda, Vadodara, Gujarat 391760, India')
      alert('Location copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-4 bg-[#0f172a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-100 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
              Conference Venue
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              Parul University Campus, Vadodara
            </p>
          </div>
        </div>
      </section>

      {/* Main Venue Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery & Map */}
            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden group border border-gray-700 shadow-[0_0_15px_rgba(255,255,255,0.1)] bg-gray-800">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {isLoadingLocation && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-sm font-medium text-white">Getting your location...</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {venueImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                      ? 'border-white shadow-[0_0_15px_rgba(255,255,255,0.6)]'
                      : 'border-gray-700 hover:border-gray-400 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]'
                      }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill sizes="100vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Venue Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-yellow-100 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Parul University Conference Center</h2>
                <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] text-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                      <div className="space-y-3">
                        <p className="font-medium text-lg text-white">Conference Address</p>
                        <p className="text-gray-300">
                          Parul University, PO Limda, Vadodara, Gujarat 391760, India
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-gray-300 flex-shrink-0" />
                            <span className="text-gray-300">+91 9384345662</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-gray-300 flex-shrink-0" />
                            <span className="text-gray-300">fitcs.conference@paruluniversity.ac.in</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="grid sm:grid-cols-3 gap-4">
                <Button
                  className="bg-gray-800 text-white border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] hover:text-yellow-400 transition-all font-medium"
                  onClick={() => getDirections('air')}
                  disabled={isLoadingLocation}
                >
                  <span className="mr-2">✈️</span>
                  By Air
                </Button>
                <Button
                  className="bg-gray-800 text-white border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] hover:text-yellow-400 transition-all font-medium"
                  onClick={() => getDirections('train')}
                  disabled={isLoadingLocation}
                >
                  <span className="mr-2">🚆</span>
                  By Train
                </Button>
                <Button
                  className="bg-gray-800 text-white border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] hover:text-yellow-400 transition-all font-medium"
                  onClick={() => getDirections('road')}
                  disabled={isLoadingLocation}
                >
                  <span className="mr-2">🚗</span>
                  By Road
                </Button>
              </div>

              {/* Explore Vadodara Marquee */}
              <div className="mt-8 overflow-hidden">
                <h3 className="text-2xl font-bold mb-4 text-yellow-100 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Explore Vadodara</h3>
                <style>{`
                    @keyframes marquee {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                      display: flex;
                      width: max-content;
                      animation: marquee 20s linear infinite;
                    }
                    .animate-marquee:hover {
                      animation-play-state: paused;
                    }
                  `}</style>
                <div className="relative overflow-hidden w-full rounded-lg">
                  <div className="animate-marquee gap-4">
                    {/* Original set */}
                    <div className="w-72 h-48 flex-shrink-0 rounded-lg overflow-hidden border border-gray-700 shadow-lg relative group">
                      <img src="/assets/explore/laxmi-vilas-palace.png" alt="Laxmi Vilas Palace" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent pt-8 pb-2 text-center">
                        <p className="text-base font-semibold text-yellow-100">Laxmi Vilas Palace</p>
                      </div>
                    </div>
                    <div className="w-72 h-48 flex-shrink-0 rounded-lg overflow-hidden border border-gray-700 shadow-lg relative group">
                      <img src="/assets/explore/baroda-museum.png" alt="Baroda Museum" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent pt-8 pb-2 text-center">
                        <p className="text-base font-semibold text-yellow-100">Baroda Museum</p>
                      </div>
                    </div>
                    <div className="w-72 h-48 flex-shrink-0 rounded-lg overflow-hidden border border-gray-700 shadow-lg relative group">
                      <img src="/assets/explore/statue-of-unity.png" alt="Statue of Unity" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent pt-8 pb-2 text-center">
                        <p className="text-base font-semibold text-yellow-100">Statue of Unity</p>
                      </div>
                    </div>
                    <div className="w-72 h-48 flex-shrink-0 rounded-lg overflow-hidden border border-gray-700 shadow-lg relative group">
                      <img src="/assets/explore/eme-temple.png" alt="EME Temple" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent pt-8 pb-2 text-center">
                        <p className="text-base font-semibold text-yellow-100">EME Temple</p>
                      </div>
                    </div>

                    {/* Duplicated set for seamless looping */}
                    <div className="w-72 h-48 flex-shrink-0 rounded-lg overflow-hidden border border-gray-700 shadow-lg relative group">
                      <img src="/assets/explore/laxmi-vilas-palace.png" alt="Laxmi Vilas Palace" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent pt-8 pb-2 text-center">
                        <p className="text-base font-semibold text-yellow-100">Laxmi Vilas Palace</p>
                      </div>
                    </div>
                    <div className="w-72 h-48 flex-shrink-0 rounded-lg overflow-hidden border border-gray-700 shadow-lg relative group">
                      <img src="/assets/explore/baroda-museum.png" alt="Baroda Museum" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent pt-8 pb-2 text-center">
                        <p className="text-base font-semibold text-yellow-100">Baroda Museum</p>
                      </div>
                    </div>
                    <div className="w-72 h-48 flex-shrink-0 rounded-lg overflow-hidden border border-gray-700 shadow-lg relative group">
                      <img src="/assets/explore/statue-of-unity.png" alt="Statue of Unity" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent pt-8 pb-2 text-center">
                        <p className="text-base font-semibold text-yellow-100">Statue of Unity</p>
                      </div>
                    </div>
                    <div className="w-72 h-48 flex-shrink-0 rounded-lg overflow-hidden border border-gray-700 shadow-lg relative group">
                      <img src="/assets/explore/eme-temple.png" alt="EME Temple" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent pt-8 pb-2 text-center">
                        <p className="text-base font-semibold text-yellow-100">EME Temple</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Grid */}
      <section className="py-16 bg-[#0f172a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-100 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Venue Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
              Our conference venue is equipped with modern facilities to ensure a comfortable and productive experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border border-gray-800 text-white backdrop-blur-sm hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all cursor-pointer group hover:-translate-y-1"
                onClick={() => handleFeatureClick(facility.title)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all">
                    <facility.icon className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg text-yellow-100 drop-shadow-[0_0_5px_rgba(250,204,21,0.3)]">{facility.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{facility.description}</p>
                  <span className="text-xs text-white font-medium group-hover:underline drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                    Click for details
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Modal */}
      <Dialog open={isMapModalOpen} onOpenChange={setIsMapModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] bg-[#0f172a] border border-gray-700 text-white shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Conference Location</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7173104615913!2d73.3634204!3d22.2886958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fda2400192473%3A0xc319c9237f2928e8!2sParul%20University!5e0!3m2!1sen!2sin!4v1758734374591!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <Button variant="outline" onClick={openGoogleMaps} className="w-full border-gray-600 text-gray-300 hover:bg-white hover:text-black transition-colors">
                <MapPin className="w-4 h-4 mr-2" />
                Open in Google Maps
              </Button>
              <Button variant="outline" onClick={openAppleMaps} className="w-full border-gray-600 text-gray-300 hover:bg-white hover:text-black transition-colors">
                <MapPin className="w-4 h-4 mr-2" />
                Open in Apple Maps
              </Button>
              <Button variant="outline" onClick={shareLocation} className="w-full border-gray-600 text-gray-300 hover:bg-white hover:text-black transition-colors">
                <Share className="w-4 h-4 mr-2" />
                Share Location
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}