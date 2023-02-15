import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BiPlusCircle, BiTrashAlt, BiEdit } from "react-icons/bi";

import Button from "../../src/components/Button";
import LayoutDashboard from "../../src/components/LayoutDashboard";
import Spinner from "../../src/components/Spinner";
import Modal from "../../src/components/Modal";
import InputField from "../../src/components/InputField";
import autoReply from "../../src/api/autoReply";
import { AutoReplyContext } from "../../src/context/providers/AutoReplyProvider";
import { STATUS_ACTION } from "../../src/utils/constants";
import withAuth from "../../src/hoc/withAuth";
import Alert from "../../src/components/Alert";

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
  const [statusAction, setStatusAction] = useState(
    STATUS_ACTION.ADD_AUTO_REPLY
  );
  const [editData, setEditData] = useState({
    id: "",
    body: "",
    reply: "",
  });
  const [alertMessage, setAlertMessage] = useState();

  const handleCloseModal = () => {
    replyContext.getDataByDeviceKey(deviceKey);
    setShowModal(false);
    setBody("");
    setReply("");
  };

  const addAutoReply = async () => {
    setStatusAction(STATUS_ACTION.ADD_AUTO_REPLY);
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
  }, [deviceKey, autoReply]);

  const handleDelete = async (id) => {
    setIdBtnDelete(id);
    setLoadingDelete(true);
    try {
      const res = await autoReply.delete(
        `/delete/${deviceKey && deviceKey}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${
              typeof window !== "undefined" &&
              JSON.parse(localStorage.getItem("TOKEN"))
            }`,
          },
        }
      );
      setAlertMessage(res?.data?.message);
      setTimeout(() => {
        setAlertMessage(false);
      }, 2000);
      setLoadingDelete(false);
      replyContext.getDataByDeviceKey(deviceKey);
    } catch (err) {
      setLoadingDelete(false);
      console.log(err);
    }
  };

  const handleEdit = (id, itemBody, itemReply) => {
    setEditData({
      ...editData,
      id,
      body: itemBody,
      reply: itemReply,
    });

    setStatusAction(STATUS_ACTION.EDIT_AUTO_REPLY);
    setBody(itemBody);
    setReply(itemReply);
    setShowModal(true);
  };

  const editDataAutoReply = async () => {
    setLoading(true);
    try {
      const data = {
        body,
        reply,
      };
      await autoReply.put(`/update/${deviceKey}/${editData.id}`, data, {
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
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <LayoutDashboard>
      {showModal && (
        <Modal
          title="Add auto reply"
          titleButton={
            statusAction === STATUS_ACTION.ADD_AUTO_REPLY ? "Add" : "Edit"
          }
          closeModal={() => handleCloseModal()}
          isButtonDisabled={body !== "" && reply !== ""}
          handleButtonModal={
            statusAction === STATUS_ACTION.ADD_AUTO_REPLY
              ? addAutoReply
              : editDataAutoReply
          }
          isLoadingbutton={loading}
        >
          <div className="mb-3">
            <InputField
              label="Body"
              id="body"
              name="body"
              placeholder="Add body"
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
              placeholder="Add reply"
              type="text"
              value={reply}
              isRequired={true}
              setValue={(e) => setReply(e.target.value)}
            />
          </div>
        </Modal>
      )}
      {alertMessage && (
        <div className="my-3">
          <Alert message={alertMessage} theme="alert-success" />
        </div>
      )}
      <div className="mb-3">
        <Button
          title="Add"
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
          {replyContext.data?.data?.data?.length === 0 && (
            <td colspan="4">
              <Alert message="There's no data" theme="alert-warning" />
            </td>
          )}
          {replyContext.data?.data?.data?.length !== 0 &&
            replyContext.data?.data?.data?.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">{item.body}</th>
                  <th scope="row">{item.reply}</th>
                  <th scope="row" className="d-flex align-items-center gap-3">
                    <button
                      className="btn btn-success"
                      onClick={() => handleEdit(item.id, item.body, item.reply)}
                    >
                      <BiEdit />
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      {loadingDelete && idBtnDelete == item.id ? (
                        <Spinner />
                      ) : (
                        <BiTrashAlt />
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

export default withAuth(DetailAutoReply);
