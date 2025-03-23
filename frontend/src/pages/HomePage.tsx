import { useState, useEffect } from "react";
import { Traffic, VehicleType } from "../types";
import { BarChart, LineChart, PieChart } from "../components/charts";
import { COLORS, lang } from "../constants";

export const HomePage = () => {
  const [data, setData] = useState<Traffic[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/traffic`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching traffic data:", err));
  }, []);

  const countryTraffic = Object.values(
    data.reduce(
      (acc, { country, trafficCount }) => {
        acc[country] = acc[country] || { country, trafficCount: 0 };
        acc[country].trafficCount += trafficCount;
        return acc;
      },
      {} as Record<string, { country: string; trafficCount: number }>
    )
  );

  const vehicleTypeDistribution = Object.values(
    data.reduce(
      (acc, { vehicleType, trafficCount }) => {
        acc[vehicleType] = acc[vehicleType] || {
          vehicleType,
          trafficCount: 0,
        };
        acc[vehicleType].trafficCount += trafficCount;
        return acc;
      },
      {} as Record<
        VehicleType,
        { vehicleType: VehicleType; trafficCount: number }
      >
    )
  );

  return (
    <div className="p-2 sm:p-6 space-y-6 max-w-6xl mx-auto">
      <div className="border rounded-lg p-6 shadow-md bg-white">
        <h2 className="text-lg font-semibold mb-4 text-center">
          {lang.countryWiseDistribution}
        </h2>
        <div className="flex flex-col gap-8">
          <BarChart
            data={countryTraffic}
            xKey="country"
            yKey="trafficCount"
            color={COLORS[0]}
          />
          <LineChart
            data={countryTraffic}
            xKey="country"
            yKey="trafficCount"
            color={COLORS[0]}
          />
          <PieChart
            data={countryTraffic}
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
            data={vehicleTypeDistribution}
            xKey="vehicleType"
            yKey="trafficCount"
            color={COLORS[1]}
          />
          <LineChart
            data={vehicleTypeDistribution}
            xKey="vehicleType"
            yKey="trafficCount"
            color={COLORS[1]}
          />
          <PieChart
            data={vehicleTypeDistribution}
            dataKey="trafficCount"
            nameKey="vehicleType"
            colors={COLORS}
          />
        </div>
      </div>
    </div>
  );
};
