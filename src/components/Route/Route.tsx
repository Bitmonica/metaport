import React from 'react';

import styles from "../WidgetUI/WidgetUI.scss";
import localStyles from './Route.scss';
import { clsNames } from '../../core/helper';

import MoveDownIcon from '@mui/icons-material/MoveDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';

import * as interfaces from '../../core/interfaces/index';

import { getChainName, getChainIcon } from '../ChainsList/helper';


export default function Route(props: {
  size: 'small' | 'medium',
  config: any,
  transferRequest: interfaces.TransferParams,
  theme: any,
  explanationText: string
}) {
  const isSmall = props.size === 'small';
  const trReq: interfaces.TransferParams = props.transferRequest;

  const fromChainName = getChainName(props.config.chainsMetadata, trReq.chains[0], trReq.fromApp);
  const toChainName = getChainName(props.config.chainsMetadata, trReq.chains[1], trReq.toApp);

  const fromChainIcon = getChainIcon(trReq.chains[0], props.theme.dark, trReq.fromApp);
  const toChainIcon = getChainIcon(trReq.chains[1], props.theme.dark, trReq.toApp);

  return (
    <Tooltip arrow title={props.explanationText} placement="top">
      <div className={clsNames(styles.mp__route, isSmall ? localStyles.mp__routeSmall : localStyles.mp__routeMedium)}>
        {!isSmall ? (<div className={clsNames(
          styles.mp__flex,
          styles.mp__flexCenteredVert,
          styles.mp_flexRow,
          styles.mp__margTop20
        )}>
          <p className={clsNames(styles.mp_p_desc, styles.mp__p, styles.mp__margRi5)}>
            Route
          </p>
          <InfoIcon fontSize='small' className={clsNames(styles.mp__iconGray)} />
        </div>) : <div className={clsNames(styles.mp__margTop5)}></div>}
        <div className={clsNames(styles.mp__flex, styles.mp__flexCenteredVert, styles.mp_flexRow)}>
          {!isSmall ? (< div className={clsNames(styles.mp__margRi5, styles.mp__chainIcon, styles.mp__flex)}>
            {fromChainIcon}
          </div>) : null}
          <h4 className={clsNames(styles.mp__noMarg, styles.mp__flex)}>
            {fromChainName}
          </h4>
          {trReq.route ? <div className={clsNames(styles.mp__flex, styles.mp__flexCenteredVert)}>
            <div className={clsNames(styles.mp__margRi5, styles.mp__margLeft5, styles.mp__flex, styles.mp__routeIcon)}>
              <MoreHorizIcon />
            </div>
            {!isSmall ? (
              <div className={clsNames(styles.mp__margRi5, styles.mp__chainIcon, styles.mp__flex)}>
                {getChainIcon(trReq.route.hub, props.theme.dark)}
              </div>) : null}
            <div className={clsNames(styles.mp__flex, isSmall ? styles.mp__routeIcon : null)}>
              <MoveDownIcon style={{ 'width': '14pt' }} />
            </div>
          </div> : <div></div>}
          <div className={clsNames(styles.mp__margRi5, styles.mp__margLeft5, styles.mp__flex, styles.mp__routeIcon)}>
            <MoreHorizIcon />
          </div>
          {!isSmall ? (<div className={clsNames(styles.mp__margRi5, styles.mp__chainIcon, styles.mp__flex)}>
            {toChainIcon}
          </div>) : null}
          <h4 className={clsNames(styles.mp__noMarg, styles.mp__flex)}>
            {toChainName}
          </h4>
        </div>
      </div>
    </Tooltip >
  )
}
