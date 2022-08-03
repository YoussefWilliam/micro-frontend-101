import React, { useEffect } from "react";

const MicroFrontend = ({ name, host, history }) => {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    const renderMicroFrontend = () => {
      window[`render${name}`](`${name}-container`, history);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-mainfest.json`)
      .then((res) => res.json())
      .then((mainfest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${mainfest.files["main.js"]}`;
        script.onload = () => renderMicroFrontend();
        document.head.appendChild(script);
      });

    return () => {
      window[`unmount${name}`] && window[`unmount$name`](`${name}-container`);
    };
  });

  return <main id={`${name}-container`} />;
};

MicroFrontend.defaultProps = {
  document,
  window,
};
export default MicroFrontend;
