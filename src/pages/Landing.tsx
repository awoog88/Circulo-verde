import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Clock, FileCheck, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Landing() {
  return (
    <div className="bg-white min-h-screen selection:bg-indigo-100 antialiased overflow-x-hidden">
      {/* Mini Nav */}
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">F</div>
             <span className="text-2xl font-bold text-slate-900 tracking-tight">FleetControl</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
            <a href="#" className="hover:text-indigo-600 transition-colors">Solutions</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Enterprise</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Resources</a>
          </div>
        </div>
        <div className="flex gap-4">
          <Link to="/dashboard" className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Log In</Link>
          <Link to="/register" className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-all">Get Started</Link>
        </div>
      </nav>

      <section className="relative pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Enterprise Ready</span>
            </div>
            <h1 className="text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Manage your fleet <br /> without friction.
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              A precision-engineered platform for high-stakes logistics. Consolidate verification, valet services, and document compliance into a single, frictionless dashboard.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/register" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all">
                View Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl border border-slate-100">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhSH2kp41CmwmacLrixYrhPDKpW_fAyGDfyswTM_aMop0t3nDJvwJPT8fOKXRlCNNq53CYnH5CmAbdbwgcSXpZVngGVaa-kjHA2Fi1uyIvA4zGKNBb6br4kulXQa-dSRniH1V9lMOd8il4-jNS21FAnmG0D021qS_Q3EFPhIlLZNJ4a1apdvUoSK4nJobtXfeQt4WVHcDt1jpVkA6CxmhFNbRLfEjQ8mFqbvo3z9TyR5N9lO-Cw9G1edRlrnSr7R-Sd7pvubpU3Gpa" 
                alt="Dashboard Preview"
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-0"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-0"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Industrial Precision. Modern UI.</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Reduce cognitive load with our structured architecture designed for rapid operational response.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={ShieldCheck}
              title="Verification"
              description="Real-time driver credentialing and automated compliance checks. Instantly validate licenses."
              color="indigo"
            />
            <FeatureCard 
              icon={Truck}
              title="Valet Service"
              description="Seamless vehicle handover protocols. Track keys, parking locations, and driver handoffs."
              color="emerald"
            />
            <FeatureCard 
              icon={FileCheck}
              title="Doc Management"
              description="Automated paper trail for insurance and logs. Never miss a renewal deadline."
              color="orange"
            />
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 text-sm">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">F</div>
              <span className="text-xl font-bold tracking-tight text-white">FleetControl</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Precision vehicle management for modern enterprises. Secure, scalable, and frictionless operations mapping the road ahead.
            </p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-slate-100">Platform</h4>
            <div className="flex flex-col gap-2 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Dashboard</a>
              <a href="#" className="hover:text-white transition-colors">Fleet View</a>
              <a href="#" className="hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-slate-100">Resources</h4>
            <div className="flex flex-col gap-2 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">API Reference</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-bold text-slate-100">Direct Support</h4>
            <div className="p-4 bg-slate-800 rounded-xl flex items-center justify-between border border-slate-700">
              <span className="text-slate-300 font-medium">Need immediate help?</span>
              <button className="px-4 py-1.5 bg-indigo-600 text-white rounded font-bold text-[10px] uppercase tracking-wider hover:bg-indigo-700 transition-all">Live Chat</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
          <p>© 2024 FleetControl Enterprise. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, color }: any) {
  const colors: any = {
    indigo: 'bg-indigo-50 text-indigo-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    orange: 'bg-orange-50 text-orange-600'
  };
  
  return (
    <div className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
      <div className={`w-12 h-12 ${colors[color] || colors.indigo} flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed font-medium">{description}</p>
    </div>
  );
}
