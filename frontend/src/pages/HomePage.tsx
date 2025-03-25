import { useState, useEffect } from "react";
import { BarChart, LineChart, PieChart } from "../components/charts";
import { COLORS, lang } from "../constants";

export const HomePage = () => {
  const [data, setData] = useState<{
    byCountry: { country: string; trafficCount: number }[];
    byVehicleType: { vehicleType: string; trafficCount: number }[];
  }>({ byCountry: [], byVehicleType: [] });

  const { byCountry: byCountryData, byVehicleType: byVehicleTypeData } = data;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/traffic/grouped`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching traffic data:", err));
  }, []);

  return (
    <div className="p-2 sm:p-6 space-y-6 max-w-6xl mx-auto">
      <div className="border rounded-lg p-6 shadow-md bg-white">
        <h2 className="text-lg font-semibold mb-4 text-center">
          {lang.countryWiseDistribution}
        </h2>
        <div className="flex flex-col gap-8">
          <BarChart
            data={byCountryData}
            xKey="country"
            yKey="trafficCount"
            color={COLORS[0]}
          />
          <LineChart
            data={byCountryData}
            xKey="country"
            yKey="trafficCount"
            color={COLORS[0]}
          />
          <PieChart
            data={byCountryData}
            dataKey="trafficCount"
            nameKey="country"
            colors={COLORS}
          />
        </div>
      </div>

      <div className="border rounded-lg p-6 shadow-md bg-white">
        <h2 className="text-lg font-semibold mb-4 text-center">
          {lang.vehicleTypeDistribution}
        </h2>
        <div className="flex flex-col gap-8">
          <BarChart
            data={byVehicleTypeData}
            xKey="vehicleType"
            yKey="trafficCount"
            color={COLORS[1]}
          />
          <LineChart
            data={byVehicleTypeData}
            xKey="vehicleType"
            yKey="trafficCount"
            color={COLORS[1]}
          />
          <PieChart
            data={byVehicleTypeData}
            dataKey="trafficCount"
            nameKey="vehicleType"
            colors={COLORS}
          />
        </div>
      </div>
    </div>
  );
};
