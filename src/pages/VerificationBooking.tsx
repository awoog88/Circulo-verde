import React, { useState } from 'react';
import { 
  BadgeCheck, 
  MapPin, 
  Calendar, 
  Clock, 
  Truck, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  Search,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const stations = [
  { id: 1, name: 'Central Logistics Hub A', address: '124 Industrial Way, North Tech', slots: 4, type: 'Heavy Duty' },
  { id: 2, name: 'Skyway Port Terminal', address: 'Pier 42, Harbor District', slots: 12, type: 'Multi-Asset' },
  { id: 3, name: 'East Corridor Station', address: 'Route 66, Section 4', slots: 0, type: 'Light Cargo' },
];

export default function VerificationBooking() {
  const [step, setStep] = useState(1);
  const [selectedStation, setSelectedStation] = useState<any>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-12"
    >
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100">
          <BadgeCheck className="w-3.5 h-3.5" />
          Technical Verification
        </div>
        <h2 className="text-4xl font-black text-blue-950 tracking-tight">Schedule Center Verification</h2>
        <p className="text-slate-500 max-w-xl mx-auto">Book your fleet assets for mandatory technical auditing and compliance certification at our designated centers.</p>
      </div>

      <div className="flex justify-between items-center px-12 relative">
        <div className="absolute top-1/2 left-24 right-24 h-0.5 bg-slate-100 -translate-y-1/2 -z-0" />
        <StepIndicator num={1} label="Selection" active={step >= 1} />
        <StepIndicator num={2} label="Station" active={step >= 2} />
        <StepIndicator num={3} label="Schedule" active={step >= 3} />
        <StepIndicator num={4} label="Confirm" active={step >= 4} />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-blue-900/[0.02]">
              <h3 className="text-xl font-bold text-blue-950 mb-8">Select Asset to Verify</h3>
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-blue-900/5 focus:bg-white outline-none transition-all"
                  placeholder="Search by VIN or Registration..."
                />
              </div>
              <div className="space-y-3">
                <AssetOption 
                  name="Mercedes-Benz Actros" 
                  id="TX-992-04-DE" 
                  status="Needs Verification"
                  onClick={() => setStep(2)}
                />
                <AssetOption 
                  name="Tesla Model 3" 
                  id="TM-001-EL-09" 
                  status="Expiring in 12 days"
                  warning
                  onClick={() => setStep(2)}
                />
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-blue-950">Select Verification Station</h3>
              <button onClick={() => setStep(1)} className="text-xs font-bold text-blue-600 hover:underline">Change Asset</button>
            </div>
            <div className="grid gap-4">
              {stations.map(s => (
                <StationCard 
                  key={s.id} 
                  {...s} 
                  selected={selectedStation?.id === s.id}
                  onClick={() => { setSelectedStation(s); setStep(3); }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl"
          >
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-xl font-bold text-blue-950">Confirm Details</h3>
                <p className="text-slate-500 text-sm mt-1">Review your technical verification request.</p>
              </div>
              <ShieldCheck className="w-10 h-10 text-blue-900/10" />
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <DetailRow icon={Truck} label="Vehicle Asset" value="Mercedes-Benz Actros (TX-992-04-DE)" />
                <DetailRow icon={MapPin} label="Location" value={selectedStation?.name} />
                <DetailRow icon={Calendar} label="Date" value="January 24, 2024" />
                <DetailRow icon={Clock} label="Window" value="09:00 AM - 11:00 AM" />
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl space-y-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol Checklist</p>
                <CheckItem label="Registration Documents Present" />
                <CheckItem label="Commercial Insurance Policy" />
                <CheckItem label="Driver Identity Verified" />
                <CheckItem label="Previous Audit History Clear" />
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
              <button onClick={() => setStep(2)} className="text-xs font-bold text-slate-400 hover:text-blue-900 transition-colors">Back to Selection</button>
              <button 
                onClick={() => setStep(4)}
                className="px-10 py-4 bg-[#1e3a8a] text-white font-black rounded-2xl shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center gap-3 group"
              >
                Confirm Booking
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div 
            key="step4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white p-20 rounded-[3rem] border border-slate-200 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10 space-y-8">
              <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm border-4 border-white ring-8 ring-emerald-50 group grow">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-blue-950 tracking-tight">Booking Synchronized</h3>
                <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">Your verification slot and asset data have been synced with the logistics network.</p>
              </div>
              <div className="pt-8">
                <button 
                  onClick={() => setStep(1)}
                  className="px-12 py-4 bg-slate-900 text-white font-black rounded-2xl shadow-lg hover:bg-slate-800 transition-all font-bold uppercase tracking-widest text-xs"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function StepIndicator({ num, label, active }: any) {
  return (
    <div className={`flex flex-col items-center gap-3 relative z-10 group`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xs transition-all border-4 border-white ring-4 ${
        active 
          ? 'bg-blue-900 text-white ring-blue-50' 
          : 'bg-slate-50 text-slate-300 ring-slate-50'
      }`}>
        {num}
      </div>
      <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
        active ? 'text-blue-900' : 'text-slate-300'
      }`}>{label}</span>
    </div>
  );
}

function AssetOption({ name, id, status, warning, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-900 hover:shadow-lg transition-all group group grow"
    >
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-900 transition-all">
          <Truck className="w-6 h-6" />
        </div>
        <div className="text-left">
          <h4 className="font-bold text-blue-950">{name}</h4>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{id}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
          warning ? 'bg-orange-50 text-orange-600' : 'bg-slate-50 text-slate-500'
        }`}>{status}</span>
        <ChevronRight className="w-4 h-4 text-slate-200 group-hover:text-blue-900 transition-colors" />
      </div>
    </button>
  );
}

function StationCard({ name, address, slots, type, selected, onClick }: any) {
  const isFull = slots === 0;
  return (
    <button 
      disabled={isFull}
      onClick={onClick}
      className={`w-full flex items-center justify-between p-8 rounded-[2rem] border transition-all text-left ${
        selected ? 'bg-blue-900 text-white border-blue-900 shadow-xl' : 
        isFull ? 'bg-slate-50 border-slate-100 opacity-60 grayscale cursor-not-allowed' :
        'bg-white border-slate-100 hover:border-blue-900 hover:shadow-lg'
      }`}
    >
      <div className="flex items-center gap-8">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
          selected ? 'bg-white/10' : 'bg-slate-50 text-slate-400'
        }`}>
          <MapPin className="w-7 h-7" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-1">
             <h4 className="font-bold text-lg">{name}</h4>
             <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${
               selected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400 font-bold'
             }`}>{type}</span>
          </div>
          <p className={`text-sm opacity-60 ${selected ? 'text-white' : 'text-slate-500'}`}>{address}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-2xl font-black ${selected ? 'text-white' : 'text-blue-950'}`}>{slots}</p>
        <p className={`text-[10px] font-black uppercase tracking-widest opacity-60`}>Slots Available</p>
      </div>
    </button>
  );
}

function DetailRow({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center p-2.5 transition-transform group-hover:scale-110">
        <Icon className="w-full h-full" />
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-base font-bold text-blue-950">{value}</p>
      </div>
    </div>
  );
}

function CheckItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
      <span className="text-sm font-bold text-slate-600">{label}</span>
    </div>
  );
}
