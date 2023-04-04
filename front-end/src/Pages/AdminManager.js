import React, { useEffect, useState } from 'react';
import { genericRoutes } from '../Axios/AxiosRoutes';
import NavBar from '../Components/NavBar';

function AdminManager() {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    email: '',
    role: 'customer',
    password: '',
    name: '',
  });
  const [stateBtn, setStateBtn] = useState(true);

  const getUsers = async () => {
    const { data } = await genericRoutes('seller/users', 'get');
    setUsers(data);
  };

  const onChangeForms = ({ target: { value, name } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const verifyValues = () => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const nameMin = 11;
    const numberMin = 5;
    const validateEmail = state.email.match(emailRegex);
    const validatePassword = state.password.length > numberMin;
    const validateName = state.name.length > nameMin;
    if (validateEmail && validatePassword && validateName) return setStateBtn(false);
    return setStateBtn(true);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    verifyValues();
  });

  return (
    <div>
      <NavBar />
      <h1>Cadastrar Usuario</h1>
      <input
        type="text"
        data-testid="admin_manage__input-name"
        name="name"
        onChange={ onChangeForms }
      />
      <input
        type="text"
        data-testid="admin_manage__input-email"
        name="email"
        onChange={ onChangeForms }
      />
      <input
        type="password"
        data-testid="admin_manage__input-password"
        name="password"
        onChange={ onChangeForms }
      />
      <select
        data-testid="admin_manage__select-role"
        name="role"
        onChange={ onChangeForms }
      >
        <option value="Vendedor">Vendedor</option>
        <option value="Admin">Admin</option>
        <option value="Usuario">Usuario</option>
      </select>
      <button
        type="button"
        disabled={ stateBtn }
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
