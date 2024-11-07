import React from "react";

const counter = (state = 0, action) => {
  switch (action.type) {
    case action.type === "up":
      return state++;

    case action.type === "down":
      return state--;
  }
};

export default counter;
