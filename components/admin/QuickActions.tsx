import { Plus, MessageCircle, FileText, Users } from 'lucide-react';
import Link from 'next/link';

export default function QuickActions() {
  const actions = [
    {
      title: 'New Request',
      description: 'Create a new service request',
      icon: <Plus className="w-6 h-6" />,
      href: '/admin/requests/new',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Send Message',
      description: 'Broadcast to customers',
      icon: <MessageCircle className="w-6 h-6" />,
      href: '/admin/messages/new',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Generate Report',
      description: 'Export data and analytics',
      icon: <FileText className="w-6 h-6" />,
      href: '/admin/reports',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      title: 'Add Employee',
      description: 'Register new staff member',
      icon: <Users className="w-6 h-6" />,
      href: '/admin/employees/new',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
      
      <div className="space-y-3">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className={`block ${action.color} text-white p-4 rounded-lg transition-colors`}
          >
            <div className="flex items-center space-x-3">
              {action.icon}
              <div>
                <h3 className="font-semibold">{action.title}</h3>
                <p className="text-sm opacity-90">{action.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">8</div>
          <div className="text-sm text-gray-600">Active Providers</div>
          <div className="mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              All Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}