import servicesData from "@/Data/services.json";
import Cors from "cors";
import initMiddleware from "@/lib/init-middleware";

// Initialize the cors middleware to allow requests from your custom domain
const cors = initMiddleware(
  Cors({
    origin: "https://www.dentalfacets.in", // Allow only this origin
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  const { head } = req.query;
  // Run CORS middleware before your actual API logic

  await cors(req, res);
  // If a key is provided, filter the data by key
  if (head) {
    const filteredService = servicesData.find(
      (service) => service.head === head
    );
    if (filteredService) {
      res.status(200).json(filteredService);
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } else {
    // Return all services if no key is provided
    res.status(200).json(servicesData);
  }
}
