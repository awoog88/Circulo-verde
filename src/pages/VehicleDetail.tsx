import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  BatteryFull as Speedometer, 
  BatteryFull, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Droplet,
  FileText,
  ChevronRight,
  Download,
  Eye,
  Plus,
  Truck
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function VehicleDetail() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-10"
    >
      <div className="flex justify-between items-end">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-white rounded-full transition-all border border-transparent hover:border-slate-200">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full uppercase tracking-widest border border-emerald-100">In Transit</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Updated 14m ago</span>
              </div>
              <h2 className="text-4xl font-black text-blue-950 tracking-tight">Mercedes-Benz Actros GigaSpace</h2>
            </div>
          </div>
          <p className="text-slate-500 max-w-2xl leading-relaxed">Heavy-duty long-haul prime mover currently assigned to North-Eastern corridor logistics route.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#1e3a8a] text-white font-bold rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all group">
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          Add Log Entry
        </button>
      </div>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-7 space-y-10">
          <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="relative h-[400px]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAStH4RAdzo0PttgUv6cyyCvudMpUGxP1achiNmwhVnrpriopxwOSIt2FsFVh0DWWykzDaxzKnPxbU7NFaSN_U1Swd2vYBevY2RGZ-b81kGu9CPwl2_swhEV2vtlXiLjm9VaZeHwco5WWPeddkyjbcz8akq3Muk-vqoI-x-GPEnmygHl1xRHN3MYxy6mM1J-ThRZrc10rV4XUAlXBgpq54llTVavAjY6DenynT9RzNy4dYA6HIOMoKV-fduuZTl6aozoDKtBtX8OyvS" 
                alt="Blue Truck"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white flex items-center gap-6">
                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Truck className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Registration</p>
                  <p className="text-3xl font-black tracking-tight">TX-992-04-DE</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 divide-x divide-slate-100 p-8 text-center bg-white">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Fuel Level</p>
                <div className="flex items-center justify-center gap-2">
                  <Droplet className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl font-black text-blue-900">78%</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Odometer</p>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl font-black text-blue-900">12,450 km</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Battery</p>
                <div className="flex items-center justify-center gap-2">
                  <BatteryFull className="w-5 h-5 text-emerald-600" />
                  <span className="text-2xl font-black text-blue-900">94%</span>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-2 gap-8">
            <TechnicalCard 
              title="Engine & Power"
              data={[
                { label: 'Engine Model', value: 'OM 471 LA' },
                { label: 'Horsepower', value: '530 HP' },
                { label: 'Torque', value: '2,600 Nm' },
                { label: 'Transmission', value: 'PowerShift 3' }
              ]}
            />
            <TechnicalCard 
              title="Dimensions"
              data={[
                { label: 'Chassis', value: '4x2 Standard' },
                { label: 'Wheelbase', value: '3,700 mm' },
                { label: 'Max Weight', value: '18,000 kg' },
                { label: 'Payload', value: '11,200 kg' }
              ]}
            />
          </div>

          <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm relative">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold text-blue-900">Maintenance Log</h3>
              <button className="text-xs font-bold text-blue-600 hover:underline">View All History</button>
            </div>
            <div className="space-y-12 relative before:absolute before:left-[21px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-50">
              <TimelineItem 
                title="Standard Service B"
                desc="Oil change, filter replacement, and brake inspection."
                date="Oct 12, 2023"
                station="Station #402"
                icon={Droplet}
                color="blue"
              />
              <TimelineItem 
                title="Tire Rotation"
                desc="Front axle rotation and alignment adjustment."
                date="Aug 28, 2023"
                station="Mobile Unit #02"
                icon={CheckCircle2}
                color="emerald"
              />
            </div>
          </section>
        </div>

        <div className="col-span-12 lg:col-span-5 space-y-10">
          <section className="bg-blue-900 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-8">Compliance Status</p>
              <div className="flex items-center gap-10">
                <div className="w-24 h-24 rounded-full border-[6px] border-emerald-400 border-t-transparent flex items-center justify-center rotate-[30deg]">
                  <span className="text-3xl font-black rotate-[-30deg]">92%</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Good Standing</h4>
                  <p className="text-sm text-blue-200 opacity-80 leading-relaxed">1 document expiring in 14 days. <br /> Needs immediate attention.</p>
                </div>
              </div>
            </div>
            <ShieldCheck className="absolute -right-10 -bottom-10 text-white/5 w-64 h-64 group-hover:scale-110 transition-transform duration-700" />
          </section>

          <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
              <h3 className="font-bold text-blue-900">Required Documents</h3>
              <span className="px-2 py-0.5 bg-slate-100 text-[10px] font-black text-slate-400 rounded-md">TOTAL: 6</span>
            </div>
            <div className="divide-y divide-slate-50">
              <DocumentRow 
                name="Registration Verification"
                status="Current"
                date="Verified Jan 10, 2024"
                verified={true}
              />
              <DocumentRow 
                name="Commercial Insurance"
                status="Expires in 14 days"
                date="Renewal Required"
                verified="warning"
              />
              <DocumentRow 
                name="Purchase Invoice"
                status="Uploaded"
                date="Dec 12, 2023"
                verified={true}
              />
              <DocumentRow 
                name="Safety Permit #02"
                status="Missing or Invalid"
                date="Action Required"
                verified="error"
              />
            </div>
            <div className="p-8 m-4 bg-blue-50/50 border-2 border-dashed border-blue-200 rounded-2xl text-center group hover:border-blue-900 transition-all cursor-pointer">
              <Plus className="w-10 h-10 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-bold text-blue-900">Drop additional files here</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">PDF, PNG, JPG UP TO 10MB</p>
            </div>
          </section>

          {/* Manager Notes placeholder and footer part etc would go here if needed */}
        </div>
      </div>
    </motion.div>
  );
}

function TechnicalCard({ title, data }: any) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
      <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        {title}
      </h3>
      <div className="space-y-4">
        {data.map((item: any) => (
          <div key={item.label} className="flex justify-between text-sm py-2 border-b border-slate-50 last:border-0 grow">
            <span className="text-slate-500">{item.label}</span>
            <span className="font-bold text-blue-950">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ title, desc, date, station, icon: Icon, color }: any) {
  const colors: any = {
    blue: 'bg-blue-50 text-blue-600',
    emerald: 'bg-emerald-50 text-emerald-600'
  };
  
  return (
    <div className="relative pl-14 group">
      <div className={`absolute left-0 w-11 h-11 ${colors[color]} rounded-full z-10 flex items-center justify-center p-2.5 border-4 border-white shadow-sm ring-4 ring-slate-50 group-hover:scale-110 transition-transform`}>
        <Icon className="w-full h-full" />
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-50 pb-8 group-last:border-0 grow">
        <div>
          <h4 className="font-bold text-blue-950 leading-none">{title}</h4>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">{desc}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-black text-blue-900 tracking-tight">{date}</p>
          <p className="text-[10px] font-black text-slate-300 uppercase mt-1">{station}</p>
        </div>
      </div>
    </div>
  );
}

function DocumentRow({ name, status, date, verified }: any) {
  return (
    <div className="px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
      <div className="flex items-center gap-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          verified === true ? 'bg-emerald-50 text-emerald-500' :
          verified === 'warning' ? 'bg-orange-50 text-orange-500' :
          'bg-red-50 text-red-500'
        }`}>
          {verified === true ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
        </div>
        <div>
          <h4 className="font-bold text-blue-950 text-sm">{name}</h4>
          <p className={`text-[10px] font-bold uppercase tracking-wider mt-1 ${
            verified === true ? 'text-slate-400' : 'text-red-500'
          }`}>{status}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {verified === true ? (
          <button className="p-2 text-slate-300 hover:text-blue-900 hover:bg-white rounded-lg border border-transparent hover:border-slate-100 transition-all">
            <Eye className="w-5 h-5" />
          </button>
        ) : (
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-blue-900 rounded-lg hover:bg-white transition-all shadow-sm">
            Action PDF
          </button>
        )}
      </div>
    </div>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
