import 'react'
function Contact() {
    return (
        <div className=" w-full h-full flex flex-col justify-center items-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
        <div className=' m-3'>
            <p className='text-sm'>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Contact us at <br/>Email Id : trymail123@gmail.com <br/>Phone no : +140 998 888</p>
        </div>
      </div>
    );
}

export default Contact;