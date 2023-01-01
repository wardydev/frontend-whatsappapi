import React, { useContext } from "react";
import { AuthContext } from "../../context/providers/AuthProvider";
import usePost from "../../hooks/usePost";
import Button from "../Button";
import InputField from "../InputField";
import { STATUS_REGISTER_ACTIVE } from "../../utils/constants";
import Spinner from "../Spinner";
import Alert from "../Alert";

const SendOtp = () => {
  const { email, setEmail } = useContext(AuthContext);
  const data = {
    email,
  };
  const { handlePostData, isLoading, errorMessage } = usePost(
    "send_otp",
    data,
    STATUS_REGISTER_ACTIVE.VERIF_EMAIL
  );
  return (
    <div>
      {errorMessage !== "" && <Alert message={errorMessage} />}
      <form
        className="card p-3"
        style={{ width: 350 }}
        onSubmit={(e) => handlePostData(e)}
      >
        <div className="mb-3">
          <InputField
            label="Email"
            type="email"
            placeholder="Tambahkan Email"
            id="exampleInputEmail1"
            isRequired={true}
            name="email"
            value={email}
            setValue={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button
          title={isLoading ? <Spinner /> : "Next"}
          isDisabled={isLoading}
        />
      </form>
    </div>
  );
};

export default SendOtp;
