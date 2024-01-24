import React from "react";
import { logoutUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Confirm(props) {
  const dispatch = useDispatch();
  const { setConfirm, confirm } = props;
  const confirmHandler = () => {
    dispatch(logoutUser());
    setConfirm(false);
  };
  return (
    <>
      <Dialog open={confirm} handler={confirmHandler}>
        <DialogHeader>Confirm Logout</DialogHeader>
        <DialogBody>
          Are you sure you want to log out? This action will log you out of your
          account and end your session. If you're certain, you can click 'Yes'
          to log out. If you came here by mistake, you can close this window by
          clicking 'No
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setConfirm(false)}
            className="mr-1"
          >
            <span>No</span>
          </Button>
          <Button variant="gradient" color="blue" onClick={confirmHandler}>
            <span>Yes</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>

    // <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-75">
    //   <div className="flex flex-col gap-3 p-5 bg-white rounded-md shadow-md ">
    //     <span className="text-2xl">Are you sure for logout?</span>
    //     <div className="flex flex-wrap  justify-center gap-1">
    //       <button
    //         onClick={() => confirmHandler()}
    //         className="bg-blue-700 hover:bg-blue-900 px-2 py-2 rounded-sm"
    //       >
    //         <span className="text-white text-basee">Yes</span>
    //       </button>
    //       <button
    //         onClick={() => setConfirm(false)}
    //         className="bg-blue-700 hover:bg-blue-900 px-2 py-2 rounded-sm"
    //       >
    //         <span className="text-white text-basee">No</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
