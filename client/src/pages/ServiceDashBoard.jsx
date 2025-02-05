import React, { useEffect, useState } from "react";
import ServiceStore from "../store/ServiceStore";

const ServicePage = () => {
  const {
    services,
    fetchServices,
    createService,
    updateService,
    deleteService,
    loading,
    error,
  } = ServiceStore();

  const [newService, setNewService] = useState({ title: "", description: "" });
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingService) {
      setEditingService({ ...editingService, [name]: value });
    } else {
      setNewService({ ...newService, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingService) {
      updateService(editingService._id, editingService);
      setEditingService(null);
    } else {
      createService(newService);
      setNewService({ title: "", description: "" });
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
  };

  const handleDelete = (id) => {
    deleteService(id);
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Service Dashboard</h1>

      {/* সার্ভিস তৈরি বা আপডেট করার ফর্ম */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-6"
      >
        <h2 className="text-xl font-bold mb-4">
          {editingService ? "Edit Service" : "Create New Service"}
        </h2>
        <input
          type="text"
          name="title"
          value={editingService ? editingService.title : newService.title}
          onChange={handleInputChange}
          placeholder="Service Title"
          className="w-full p-2 border rounded-lg mb-4"
          required
        />
        <textarea
          name="description"
          value={
            editingService ? editingService.description : newService.description
          }
          onChange={handleInputChange}
          placeholder="Service Description"
          className="w-full p-2 border rounded-lg mb-4"
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          {editingService ? "Update Service" : "Create Service"}
        </button>
      </form>

      {/* সার্ভিস লিস্ট */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Services</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {services.map((service, i) => (
            
            <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <div key={service.id} className="flex flex-col items-center p-5 my-6">
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          
                <div className="flex justify-center py-3">
                <button
                  onClick={() => handleEdit(service)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;