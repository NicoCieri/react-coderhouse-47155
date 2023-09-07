import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();

    const itemRef = doc(db, "items", "LplaAFtJtyNehZjsraTS1");

    setIsLoading(true);
    getDoc(itemRef).then((snapshot) => {
      setIsLoading(false);

      if (snapshot.exists()) {
        setItem({
          id: snapshot.id,
          ...snapshot.data(),
        });
      }
    });

    // console.log("itemRef", itemRef);
  }, []);

  // console.log("item", item);

  return (
    <div>
      <h2>Item Detail</h2>

      {isLoading && <p>Cargando...</p>}

      {!isLoading && !item && <p>Item no encontrado</p>}

      {!isLoading && item && (
        <div>
          <h3>Nombre: {item.title}</h3>
          <p>ID: {item.id}</p>
          <p>Descripción: {item.description}</p>
          <p>Precio: ${item.price}</p>
          <p>Stock: {item.stock}</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
