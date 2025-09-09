import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, CheckCircle, XCircle, Eye } from 'lucide-react';
import Layout from '../components/Layout';
import { ServiceRequest } from '../lib/types';
import { format } from 'date-fns';

export default function MyRequests() {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null);

  // Mock data - in real app, fetch from Firebase
  useEffect(() => {
    const mockRequests: ServiceRequest[] = [
      {
        id: '1',
        reference_number: 'QL165432ABCD',
        service_type: 'Grocery Shopping & Delivery',
        pick_location: 'Kerugoya Market',
        drop_location: '123 Main Street, Kerugoya',
        title: 'Weekly Grocery Shopping',
        description: 'Need vegetables, fruits, and household items',
        status: 'in_progress',
        assigned_to: 'John Doe',
        customer_id: 'user1',
        timestamps: {
          created: new Date('2025-01-09T10:00:00'),
          assigned: new Date('2025-01-09T10:15:00'),
          in_progress: new Date('2025-01-09T11:00:00')
        }
      },
      {
        id: '2',
        reference_number: 'QL165433EFGH',
        service_type: 'Taxi & Transportation',
        pick_location: 'Home',
        drop_location: 'Nairobi CBD',
        title: 'Airport Transfer',
        description: 'Need ride to Jomo Kenyatta International Airport',
        status: 'completed',
        assigned_to: 'Jane Smith',
        customer_id: 'user1',
        timestamps: {
          created: new Date('2025-01-08T07:00:00'),
          assigned: new Date('2025-01-08T07:10:00'),
          in_progress: new Date('2025-01-08T08:00:00'),
          completed: new Date('2025-01-08T11:30:00')
        }
      }
    ];
    setRequests(mockRequests);
  }, []);

  const getStatusColor = (status: ServiceRequest['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in_review': return 'bg-blue-100 text-blue-800';
      case 'assigned': return 'bg-purple-100 text-purple-800';
      case 'in_progress': return 'bg-orange-100 text-orange-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: ServiceRequest['status']) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'in_review': return <Eye className="w-4 h-4" />;
      case 'assigned': return <Phone className="w-4 h-4" />;
      case 'in_progress': return <Clock className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <Layout title="My Requests - QuickLink Services">
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
              My Requests
            </h1>
            <p className="text-lg text-gray-600">
              Track your service requests and transportation bookings
            </p>
          </motion.div>

          {requests.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="bg-white rounded-xl shadow-lg p-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  No Requests Yet
                </h3>
                <p className="text-gray-600 mb-8">
                  You haven't made any service requests. Ready to get started?
                </p>
                <a
                  href="/"
                  className="bg-crimson text-white px-8 py-4 rounded-lg font-semibold hover:bg-crimson-dark transition-colors"
                >
                  Book a Service
                </a>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {requests.map((request, index) => (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedRequest(request)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-mono text-gray-500">
                          #{request.reference_number}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(request.status)}`}>
                          {getStatusIcon(request.status)}
                          <span className="capitalize">{request.status.replace('_', ' ')}</span>
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {request.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{request.service_type}</p>
                      <div className="text-sm text-gray-500">
                        <p>From: {request.pick_location}</p>
                        <p>To: {request.drop_location}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <p className="text-sm text-gray-500 mb-1">
                        Created: {format(request.timestamps.created, 'MMM dd, yyyy HH:mm')}
                      </p>
                      {request.assigned_to && (
                        <p className="text-sm text-gray-600">
                          Assigned to: {request.assigned_to}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-4 overflow-x-auto">
                      {[
                        { key: 'created', label: 'Created', date: request.timestamps.created },
                        { key: 'assigned', label: 'Assigned', date: request.timestamps.assigned },
                        { key: 'in_progress', label: 'In Progress', date: request.timestamps.in_progress },
                        { key: 'completed', label: 'Completed', date: request.timestamps.completed },
                      ].map((step, stepIndex) => (
                        <div key={step.key} className="flex items-center space-x-2 whitespace-nowrap">
                          <div className={`w-3 h-3 rounded-full ${
                            step.date ? 'bg-crimson' : 'bg-gray-300'
                          }`} />
                          <div className="text-xs">
                            <div className={`font-medium ${step.date ? 'text-gray-900' : 'text-gray-400'}`}>
                              {step.label}
                            </div>
                            {step.date && (
                              <div className="text-gray-500">
                                {format(step.date, 'HH:mm')}
                              </div>
                            )}
                          </div>
                          {stepIndex < 3 && (
                            <div className={`w-6 h-px ${
                              request.timestamps[step.key as keyof typeof request.timestamps] ? 'bg-crimson' : 'bg-gray-300'
                            }`} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Quick Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Need Help?
              </h3>
              <p className="text-gray-600 mb-6">
                Have questions about your requests or need immediate assistance?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/254111679286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                >
                  WhatsApp Support
                </a>
                <a
                  href="tel:0111679286"
                  className="bg-crimson text-white px-6 py-3 rounded-lg font-medium hover:bg-crimson-dark transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}