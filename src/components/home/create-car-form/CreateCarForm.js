import styles from "./CreateCarForm.module.css"
import { useState } from "react";

const clearData = {
  name: "",
  price: "",
  image: ""
};

const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState(clearData);

  const createCar = (e) => {
    e.preventDefault();

    // Check if the required fields (name and image) are filled
    if (data.name && data.image) {
      setCars(prev => [{
        id: prev.length + 1,
        ...data
      }, ...prev]);

      setData(clearData);
    } else {
      console.log("Name and image are required"); // You can show an error message or handle the validation error in a way that suits your application
    }
  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Name"
        onChange={event => setData(prev => ({
          ...prev, name: event.target.value
        }))}
        value={data.name}
      />
      <input
        type="text"
        placeholder="Price"
        onChange={event => setData(prev => ({
          ...prev, price: event.target.value
        }))}
        value={data.price}
      />
      <input
        type="text"
        placeholder="ImageURL"
        onChange={event => setData(prev => ({
          ...prev, image: event.target.value
        }))}
        value={data.image}
      />

      <button className="btn" onClick={e => createCar(e)}>Create</button>
    </form>
  );
};

export default CreateCarForm;
