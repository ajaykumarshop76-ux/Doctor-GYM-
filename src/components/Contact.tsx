import { useState, FormEvent } from 'react';
import { MapPin, Phone, Instagram, Send, CheckCircle2, Navigation, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { ContactSubmission } from '../types';

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) return;

    const submission: ContactSubmission = {
      id: `contact_${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    // Store in localStorage for realistic preservation
    const existing = localStorage.getItem('doctor_gym_contact_leads');
    let leads: ContactSubmission[] = [];
    if (existing) {
      try {
        leads = JSON.parse(existing);
      } catch (e) {
        leads = [];
      }
    }
    leads.push(submission);
    localStorage.setItem('doctor_gym_contact_leads', JSON.stringify(leads));

    // Success toggle
    setIsSubmitted(true);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-black text-gray-300 min-h-screen py-16" id="contact-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header">
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black">
            RECEPTION DESK ACCESS
          </span>
          <h1 className="text-4xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight mt-2">
            Contact Gota Hub
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed font-sans">
            Have questions about timings, batch limits, trainer schedules, or corporate packages? Send an instant query or dial us directly.
          </p>
        </div>

        {/* Info & Form Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16" id="contact-split-section">
          
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 bg-neutral-950 border border-neutral-900 rounded-3xl p-8 flex flex-col justify-between" id="contact-coordinates">
            <div className="space-y-8">
              <h3 className="text-white font-bold tracking-widest uppercase text-sm border-l-2 border-amber-500 pl-3">
                Business Info
              </h3>

              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-amber-500 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-mono font-bold tracking-wide">LOCATION ADDRESS</span>
                    <p className="text-sm text-gray-200 font-sans mt-1 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Doctor+Gym+Gota+Ahmedabad" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs text-amber-500 font-mono uppercase font-bold tracking-wider hover:underline inline-flex items-center gap-1.5 mt-2.5"
                    >
                      <Navigation className="h-3 w-3" /> Get Directions
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-amber-500 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-mono font-bold tracking-wide">RECEPTION HOTLINE</span>
                    <a 
                      href={`tel:${BUSINESS_INFO.phone}`} 
                      className="text-lg text-white font-black font-mono block mt-1 hover:text-amber-400 select-all"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="text-[10px] text-gray-500 block">Dial to check daily peak hours</span>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-amber-500 shrink-0">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-mono font-bold tracking-wide">INSTAGRAM CONNECT</span>
                    <a 
                      href={BUSINESS_INFO.instagramUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm text-amber-500 font-mono font-bold block mt-1 hover:underline"
                    >
                      {BUSINESS_INFO.instagram}
                    </a>
                    <span className="text-[10px] text-gray-500 block">DM for workout clips, motivation and stories</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-8 border-t border-neutral-900 mt-8 text-xs font-mono text-gray-550 leading-relaxed uppercase space-y-1">
              <div>* Response time: within 3-4 hours</div>
              <div>* Open Monday - Saturday: 5:30 AM - 10:30 PM</div>
            </div>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-900 rounded-3xl p-8" id="contact-form-block">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-[fadeIn_0.3s_ease]" id="contact-success-frame">
                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-full text-amber-500">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">Query Logs Received</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  Thank you! Your information has been registered. Our Gota team will inspect details and contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 hover:border-amber-500 text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-lg transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="lead-captured-form">
                <div>
                  <h3 className="text-white font-bold tracking-widest uppercase text-sm border-l-2 border-amber-500 pl-3">
                    Send Instant Message
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill the form blocks. We will receive inputs inside Gota database leads.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-gray-500 uppercase font-mono mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black border border-neutral-850 focus:border-amber-500 text-white placeholder-gray-750 rounded-lg py-2.5 px-4 text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-gray-500 uppercase font-mono mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black border border-neutral-850 focus:border-amber-500 text-white placeholder-gray-750 rounded-lg py-2.5 px-4 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-gray-500 uppercase font-mono mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black border border-neutral-850 focus:border-amber-500 text-white placeholder-gray-750 rounded-lg py-2.5 px-4 text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-gray-500 uppercase font-mono mb-1">Message Detail *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Enter details of your training goals or question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-black border border-neutral-850 focus:border-amber-500 text-white placeholder-gray-750 rounded-lg py-2.5 px-4 text-sm focus:outline-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-colors inline-flex justify-center items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/5"
                >
                  <Send className="h-4 w-4" /> Submit Query Leads
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Large 100% Google Map Embed integration */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-4 overflow-hidden h-[450px]" id="contact-map-full">
          <iframe 
            src={BUSINESS_INFO.mapEmbedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Doctor Gym Gota Map GPS Location"
            className="rounded-2xl grayscale invert opacity-75 h-full w-full"
          />
        </div>

      </div>
    </div>
  );
}
