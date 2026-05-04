import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, User, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Register() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 selection:bg-blue-100">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <Link to="/" className="text-2xl font-black text-blue-900 tracking-tight mb-12 block">FleetControl</Link>
          
          <div className="space-y-6">
            <h1 className="text-5xl font-black text-blue-950 leading-[1.1] tracking-tight">Enterprise Infrastructure, <br /> Built for Deployment.</h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">Join over 400+ logistics companies managing high-stakes assets with precision.</p>
          </div>

          <div className="space-y-4">
            <FeatureItem text="Unlimited Vehicle Asset Registration" />
            <FeatureItem text="Automated Compliance & Verification" />
            <FeatureItem text="Integrated Valet & Maintenance Flows" />
            <FeatureItem text="Role-Based Team Management" />
          </div>

          <div className="pt-8 border-t border-slate-100 flex items-center gap-6">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-100" />
               ))}
             </div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted by 2.4k+ fleet managers</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-2xl font-black text-blue-950 mb-2">Create Account</h2>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-10">Institutional Access Only</p>

            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup icon={User} label="First Name" placeholder="Jane" />
                <InputGroup icon={User} label="Last Name" placeholder="Doe" />
              </div>
              <InputGroup icon={Mail} label="Work Email" placeholder="jane.doe@enterprise.com" type="email" />
              <InputGroup icon={Lock} label="Password" placeholder="••••••••" type="password" />
              <InputGroup icon={FileText} label="Fleet Size" placeholder="Estimated vehicles" />

              <div className="flex items-start gap-3 py-4">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-900 focus:ring-blue-900" />
                <p className="text-xs text-slate-500 leading-relaxed italic">By registering, I agree to the <a href="#" className="text-blue-900 font-bold not-italic hover:underline">Terms of Service</a> and acknowledge the <a href="#" className="text-blue-900 font-bold not-italic hover:underline">Enterprise Privacy Protocol</a>.</p>
              </div>

              <Link 
                to="/dashboard" 
                className="w-full py-4 bg-[#1e3a8a] text-white font-black rounded-2xl shadow-xl shadow-blue-900/20 hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-3 group"
              >
                Access Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="text-center text-sm font-bold text-slate-500 mt-8">
                Already have an account? <Link to="/dashboard" className="text-blue-900 hover:underline">Log In</Link>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <p className="font-bold text-blue-900/80 group-hover:text-blue-900 transition-colors">{text}</p>
    </div>
  );
}

function InputGroup({ icon: Icon, label, placeholder, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</label>
      <div className="relative group">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-900 transition-colors" />
        <input 
          type={type}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 bg-white outline-none transition-all placeholder:text-slate-300 shadow-sm"
        />
      </div>
    </div>
  );
}
