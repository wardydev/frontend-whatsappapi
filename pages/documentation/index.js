import React, { useContext, useState } from "react";
import { CodeBlock, atomOneLight } from "react-code-blocks";

import LayoutDashboard from "../../src/components/LayoutDashboard";
import { DocsContext } from "../../src/context/providers/DocsProvider";
import { DATA_DOCS } from "../../src/utils/constants";
import withAuth from "../../src/hoc/withAuth";

const Documentation = () => {
  const { docsContext } = useContext(DocsContext);
  const [menuActive, setMenuActive] = useState("axios");
  const filteredDocsComponent = DATA_DOCS.filter((doc) => {
    return doc.activeMenu === docsContext;
  });

  const codeSnippetCompoent = () => {
    return filteredDocsComponent.map((doc, index) => {
      return (
        <div className="p-3" key={index}>
          <div className="mb-3">
            <h4>Code Snippet</h4>
          </div>
          <div className="container-code-snippet d-flex gap-3 mb-4">
            <span
              className={`codeSnippetMenu ${
                menuActive === "axios" && "active"
              }`}
              onClick={() => setMenuActive("axios")}
            >
              {doc.codeSnippet.axios.name}
            </span>
            <span
              className={`codeSnippetMenu ${menuActive === "curl" && "active"}`}
              onClick={() => setMenuActive("curl")}
            >
              CURL
            </span>
          </div>
          <div>
            {menuActive === "axios" ? (
              <CodeBlock
                text={doc.codeSnippet.axios.code}
                language="javascript"
                showLineNumbers={true}
                wrapLines
                theme={atomOneLight}
              />
            ) : (
              <CodeBlock
                text={doc.codeSnippet.curl.code}
                language="javascript"
                showLineNumbers={true}
                wrapLines
                theme={atomOneLight}
              />
            )}
          </div>
        </div>
      );
    });
  };
  return (
    <LayoutDashboard isTripleColumn={true} thirdColumn={codeSnippetCompoent()}>
      {DATA_DOCS.map((docs) => {
        if (docs.activeMenu === docsContext) {
          return (
            <div style={{ minHeight: "100vh" }} key={docs.id}>
              <div className="mb-4">
                <h2>Introduction</h2>
                <p className="fs-6 mb-3">{docs.introduction}</p>
              </div>
              <div className="mb-4">
                <h4>Http Request</h4>
                <div className="d-flex align-items-center gap-1">
                  <span className="fw-bold p-2" style={{ color: "#14ba6d" }}>
                    {docs.method}
                  </span>
                  <span>
                    <code
                      className="p-2"
                      style={{ backgroundColor: "#effbf6", color: "#14ba6d" }}
                    >
                      {docs.endpoint}
                    </code>
                  </span>
                </div>
              </div>
              <div>
                <h4 className="mb-3">Body</h4>
                <div>
                  <CodeBlock
                    text={docs.body}
                    language="javascript"
                    showLineNumbers={true}
                    wrapLines
                    theme={atomOneLight}
                  />
                </div>
              </div>
            </div>
          );
        }
      })}
    </LayoutDashboard>
  );
};

export default withAuth(Documentation);
