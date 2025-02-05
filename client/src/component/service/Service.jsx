import React from "react";
import ServiceStore from "../../store/ServiceStore";

const Service = () => {
  const { serviceList } = ServiceStore();

  if (serviceList === null) {
    return <div>Service Loading...</div>;
  } else {
    return (
      <div className="bg-gray-100 min-h-screen">
        <header className="text-center">
          <h1 className="text-[50px] font-bold">Our Services</h1>
        </header>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {serviceList.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div key={item.id} className="flex flex-col items-center p-5 my-6">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Service;
