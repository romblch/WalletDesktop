import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import withContractsRowState from '../../../store/hocs/withContractsRowState';
import { Btn } from '../../common';
import { formatDuration, formatSpeed, formatPrice } from '../utils';
import Spinner from '../../common/Spinner';

const Container = styled.div`
  padding: 1.2rem 0;
  display: grid;
  grid-template-columns: ${p => p.ratio.map(x => `${x}fr`).join(' ')};
  text-align: center;
  box-shadow: 0 -1px 0 0 ${p => p.theme.colors.lightShade} inset;
  cursor: pointer;
  height: 66px;
`;

const Value = styled.label`
  display: flex;
  padding: 0 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.primary};
  font-size: 1.2rem;
`;

const ContractValue = styled(Value)`
  cursor: pointer;
  text-decoration: underline;
`;

const ActionButton = styled(Btn)`
  font-size: 1.2rem;
  padding: 1rem 1.25rem;
  line-height: 1.5rem;
`;

function MarketplaceRow({ contract, ratio, explorerUrl, onPurchase }) {
  // TODO: Add better padding
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(false);
  }, [contract]);

  return (
    <Container ratio={ratio}>
      <ContractValue onClick={() => window.open(explorerUrl, '_blank')}>
        View Contract
      </ContractValue>
      <Value>{formatPrice(contract.price)}</Value>
      <Value>{formatDuration(contract.length)}</Value>
      <Value>{formatSpeed(contract.speed)}</Value>
      {contract.inProgress ? (
        <Value>
          <Spinner size="25px" /> Purchasing..
        </Value>
      ) : (
        <Value>
          <ActionButton
            disabled={false}
            onClick={e => {
              e.stopPropagation();
              onPurchase(contract);
            }}
          >
            Purchase
          </ActionButton>
        </Value>
      )}
    </Container>
  );
}

export default withContractsRowState(MarketplaceRow);
