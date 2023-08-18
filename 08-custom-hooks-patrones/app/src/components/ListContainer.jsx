import { useState, useEffect } from "react";
import List from "./List";
import withLoading from "../hoc/withLoading";

const ListWithLoading = withLoading(List);

const ListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setItems(["Item 1", "Item 2", "Item 3"]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return <ListWithLoading items={items} isLoading={isLoading} />;
};

export default ListContainer;
