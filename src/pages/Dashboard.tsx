import React from 'react';
import { 
  CheckCircle2, 
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-6"
    >
      {/* Stat Grid */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard 
          label="Total Vehicles"
          value="1,284"
          trend="↑ 12%"
          trendDesc="vs last month"
          color="emerald"
        />
        <StatCard 
          label="Active Drivers"
          value="142"
          trend="↑ 4%"
          trendDesc="vs last month"
          color="emerald"
        />
        <StatCard 
          label="Monthly Revenue"
          value="$58,240"
          trend="— 0%"
          trendDesc="stable"
          color="slate"
        />
        <StatCard 
          label="Service Success"
          value="98.4%"
          progress={98.4}
        />
      </div>

      {/* Main View: Table and List */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-slate-800">Recent Fleet Activity</h3>
            <button className="text-indigo-600 text-sm font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50">
                  <th className="px-6 py-4">Vehicle Name</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Manager</th>
                  <th className="px-6 py-4">Health</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <VehicleRow name="Mercedes Sprinter #402" status="Active" manager="Sara Miller" health="+ 4.2%" />
                <VehicleRow name="Tesla Model 3 #091" status="Active" manager="Mark Chen" health="- 1.1%" />
                <VehicleRow name="Ford Transit #882" status="Review" manager="Sara Miller" health="0.0%" />
                <VehicleRow name="VW Golf #201" status="Active" manager="Kevin Vance" health="+ 2.8%" />
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="p-5 border-b border-slate-100">
            <h3 className="font-semibold text-slate-800">Upcoming Tasks</h3>
          </div>
          <div className="p-5 space-y-4">
            <TaskItem title="Verify Registration: Unit 402" sub="Central Hub • Due in 2 days" color="bg-amber-400" />
            <TaskItem title="Quarterly Inspection" sub="Skyway Terminal • Oct 24, 2023" color="bg-indigo-500" />
            <TaskItem title="Brake Maintenance" sub="Mobile Unit • OVERDUE" color="bg-rose-500" />
            <div className="pt-4">
              <button className="w-full py-2 bg-slate-50 text-slate-600 text-xs font-bold rounded hover:bg-slate-100 transition-all uppercase tracking-wide">Go to Task Manager</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ label, value, trend, trendDesc, color, progress }: any) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{label}</p>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      {trend ? (
        <div className="mt-2 flex items-center gap-1 text-xs font-medium">
          <span className={color === 'emerald' ? 'text-emerald-600' : 'text-slate-400'}>{trend}</span>
          <span className="text-slate-400 font-normal">{trendDesc}</span>
        </div>
      ) : progress ? (
        <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full">
          <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      ) : null}
    </div>
  );
}

function VehicleRow({ name, status, manager, health }: any) {
  return (
    <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4 font-medium text-slate-900 italic">{name}</td>
      <td className="px-6 py-4">
        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
          status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
        }`}>{status}</span>
      </td>
      <td className="px-6 py-4 text-slate-500">{manager}</td>
      <td className={`px-6 py-4 font-medium ${health.startsWith('+') ? 'text-emerald-600' : health.startsWith('-') ? 'text-rose-600' : 'text-slate-400'}`}>
        {health}
      </td>
    </tr>
  );
}

function TaskItem({ title, sub, color }: any) {
  return (
    <div className="flex gap-3">
      <div className={`w-1 ${color} rounded-full`}></div>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-xs text-slate-500">{sub}</p>
      </div>
    </div>
  );
}
