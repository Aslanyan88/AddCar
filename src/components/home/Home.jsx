import styles from "./Home.module.css"
import {cars as carsData} from "./cars.data.js"
import  CarItem from "../home/car-item/CarItem"
import CreateCarForm from "./create-car-form/CreateCarForm";
import {useState} from "react";

function Home() {
    const [cars,setCars] = useState(carsData)
    return (
        <div >
            <h1>Cars catalog</h1>
            <CreateCarForm setCars = {setCars}/>
            <div className={styles.container}>
                {cars.length ? (
                    cars.map(car=> <CarItem  key = {car.id} car = {car} />)
                ) : (
                        <p>There are no cars</p>
                    )}
            </div>
        </div>
    );
}

export default Home;
