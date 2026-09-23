export const userData = [
  {
    _id: "user001",
    first_name: "Jiban",
    last_name: "Pandey",
    email: "jiban@gmail.com",
    phone: "9812345678",
    password: "$2b$10$hashedCustomerPassword",

    role: "customer",
    status: "active",
    auth_provider: "email",

    is_email_verified: true,
    is_phone_verified: true,

    avatar: {
      id: "img001",
      url: "https://cdn.example.com/avatar/customer.jpg",
      alt: "Customer Avatar",
    },

    social_accounts: [],

    addresses: [
      {
        id: "addr001",
        full_name: "Jiban Pandey",
        phone: "9812345678",
        province: "Bagmati",
        district: "Bhaktapur",
        city: "Madhyapur Thimi",
        ward_no: 4,
        street_address: "Bode Road",
        landmark: "Near Bode Temple",
        postal_code: "44800",
        is_default: true,
      },
    ],

    wishlist_product_ids: ["chair001", "sofa002"],
    cart_id: "cart001",

    last_login_at: "2026-09-23T09:15:20Z",
    created_at: "2026-08-20T12:10:00Z",
    updated_at: "2026-09-23T09:15:20Z",
  },

  // MANAGER USER

  {
    _id: "manager001",
    first_name: "Ramesh",
    last_name: "Adhikari",
    email: "manager@furnihome.com",
    phone: "9811111111",
    password: "$2b$10$hashedManagerPassword",

    role: "manager",
    status: "active",
    auth_provider: "google",

    is_email_verified: true,
    is_phone_verified: true,

    avatar: {
      id: "img002",
      url: "https://cdn.example.com/avatar/manager.jpg",
      alt: "Manager Avatar",
    },

    social_accounts: [
      {
        provider: "google",
        provider_id: "google_manager_123456",
        email: "manager@furnihome.com",
        profile_image: "https://lh3.googleusercontent.com/photo-manager.jpg",
        connected_at: "2026-09-10T08:00:00Z",
      },
    ],

    addresses: [],
    wishlist_product_ids: [],
    cart_id: null,

    last_login_at: "2026-09-23T10:30:00Z",
    created_at: "2026-08-01T09:00:00Z",
    updated_at: "2026-09-23T10:30:00Z",
  },

  // ADMIN USER

  {
    _id: "admin001",
    first_name: "Alex",
    last_name: "Pandey",
    email: "admin@furnihome.com",
    phone: "9809999999",
    password: "$2b$10$hashedAdminPassword",

    role: "admin",
    status: "active",
    auth_provider: "facebook",

    is_email_verified: true,
    is_phone_verified: true,

    avatar: {
      id: "img003",
      url: "https://cdn.example.com/avatar/admin.jpg",
      alt: "Admin Avatar",
    },

    social_accounts: [
      {
        provider: "facebook",
        provider_id: "facebook_admin_987654",
        email: "admin@furnihome.com",
        profile_image: "https://graph.facebook.com/admin-picture.jpg",
        connected_at: "2026-09-05T07:30:00Z",
      },
    ],

    addresses: [],
    wishlist_product_ids: [],
    cart_id: null,

    last_login_at: "2026-09-23T11:20:00Z",
    created_at: "2026-07-15T08:00:00Z",
    updated_at: "2026-09-23T11:20:00Z",
  },
];
