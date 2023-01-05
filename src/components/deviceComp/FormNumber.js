import React, { useContext, useState } from "react";
import PhoneInput from "react-phone-number-input";
import styles from "./Device.module.css";

import { DeviceContext } from "../../context/providers/DeviceProvider";
import InputField from "../InputField";
import { replacePlusPhoneNumber } from "../../utils/functions";

const FormNumber = () => {
  const { waNumber, setWaNumber } = useContext(DeviceContext);
  return (
    <form>
      <div>
        <label htmlFor="phoneNumber" className="form-label fw-medium">
          Tambahkan No. WA
        </label>
        <PhoneInput
          placeholder="Enter phone number"
          value={waNumber}
          onChange={setWaNumber}
          className={styles.input}
          defaultCountry="ID"
        />
      </div>
    </form>
  );
};

export default FormNumber;
