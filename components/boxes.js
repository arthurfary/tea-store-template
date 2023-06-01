import React from "react";

function Boxes() {
  return (
    <div className=" bg-slate-500">
      <div className="flex justify-center w-full">
        <div className="mt-5">
          <h1 className="text-center text-5xl font-sans text-black">Mais Populares</h1>
        </div>
      </div>

      <div className="flex mt-5 justify-center">
        <div className="w-1/4 p-4 aspect-square mx-5">
          <div className="bg-white rounded-lg shadow-md p-6 h-full">
            <h2 class="text-2xl font-bold mb-4  text-black">Card 1</h2>
            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat magna nisi, nec fermentum elit viverra vel. Sed tempor eleifend ante et finibus. </p>
              
          </div>
        </div>
        <div className="w-1/4 p-4 aspect-square mx-5">
          <div className="bg-white rounded-lg shadow-md p-6 h-full">
          <h2 class="text-2xl font-bold mb-4  text-black">Card 1</h2>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat magna nisi, nec fermentum elit viverra vel. Sed tempor eleifend ante et finibus. </p>
            
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center"> 
        <div className="mt-5 justify-center items">

          <div className="w-1/6 px-4 aspect-square mx-2 text-center flex flex-col items-center">
            <div className="bg-white rounded-full shadow-md h-36 w-36 flex items-center justify-center">
              <h2 className="text-xl font-bold text-black">A</h2>
            </div>

            <div className=" w-fit flex text-center">
              <h2 className="text-sm font-bold mb-4 text-black">Nao testamos</h2>
            </div>          
          </div>

      </div>

    </div>
  </div>
  );
}



export default Boxes;
