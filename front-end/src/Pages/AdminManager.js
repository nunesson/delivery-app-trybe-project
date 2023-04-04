import React, { useEffect, useState } from 'react';
import { genericRoutes } from '../Axios/AxiosRoutes';
import NavBar from '../Components/NavBar';

function AdminManager() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await genericRoutes('seller/users', 'get');
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Cadastrar Usuario</h1>
      <input type="name" data-testid="admin_manage__input-name" />
      <input type="name" data-testid="admin_manage__input-email" />
      <input type="name" data-testid="admin_manage__input-password" />
      <select
        data-testid="admin_manage__select-role"
      >
        <option value="Vendedor">Vendedor</option>
        <option value="Admin">Admin</option>
        <option value="Usuario">Usuario</option>
      </select>
      <button
        type="button"
        data-testid="admin_manage__button-register"
      >
        Cadastrar
      </button>
      <h1>Lista de usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>
              Item
            </th>
            <th>
              Nome
            </th>
            <th>
              E-mail
            </th>
            <th>
              Tipo
            </th>
            <th>
              Excluir
            </th>
          </tr>
        </thead>
        {users.map((e, index) => (
          <tbody key={ e.name + e.email }>
            <td
              data-testid={ `admin_manage__element-user-table-item-number-${index}` }
            >
              1
            </td>
            <td
              data-testid="admin_manage__input-email"
            >
              {e.name}
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-email-${index}` }
            >
              {e.email}
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-role-${index}` }
            >
              {e.role}
            </td>
            <button
              type="button"
              data-testid={ `admin_manage__element-user-table-remove-${index}` }
            >
              Excluir
            </button>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default AdminManager;
