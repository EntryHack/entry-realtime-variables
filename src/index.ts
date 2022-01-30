import CloudClient from './client';

const client = new CloudClient('61f619121924dc0056b464c9');

const main = async () => {
  const loginRes = await client.login('dukhwa', 'Edgewater27***');
  if (!loginRes.success) throw new Error('Failed to login.');

  client.on('connect', () => {
    console.log('wa');
  });

  await client.connect();
};

main();
