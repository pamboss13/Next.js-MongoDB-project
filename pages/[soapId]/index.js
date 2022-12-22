import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
import SoapDetail from "../../components/SoapDetail";

function SoapDetails(props){
    return(<Fragment>
        <Head>
            <title>{props.soapData.title}</title>
            <meta name="description" content={props.soapData.description} />
            <p>{props.price}</p>
        </Head>
        <SoapDetail title={props.soapData.title} description={props.soapData.description} />

    </Fragment>)
}

export async function getStaticPaths(){
    const client = await MongoClient.connect(
        'mongodb+srv://pambos:pambos@cluster0.co0cjvv.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();

    const soapCollection = db.collection('soaps');

    const soaps = await soapCollection.find({},{ _id:1 }).toArray();

    client.close();

    return {
        fallback: 'blocking',
        paths: soaps.map(soap=>({
            params: { soapId: soap._id.toString()}
        }))
    };
}

export async function getStaticProps(context){
    const soapId = context.params.soapId;

  const client = await MongoClient.connect(
    'mongodb+srv://pambos:pambos@cluster0.co0cjvv.mongodb.net/?retryWrites=true&w=majority'
    );
  const db = client.db();

  const soapCollection = db.collection('soaps');

  const selectedSoap = await soapCollection.findOne({
    _id: ObjectId(soapId),
  });

  client.close();

  return {
    props: {
      soapData: {
        id: selectedSoap._id.toString(),
        title: selectedSoap.title,
        description: selectedSoap.description,
        price: selectedSoap.price
      },
    },
  };
}

export default SoapDetails;