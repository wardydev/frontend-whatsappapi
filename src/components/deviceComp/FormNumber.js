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
          Whatsapp number
        </label>

        <PhoneInput
          placeholder="Enter Whatsapp number"
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
          label="Name"
          placeholder="Add name"
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
          <div className="mt-2">
            <span>
              You can find your Secret API key in{" "}
              <a
                target="_blank"
                href="https://beta.openai.com/account/api-keys"
              >
                here
              </a>{" "}
            </span>
          </div>
        </div>
      )}
    </form>
  );
};

export default FormNumber;
