import React from 'react';
import { 
  MapPin, 
  Map, 
  Clock, 
  PhoneCall, 
  Navigation, 
  Star, 
  Truck, 
  Key, 
  AlertCircle,
  ChevronRight,
  ShieldCheck,
  Send
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ValetService() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10"
    >
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-blue-950">Institutional Valet</h2>
          <p className="text-slate-500 mt-1">High-stakes vehicle handover and secure delivery protocol.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200">
          <span className="pl-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-r border-slate-100 pr-4">Active Drivers</span>
          <div className="flex -space-x-2 mr-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-8 space-y-10">
          <section className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden p-10">
            <h3 className="text-xl font-bold text-blue-950 mb-8 flex items-center gap-3">
              <Navigation className="text-blue-600" />
              Live Deployment Map
            </h3>
            <div className="h-[450px] bg-slate-50 rounded-3xl border border-slate-100 relative group overflow-hidden">
               <img 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHmZJ8KjO_V6niz8f8m_fF2_f8p9mP2-y8j5-m9-n_x8m7oU-h8G9-p_f8m-z8p-y8m7oU-h8G9-p_f8m-z8p-y8m7oU-h8G9-p_f8m-z8p-y8" 
                 alt="Static Map Placeholder"
                 className="w-full h-full object-cover opacity-60 grayscale"
               />
               <div className="absolute inset-0 flex items-center justify-center bg-blue-950/5 group-hover:bg-transparent transition-all">
                  <div className="p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-white text-center shadow-2xl max-w-md">
                     <Map className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                     <h4 className="text-xl font-black text-blue-950 mb-2">Network Visualization</h4>
                     <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-wide">Interface connected to real-time GLONASS/GPS telemetry. Asset #TR-24 is currently reporting stationary in Sector B-5.</p>
                  </div>
               </div>
               
               {/* Map Overlays */}
               <div className="absolute top-8 left-8 p-4 bg-white rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Closest Asset</p>
                    <p className="text-sm font-black text-blue-950">VOLVO FH16 • 1.2 km</p>
                  </div>
               </div>
            </div>
          </section>

          <section className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-center mb-10">
               <div>
                  <h3 className="text-xl font-bold text-blue-950">Handover Protocol Queue</h3>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-black">4 Requests pending authorization</p>
               </div>
               <button className="px-6 py-2.5 bg-blue-50 text-blue-600 font-bold text-xs rounded-xl hover:bg-blue-100 transition-all">Filter by Driver</button>
            </div>
            
            <div className="space-y-4">
               <QueueTicket 
                 asset="Tesla Model 3 #02" 
                 loc="Terminal 4 Pick-up" 
                 time="14:00" 
                 status="DISPATCHED" 
                 driver="Maximus R."
                 color="emerald"
               />
               <QueueTicket 
                 asset="Mercedes Sprinter #4" 
                 loc="VIP Maintenance" 
                 time="15:30" 
                 status="AWAITING KEY" 
                 driver="Unassigned"
                 color="orange"
               />
               <QueueTicket 
                 asset="Audi E-Tron #88" 
                 loc="Harbor District" 
                 time="16:15" 
                 status="QUEUED" 
                 driver="Elena K."
                 color="blue"
               />
            </div>
          </section>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-10">
          <section className="bg-[#1e3a8a] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 space-y-8">
              <h3 className="text-2xl font-black tracking-tight">Deploy Valet</h3>
              <p className="text-sm text-blue-200 opacity-80 leading-relaxed font-bold italic">Initiate a secure vehicle procurement or relocation sequence.</p>
              
              <div className="space-y-6 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                 <div className="space-y-4">
                   <div className="space-y-2">
                     <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest">Protocol Type</p>
                     <div className="flex gap-2">
                       <button className="flex-1 py-3 bg-white text-blue-900 rounded-xl font-black text-[10px] uppercase tracking-widest">Relocation</button>
                       <button className="flex-1 py-3 bg-white/10 text-white rounded-xl font-black text-[10px] uppercase tracking-widest border border-white/10">Procurement</button>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest">Pickup Coordinates</p>
                     <div className="relative">
                       <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300" />
                       <input className="w-full bg-white/10 border border-white/10 p-4 pl-12 rounded-2xl outline-none text-sm placeholder:text-blue-300" placeholder="Street/Zone/Terminal" />
                     </div>
                   </div>
                 </div>
                 <button className="w-full py-4 bg-white text-blue-900 font-black rounded-2xl shadow-xl flex items-center justify-center gap-3 group active:scale-95 transition-all">
                   Authorize Deployment
                   <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>
          </section>

          <section className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
             <h4 className="text-lg font-bold text-blue-950 mb-8 flex items-center gap-3">
               <Star className="text-orange-400 fill-orange-400" />
               Enterprise Logistics Audit
             </h4>
             <div className="space-y-8">
                <AuditItem 
                  title="Secure Key Handoff" 
                  desc="Keys for Unit #402 logged in at Station Beta." 
                  time="12m ago" 
                  icon={Key} 
                />
                <AuditItem 
                  title="Chain of Custody" 
                  desc="Unit #091 handed from Miller to Vance." 
                  time="1h ago" 
                  icon={ShieldCheck} 
                />
                <AuditItem 
                  title="Delayed Arrival" 
                  desc="Driver 04 reported traffic at Gate 7." 
                  time="3h ago" 
                  icon={AlertCircle} 
                  error
                />
             </div>
             <button className="w-full mt-10 py-3 border border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-widest rounded-2xl hover:bg-slate-50 transition-all">Download Audit Trail</button>
          </section>

          <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex items-center gap-6 group hover:bg-emerald-100 transition-all cursor-pointer">
             <div className="w-14 h-14 bg-white rounded-2xl shadow-sm text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
               <PhoneCall className="w-6 h-6" />
             </div>
             <div>
               <p className="font-bold text-emerald-950">Direct Dispatch Link</p>
               <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest mt-1">Institutional Line</p>
             </div>
             <ChevronRight className="ml-auto w-5 h-5 text-emerald-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function QueueTicket({ asset, loc, time, status, driver, color }: any) {
  const colors: any = {
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    blue: 'bg-blue-50 text-blue-600 border-blue-100'
  };

  return (
    <div className="p-6 bg-white border border-slate-100 rounded-3xl flex items-center justify-between group hover:border-blue-900/10 hover:shadow-lg transition-all grow">
      <div className="flex items-center gap-6">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colors[color]} shadow-sm`}>
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-bold text-blue-950">{asset}</h4>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{loc} • {time}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right hidden md:block">
           <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Driver</p>
           <p className="text-xs font-black text-blue-900">{driver}</p>
        </div>
        <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest hidden lg:block ${colors[color]} border`}>
          {status}
        </span>
        <button className="p-2 text-slate-200 hover:text-blue-900 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function AuditItem({ title, desc, time, icon: Icon, error }: any) {
  return (
    <div className="flex gap-4 group">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
        error ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-400 font-bold'
      } group-hover:scale-110 transition-transform`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 grow">
        <div className="flex justify-between items-start grow">
          <h5 className="text-sm font-bold text-blue-950">{title}</h5>
          <span className="text-[10px] font-black text-slate-300 uppercase">{time}</span>
        </div>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed grow">{desc}</p>
      </div>
    </div>
  );
}
