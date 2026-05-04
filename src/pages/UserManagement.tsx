import React from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Plus,
  ArrowUpRight,
  Settings
} from 'lucide-react';
import { motion } from 'motion/react';

const users = [
  { id: 1, name: 'Adrian Silva', email: 'adrian@fleetcontrol.io', role: 'Fleet Manager', status: 'Active', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSfjq7Nk_HIUHk4JftVcyR7BKpMcnU8la46iuUf2bOM1TJqHkt1f9nXFMxLvREuQYcyCDchvRQjXQT56mKi9kUs5dlX4DK1m2g_gwQfsINPwbbzLBexaE6MbGiPRAG350LB-V6J-Fzk2TkIkrCu-C8dQV2Lv0QJs6R0SOhhf811684JxK6aQnQkT2D6qyDl6_oMEHQeO0vq6j-RP6W-Yjs87sk08AdKIl8H0PVN3Gr2jM0Qn1DolBf8HxH5EacCAF8u05ai2kOhSg7' },
  { id: 2, name: 'Elena Kostas', email: 'elena.k@fleetcontrol.io', role: 'Compliance Officer', status: 'Away', img: '' },
  { id: 3, name: 'Marcus Black', email: 'm.black@logistics.net', role: 'Technician', status: 'Active', img: '' },
  { id: 4, name: 'Sarah Chen', email: 's.chen@fleetcontrol.io', role: 'Billing Admin', status: 'Offline', img: '' },
  { id: 5, name: 'Julian Vance', email: 'jv@fleetcontrol.io', role: 'Dispatcher', status: 'Active', img: '' },
];

export default function UserManagement() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10"
    >
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-blue-950">Team Management</h2>
          <p className="text-slate-500 font-medium">Manage institutional roles and access protocols.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#1e3a8a] text-white font-bold rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all">
          <Plus className="w-5 h-5" />
          Invite Associate
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <QuickStat label="Total Users" value="24" icon={Users} color="blue" />
        <QuickStat label="Active Now" value="18" icon={Clock} color="emerald" />
        <QuickStat label="Requests" value="3" icon={ArrowUpRight} color="orange" />
        <QuickStat label="Verified" value="21" icon={ShieldCheck} color="indigo" />
      </div>

      <section className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-900 transition-colors" />
            <input 
              type="text" 
              placeholder="Search by name, email or role..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-slate-100 rounded-xl text-xs font-bold outline-none focus:ring-4 focus:ring-blue-900/5 focus:bg-white focus:border-blue-900 transition-all placeholder:text-slate-400"
            />
          </div>
          <div className="flex gap-3">
             <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-100 text-slate-500 font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-all">
               <Filter className="w-4 h-4" />
               Current Filters
             </button>
             <button className="p-3 bg-slate-100 text-slate-400 rounded-xl hover:bg-slate-200 transition-all">
              <Settings className="w-4 h-4" />
             </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Team Member</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Institutional Role</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map((u, i) => (
                <tr key={u.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 border border-blue-100 overflow-hidden flex items-center justify-center font-black text-lg shadow-sm">
                        {u.img ? <img src={u.img} className="w-full h-full object-cover" /> : u.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-blue-950 group-hover:text-blue-600 transition-colors">{u.name}</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-widest">
                      {u.role}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                       <span className={`w-2 h-2 rounded-full ${
                         u.status === 'Active' ? 'bg-emerald-500' : 
                         u.status === 'Away' ? 'bg-orange-500' : 'bg-slate-300'
                       }`} />
                       <span className="text-xs font-bold text-blue-900">{u.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-slate-300 hover:text-blue-900 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-8 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <p>Showing 5 of 24 active members</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-white transition-all disabled:opacity-30" disabled>Previous</button>
            <button className="px-4 py-2 border border-slate-200 rounded-lg bg-white hover:border-blue-900 transition-all font-black text-blue-900">Next</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function QuickStat({ label, value, icon: Icon, color }: any) {
  const colors: any = {
    blue: 'bg-blue-50 text-blue-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    orange: 'bg-orange-50 text-orange-600',
    indigo: 'bg-indigo-50 text-indigo-600'
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm group hover:border-blue-900/20 transition-all">
      <div className={`w-10 h-10 ${colors[color]} rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-3xl font-black text-blue-950 tracking-tighter mb-1">{value}</h4>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</p>
      </div>
    </div>
  );
}
