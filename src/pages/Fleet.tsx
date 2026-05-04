import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Filter, 
  Download, 
  Search, 
  Plus, 
  Zap, 
  MapPin, 
  Fuel, 
  Gauge, 
  ChevronRight,
  Battery,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';

const vehicles = [
  {
    id: 'abc-1234',
    name: 'Tesla Model Y',
    sub: 'Long Range Dual Motor • 2023',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIa82wLw9XxNYXM7Ms6XG8KSsyybKD3ARHmw0x49WMMU9kZKWYjspcBJ7H_4ZE7mQUF5wd3l16LCccx8yZge6G7wLUmHgcRdG82_IolDxGXeoFR9m3HjPYWW7rORMEgR8RddN0d1-FJT-6ROWL6PJyUf_U_gQLYUaq1nlqy5CG9A45kFAbHDrDYgSYNy0HBtAeb4iP4dJ5XeIfk6d2R6zl6Oxvc8hGTLmFtY0YT7p0VOVsEEPV4zXJJUnCCZig7Mzd9JEWndwsg8cx',
    fuel: '84%',
    odom: '12,430 km',
    status: 'Active',
    verified: true,
    type: 'EV'
  },
  {
    id: 'fed-9901',
    name: 'Ford Transit',
    sub: 'High Roof Cargo • 2021',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_RXIBsFsnE0lndPJg52u09nJvoxSwylacd-jnypcy2fmGkYedsXsz1wx3S3tx1zn4uhrdHZiXiXx1W2I2NYOw7pCqnIuyCvLC1iIk9OdwwuMd70sxFLhQ9ZxxhfbZDMHDwqPYFnHO1uP8bQ2MvTtfOUVjACxWrR8mb6_xmV3sySpnc99DFeaJC1a2qm57wHDOQeXuI7hShPvZBmaQa5lEmPQgmnssU4qDvZh4hFtTqcowQIEIANk4mbzLNv-iegdyXTb813WuFhKy',
    fuel: '42%',
    odom: '88,201 km',
    status: 'Service Due',
    verified: 'expiring',
    type: 'Diesel'
  },
  {
    id: 'city-202',
    name: 'Volkswagen Golf',
    sub: 'GTI Performance • 2022',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkcK8yw4YGnHcj1E6tdFEw9a_eBBdPy677sHZ3SEfN4P8x2A32TfyFbg26JpnFBa-syc1SpckqpvqPXWZJ9n4Ot-RH1nbH4cb7AX8PPrfjG3KYNIFmRbyygEriz-tnT0mVziIzJ7Sa0_BDMAlH8JlLiW-a03ywOcvdbknJofhA0f0HJrEG1TLmj95ggYd57RcDpXXm-gDlbLMvsSBzAcfSRYsw-yKP0Qi3B7ZJC9bH_qMGVHqNQ4WZCQTUqeohrjCkSVCyuyNXc3OX',
    fuel: '100%',
    odom: '5,102 km',
    status: 'Active',
    verified: true,
    type: 'Gas'
  },
  {
    id: 'trk-8822',
    name: 'Mercedes Actros',
    sub: 'Heavy Haulage • 2020',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB75c4nUg5e-W4oDRGzPpCuTKc0ayIZSq-ylwoznU2G5j7JL8E6hqHhfNiQBvJrGWg_gahKMScqMdbkWImTsZ5UQx-2IzQfsNfagxSBwhCbNS5yEUbe2F1ICjGZfp_9yA7ShFerv_HR7Hf7Re7ZLgJyf1-EzEN86qxfUCvjhOM25skqea5lGnziTi-s9gUL45ge5gbeyysR6UluZHPNxeyK0Ynr9kvNyCsp0FsgOsSFqxSDRLPn3zxlQFPR0JY5kE9M5zDw1CzOf9s0',
    fuel: '12%',
    odom: '245,900 km',
    status: 'Grounded',
    verified: false,
    type: 'Diesel'
  }
];

export default function Fleet() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10"
    >
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Vehicle Fleet</h2>
          <p className="text-slate-500 mt-1">Managing 124 active assets across 4 regions.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-sm font-semibold text-slate-600 rounded-lg hover:bg-slate-50 shadow-sm transition-all">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-sm font-semibold text-slate-600 rounded-lg hover:bg-slate-50 shadow-sm transition-all">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {vehicles.map((v, i) => (
          <VehicleCard key={v.id} {...v} index={i} />
        ))}
        
        <div className="border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-12 hover:border-indigo-600 hover:bg-indigo-50/30 transition-all cursor-pointer group h-full bg-white/50">
          <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-all mb-6">
            <Plus className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-500 group-hover:text-indigo-900 mb-2">Register New Asset</h3>
          <p className="text-slate-400 text-xs text-center max-w-[180px]">Onboard a new vehicle to the enterprise fleet system.</p>
        </div>
      </div>
    </motion.div>
  );
}

function VehicleCard({ id, name, sub, img, fuel, odom, status, verified, type, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all group"
    >
      <div className="relative h-48 overflow-hidden bg-slate-100 italic">
        <Link to={`/vehicle/${id}`}>
          <img 
            src={img} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
          />
        </Link>
        <div className="absolute top-4 right-4 px-2 py-1 bg-white/90 backdrop-blur-md rounded font-bold text-[10px] text-slate-900 uppercase tracking-widest shadow-sm border border-slate-200">
          {id.toUpperCase()}
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 italic">{name}</h3>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-1">{sub}</p>
          </div>
          {type === 'EV' ? <Battery className="w-5 h-5 text-indigo-500" /> : <Fuel className="w-5 h-5 text-slate-400" />}
        </div>

        <div className="flex items-center gap-4 py-4 border-y border-slate-50 mb-4">
          <div className="flex-1">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{type === 'EV' ? 'Charge' : 'Fuel'}</p>
             <p className="text-sm font-bold text-slate-900">{fuel}</p>
          </div>
          <div className="flex-1 border-x border-slate-100 px-4 text-center">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
             <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
               status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
             }`}>{status}</span>
          </div>
          <div className="flex-1 text-right">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Odom</p>
             <p className="text-sm font-bold text-slate-900">{odom.split(' ')[0]}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link to={`/vehicle/${id}`} className="text-indigo-600 font-bold text-xs hover:underline flex items-center gap-1 group/link">
            View Analytics
            <ChevronRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full border border-white bg-slate-700 flex items-center justify-center text-[8px] font-bold text-white">JD</div>
            <div className="w-6 h-6 rounded-full border border-white bg-indigo-500 flex items-center justify-center text-[8px] font-bold text-white tracking-widest">AS</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
