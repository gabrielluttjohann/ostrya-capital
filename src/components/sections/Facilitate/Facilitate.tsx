// import React from "react";
// import {
//   Facilitate,
//   facilities as facilitiesData,
// } from "@/data/facilitateData";

// const ServiceItem: React.FC<Facilitate> = ({
//   icon,
//   title,
//   description,
//   link,
// }) => (
//   <div className="col-md-6 col-lg-3 wow fadeIn">
//     <div className="service-item border h-100 p-5 d-flex flex-column justify-content-between text-center">
//       <div>
//         <div
//           className="btn-square bg-light rounded-circle mb-4 d-flex justify-content-center align-items-center mx-auto"
//           style={{ width: "64px", height: "64px" }}
//         >
//           <i
//             className={`${icon} fs-3 text-green img-fluid`}
//             aria-hidden="true"
//           ></i>
//         </div>
//         <h4 className="mb-3">{title}</h4>
//         <p className="mb-4" style={{ minHeight: "60px" }}>
//           {description}
//         </p>
//       </div>
//     </div>
//   </div>
// );

// const Services: React.FC = () => (
//   <div className="container-xxl py-5">
//     <div className="container">
//       <div className="text-center">
//         <div
//           className="mb-3 mx-auto"
//           style={{ background: "#b68d40", width: "60px", height: "2px" }}
//         ></div>

//         <h2 className="display-5 mb-5">Nossa Solução Completa</h2>
//       </div>
//       <div>
//         {facilitiesData.map((data, index) => (
//           <ServiceItem key={index} {...data} />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default Services;
