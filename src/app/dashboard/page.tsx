"use client";

import { getDetails } from "@/utils/walletUtilities";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const transactionHistoryString = localStorage.getItem("transactionHistory");
  const transactionHistory = JSON.parse(transactionHistoryString);

  const [accAddress, setAccAddress] = useState("");
  const [accBallance, setAccBallance] = useState("");
  const router = useRouter();

  const getData = async () => {
    const { address, ballance } = await getDetails();
    setAccAddress(address);
    setAccBallance(ballance);
  };

  const handleSendTransaction = () => {
    router.push(`/dashboard/transaction?ballance=${accBallance}`);
  };
  const handleRecieve = () => {
    router.push(`/dashboard/receive?address=${accAddress}`);
  };

  useEffect(() => {
    getData();
  }, [accAddress]);

  return (
    <div className="container  ">
      <div className="flex  justify-between rounded-t-md items-center  m-auto p-4 bg-slate-50">
        <Link href="/">
          <Image src="/creata.svg" height={34} width={34} alt="Creata logo" />
        </Link>
        <span className="py-2 px-4   font-semibold bg-white rounded">
          Zenith Chain
        </span>
        <Image
          className="w-9 h-9 cursor-pointer rounded-xl p-2 bg-white"
          src="/account.svg"
          width={10}
          height={10}
          alt="Creata logo"
        />
      </div>
      <div className=" mx-auto h-[2px]  bg-white"></div>
      <div className="flex  flex-col   max-w-[900px] m-auto py-3 px-4 text-left bg-slate-50 rounded-b-md shadow-xl">
        <div className="flex flex-col gap-1  mb-6">
          <span className="text-[16px] text-left font-semibold">
            Main Account{" "}
          </span>{" "}
          <span className="text-[13px]  text-gray-500">{accAddress}</span>
        </div>
        <div className="flex flex-col items-center justify-center p-8  bg-slate-50  rounded-xl border-2 border-white">
          <div className="flex gap-6">
            <span className="flex flex-col items-center">
              <Image
                className="py-2 px-3 rounded-lg shadow-md bg-white my-2"
                src="/creata.svg"
                height={48}
                width={48}
                alt="Creata logo"
              />
              <span className="text-blue font-bold text-[18px]">
                {accBallance} ETH
              </span>
            </span>
          </div>

          <div className="flex gap-4 mt-6 ">
            <span
              className="rounded-lg w-24 flex items-center justify-center shadow-md h-16 bg-white cursor-pointer  hover:shadow-xl"
              onClick={handleSendTransaction}
            >
              Send
            </span>
            <span
              className="rounded-lg w-24 flex items-center justify-center shadow-md h-16 bg-white cursor-pointer hover:shadow-xl"
              onClick={handleRecieve}
            >
              Receive
            </span>
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-[18px] font-semibold ">History </h2>
          {transactionHistory.map((item, i) => {
            return (
              <div key={i}>
                <div className="flex flex-col    gap-2   my-6">
                  <span className="text-gray-500 text-[14px]">
                    <b>Sender</b> : {item.from}
                  </span>
                  <span className="text-gray-500 text-[14px]">
                    <b>Reciever</b> : {item.to}
                  </span>
                  <span className="text-gray-500 text-[14px]">
                    <b>Amount Send </b> : {item.value}
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
      </div>
    </div>
  );
};

export default page;
