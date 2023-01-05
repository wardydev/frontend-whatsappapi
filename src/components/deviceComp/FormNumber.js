import React, { useContext } from "react";
import { DeviceContext } from "../../context/providers/DeviceProvider";
import InputField from "../InputField";

const FormNumber = () => {
  const { waNumber, setWaNumber } = useContext(DeviceContext);
  return (
    <form>
      <div className="mb-3">
        <InputField
          label="Nomor WA"
          type="number"
          placeholder="Tambahkan Nomor Whatsapp"
          id="waNumber"
          name="waNumber"
          value={waNumber}
          setValue={(e) => setWaNumber(e.target.value)}
        />
      </div>
    </form>
  );
};

export default FormNumber;
