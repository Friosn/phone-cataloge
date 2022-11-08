export const gettingPhones = async () => {
  const rawData = await fetch('http://localhost:3000/phones');
  const dataToJson = await rawData.json();
  return dataToJson;
};
