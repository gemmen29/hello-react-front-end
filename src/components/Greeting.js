import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomMessage } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomMessage());
  }, [dispatch]);

  const message = useSelector((state) => state.message);

  return (
    <div>
      <h1>Greeting</h1>
      <div>
        Message:
        {message.message}
      </div>
    </div>
  );
};

export default Greeting;
