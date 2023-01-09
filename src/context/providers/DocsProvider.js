import React, { useState } from "react";
import { STATUS_DOCS } from "../../utils/constants";

export const DocsContext = React.createContext();
const DocsProvider = ({ children }) => {
  const [docsContext, setDocsContext] = useState(STATUS_DOCS.SEND_MESSAGE);
  return (
    <DocsContext.Provider value={{ docsContext, setDocsContext }}>
      {children}
    </DocsContext.Provider>
  );
};

export default DocsProvider;
