// TODO: This view was quickly implemented as a popup.
// It would be better to make it a dedicated start screen
// so that the API and app data don't load in the background
// until the user clicks "Log in as guest".

import Icon from '@/assets/images/app-icon.svg';
import Logo from '@/assets/images/logo.svg';
import React, { useState } from 'react';
import { Linking } from 'react-native';
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
        <Logo width={292} />
        <Icon width={128} style={{ marginTop: 100 }} />
        <WelcomeText style={{ marginTop: 'auto' }}>
          Welcome to the best
        </WelcomeText>
        <WelcomeText style={{ marginBottom: 32 }}>
          YouTube-based learning application.
        </WelcomeText>
        <GuestButton onPress={handleGuestLogin}>
          <GuestButtonText>Log in as guest</GuestButtonText>
        </GuestButton>
        <FooterText>By continuing you agree with</FooterText>
        <FooterText>
          <LinkText
            onPress={() => Linking.openURL('https://example.com/terms')}
          >
            Terms and Conditions
          </LinkText>{' '}
          and{' '}
          <LinkText
            onPress={() => Linking.openURL('https://example.com/privacy')}
          >
            Privacy Policy
          </LinkText>
        </FooterText>
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

const WelcomeText = styledNative.Text`
  font-size: 22px;
  font-weight: 600;
  color: #FFFFFF;
  text-align: left;
  width: 100%;
`;

const GuestButton = styledNative.TouchableOpacity`
  background-color: #2B2D42;
  padding: 14px 40px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 32px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
`;

const GuestButtonText = styledNative.Text`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 16px;
`;

const FooterText = styledNative.Text`
  font-size: 13px;
  color: #FFFFFF;
  text-align: center;
  font-weight: 400;
`;

const LinkText = styledNative.Text`
  color: #2B2D42;
  text-decoration: underline;
`;
