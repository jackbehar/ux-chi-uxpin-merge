import * as PropTypes from 'prop-types';
import React from 'react';
import { CHEVRON_RIGHT, UTILITY_CLASSES } from '../../../constants/classes';
import ReactWrapper from '../../UXPinWrapper/react-wrapper';

export default function UxpExpansionPanel(props) {
  const WrappedExpansionPanel = ReactWrapper('chi-expansion-panel');

  return <WrappedExpansionPanel {...props} />;
}

UxpExpansionPanel.propTypes = {
  children: PropTypes.node,
  bordered: PropTypes.bool,
  epanelTitle: PropTypes.string,
  state: PropTypes.oneOf(['done', 'active', 'pending']),
  stateIcon: PropTypes.bool,
  stateIconTooltip: PropTypes.string,
  step: PropTypes.string,
  title: PropTypes.string,
};

UxpExpansionPanel.defaultProps = {};
