import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Vendors.css"; // 👈 custom styles here

import topvendors1 from "../../assets/images/topvendors_1.png";
import topvendors3 from "../../assets/images/topvendors_3.png";
import topvendors7 from "../../assets/images/topvendors_7.png";
import secondImage from "../../assets/images/secondImage.png";
import topvendors4 from "../../assets/images/topvendors_4.png";
import topvendors5 from "../../assets/images/topvendors_5.png";
import topvendors6 from "../../assets/images/topvendors_6.png";
import topvendors8 from "../../assets/images/topvendors_8.png";

// 24 vendors (4 rows x 6 columns)
const vendors = [
  { name: "Organic Goods", images: topvendors1 },
  { name: "OrangUtan Organics", images: topvendors8 },
  { name: "Healthy Harvest", images: topvendors1 },
  { name: "Green Growers", images: secondImage },
  { name: "Nature's Best", images: topvendors3 },
  { name: "Pure Picks", images: topvendors4 },
  { name: "Eco Fresh", images: topvendors5 },
  { name: "Farm to Fork", images: topvendors6 },
  { name: "Vital Veggies", images: topvendors7 },
  { name: "Organic Roots", images: topvendors8 },
  { name: "GreenLife Market", images: topvendors1 },
  { name: "Fresh Fields", images: topvendors3 },
  { name: "Harvest Hub", images: topvendors4 },
  { name: "Nature Cart", images: topvendors5 },
  { name: "Earthly Goods", images: topvendors6 },
  { name: "EcoMart", images: topvendors7 },
  { name: "Farm Basket", images: topvendors8 },
  { name: "Green Pantry", images: topvendors1 },
  { name: "Pure Nature", images: topvendors3 },
  { name: "Harvest Roots", images: topvendors4 },
  { name: "Natural Valley", images: topvendors5 },
  { name: "Fresh Organix", images: topvendors6 },
  { name: "Farm Fresh Co.", images: topvendors7 },
  { name: "Green Choice", images: topvendors8 },
];

// Utility: split array into chunks of 6
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const Vendors = () => {
  const vendorRows = chunkArray(vendors, 6);

  return (
    <div className="container-fluid vendor-section my-5">
      <h2 className="text-center mb-4">Vendors</h2>
      {vendorRows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((vendor, colIndex) => (
            <div className="col-6 col-md-2 mb-4" key={colIndex}>
              <div className="card vendor-card text-center h-100 shadow-sm">
                <div className="image-container">
                  <img
                    src={vendor.images}
                    className="card-img-top p-3"
                    alt={vendor.name}
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                  />
                  <div className="overlay-text">{vendor.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Vendors;
