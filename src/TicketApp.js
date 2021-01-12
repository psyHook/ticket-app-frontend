import React from "react";
import { Socket } from "socket.io-client";
import { SocketProvider } from "./context/SocketContext";
import { UiProvider } from "./context/UiContext";
import { RouterPages } from "./pages/RouterPages";

export const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <RouterPages />
      </UiProvider>
    </SocketProvider>
  );
};
