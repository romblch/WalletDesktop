import withTxRowState from 'lumerin-wallet-ui-logic/src/hocs/withTxRowState';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

import Details from './Details';
import Amount from './Amount';
import { TxIcon } from './Icon';
import LumerinDarkIcon from '../../../icons/LumerinDarkIcon';

const Container = styled.div`
  margin-left: 1.6rem;
  padding: 1.2rem 2.4rem 1.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 -1px 0 0 ${p => p.theme.colors.lightShade} inset;
  cursor: pointer;
  height: 66px;
`;

const Row = ({ tx }) => (
  <Container>
    <LumerinDarkIcon />
    <TxIcon type={tx.txType} />
    <div>
      <Amount />
      <Details />
    </div>
  </Container>
);

export default withTxRowState(Row);
