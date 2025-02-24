import React, { useRef, useState } from "react";

const PhoneOtp = ({ length = 4}) => {
  const otpInputRef = Array.from({ length }, () => useRef());
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleInput = (e, index) => {
    // console.log(e)
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    console.log(newOtp);

    // Move to the next input if a number is entered
    if (value.length === 1 && index < length - 1) {
      otpInputRef[index + 1].current.focus();
    }

    // Auto-submit when all inputs are filled
    // if (newOtp.every((num) => num !== "")) {
    //   onSubmit(newOtp.join(""));
    // }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputRef[index - 1].current.focus();
    }

    if(e.key === "ArrowRight" && index < length - 1) {
      otpInputRef[index + 1].current.focus();
    }

    if(e.key === "ArrowLeft" && index > 0) {
      otpInputRef[index - 1].current.focus();
    }

    if(e.key === "Enter" && otp.join("").length === length){
      onSubmit(otp.join(""));
    }

    if(e.key === "Enter" && otp.join("").length < length){
      alert("Please fill all the fields");
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    // console.log(e.clipboardData);
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    // console.log(pasteData);
    if (!/^\d+$/.test(pasteData)) return; // Only allow numbers

    const newOtp = pasteData.split("");
    setOtp(newOtp);
    // console.log(newOtp);

    // Auto-fill inputs
    newOtp.forEach((num, i) => {
      if (otpInputRef[i]) otpInputRef[i].current.value = num;
    });

    if (newOtp.length === length) {
      onSubmit(newOtp.join(""));
    }
  };

  const onSubmit = (otp) => {
    // alert("Submitting OTP: " + otp);
  }

  const resetOtp = () => {
    setOtp(new Array(length).fill(""));
    otpInputRef[0].current.focus();
  };

  return (
    <div className="flex flex-col items-center">
      <form className="flex justify-center items-center gap-2">
        {otpInputRef.map((inputRef, index) => (
          <input
            key={index}
            ref={inputRef}
            type="text"
            maxLength="1"
            inputMode="numeric"
            className="w-12 h-12 text-center border border-gray-400 rounded-md text-xl font-semibold focus:ring-2 focus:ring-blue-400 outline-none"
            value={otp[index]}
            onChange={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
          />
        ))}
      </form>
      <button
        onClick={resetOtp}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
      >
        Reset OTP
      </button>
    </div>
  );
};

export default PhoneOtp;
