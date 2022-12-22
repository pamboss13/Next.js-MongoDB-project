import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import SoapList from '../components/SoapList';

function HomePage(props){
    return <Fragment>
    <Head>
      <title>React Soaps</title>
      <meta
        name='description'
        content='Browse a huge list of highly useful React soaps!'
      />
    </Head>
    <SoapList soaps={props.soaps} />
  </Fragment>
}

export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect(
      'mongodb+srv://pambos:pambos@cluster0.co0cjvv.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();
  
    const soapCollection = db.collection('soaps');
  
    const soaps = await soapCollection.find().toArray();
  
    client.close();
  
    return {
      props: {
        soaps: soaps.map((soap) => ({
          title: soap.title,
          price: soap.price,
          description: soap.description,
          id: soap._id.toString(),
        })),
      },
      revalidate: 1,
    };
  }

export default HomePage;