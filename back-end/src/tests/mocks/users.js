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

const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInBhc3N3b3JkIjoiYTRjODZlZGVjYzVhZWUwNmVmZjhmZGVkYTY5ZTBkMDQiLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTY4MTIzNzE0NX0.wU_fwuLlriDQ0UCkC7BlDps4pI37Dwk32BIDhSAMNV0"

const getUserReturn = {
  id: 3,
  name: "Cliente Zé Birita",
  email: "zebirita@email.com",
  password: "1c37466c159755ce1fa181bd247cb925",
  role: "customer",
  iat: 1681142112
}

const newUserReturn = {
  id: 4,
  name: "Usuario muito sabido",
  email: "gmail@gmail.com",
  password: "aca3ec7278a47144c0a863e60c595abe",
}

const newUserAdmin = {
  name: "Usuario muito sabido",
  email: "gmail@gmail.com",
  password: "batata123",
}

const newRegister = {
  name: "Usuario muito inteligente",
  email: "email@email.com",
  password: "senhasenhasenha",
}

const invalidRegister = {
  name: "Usuario muito inteligente",
  email: "zebirita@email.com",
  password: "senhasenhasenha",
}

module.exports = {
  allUsers,
  onlyCustomer,
  loginCustomer,
  loginInvalid,
  invalidCustomerPassword,
  getUserReturn,
  token,
  adminToken,
  newUserAdmin,
  newRegister,
  invalidRegister,
  newUserReturn,
}