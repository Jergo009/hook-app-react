import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();



  return (
    <>
        <h1>Counter with Hook: { counter }</h1>
        <hr />

        <button onClick={ () => increment(2)} className="btn btn-outline-info">+1</button>
        <button onClick={ reset } className="btn btn-outline-info">Reset</button>
        <button onClick={ () => decrement(2)} className="btn btn-outline-info">-1</button>
    </>
  )
}
