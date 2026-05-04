import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Truck, 
  BadgeCheck, 
  MapPin, 
  FileText, 
  Users, 
  LogOut, 
  Search, 
  Bell, 
  Settings, 
  Plus,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Pages
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Fleet from './pages/Fleet';
import VehicleDetail from './pages/VehicleDetail';
import Register from './pages/Register';
import UserManagement from './pages/UserManagement';
import VerificationBooking from './pages/VerificationBooking';
import ValetService from './pages/ValetService';

import Documents from './pages/Documents';

const NavLink = ({ to, icon: Icon, children, active }: { to: string, icon: any, children: React.ReactNode, active: boolean }) => (
  <Link 
    to={to} 
    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
      active 
        ? 'bg-indigo-600/10 text-indigo-400' 
        : 'text-slate-400 hover:text-white hover:bg-slate-800'
    }`}
  >
    <div className={`w-5 h-5 mr-3 flex items-center justify-center border-2 rounded-sm transition-colors ${
      active ? 'border-indigo-400' : 'border-slate-500 group-hover:border-slate-400'
    }`}>
      <Icon className="w-3 h-3" />
    </div>
    <span className="font-medium">{children}</span>
  </Link>
);

const Sidebar = () => {
  const location = useLocation();
  const isAdmin = location.pathname.includes('/users');

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-900 z-50 flex flex-col py-6 border-r border-slate-800">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">F</div>
        <span className="text-white font-semibold text-lg tracking-tight">FleetControl</span>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        <NavLink to="/dashboard" icon={LayoutDashboard} active={location.pathname === '/dashboard'}>Dashboard</NavLink>
        <NavLink to="/fleet" icon={Truck} active={location.pathname === '/fleet' || location.pathname.includes('/vehicle/')}>Vehicles</NavLink>
        <NavLink to="/verification" icon={BadgeCheck} active={location.pathname === '/verification'}>Verification</NavLink>
        <NavLink to="/valet" icon={MapPin} active={location.pathname === '/valet'}>Valet Service</NavLink>
        <NavLink to="/documents" icon={FileText} active={location.pathname === '/documents'}>Documents</NavLink>
        <NavLink to="/users" icon={Users} active={location.pathname === '/users'}>Team</NavLink>
      </nav>

      <div className="p-6 border-t border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white border border-slate-600">JD</div>
          <div>
            <p className="text-sm text-white font-medium">Julian Diaz</p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
        </div>
        <div className="space-y-1">
          <Link to="/support" className="flex items-center px-4 py-2 text-slate-400 hover:text-white transition-colors text-sm">
            <HelpCircle className="w-4 h-4 mr-3" />
            <span>Support</span>
          </Link>
          <Link to="/" className="flex items-center px-4 py-2 text-slate-400 hover:text-rose-400 transition-colors text-sm">
            <LogOut className="w-4 h-4 mr-3" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

const Header = ({ showSidebar }: { showSidebar: boolean }) => (
  <header className={`sticky top-0 w-full flex justify-between items-center px-8 h-16 bg-white border-b border-slate-200 z-40 shadow-sm antialiased transition-all ${showSidebar ? 'pl-72' : ''}`}>
    <div className="flex items-center gap-4">
      <h2 className="text-xl font-semibold text-slate-800">Portfolio Overview</h2>
    </div>
    <div className="flex items-center gap-6">
      <div className="relative hidden lg:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
        <input 
          className="pl-10 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm w-64 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" 
          placeholder="Search fleet assets..." 
          type="text" 
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 shadow-sm transition-colors">+ New Asset</button>
        <div className="w-px h-6 bg-slate-200 mx-2"></div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 uppercase">Status:</span>
          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase tracking-wider">Operational</span>
        </div>
      </div>
    </div>
  </header>
);

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isPublic = location.pathname === '/' || location.pathname === '/register';

  if (isPublic) return <>{children}</>;

  return (
    <div className="bg-slate-50 min-h-screen">
      <Sidebar />
      <div className="pl-64">
        <Header showSidebar={false} />
        <main className="p-8 max-w-[1440px] mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppLayout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/vehicle/:id" element={<VehicleDetail />} />
            <Route path="/verification" element={<VerificationBooking />} />
            <Route path="/valet" element={<ValetService />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/users" element={<UserManagement />} />
          </Routes>
        </AnimatePresence>
      </AppLayout>
    </Router>
  );
}
