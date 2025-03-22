import { useEffect, useState } from "react";
import "./App.css";

export enum VehicleType {
  Car = "car",
  Bus = "bus",
  Truck = "truck",
  Bike = "bike",
  Other = "other",
}

export type Traffic = {
  id: number;
  country: string;
  vehicleType: VehicleType;
  trafficCount: number;
  recordedAt: Date;
};

function App() {
  const [trafficData, setTrafficData] = useState<Traffic[]>([]);

  useEffect(() => {
    const getTrafficData = async () => {
      const response = await fetch("http://localhost:4000/traffic");
      const data = await response.json();
      setTrafficData(data);
    };
    getTrafficData();
  }, []);

  return (
    <>
      <ul>
        {trafficData.map((traffic) => (
          <li key={traffic.id}>{traffic.vehicleType}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
