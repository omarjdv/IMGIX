import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ImagenMenu } from "./components/ImagenMenu";
import cuid from "cuid";

import "./index.css";

function App() {
  const [data, setData] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    data?.reduce((acc, object) => {
      const id = cuid();
      object.flip = "";
      object.orient = "";
      object.url = object.url;
      object.rot = "";
      object.name = object.name;
      object.id = id;
      acc.push(object);
      setImages(acc);
      return acc;
    }, []);
  }, [data]);

  useEffect(() => {
    fetch(
      "https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json"
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <ImagenMenu images={images} />
    </div>
  );
}

export default App;
