import { useEffect, useState } from 'react';


export const SimpleForm = () => {

  const [formState, setformState] = useState({
    username: 'resu',
    email: 'juan@gmail.com',


  });

  const { username, email } = formState;

  const onImputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value

    })
  };


  useEffect(() => {
    console.log('useEffect called');
  }, []);


  useEffect(() => {
    console.log('formState changed!');
  }, [formState]);

  useEffect(() => {
    console.log('email changed!');
  }, [ email ]);





  return (
    <>
      <h1>Formulario Simple</h1>

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
        placeholder="e-mail juan@gmail.com"
        name="email"
        value={email}
        onChange={onImputChange}
      />


    </>
  )
}
