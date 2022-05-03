const messageURL = 'http://127.0.0.1:3000/api/greetings';

const getMessage = async () => {
  const response = await fetch(messageURL);
  const data = await response.json();
  return data;
};

export default getMessage;
