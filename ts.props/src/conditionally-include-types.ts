import { useState } from "react";

/*
type ServerData1 = {
  status?: "loading" | "error" | "success";
  error?: Error;
  data?: { id: string; message: string };
};
*/
type ServerData =
  | {
      status: "loading";
    }
  | {
      status: "success";
      data?: { id: string; message: string };
    }
  | { status?: "error"; error?: Error };

const loading: ServerData = {
  status: "loading",
};

const error: ServerData = {
  status: "error",
  error: new Error("Could not login"),
};

const success: ServerData = {
  status: "success",
  data: { id: "1", message: "logged in" },
  //????
  error: new Error("Could not login"),
};

const Component = () => {
  const [serverData, setServerData] = useState<ServerData>({
    status: "loading",
  });

  //   const data = serverData.data;
  /*
  if (serverData.loading === "loading") {
    const data = serverData.data;
  }

  if (serverData.error === "error") {
    const data = serverData.data;
  }
*/
  if (serverData.status === "success") {
    const data = serverData.data;
    console.log(data);
  }
};
console.log(loading, success, error);
