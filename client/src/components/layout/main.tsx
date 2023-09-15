"use client"
import React,{useEffect} from "react";
import DefaultNavbar from "../Navbar";
import Socket from "@/socket/socket";
import config from "@/config";
import { ExchangeData, ExchangeRes } from "@/interfaces/socket.interface";
import { useDispatch } from "react-redux";
import { addExchange } from "@/redux/slices/exchange.slice";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const tradeSocket = new Socket()
    tradeSocket.connect(`${config.socket.url}`)
    tradeSocket.onOpen(() => tradeSocket.sendMessage({ "op": "subscribe", "args": ["orderBookL2_25:XBTUSD"] }))
    setInterval(() => {
      tradeSocket.onMessage((response: ExchangeRes) => {
        if (response.action) {
          dispatch(addExchange(
            response.data.map((res: ExchangeData) => (res))
          ))
          setTimeout(() => tradeSocket.onMessage(() => { }), 8)
        }
      })
    }, 2000)
    return () => { tradeSocket.disconnect() }
  }, [])

  return (
    <div>
      <DefaultNavbar />
      <main className="min-h-screen flex justify-center pt-6 px-36">
        {children}
      </main>
    </div>
  );

};

export default Layout;
