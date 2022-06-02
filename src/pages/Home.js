import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";

const Home = () => {
  const userName = localStorage.getItem("username");
  const jitsiContainerId = "jitsi-container-id";
  const [jitsi, setJitsi] = React.useState({});

  const loadJitsiScript = () => {
    let resolveLoadJitsiScriptPromise = null;

    const loadJitsiScriptPromise = new Promise((resolve) => {
      resolveLoadJitsiScriptPromise = resolve;
    });

    const script = document.createElement("script");
    script.src = "https://meet.jit.si/external_api.js";
    script.async = true;
    script.onload = () => resolveLoadJitsiScriptPromise(true);
    document.body.appendChild(script);

    return loadJitsiScriptPromise;
  };

  const initialiseJitsi = async () => {
    if (!window.JitsiMeetExternalAPI) {
      await loadJitsiScript();
    }

    const _jitsi = new window.JitsiMeetExternalAPI("meet.jit.si", {
      parentNode: document.getElementById(jitsiContainerId),
      roomName: "2255012345",
      configOverwrite: {
        prejoinPageEnabled: false,
      },
    });

    _jitsi.executeCommand("displayName", userName);

    setJitsi(_jitsi);
  };

  React.useEffect(() => {
    initialiseJitsi();

    return () => jitsi?.dispose?.();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div
        id={jitsiContainerId}
        style={{ height: "calc(100vh - 60px)", width: "100%" }}
      />
    </Fragment>
  );
};

export default Home;
