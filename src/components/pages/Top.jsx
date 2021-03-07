import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../providers/UserProvider';
import SecondaryButton from '../atoms/button/SecondaryButton';

const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push('/user');
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push('/user');
  };

  return (
    <SContainer>
      <h2>TopPage</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

export default Top;
