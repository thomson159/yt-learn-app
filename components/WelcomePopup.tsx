import React, { useState } from 'react';
import styledNative from 'styled-components/native';

type Props = {
  onGuestLogin?: () => void;
};

export const WelcomePopup = ({ onGuestLogin }: Props) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleGuestLogin = () => {
    setVisible(false);
    if (onGuestLogin) onGuestLogin();
  };

  return (
    <Overlay>
      <PopupContainer>
        <TopLogo
          source={require('@/assets/images/logo.png')}
          resizeMode="contain"
        />
        <CenterLogo
          source={require('@/assets/images/app-icon.png')}
          resizeMode="contain"
        />
        <WelcomeText>
          Welcome to the best YouTube-based learning application.
        </WelcomeText>
        <GuestButton onPress={handleGuestLogin}>
          <GuestButtonText>Log in as guest</GuestButtonText>
        </GuestButton>
        <FooterText>By continuing you agree with</FooterText>
        <FooterText>Terms and Conditions and Privacy Policy</FooterText>
      </PopupContainer>
    </Overlay>
  );
};

const Overlay = styledNative.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;

const PopupContainer = styledNative.View`
  width: 100%;
  height: 100%;
  background-color: #8D99AE;
  padding: 80px 24px;
  align-items: center;
`;

const TopLogo = styledNative.Image`
  width: 292px;
  margin-bottom: 20px;
`;

const CenterLogo = styledNative.Image`
  width: 128px;
  margin-top: 120px;
`;

const WelcomeText = styledNative.Text`
  font-size: 22px;
  font-weight: 600;
  color: white;
  margin-top: auto;
  margin-bottom: 32px;
`;

const GuestButton = styledNative.TouchableOpacity`
  background-color: #2B2D42;
  padding: 14px 40px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
`;

const GuestButtonText = styledNative.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const FooterText = styledNative.Text`
  font-size: 12px;
  color: white;
  text-align: center;
`;
