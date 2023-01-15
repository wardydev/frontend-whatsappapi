import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BiPlusCircle } from "react-icons/bi";

import Button from "../../src/components/Button";
import LayoutDashboard from "../../src/components/LayoutDashboard";
import Spinner from "../../src/components/Spinner";
import useGetDataReply from "../../src/hooks/useGetDataReply";
import Modal from "../../src/components/Modal";
import InputField from "../../src/components/InputField";
import autoReply from "../../src/api/autoReply";
import { AutoReplyContext } from "../../src/context/providers/AutoReplyProvider";

const DetailAutoReply = () => {
  const replyContext = useContext(AutoReplyContext);
  const router = useRouter();
  const { deviceKey } = router.query;
  const [showModal, setShowModal] = useState(false);
  const [body, setBody] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [idBtnDelete, setIdBtnDelete] = useState();

  const handleCloseModal = () => {
    replyContext.getDataByDeviceKey(deviceKey);
    setShowModal(false);
    setBody("");
    setReply("");
  };

  const addAutoReply = async () => {
    setLoading(true);
    try {
      const data = {
        body,
        reply,
      };
      await autoReply.post(`/add/${deviceKey && deviceKey}`, data, {
        headers: {
          Authorization: `Bearer ${
            typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("TOKEN"))
          }`,
        },
      });
      setLoading(false);
      replyContext.getDataByDeviceKey(deviceKey);
      handleCloseModal();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    replyContext.getDataByDeviceKey(deviceKey);
  }, [deviceKey]);

  const handleDelete = async (id) => {
    setIdBtnDelete(id);
    setLoadingDelete(true);
    try {
      await autoReply.delete(`/delete/${deviceKey && deviceKey}/${id}`, {
        headers: {
          Authorization: `Bearer ${
            typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("TOKEN"))
          }`,
        },
      });
      setLoadingDelete(false);
      replyContext.getDataByDeviceKey(deviceKey);
    } catch (err) {
      setLoadingDelete(false);
      console.log(err);
    }
  };

  return (
    <LayoutDashboard>
      {showModal && (
        <Modal
          title="Tambahkan Auto Reply"
          titleButton="Tambahkan"
          closeModal={() => handleCloseModal()}
          isButtonDisabled={body !== "" && reply !== ""}
          handleButtonModal={addAutoReply}
          isLoadingbutton={loading}
        >
          <div className="mb-3">
            <InputField
              label="Body"
              id="body"
              name="body"
              placeholder="Tambahkan body"
              type="text"
              value={body}
              isRequired={true}
              setValue={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <InputField
              label="Reply"
              id="reply"
              name="reply"
              placeholder="Tambahkan reply"
              type="text"
              value={reply}
              isRequired={true}
              setValue={(e) => setReply(e.target.value)}
            />
          </div>
        </Modal>
      )}
      <div className="mb-3">
        <Button
          title="Tambah"
          withIcon={<BiPlusCircle size={18} />}
          handleClick={() => setShowModal(true)}
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">NO</th>
            <th scope="col">KEYWORD</th>
            <th scope="col">REPLY</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {replyContext.data?.data?.data?.length !== 0 &&
            replyContext.data?.data?.data?.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">{item.body}</th>
                  <th scope="row">{item.reply}</th>
                  <th scope="row" className="d-flex align-items-center gap-3">
                    <button className="btn btn-success">Edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      {loadingDelete && idBtnDelete == item.id ? (
                        <Spinner />
                      ) : (
                        "Delete"
                      )}
                    </button>
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
      {replyContext.loading && (
        <div className="text-center">
          <Spinner color="text-success" />
        </div>
      )}
    </LayoutDashboard>
  );
};

export default DetailAutoReply;
<LayoutDashboard>
  <div>Detail Auto Reply</div>
</LayoutDashboard>;
