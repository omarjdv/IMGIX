import { useState, useEffect } from "react";
import Imgix from "react-imgix";

import styles from "./imagenMenu.module.css";

const ImagenMenu = ({ images }) => {
  const [data, setData] = useState();

  const onClickOrient = (id) => {
    if (id) {
      images?.reduce((acc, object) => {
        if (object.id === id) {
          object.flip =
            object.flip === ""
              ? "h"
              : object.flip === "h"
              ? "v"
              : object.flip === "v"
              ? "hv"
              : "";
          object.orient = `${
            object.orient === ""
              ? "90"
              : object.orient === "90"
              ? "180"
              : object.orient === "180"
              ? "270"
              : ""
          }`;
          object.url = object.url;
          object.rot = object.rot;
          object.name = object.name;
          acc.push(object);
        } else acc.push(object);
        setData(acc);
        return acc;
      }, []);
    }
  };

  const onClickFlip = (id) => {
    console.log(id);
    if (id) {
      images?.reduce((acc, object) => {
        if (object.id === id) {
          object.flip =
            object.flip === ""
              ? "h"
              : object.flip === "h"
              ? "v"
              : object.flip === "v"
              ? "hv"
              : "";
          object.orient = object.orient;
          object.url = object.url;
          object.rot = object.rot;
          object.name = object.name;
          acc.push(object);
        } else acc.push(object);
        setData(acc);
        return acc;
      }, []);
    }
  };

  const onClickRot = (id) => {
    console.log(id);
    if (id) {
      images?.reduce((acc, object) => {
        if (object.id === id) {
          object.flip = object.flip = object.flip;
          object.orient = object.orient;
          object.url = object.url;
          object.rot =
            object.rot === ""
              ? "100"
              : object.rot === "100"
              ? "150"
              : object.rot === "150"
              ? "200"
              : object.rot === "200"
              ? "250"
              : object.rot === "250"
              ? "359"
              : "";

          object.name = object.name;
          acc.push(object);
        } else acc.push(object);
        setData(acc);
        return acc;
      }, []);
    }
  };

  useEffect(() => {
    setData(images);
  }, [setData, images]);

  return (
    <div className={styles.content}>
      <div>
        {data?.map((e) => (
          <div className={styles.items} key={e.id}>
            <span>
              <strong>Imagen name:</strong> {e.name.split(".jpg")}
            </span>
            <Imgix
              src={e.url}
              width={600}
              imgixParams={{
                ar: "16:9",
                fit: "crop",
                flip: `${e.flip}`,
                orient: `${e.orient}`,
                rot: `${e.rot}`,
              }}
            />
            <div className={styles.buttonContent}>
              <button
                className={styles.button}
                onClick={() => onClickOrient(e.id)}
              >
                Orient
              </button>
              <button
                onClick={() => onClickFlip(e.id)}
                className={styles.button}
              >
                Flip
              </button>
              <button
                onClick={() => onClickRot(e.id)}
                className={styles.button}
              >
                Rot
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagenMenu;
