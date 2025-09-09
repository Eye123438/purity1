import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ClipboardList, 
  MessageSquare, 
  Settings, 
  BarChart3,
  Eye,
  UserCheck,
  Clock,
  CheckCircle
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import StatsCard from '../../components/admin/StatsCard';
import RecentActivity from '../../components/admin/RecentActivity';
import QuickActions from '../../components/admin/QuickActions';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalRequests: 0,
    activeEmployees: 0,
    pendingRequests: 0,
    completedToday: 0,
    unreadMessages: 0,
    revenue: 0
  });

  useEffect(() => {
    // Mock data - in real app, fetch from Firebase
    setStats({
      totalRequests: 125,
      activeEmployees: 8,
      pendingRequests: 12,
      completedToday: 23,
      unreadMessages: 5,
      revenue: 45600
    });
  }, []);

  const statsCards = [
    {
      title: 'Total Requests',
      value: stats.totalRequests.toString(),
      icon: <ClipboardList className="w-6 h-6" />,
      color: 'bg-blue-500',
      trend: '+12%'
    },
    {
      title: 'Active Employees',
      value: stats.activeEmployees.toString(),
      icon: <UserCheck className="w-6 h-6" />,
      color: 'bg-green-500',
      trend: '+2'
    },
    {
      title: 'Pending Requests',
      value: stats.pendingRequests.toString(),
      icon: <Clock className="w-6 h-6" />,
      color: 'bg-yellow-500',
      trend: '-3'
    },
    {
      title: 'Completed Today',
      value: stats.completedToday.toString(),
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'bg-purple-500',
      trend: '+18%'
    },
    {
      title: 'Unread Messages',
      value: stats.unreadMessages.toString(),
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'bg-red-500',
      trend: '+5'
    },
    {
      title: 'Revenue (KES)',
      value: `${(stats.revenue / 1000).toFixed(1)}K`,
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-indigo-500',
      trend: '+25%'
    }
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-8">
        {/* Welcome Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-crimson to-crimson-light text-white rounded-2xl p-8"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
          <p className="text-crimson-light/80">
            Here's what's happening with QuickLink Services today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <StatsCard {...card} />
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <RecentActivity />
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <QuickActions />
          </motion.div>
        </div>

        {/* Additional Insights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">System Status</h2>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              All Systems Operational
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">98.5%</div>
              <div className="text-sm text-gray-600">Service Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2.3s</div>
              <div className="text-sm text-gray-600">Avg Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">4.8/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">95%</div>
              <div className="text-sm text-gray-600">Completion Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  );
}