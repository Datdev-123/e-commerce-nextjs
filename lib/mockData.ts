import { Customer, Order, InventoryItem, Report } from '@/types/product';

export const mockCustomers: Customer[] = [
  {
    id: 'CUST-001',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    joinDate: '2023-06-15',
    totalOrders: 12,
    totalSpent: 2499.99,
    lastOrder: '2024-01-20',
    status: 'vip',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 'CUST-002',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 (555) 234-5678',
    address: '456 Oak Ave, Los Angeles, CA 90210',
    joinDate: '2023-08-22',
    totalOrders: 8,
    totalSpent: 1299.99,
    lastOrder: '2024-01-18',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 'CUST-003',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: '+1 (555) 345-6789',
    address: '789 Pine St, Chicago, IL 60601',
    joinDate: '2024-01-10',
    totalOrders: 2,
    totalSpent: 599.99,
    lastOrder: '2024-01-15',
    status: 'new',
    avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 'CUST-004',
    name: 'Alice Brown',
    email: 'alice@example.com',
    phone: '+1 (555) 456-7890',
    address: '321 Elm St, Miami, FL 33101',
    joinDate: '2023-03-12',
    totalOrders: 5,
    totalSpent: 899.99,
    lastOrder: '2023-12-20',
    status: 'inactive',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 'CUST-005',
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    phone: '+1 (555) 567-8901',
    address: '654 Maple Ave, Seattle, WA 98101',
    joinDate: '2023-11-05',
    totalOrders: 15,
    totalSpent: 3299.99,
    lastOrder: '2024-01-22',
    status: 'vip',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 'CUST-006',
    name: 'Diana Martinez',
    email: 'diana@example.com',
    phone: '+1 (555) 678-9012',
    address: '987 Cedar Rd, Austin, TX 73301',
    joinDate: '2023-09-18',
    totalOrders: 7,
    totalSpent: 1150.50,
    lastOrder: '2024-01-19',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 'CUST-007',
    name: 'Edward Taylor',
    email: 'edward@example.com',
    phone: '+1 (555) 789-0123',
    address: '147 Birch Lane, Denver, CO 80201',
    joinDate: '2024-01-05',
    totalOrders: 1,
    totalSpent: 299.99,
    lastOrder: '2024-01-05',
    status: 'new',
    avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 'CUST-008',
    name: 'Fiona Davis',
    email: 'fiona@example.com',
    phone: '+1 (555) 890-1234',
    address: '258 Spruce St, Portland, OR 97201',
    joinDate: '2023-07-30',
    totalOrders: 9,
    totalSpent: 1875.25,
    lastOrder: '2024-01-21',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 'CUST-009',
    name: 'George Anderson',
    email: 'george@example.com',
    phone: '+1 (555) 901-2345',
    address: '369 Willow Dr, Boston, MA 02101',
    joinDate: '2023-04-14',
    totalOrders: 18,
    totalSpent: 4250.75,
    lastOrder: '2024-01-23',
    status: 'vip',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 'CUST-010',
    name: 'Helen Garcia',
    email: 'helen@example.com',
    phone: '+1 (555) 012-3456',
    address: '741 Poplar Ave, Phoenix, AZ 85001',
    joinDate: '2023-12-08',
    totalOrders: 3,
    totalSpent: 675.50,
    lastOrder: '2023-12-28',
    status: 'inactive',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    email: 'john@example.com',
    total: 299.99,
    status: 'delivered',
    items: 2,
    date: '2024-01-20',
    paymentMethod: 'Credit Card',
    shippingAddress: '123 Main St, New York, NY 10001',
    products: [
      { id: '1', name: 'Premium Wireless Headphones', price: 299.99, quantity: 1, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=100' }
    ]
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    email: 'jane@example.com',
    total: 149.99,
    status: 'shipped',
    items: 1,
    date: '2024-01-19',
    paymentMethod: 'PayPal',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90210',
    products: [
      { id: '25', name: 'Gaming Mechanical Keyboard', price: 149.99, quantity: 1, image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=100' }
    ]
  },
  {
    id: 'ORD-003',
    customer: 'Bob Johnson',
    email: 'bob@example.com',
    total: 599.99,
    status: 'processing',
    items: 3,
    date: '2024-01-18',
    paymentMethod: 'Credit Card',
    shippingAddress: '789 Pine St, Chicago, IL 60601',
    products: [
      { id: '24', name: 'Vintage Camera', price: 599.99, quantity: 1, image: 'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=100' }
    ]
  },
  {
    id: 'ORD-004',
    customer: 'Alice Brown',
    email: 'alice@example.com',
    total: 89.99,
    status: 'pending',
    items: 1,
    date: '2024-01-17',
    paymentMethod: 'Apple Pay',
    shippingAddress: '321 Elm St, Miami, FL 33101',
    products: [
      { id: '7', name: 'Luxury Silk Scarf', price: 89.99, quantity: 1, image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=100' }
    ]
  },
  {
    id: 'ORD-005',
    customer: 'Charlie Wilson',
    email: 'charlie@example.com',
    total: 199.99,
    status: 'cancelled',
    items: 2,
    date: '2024-01-16',
    paymentMethod: 'Credit Card',
    shippingAddress: '654 Maple Ave, Seattle, WA 98101',
    products: [
      { id: '6', name: 'Designer Leather Jacket', price: 199.99, quantity: 1, image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100' }
    ]
  },
  {
    id: 'ORD-006',
    customer: 'Diana Martinez',
    email: 'diana@example.com',
    total: 449.99,
    status: 'delivered',
    items: 1,
    date: '2024-01-15',
    paymentMethod: 'Credit Card',
    shippingAddress: '987 Cedar Rd, Austin, TX 73301',
    products: [
      { id: '2', name: 'Smart Watch Series X', price: 449.99, quantity: 1, image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100' }
    ]
  },
  {
    id: 'ORD-007',
    customer: 'Edward Taylor',
    email: 'edward@example.com',
    total: 129.99,
    status: 'shipped',
    items: 1,
    date: '2024-01-14',
    paymentMethod: 'PayPal',
    shippingAddress: '147 Birch Lane, Denver, CO 80201',
    products: [
      { id: '5', name: 'Bluetooth Speaker Pro', price: 129.99, quantity: 1, image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=100' }
    ]
  },
  {
    id: 'ORD-008',
    customer: 'Fiona Davis',
    email: 'fiona@example.com',
    total: 899.99,
    status: 'processing',
    items: 1,
    date: '2024-01-13',
    paymentMethod: 'Credit Card',
    shippingAddress: '258 Spruce St, Portland, OR 97201',
    products: [
      { id: '26', name: 'Luxury Watch', price: 899.99, quantity: 1, image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=100' }
    ]
  },
  {
    id: 'ORD-009',
    customer: 'George Anderson',
    email: 'george@example.com',
    total: 349.99,
    status: 'delivered',
    items: 1,
    date: '2024-01-12',
    paymentMethod: 'Credit Card',
    shippingAddress: '369 Willow Dr, Boston, MA 02101',
    products: [
      { id: '10', name: 'Modern Coffee Table', price: 349.99, quantity: 1, image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=100' }
    ]
  },
  {
    id: 'ORD-010',
    customer: 'Helen Garcia',
    email: 'helen@example.com',
    total: 249.99,
    status: 'pending',
    items: 1,
    date: '2024-01-11',
    paymentMethod: 'Apple Pay',
    shippingAddress: '741 Poplar Ave, Phoenix, AZ 85001',
    products: [
      { id: '9', name: 'Designer Handbag', price: 249.99, quantity: 1, image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=100' }
    ]
  }
];

export const mockInventory: InventoryItem[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    sku: 'SKU-001',
    category: 'Electronics',
    currentStock: 50,
    minStock: 10,
    maxStock: 100,
    reorderPoint: 15,
    unitCost: 179.99,
    totalValue: 8999.50,
    supplier: 'AudioTech Suppliers',
    lastRestocked: '2024-01-15',
    status: 'in-stock'
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    sku: 'SKU-002',
    category: 'Electronics',
    currentStock: 30,
    minStock: 10,
    maxStock: 80,
    reorderPoint: 15,
    unitCost: 269.99,
    totalValue: 8099.70,
    supplier: 'SmartTech Inc',
    lastRestocked: '2024-01-16',
    status: 'in-stock'
  },
  {
    id: '3',
    name: '4K Gaming Monitor',
    sku: 'SKU-003',
    category: 'Electronics',
    currentStock: 15,
    minStock: 10,
    maxStock: 50,
    reorderPoint: 12,
    unitCost: 419.99,
    totalValue: 6299.85,
    supplier: 'Display Solutions',
    lastRestocked: '2024-01-17',
    status: 'in-stock'
  },
  {
    id: '4',
    name: 'Wireless Charging Pad',
    sku: 'SKU-004',
    category: 'Electronics',
    currentStock: 100,
    minStock: 20,
    maxStock: 200,
    reorderPoint: 25,
    unitCost: 23.99,
    totalValue: 2399.00,
    supplier: 'ChargeTech Ltd',
    lastRestocked: '2024-01-18',
    status: 'in-stock'
  },
  {
    id: '5',
    name: 'Bluetooth Speaker Pro',
    sku: 'SKU-005',
    category: 'Electronics',
    currentStock: 75,
    minStock: 15,
    maxStock: 120,
    reorderPoint: 20,
    unitCost: 77.99,
    totalValue: 5849.25,
    supplier: 'AudioTech Suppliers',
    lastRestocked: '2024-01-19',
    status: 'in-stock'
  },
  {
    id: '6',
    name: 'Designer Leather Jacket',
    sku: 'SKU-006',
    category: 'Fashion',
    currentStock: 25,
    minStock: 5,
    maxStock: 50,
    reorderPoint: 8,
    unitCost: 119.99,
    totalValue: 2999.75,
    supplier: 'Fashion Forward',
    lastRestocked: '2024-01-17',
    status: 'in-stock'
  },
  {
    id: '7',
    name: 'Luxury Silk Scarf',
    sku: 'SKU-007',
    category: 'Fashion',
    currentStock: 40,
    minStock: 10,
    maxStock: 80,
    reorderPoint: 15,
    unitCost: 53.99,
    totalValue: 2159.60,
    supplier: 'Silk Elegance',
    lastRestocked: '2024-01-20',
    status: 'in-stock'
  },
  {
    id: '8',
    name: 'Premium Denim Jeans',
    sku: 'SKU-008',
    category: 'Fashion',
    currentStock: 60,
    minStock: 15,
    maxStock: 100,
    reorderPoint: 20,
    unitCost: 47.99,
    totalValue: 2879.40,
    supplier: 'Denim Works',
    lastRestocked: '2024-01-21',
    status: 'in-stock'
  },
  {
    id: '9',
    name: 'Designer Handbag',
    sku: 'SKU-009',
    category: 'Fashion',
    currentStock: 20,
    minStock: 5,
    maxStock: 40,
    reorderPoint: 8,
    unitCost: 149.99,
    totalValue: 2999.80,
    supplier: 'Luxury Bags Co',
    lastRestocked: '2024-01-22',
    status: 'in-stock'
  },
  {
    id: '10',
    name: 'Modern Coffee Table',
    sku: 'SKU-010',
    category: 'Home & Garden',
    currentStock: 15,
    minStock: 5,
    maxStock: 30,
    reorderPoint: 8,
    unitCost: 209.99,
    totalValue: 3149.85,
    supplier: 'Modern Furniture',
    lastRestocked: '2024-01-18',
    status: 'in-stock'
  },
  {
    id: '11',
    name: 'Ceramic Planter Set',
    sku: 'SKU-011',
    category: 'Home & Garden',
    currentStock: 45,
    minStock: 10,
    maxStock: 80,
    reorderPoint: 15,
    unitCost: 35.99,
    totalValue: 1619.55,
    supplier: 'Garden Essentials',
    lastRestocked: '2024-01-23',
    status: 'in-stock'
  },
  {
    id: '12',
    name: 'Smart LED Light Bulbs',
    sku: 'SKU-012',
    category: 'Home & Garden',
    currentStock: 200,
    minStock: 50,
    maxStock: 300,
    reorderPoint: 60,
    unitCost: 14.99,
    totalValue: 2998.00,
    supplier: 'Smart Lighting',
    lastRestocked: '2024-01-24',
    status: 'in-stock'
  },
  {
    id: '13',
    name: 'Professional Running Shoes',
    sku: 'SKU-013',
    category: 'Sports',
    currentStock: 40,
    minStock: 10,
    maxStock: 80,
    reorderPoint: 15,
    unitCost: 77.99,
    totalValue: 3119.60,
    supplier: 'Athletic Gear Pro',
    lastRestocked: '2024-01-19',
    status: 'in-stock'
  },
  {
    id: '14',
    name: 'Yoga Mat Premium',
    sku: 'SKU-014',
    category: 'Sports',
    currentStock: 80,
    minStock: 20,
    maxStock: 150,
    reorderPoint: 25,
    unitCost: 29.99,
    totalValue: 2399.20,
    supplier: 'Fitness Essentials',
    lastRestocked: '2024-01-25',
    status: 'in-stock'
  },
  {
    id: '15',
    name: 'Adjustable Dumbbells',
    sku: 'SKU-015',
    category: 'Sports',
    currentStock: 25,
    minStock: 5,
    maxStock: 50,
    reorderPoint: 10,
    unitCost: 179.99,
    totalValue: 4499.75,
    supplier: 'Strength Equipment',
    lastRestocked: '2024-01-26',
    status: 'in-stock'
  },
  {
    id: '16',
    name: 'Organic Face Serum',
    sku: 'SKU-016',
    category: 'Beauty & Health',
    currentStock: 60,
    minStock: 15,
    maxStock: 100,
    reorderPoint: 20,
    unitCost: 47.99,
    totalValue: 2879.40,
    supplier: 'Natural Beauty Co',
    lastRestocked: '2024-01-27',
    status: 'in-stock'
  },
  {
    id: '17',
    name: 'Essential Oil Diffuser',
    sku: 'SKU-017',
    category: 'Beauty & Health',
    currentStock: 90,
    minStock: 20,
    maxStock: 150,
    reorderPoint: 25,
    unitCost: 23.99,
    totalValue: 2159.10,
    supplier: 'Wellness Products',
    lastRestocked: '2024-01-28',
    status: 'in-stock'
  },
  {
    id: '18',
    name: 'Bestselling Novel Collection',
    sku: 'SKU-018',
    category: 'Books & Media',
    currentStock: 35,
    minStock: 10,
    maxStock: 70,
    reorderPoint: 15,
    unitCost: 53.99,
    totalValue: 1889.65,
    supplier: 'Book Distributors',
    lastRestocked: '2024-01-29',
    status: 'in-stock'
  },
  {
    id: '19',
    name: 'Vintage Vinyl Records',
    sku: 'SKU-019',
    category: 'Books & Media',
    currentStock: 12,
    minStock: 5,
    maxStock: 25,
    reorderPoint: 8,
    unitCost: 89.99,
    totalValue: 1079.88,
    supplier: 'Vintage Music',
    lastRestocked: '2024-01-30',
    status: 'in-stock'
  },
  {
    id: '20',
    name: 'Car Phone Mount',
    sku: 'SKU-020',
    category: 'Automotive',
    currentStock: 150,
    minStock: 30,
    maxStock: 250,
    reorderPoint: 40,
    unitCost: 11.99,
    totalValue: 1798.50,
    supplier: 'Auto Accessories',
    lastRestocked: '2024-01-31',
    status: 'in-stock'
  },
  {
    id: '21',
    name: 'Premium Car Seat Covers',
    sku: 'SKU-021',
    category: 'Automotive',
    currentStock: 30,
    minStock: 8,
    maxStock: 60,
    reorderPoint: 12,
    unitCost: 95.99,
    totalValue: 2879.70,
    supplier: 'Car Interior Pro',
    lastRestocked: '2024-02-01',
    status: 'in-stock'
  },
  {
    id: '22',
    name: 'Educational Building Blocks',
    sku: 'SKU-022',
    category: 'Toys & Games',
    currentStock: 55,
    minStock: 15,
    maxStock: 100,
    reorderPoint: 20,
    unitCost: 41.99,
    totalValue: 2309.45,
    supplier: 'Educational Toys',
    lastRestocked: '2024-02-02',
    status: 'in-stock'
  },
  {
    id: '23',
    name: 'Board Game Collection',
    sku: 'SKU-023',
    category: 'Toys & Games',
    currentStock: 25,
    minStock: 8,
    maxStock: 50,
    reorderPoint: 12,
    unitCost: 59.99,
    totalValue: 1499.75,
    supplier: 'Game Masters',
    lastRestocked: '2024-02-03',
    status: 'in-stock'
  },
  {
    id: '24',
    name: 'Vintage Camera',
    sku: 'SKU-024',
    category: 'Electronics',
    currentStock: 12,
    minStock: 5,
    maxStock: 25,
    reorderPoint: 8,
    unitCost: 359.99,
    totalValue: 4319.88,
    supplier: 'Camera Classics',
    lastRestocked: '2024-01-20',
    status: 'in-stock'
  },
  {
    id: '25',
    name: 'Gaming Mechanical Keyboard',
    sku: 'SKU-025',
    category: 'Electronics',
    currentStock: 45,
    minStock: 10,
    maxStock: 80,
    reorderPoint: 15,
    unitCost: 89.99,
    totalValue: 4049.55,
    supplier: 'Gaming Gear',
    lastRestocked: '2024-02-04',
    status: 'in-stock'
  },
  {
    id: '26',
    name: 'Luxury Watch',
    sku: 'SKU-026',
    category: 'Fashion',
    currentStock: 8,
    minStock: 3,
    maxStock: 15,
    reorderPoint: 5,
    unitCost: 539.99,
    totalValue: 4319.92,
    supplier: 'Timepiece Luxury',
    lastRestocked: '2024-02-05',
    status: 'in-stock'
  },
  {
    id: '27',
    name: 'Designer Sunglasses',
    sku: 'SKU-027',
    category: 'Fashion',
    currentStock: 35,
    minStock: 10,
    maxStock: 70,
    reorderPoint: 15,
    unitCost: 107.99,
    totalValue: 3779.65,
    supplier: 'Eyewear Elite',
    lastRestocked: '2024-02-06',
    status: 'in-stock'
  },
  {
    id: '28',
    name: 'Smart Thermostat',
    sku: 'SKU-028',
    category: 'Home & Garden',
    currentStock: 40,
    minStock: 10,
    maxStock: 80,
    reorderPoint: 15,
    unitCost: 119.99,
    totalValue: 4799.60,
    supplier: 'Smart Home Tech',
    lastRestocked: '2024-02-07',
    status: 'in-stock'
  },
  {
    id: '29',
    name: 'Outdoor Garden Lights',
    sku: 'SKU-029',
    category: 'Home & Garden',
    currentStock: 70,
    minStock: 20,
    maxStock: 120,
    reorderPoint: 25,
    unitCost: 29.99,
    totalValue: 2099.30,
    supplier: 'Outdoor Lighting',
    lastRestocked: '2024-02-08',
    status: 'in-stock'
  },
  {
    id: '30',
    name: 'Professional Tennis Racket',
    sku: 'SKU-030',
    category: 'Sports',
    currentStock: 20,
    minStock: 5,
    maxStock: 40,
    reorderPoint: 10,
    unitCost: 149.99,
    totalValue: 2999.80,
    supplier: 'Pro Sports Equipment',
    lastRestocked: '2024-02-09',
    status: 'in-stock'
  }
];

export const mockReports: Report[] = [
  {
    id: 'sales-summary',
    name: 'Sales Summary Report',
    description: 'Comprehensive overview of sales performance, trends, and top products',
    type: 'sales',
    lastGenerated: '2024-01-20',
    size: '2.4 MB',
    status: 'ready'
  },
  {
    id: 'inventory-status',
    name: 'Inventory Status Report',
    description: 'Current stock levels, low stock alerts, and inventory valuation',
    type: 'inventory',
    lastGenerated: '2024-01-19',
    size: '1.8 MB',
    status: 'ready'
  },
  {
    id: 'customer-analytics',
    name: 'Customer Analytics Report',
    description: 'Customer behavior, demographics, and lifetime value analysis',
    type: 'customers',
    lastGenerated: '2024-01-18',
    size: '3.1 MB',
    status: 'ready'
  },
  {
    id: 'financial-overview',
    name: 'Financial Overview Report',
    description: 'Revenue, expenses, profit margins, and financial KPIs',
    type: 'financial',
    lastGenerated: '2024-01-17',
    size: '1.5 MB',
    status: 'ready'
  },
  {
    id: 'product-performance',
    name: 'Product Performance Report',
    description: 'Individual product sales, returns, and profitability analysis',
    type: 'sales',
    lastGenerated: '2024-01-16',
    size: '4.2 MB',
    status: 'generating'
  },
  {
    id: 'tax-report',
    name: 'Tax Report',
    description: 'Tax calculations, exemptions, and compliance documentation',
    type: 'financial',
    lastGenerated: '2024-01-15',
    size: '892 KB',
    status: 'ready'
  },
  {
    id: 'monthly-sales',
    name: 'Monthly Sales Report',
    description: 'Detailed monthly sales breakdown by category and region',
    type: 'sales',
    lastGenerated: '2024-01-14',
    size: '2.8 MB',
    status: 'ready'
  },
  {
    id: 'customer-retention',
    name: 'Customer Retention Analysis',
    description: 'Customer loyalty metrics and retention strategies',
    type: 'customers',
    lastGenerated: '2024-01-13',
    size: '1.9 MB',
    status: 'ready'
  }
];