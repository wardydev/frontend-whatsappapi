import React, { useContext, useState } from "react";
import PhoneInput from "react-phone-number-input";
import styles from "./Device.module.css";

import { DeviceContext } from "../../context/providers/DeviceProvider";
import InputField from "../InputField";
import SwitchInput from "../SwitchInput";

const FormNumber = () => {
  const { waNumber, setWaNumber, myPackage, name, setName } =
    useContext(DeviceContext);
  const [statusPackage, setStatusPackage] = useState(false);

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label fw-medium">
          Tambahkan No. WA
        </label>

        <PhoneInput
          placeholder="Enter phone number"
          value={waNumber}
          onChange={setWaNumber}
          className={`${styles.input} rounded-lg`}
          defaultCountry="ID"
          international
          countryCallingCodeEditable={false}
        />
      </div>
      <div className="mb-3">
        <InputField
          label="Nama"
          placeholder="Tambahkan Nama"
          type="text"
          isRequired={true}
          id="name"
          name={name}
          value={name}
          setValue={(e) => setName(e.target.value)}
        />
      </div>

      {myPackage.length !== 0 && (
        <SwitchInput
          isDisable={myPackage?.Package?.config?.chatgpt === 0 ? true : false}
          setValue={() => setStatusPackage(!statusPackage)}
          isTitle={true}
          title="Chat Bot"
        />
      )}
      {myPackage?.Package?.config?.chatgpt === 1 && statusPackage && (
        <div className="mb-3">
          <InputField
            label="API Key openai"
            placeholder="API Key"
            type="text"
            isRequired={true}
            id="openaiKey"
            name="openaiKey"
          />
        </div>
      )}
    </form>
  );
};

export default FormNumber;
