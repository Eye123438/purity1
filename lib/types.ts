export interface User {
  id: string;
  role: 'admin' | 'dispatcher' | 'employee' | 'customer';
  name: string;
  phone: string;
  email: string;
  status: 'active' | 'inactive';
  created_at: Date;
}

export interface ServiceRequest {
  id: string;
  service_type: string;
  pick_location: string;
  drop_location: string;
  title: string;
  description: string;
  status: 'pending' | 'in_review' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
  assigned_to?: string;
  timestamps: {
    created: Date;
    assigned?: Date;
    in_progress?: Date;
    completed?: Date;
  };
  customer_id: string;
  reference_number: string;
}

export interface Employee {
  id: string;
  name: string;
  phone: string;
  role: 'driver' | 'rider' | 'dispatcher';
  availability: 'available' | 'busy' | 'offline';
  active: boolean;
}

export interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  type: 'sms' | 'whatsapp' | 'email';
  timestamp: Date;
  read: boolean;
}

export interface Settings {
  id: string;
  service_types: string[];
  pricing_rules: Record<string, number>;
  coverage_area: string[];
  working_hours: {
    start: string;
    end: string;
  };
}