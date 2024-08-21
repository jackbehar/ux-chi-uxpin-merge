import * as PropTypes from 'prop-types';
import React from 'react';
import { CHEVRON_RIGHT, UTILITY_CLASSES } from '../../../constants/classes';
import ReactWrapper from '../../UXPinWrapper/react-wrapper';

export default function UxpExpansionPanel(props) {
  const WrappedExpansionPanel = ReactWrapper('chi-expansion-panel');

  return (
    <div data-chi-epanel-group="name-of-the-group">
      {props.children}
      <WrappedExpansionPanel {...props}>
        <div slot="active">{props.activeContent}</div>
        <div slot="done">{props.doneContent}</div>
        <div slot="change">{props.changeContent}</div>
        <div slot="footer">{props.footerContent}</div>
      </WrappedExpansionPanel>

      {/* <chi-expansion-panel title="Done panel" bordered state="done">
        <div slot="done">
          Use this area to present a read-only summary of what the user entered or selected in step 1.
        </div>
        <div slot="change">
          <chi-button color="primary" variant="flat">
            Edit
          </chi-button>
        </div>
      </chi-expansion-panel>
      <chi-expansion-panel title="Active panel" bordered state="active">
        <div slot="active">
          <div className="chi-epanel__subtitle">Optional subtitle</div>
          <p className="chi-epanel__text">Content goes here</p>
        </div>
        <div slot="footer">
          <chi-button color="primary">Continue</chi-button>
        </div>
      </chi-expansion-panel>
      <chi-expansion-panel title="Pending panel" bordered></chi-expansion-panel>
      <chi-expansion-panel title="Disabled panel" bordered state="disabled"></chi-expansion-panel> */}
    </div>
  );
}

UxpExpansionPanel.propTypes = {
  children: PropTypes.node,
  bordered: PropTypes.bool,
  epanelTitle: PropTypes.string,
  state: PropTypes.oneOf(['done', 'active', 'pending', 'disabled', 'next', 'previous']),
  stateIcon: PropTypes.bool,
  stateIconTooltip: PropTypes.string,
  step: PropTypes.string,
  title: PropTypes.string,
  footerContent: PropTypes.node,
  activeContent: PropTypes.node,
  doneContent: PropTypes.node,
  changeContent: PropTypes.node,
};

UxpExpansionPanel.defaultProps = {};
