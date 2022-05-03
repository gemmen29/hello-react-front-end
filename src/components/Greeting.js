import React, { useEffect } from 'react';
import { getRandomMessage } from '../redux/greetings/greetings';
import { useSelector, useDispatch } from 'react-redux';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomMessage());
  }, [dispatch]);

  const message = useSelector((state) => state.message);
  console.log('message => ', message);

  return (
    <div>
      <h1>Greeting</h1>
      <div>Message: {message.message}</div>
    </div>
  );
};

export default Greeting;
