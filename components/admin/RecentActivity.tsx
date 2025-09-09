import { Clock, User, CheckCircle, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'request_completed',
      message: 'Grocery delivery completed by John Doe',
      timestamp: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      id: 2,
      type: 'new_request',
      message: 'New taxi booking from Mary Johnson',
      timestamp: new Date(Date.now() - 25 * 60 * 1000), // 25 minutes ago
      icon: <AlertCircle className="w-5 h-5 text-blue-500" />
    },
    {
      id: 3,
      type: 'employee_checkin',
      message: 'Jane Smith checked in for duty',
      timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
      icon: <User className="w-5 h-5 text-purple-500" />
    },
    {
      id: 4,
      type: 'request_assigned',
      message: 'Laundry pickup assigned to Mike Wilson',
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
      icon: <Clock className="w-5 h-5 text-orange-500" />
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
        <button className="text-crimson hover:text-crimson-dark text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex-shrink-0 mt-1">
              {activity.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">{activity.message}</p>
              <p className="text-xs text-gray-500 mt-1">
                {format(activity.timestamp, 'MMM dd, HH:mm')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}