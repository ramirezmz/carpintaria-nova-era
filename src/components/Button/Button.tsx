import React from "react";
import { ContentButton } from "./styled";

function Button(props: any) {
   return (
      <ContentButton>
         <button>{props.children}</button>
      </ContentButton>
   );
}

export default Button;
