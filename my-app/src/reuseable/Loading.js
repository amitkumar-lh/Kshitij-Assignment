import React from "react";
import classnames from "classnames";
import Spinner from 'react-bootstrap/Spinner'

export const Loading= React.memo(
  ({ occupyBrowserWindow = false, loadingText = "loading", className = "" }) => {
    return (
      <div
        className={classnames(
          "w-100 h-100 bg-transparent d-flex flex-column justify-content-center align-items-center",
          {
            "position-fixed": occupyBrowserWindow,
            "position-absolute": !occupyBrowserWindow,
          },
          className
        )}
        style={{ zIndex: occupyBrowserWindow ? 9999 : 99, top: 0, left: 0 }}
      >
        <Spinner animation="border" />
        <span className="font-size-18 mt-3">{loadingText}</span>
      </div>
    );
  }
);
