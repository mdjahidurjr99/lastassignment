import React, { useEffect, useState } from "react";
import TeamStore from "../store/TeamStore";

const TeamDashBoard = () => {
  const {
    teams,
    fetchTeams,
    createTeam,
    updateTeam,
    deleteTeam,
    loading,
    error,
  } = TeamStore();

  const [newTeam, setNewTeam] = useState({ title: "", description: "" });
  const [editingTeam, setEditingTeam] = useState(null);

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingTeam) {
      setEditingTeam({ ...editingTeam, [name]: value });
    } else {
      setNewTeam({ ...newTeam, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTeam) {
      updateTeam(editingTeam._id, editingTeam);
      setEditingTeam(null);
    } else {
      createTeam(newTeam);
      setNewTeam({ title: "", description: "" });
    }
  };

  const handleEdit = (team) => {
    setEditingTeam(team);
  };

  const handleDelete = (id) => {
    deleteTeam(id);
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Team Dashboard</h1>

      {/* টিম মেম্বার তৈরি বা আপডেট করার ফর্ম */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-6"
      >
        <h2 className="text-xl font-bold mb-4">
          {editingTeam ? "Edit Team Member" : "Create New Team Member"}
        </h2>
        <input
          type="text"
          name="title"
          value={editingTeam ? editingTeam.title : newTeam.title}
          onChange={handleInputChange}
          placeholder="Team Member Title"
          className="w-full p-2 border rounded-lg mb-4"
          required
        />
        <textarea
          name="description"
          value={
            editingTeam ? editingTeam.description : newTeam.description
          }
          onChange={handleInputChange}
          placeholder="Team Member Description"
          className="w-full p-2 border rounded-lg mb-4"
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          {editingTeam ? "Update Team Member" : "Create Team Member"}
        </button>
      </form>

      {/* টিম মেম্বার লিস্ট */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Team Members</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {teams.map((team, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div key={i} className="bg-blue-500 p-6 rounded-lg shadow-md">
                <img src={team['image']} alt={team['image']} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2 text-center">{team['name']}</h2>
                <p className="text-black text-xl text-center">{team['role']}</p>
              </div>
              <div className="flex justify-center py-3">
                <button
                  onClick={() => handleEdit(team)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(team._id)}
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

export default TeamDashBoard;