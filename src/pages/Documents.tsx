import React from 'react';
import { FileText, Download, Eye, Clock, Search, Filter, Plus, FileCheck, ShieldAlert, Archive } from 'lucide-react';
import { motion } from 'motion/react';

const docs = [
  { id: 1, name: 'Commercial Insurance Policy 2024.pdf', size: '2.4 MB', type: 'Insurance', date: 'Jan 12, 2024', status: 'Verified' },
  { id: 2, name: 'Safety Certification - Unit #402.pdf', size: '1.1 MB', type: 'Certificate', date: 'Feb 02, 2024', status: 'Verified' },
  { id: 3, name: 'Q4 Logistics Operations Manual.docx', size: '840 KB', type: 'Manual', date: 'Dec 15, 2023', status: 'Internal' },
  { id: 4, name: 'Driver Training Protocol V2.pdf', size: '4.2 MB', type: 'Training', date: 'Jan 28, 2024', status: 'Review Required' },
];

export default function Documents() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10"
    >
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Document Repository</h2>
          <p className="text-slate-500 mt-1">Centralized storage for all enterprise compliance assets.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all">
          <Plus className="w-5 h-5" />
          Upload Document
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DocStat icon={FileCheck} label="Verified Policies" value="182" color="emerald" />
        <DocStat icon={ShieldAlert} label="Missing Docs" value="14" color="orange" />
        <DocStat icon={Archive} label="Archived" value="1.2k" color="indigo" />
      </div>

      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search repository..."
              className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border-slate-100 rounded-lg text-sm font-medium outline-none focus:ring-4 focus:ring-indigo-600/5 focus:bg-white focus:border-indigo-600 transition-all border border-slate-200"
            />
          </div>
          <div className="flex gap-3">
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-500 font-bold text-[10px] uppercase tracking-widest rounded-lg hover:bg-slate-200 transition-colors">
               <Filter className="w-4 h-4" />
               Filter
             </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Document Name</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Size</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date Modified</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {docs.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center p-2.5">
                        <FileText className="w-full h-full" />
                      </div>
                      <div>
                        <p className="font-bold text-blue-950 text-sm group-hover:text-blue-600 transition-colors">{doc.name}</p>
                        <p className={`text-[10px] font-black uppercase tracking-wider mt-1 ${
                          doc.status === 'Review Required' ? 'text-red-500' : 'text-slate-400'
                        }`}>{doc.status}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-[10px] font-black uppercase tracking-widest">
                      {doc.type}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm font-mono text-slate-400">{doc.size}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                      <Clock className="w-3.5 h-3.5 text-slate-300" />
                      {doc.date}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-2">
                       <button className="p-2 text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                         <Eye className="w-4 h-4" />
                       </button>
                       <button className="p-2 text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                         <Download className="w-4 h-4" />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </motion.div>
  );
}

function DocStat({ icon: Icon, label, value, color }: any) {
  const colors: any = {
    indigo: 'bg-indigo-50 text-indigo-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    orange: 'bg-orange-50 text-orange-600'
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-6">
      <div className={`w-12 h-12 ${colors[color]} rounded-xl flex items-center justify-center`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
