import React from 'react'

const History = ({ transactionHistory, value }) => {
  return (
    <div>
      <h3 className='font-bold text-center text-[18px] mt-6'>History</h3>
      {transactionHistory.length > 0 && (
        <div className="">
          {transactionHistory?.map((item, i) => {
            return (
              <div key={i}>
                <div className="flex flex-col    gap-2   my-6">
                  <span className="text-gray-500 text-[14px]">
                    <b>Sender</b> : {item.from}
                  </span>
                  <span className="text-gray-500 text-[14px]">
                    <b>Reciever</b> : {item.to}
                  </span>
                  <span className="text-gray-500 text-[14px] cursor-pointer w-[450px] whitespace-nowrap overflow-hidden overflow-ellipsis">
                    <b>{value} </b> : {item.value}
                  </span>
                  <span className="text-gray-500 text-[14px]">
                    <b>Status</b> :{" "}
                    <span className="rounded text-[12px] bg-green-400 px-2 py-1 text-white">
                      Successfull
                    </span>
                  </span>
                </div>
                <div className="h-[2px] bg-white w-[100%]"></div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default History
