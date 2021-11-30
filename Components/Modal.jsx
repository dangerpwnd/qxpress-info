import React from 'react';

const Modal = ({ notes }) => {
  return (
    <div
      className="outer fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray bg-opacity-75 transition-opacity inner"
          aria-hidden="true"
        ></div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-16 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h2 className="text-2xl text-black">Job Notes</h2>
                {notes.map((note) => {
                  return (
                    <p key={note} className="text-sm text-gray-500">
                      {note}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <p className="text-black">Press ESC to exit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
