import React from 'react'
import TeamStore from '../../store/TeamStore'

const Team = () => {

  const {teamMembers} = TeamStore()

  if (teamMembers === null) {
    return <div>Loading...</div>
  }else{
    return (
      <div className="bg-gray-100 min-h-screen">
        <header className="text-center p-4">
          <h1 className="text-[50px] font-bold ">Our Team</h1>
        </header>
        <main className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((item, i) => (
              <div key={i} className="bg-blue-500 p-6 rounded-lg shadow-md">
                <img src={item['image']} alt={item['image']} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2 text-center">{item['name']}</h2>
                <p className="text-black text-xl text-center">{item['role']}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    )
  }


  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center p-4">
        <h1 className="text-[50px] font-bold ">Our Team</h1>
      </header>
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <img src={item['image']} alt={item['image']} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-center">{item['name']}</h2>
              <p className="text-gray-700 text-center">{item['role']}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Team