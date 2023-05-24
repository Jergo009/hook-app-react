import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

  const { formState, onImputChange, username, email, password }= useForm({
      username: '',
      email: '',
      password: '',
    }
  );

//  const { username, email, password } = formState;



//   // useEffect(() => {
  //   // console.log('useEffect called');
  // }, []);


  // useEffect(() => {
  //   // console.log('formState changed!');
  // }, [formState]);

  // useEffect(() => {
  //   // console.log('email changed!');
  // }, [email]);





  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Nombre de Usuario"
        name="username"
        value={username}
        onChange={onImputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="juan@gmail.com"
        name="email"
        value={email}
        onChange={onImputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onImputChange}
      />

      {

        (username === 'resu2') && <Message />

      }
    </>
  )
}
