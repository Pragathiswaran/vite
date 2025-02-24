import React, { useState} from "react";

const ProgressBar = () => {
  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1);

  const handlerNext = () => {
    if(currentStep < totalSteps){
      setCurrentStep(currentStep + 1);
    }

    if(currentStep === totalSteps){
      alert("You have reached the last step");
      setCurrentStep(1);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="w-[700px] mt-32 relative">
            <div className="flex justify-between items-center relative">
                {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                    key={index}
                    className={`size-12 flex items-center justify-center rounded-full font-bold transition-all duration-500 bg-white text-gray-600 ${
                    index < currentStep
                        ? "border-4 border-blue-500 shadow-lg"
                        : "border-4 border-gray-300"
                    }`}
                >
                    {index + 1}
                </div>
                ))}
            </div>
            <div className="absolute top-1/2 left-0 right-0 mx-auto w-[90%] h-1 bg-gray-300 -z-10">
                <div
                className="h-1 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
                style={{
                    width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
                }}
                ></div>
            </div>
        </div>
        <div className="flex flex-col mt-8">
            <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
            onClick={handlerNext} >
                {currentStep === totalSteps ? "Finish" : "Next Step"}
            </button>
        </div>
    </div>
  );
};

export default ProgressBar;
