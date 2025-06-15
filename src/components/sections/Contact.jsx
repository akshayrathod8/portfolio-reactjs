export const Contact = () => {

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">

          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Email id : akshayrathod0007@gmail.com</li>
                <li>Linkedin :<a href="https://www.linkedin.com/in/akshay-rathod-983013145/"> www.linkedin.com/in/akshay-rathod</a></li>
                <li>Phone no. : (+91) 7020990394</li> 
          </ul>
        </div>
    </section>
  );
};
