import React from 'react';
import { OptionButton } from '../OptionButton';

export function ListHeader() {
      function buttonHandler(route) {
    document.location.href = route
    console.log(route);
  }
    return (
        <div style={{display: 'flex', flexDirection: 'row', width: '60%'}}>
                <OptionButton message={"국내 맥주"} onClick={() => {buttonHandler("/list/domestic")}}>바보야</OptionButton>
                <OptionButton message={"해외 맥주"} onClick={() => {buttonHandler("/list/foreign")}}>안녕</OptionButton>
            </div>
    )
}