import React from "react";
import { useState, useEffect } from "react";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [passwordResetMode, setPasswordResetMode] = useState(false);

  const [user, setUser] = useState({
    _id: "64a7b0b3f3d8e5a7d9c5a2f1",
    username: "john_doe",
    email: "john.doe@example.com",
    passwordHash: "$2b$10$CwTycUXn / W4FG5A7oO.T.",
    address: {
      street: "123 Elm Street",
      city: "Springfield",
      state: "IL",
      postalCode: "62704",
      country: "USA",
    },
    phone: "+1 (555) 123-4567",
    createdAt: "2023-10-01T12:34:56Z",
    updatedAt: "2024-07-01T12:34:56Z",
    orders: [
      {
        orderId: "64a7b0b3f3d8e5a7d9c5a2f2",
        date: "2024-07-15T14:20:00Z",
        totalAmount: 49.99,
        status: "Shipped",
      },
      {
        orderId: "64a7b0b3f3d8e5a7d9c5a2f3",
        date: "2024-08-05T10:15:00Z",
        totalAmount: 89.99,
        status: "Delivered",
      },
    ],
  });

  useEffect(() => {
    // setProfileData(user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Implement save functionality
    // setEditMode(false);
  };

  const handleResetPassword = () => {
    console.log("Password Reset");
  };
  if (!user) return <div>Loading...</div>;

  return (
    // <div className="p-6 bg-gray-50 min-h-screen">
    //   <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg">
    //     <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
    //       User Profile
    //     </h1>
    //     <div className="space-y-6">
    //       <div className="flex items-center">
    //         <div>
    //           <h2 className="text-xl font-semibold">Email</h2>
    //           <p className="text-gray-600">{user.email}</p>
    //         </div>
    //       </div>
    //       <div className="flex items-center">
    //         <div>
    //           <h2 className="text-xl font-semibold">Address</h2>
    //           <p className="text-gray-600">
    //             {user.address.street}, {user.address.city}, {user.address.state}
    //             , {user.address.postalCode}, {user.address.country}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex items-center">
    //         <div>
    //           <h2 className="text-xl font-semibold">Phone</h2>
    //           <p className="text-gray-600">{user.phone}</p>
    //         </div>
    //       </div>
    //       <div className="flex items-center">
    //         <div>
    //           <h2 className="text-xl font-semibold">Joined</h2>
    //           <p className="text-gray-600">
    //             {new Date(user.createdAt).toLocaleDateString()}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {editMode && !passwordResetMode ? (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone || ""}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={user.address.street || ""}
              onChange={handleInputChange}
              placeholder="Street"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="city"
              value={user.address.city || ""}
              onChange={handleInputChange}
              placeholder="City"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="state"
              value={user.address.state || ""}
              onChange={handleInputChange}
              placeholder="State"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="postalCode"
              value={user.address.postalCode || ""}
              onChange={handleInputChange}
              placeholder="Postal Code"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="country"
              value={user.address.country || ""}
              onChange={handleInputChange}
              placeholder="Country"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </>
      ) : !editMode && !passwordResetMode ? (
        <>
          <div className="flex items-center justify-between mx-auto space-x-4 px-6">
            <div className="w-[250px] h-full flex justify-center border-r border-cyan-400">
              <div className="text-center">
                <img
                  src={user.profileImage || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover mx-auto"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Profile Information
              </h2>
              <div className="flex flex-col space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Username
                  </label>
                  <p className="mt-1 text-gray-600">{user.username}</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Email
                  </label>
                  <p className="mt-1 text-gray-600">{user.email}</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Phone
                  </label>
                  <p className="mt-1 text-gray-600">
                    {user.phone || "No phone number"}
                  </p>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Address
                  </label>
                  <p className="mt-1 text-gray-600">
                    {user.address.street}, {user.address.city},{" "}
                    {user.address.state}, {user.address.postalCode},{" "}
                    {user.address.country}
                  </p>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Joined
                  </label>
                  <p className="mt-1 text-gray-600">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setEditMode(true)}
                    className="w-[100px] px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setPasswordResetMode(true)}
                    className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Reset Password
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                name="newPassword"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmNewPassword"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleResetPassword}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
              >
                Reset Password
              </button>
              <button
                onClick={() => setPasswordResetMode(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
