import React, { useContext, useState } from "react";
import OtpInput from "react-otp-input";
import { AuthContext } from "../../context/providers/AuthProvider";
import usePost from "../../hooks/usePost";
import { STATUS_REGISTER_ACTIVE } from "../../utils/constants";
import Alert from "../Alert";
import Button from "../Button";
import Spinner from "../Spinner";

const VerifEmail = () => {
  const { email } = useContext(AuthContext);
  const [otp, setOtp] = useState("");

  const data = {
    email,
    otp,
  };

  const { handlePostData, isLoading, errorMessage } = usePost(
    "verify_otp",
    data,
    STATUS_REGISTER_ACTIVE.REGISTER
  );

  const handleChange = (otp) => {
    setOtp(otp);
  };

  return (
    <div>
      {errorMessage !== "" && <Alert message={errorMessage} />}
      <form
        className="card p-3"
        style={{ width: 350 }}
        onSubmit={(e) => handlePostData(e)}
      >
        <div className="text-center fw-medium">
          <p className="opacity-75">
            Silahkan cek email <span style={{ color: "#14BA6D" }}>{email}</span>{" "}
            untuk kode OTP yang telah kami kirim.
          </p>
        </div>
        <div className="mb-3">
          <OtpInput
            numInputs={6}
            inputStyle={{
              width: "100%",
              padding: "0.7rem",
              border: "1px solid #C8C8C8",
              borderRadius: "8px",
              marginRight: 6,
              color: "#14BA6D",
              fontWeight: "bold",
            }}
            isInputNum={true}
            shouldAutoFocus={true}
            value={otp}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button
            title={isLoading ? <Spinner /> : "Next"}
            isDisabled={isLoading}
            isFullWidth={true}
          />
        </div>
      </form>
    </div>
  );
};

export default VerifEmail;
