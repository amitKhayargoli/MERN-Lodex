const { Car, GarageCar } = require("../model/associations");
const addCar = async (req, res) => {
  try {
    const {
      carId,
      model,
      brand,
      color,
      price,
      speed,
      type,
      year,
      carImageURL,
      bookingStatus,
    } = req.body;

    const newCar = await Car.create({
      carId,
      model,
      brand,
      color,
      price,
      speed,
      type,
      year,
      carImageURL,
      bookingStatus,
    });

    res.status(201).json({ message: "Car added successfully!", car: newCar });
  } catch (error) {
    console.error("Error adding car:", error);
    res.status(500).json({ error: "Failed to add car" });
  }
};

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).send({ data: cars });
  } catch (error) {
    console.log(error);

    res.status(500).send({ error: "Failed to fetch cars" });
  }
};

const updateCarBookingStatus = async (req, res) => {
  try {
    const carId = req.params.id;
    const { bookingStatus } = req.body;

    const car = await Car.update(
      { bookingStatus },
      {
        where: { carId: carId },
      }
    );

    if (car[0] === 0) {
      return res.status(404).send({ message: "Car not found" });
    }

    //Remove car details from GarageCar table
    await GarageCar.destroy({
      where: { carId: carId },
    });

    res
      .status(200)
      .send({ message: "Car booking status updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update the car booking status" });
  }
};

const deleteCar = async (req, res) => {
  try {
    const carId = parseInt(req.params.carId, 10);

    const result = await Car.destroy({
      where: { carId: carId },
    });

    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateCar = async (req, res) => {
  try {
    const carId = parseInt(req.params.carId, 10);
    const { model, brand, color, price, speed, type, year, carImageURL } =
      req.body;
    const car = await Car.findByPk(carId);
    if (!car) {
      return res.status(404).send({ message: "Car not found" });
    }
    await car.update({
      model,
      brand,
      color,
      price,
      speed,
      type,
      year,
      carImageURL,
    });
    res.status(200).json({ message: "Car updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update the car" });
  }
};
module.exports = {
  addCar,
  getAllCars,
  updateCarBookingStatus,
  deleteCar,
  updateCar,
};
