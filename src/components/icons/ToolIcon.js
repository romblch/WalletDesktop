import React from 'react';
import styled from 'styled-components';

import BaseIcon from './BaseIcon';
import theme from '../../ui/theme';

const ToolIcon = ({ isActive, size }, props) => {
  const Circle = styled.div`
    background-color: ${p => p.theme.colors.medium};
    border-radius: 50%;
  `;
  const fill = isActive ? theme.colors.primary : theme.colors.inactive;

  return (
    <Circle>
      <BaseIcon size={size} viewBox="0 0 40 40" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8079 25.4816C11.8079 24.4915 12.1934 23.5608 12.8935 22.8607C13.8348 21.9197 15.2011 21.5642 16.4703 21.903L21.9012 16.4721C21.5642 15.2152 21.9291 13.8245 22.8589 12.8956C23.9009 11.8531 25.4616 11.5273 26.8346 12.0652C27.0292 12.1416 27.1728 12.3113 27.2152 12.5162C27.2594 12.7208 27.1952 12.9341 27.0467 13.082L25.3011 14.8277C25.0683 15.0598 25.0683 15.4641 25.3011 15.6957C25.5405 15.9351 25.9296 15.9348 26.169 15.6957L27.9147 13.95C28.0559 13.8085 28.2572 13.7439 28.4541 13.7763C28.6517 13.8087 28.8208 13.9342 28.9099 14.1137C29.5064 15.6211 29.1306 17.1079 28.1014 18.1378C27.1601 19.0788 25.7938 19.4343 24.5246 19.0955L19.0937 24.5264C19.4307 25.7845 19.0658 27.1731 18.1359 28.1029C17.094 29.1448 15.5344 29.4709 14.1622 28.9339C13.967 28.8576 13.8227 28.6878 13.7803 28.4826C13.7361 28.2777 13.7998 28.0641 13.9482 27.9165L15.6939 26.1709C15.9266 25.9387 15.9266 25.5344 15.6939 25.3029C15.5781 25.1868 15.4241 25.1229 15.2599 25.1229C15.0957 25.1229 14.9417 25.1868 14.8259 25.3026L13.0803 27.0486C12.9323 27.1968 12.7196 27.2601 12.5148 27.2174C12.3092 27.1744 12.1402 27.0314 12.0638 26.8362C11.894 26.4036 11.8079 25.9478 11.8079 25.4817V25.4816ZM23.2299 16.6419C23.2299 16.8034 23.1668 16.9622 23.048 17.0807L17.0788 23.0499C16.9042 23.2242 16.6436 23.279 16.4139 23.189C15.4998 22.8317 14.4627 23.0475 13.7711 23.7385C13.3444 24.1655 13.0935 24.7213 13.0547 25.3184L13.9482 24.4249C14.2985 24.0745 14.764 23.8815 15.2598 23.8815C15.7556 23.8815 16.2211 24.0745 16.5715 24.4249C17.2728 25.1256 17.2722 26.3476 16.5715 27.0488L15.6714 27.9486C16.2509 27.9083 16.8225 27.6607 17.2582 27.2252C17.9414 26.5409 18.1601 25.4802 17.8074 24.5831C17.7183 24.3534 17.7723 24.0921 17.9468 23.9179L23.916 17.9487C24.09 17.7744 24.3512 17.7196 24.5809 17.8096C25.495 18.1669 26.5321 17.9511 27.2237 17.2601C27.6504 16.833 27.9013 16.2769 27.9401 15.6799L27.0467 16.5736C26.3229 17.2967 25.1458 17.2964 24.4233 16.5736C23.7226 15.8723 23.7232 14.6504 24.4233 13.9497L25.3168 13.0563C24.7318 13.0954 24.1675 13.342 23.7366 13.7733C23.0523 14.4571 22.8353 15.5175 23.1874 16.4155C23.2159 16.4891 23.2298 16.5658 23.2298 16.6419H23.2299Z"
          fill={fill}
        />
      </BaseIcon>
    </Circle>
  );
};

export default ToolIcon;
