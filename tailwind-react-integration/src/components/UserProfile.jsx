
function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 md:p-8 sm:p-4 md:max-w-sm sm:max-w-xs mx-auto, my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" className="rounded-full md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto" />
      <h1 className="md:text-xl sm:text-lg text-blue-800 my-4 ">John Doe</h1>
      <p className="text-gray-600 md:text-base sm:text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;