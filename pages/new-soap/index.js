import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NewSoap from '../../components/NewSoap';

function NewSoapPage() {
  const router = useRouter();

  async function addSoapHandler(enteredSoapData) {
    const response = await fetch('/api/new-soap', {
      method: 'POST',
      body: JSON.stringify(enteredSoapData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own soaps and create amazing experiences in the bathroom.'
        />
      </Head>
      <NewSoap onAddSoap={addSoapHandler} />
    </Fragment>
  );
}

export default NewSoapPage;