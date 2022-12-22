import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://pambos:pambos@cluster0.co0cjvv.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const soapCollection = db.collection("soaps");
    const result = await soapCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({message: 'Soap Inserted'});
  }
}

export default handler;
