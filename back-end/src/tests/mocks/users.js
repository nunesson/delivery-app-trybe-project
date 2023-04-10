const allUsers = [
  {
    email: "adm@deliveryapp.com",
    id: 1,
    name: "Delivery App Admin",
    password: "a4c86edecc5aee06eff8fdeda69e0d04",
    role: "administrator",
    // --adm2@21!!--
  },
  {
    email: "fulana@deliveryapp.com",
    id: 2,
    name: "Fulana Pereira",
    password: "3c28d2b0881bf46457a853e0b07531c6",
    role: "seller",
    // fulana@123
  },
  {
    email: "zebirita@email.com",
    id: 3,
    name: "Cliente Zé Birita",
    password: "1c37466c159755ce1fa181bd247cb925",
    role: "customer",
    // $#zebirita#$
  },
];

const onlyCustomer = {
  email: "zebirita@email.com",
  id: 3,
  name: "Cliente Zé Birita",
  password: "1c37466c159755ce1fa181bd247cb925",
  role: "customer",
  // $#zebirita#$
}

const loginInvalid = {
  email: "email@email.com",
  password: "senha"
}

const loginCustomer = {
  email: "zebirita@email.com",
  password: "$#zebirita#$"
}

const invalidCustomerPassword = {
  email: "zebirita@email.com",
  password: "senhaerrada"
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOpIEJpcml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxYzM3NDY2YzE1OTc1NWNlMWZhMTgxYmQyNDdjYjkyNSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4MTE0MjExMn0.Lbnn8lnrVCMbDRe9ujDN3RkhlfwWThP05tZJhjGSfTA"

const getUserReturn = {
  id: 3,
  name: "Cliente Zé Birita",
  email: "zebirita@email.com",
  password: "1c37466c159755ce1fa181bd247cb925",
  role: "customer",
  iat: 1681142112
}

module.exports = {
  allUsers,
  onlyCustomer,
  loginCustomer,
  loginInvalid,
  invalidCustomerPassword,
  getUserReturn,
  token,
}