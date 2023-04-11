import React, { useEffect, useState } from 'react';
import { genericRoutes } from '../Axios/AxiosRoutes';
import NavBar from '../Components/NavBar';
import { getLocalStorage } from '../LocalStorage/localStorage';

function AdminManager() {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    email: '',
    role: 'customer',
    password: '',
    name: '',
  });
  const [errorStatus, setErrorStatus] = useState(false);
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

  const onClickRegister = async () => {
    // const statusHTTP = 201;
    const statusHTTPConflict = 409;
    console.log(state);
    const user = getLocalStorage('user');
    const { status, data } = await genericRoutes(
      'admin',
      'post',
      state,
      { headers: { Authorization: user.token } },
    );
    console.log(data);
    if (status === statusHTTPConflict) return setErrorStatus(true);
    getUsers();
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
      { errorStatus && (
        <h1
          data-testid="admin_manage__element-invalid-register"
        >
          Tem parada errada
        </h1>)}
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
        <option value="customer">Usuario</option>
        <option value="seller">Vendedor</option>
      </select>
      <button
        type="button"
        disabled={ stateBtn }
        onClick={ onClickRegister }
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
              {index + 1}
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-name-${index}` }
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
