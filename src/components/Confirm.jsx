import React from "react";
import { logoutUser, setUserFetchState } from "../store/actions/userActions";
import { FETCH_STATES } from "../store/actions/globalActions";
import { useDispatch } from "react-redux";

export default function Confirm(props) {
  const dispatch = useDispatch();
  const { setConfirm } = props;
  const confirmHandler = () => {
    dispatch(logoutUser());
    setConfirm(false);
  };
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-800 opacity-75">
      <div className="flex flex-col gap-3 p-5 bg-white rounded-md shadow-md ">
        <span className="text-2xl">Are you sure for logout?</span>
        <div className="flex flex-wrap  justify-center gap-1">
          <button
            onClick={() => confirmHandler()}
            className="bg-blue-700 hover:bg-blue-900 px-2 py-2 rounded-sm"
          >
            <span className="text-white text-basee">Evet</span>
          </button>
          <button
            onClick={() => setConfirm(false)}
            className="bg-blue-700 hover:bg-blue-900 px-2 py-2 rounded-sm"
          >
            <span className="text-white text-basee">Hayır</span>
          </button>
        </div>
      </div>
    </div>
  );
}
