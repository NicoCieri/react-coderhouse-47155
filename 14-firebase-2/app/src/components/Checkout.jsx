import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { useState } from "react";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);

  const createOrder = () => {
    // Hardcodear la orden
    const order = {
      buyer: {
        name: "Juan",
        phone: "123456789",
        email: "juan@gmail.com",
      },
      items: [
        {
          id: "LplaAFtJtyNehZjsraTS",
          title: "Iphone 12",
          price: 700,
        },
        {
          id: "bgnFRlSwRU1pR8Ynp8OF",
          title: "Ipad",
          price: 800,
        },
      ],
      total: 1500,
    };

    // Obtener la instancia de Firestore
    const db = getFirestore();

    // Obtener la referencia a la colección
    const ordersCollection = collection(db, "orders");

    // Agregar la orden a la colección
    addDoc(ordersCollection, order)
      .then((docRef) => {
        console.log("Orden creada con ID: ", docRef.id);
        alert("Orden creada con ID: " + docRef.id);
        setOrderId(docRef.id);
      })
      .catch((error) => {
        console.error("Error al crear la orden: ", error);
      });
  };

  const updateOrder = () => {
    // Obtener la instancia de Firestore
    const db = getFirestore();

    // Obtener la referencia al documento
    const orderDoc = doc(db, "orders", orderId);

    // Actualizar el documento
    updateDoc(orderDoc, { total: 2000 })
      .then(() => {
        console.log("Orden actualizada");
        alert("Orden actualizada");
      })
      .catch((error) => {
        console.error("Error al actualizar la orden: ", error);
      });
  };

  const updateOrders = () => {
    // Obtener la instancia de Firestore
    const db = getFirestore();

    // Obtener la referencia del batch
    const batch = writeBatch(db);

    // Obtener la referencia a los documentos
    const doc1 = doc(db, "orders", "4hfOUbWpqY3dVZH3ucrh");
    const doc2 = doc(db, "orders", "TCOYyjnhjPlf09oVALP6");
    const doc3 = doc(db, "orders", "s3DyPtnz26bMquVhfpts");

    // Actualizar los documentos
    batch.update(doc1, { total: 3000, otraProp: "Hola" });

    batch.set(doc2, { total: 4000, otraProp: "Chau" }, { merge: false });

    batch.set(doc3, { total: 5000, foo: "bar" }, { merge: true });

    // Ejecutar el batch y le pega a la base una sola vez
    batch
      .commit()
      .then(() => {
        console.log("Ordenes actualizadas");
      })
      .catch((error) => {
        console.error("Error al actualizar las ordenes: ", error);
      });
  };

  return (
    <div>
      <h2>Checkout</h2>

      <button onClick={createOrder}>Crear Orden</button>
      {!!orderId && <p>Orden creada con ID: {orderId}</p>}

      <hr />

      {!!orderId && <button onClick={updateOrder}>Actualizar Orden</button>}

      <button onClick={updateOrders}>Actualizar Ordenes</button>
    </div>
  );
};

export default Checkout;
