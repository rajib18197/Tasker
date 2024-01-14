import { useEffect, useRef, useState } from "react";

export default function OtpForm() {
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (phone.length < 11) return;
    // API call with that phone then setShowOtp is false

    setShowOtp(true);
  }

  return (
    <>
      {!showOtp ? (
        <form onSubmit={handleSubmit}>
          <input
            className="border-4"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </form>
      ) : (
        <OtpInput />
      )}
    </>
  );
}

function OtpInput({ length = 4 }) {
  const [otpCode, setOtpCode] = useState(Array(length).fill(""));
  const refValues = useRef([]);

  useEffect(function () {
    if (refValues.current[0]) {
      refValues.current[0].focus();
    }
  }, []);

  function handleChange(index, e) {
    console.log(e.target.value);
    if (!e.target.value) return;
    const newOtp = [...otpCode];

    newOtp[index] = e.target.value.slice(e.target.value.length - 1);
    console.log(newOtp);
    setOtpCode(newOtp);
    if (e.target.value && refValues.current[index + 1]) {
      refValues.current[index + 1].focus();
    }
  }

  function handleClick(index, e) {}

  function handleKeyDown(index, e) {
    if (
      e.key === "Backspace" &&
      //   !otpCode[index] &&
      index > 0 &&
      refValues.current[index - 1]
    ) {
      const newOtp = [...otpCode];
      newOtp[index] = "";
      console.log(newOtp);
      setOtpCode(newOtp);
      refValues.current[index - 1].focus();
    }
  }

  return (
    <div>
      {otpCode.map((code, i) => (
        <input
          key={i}
          ref={(node) => {
            refValues.current[i] = node;
          }}
          className="border-2"
          value={code}
          onChange={(e) => handleChange(i, e)}
          onClick={(e) => handleClick(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
        />
      ))}
    </div>
  );
}
