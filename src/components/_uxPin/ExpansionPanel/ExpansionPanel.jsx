import React from 'react';
import ReactWrapper from '../../UXPinWrapper/react-wrapper';
import * as PropTypes from 'prop-types';
/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/accordion/
 * @uxpindescription Accordion is used to toggle between hiding and showing content.
 */
export default function ExpansionPanel(props) {
  const WrappedExpansionPanel = ReactWrapper('chi-expansion-panel');

  return (
    <div data-chi-epanel-group="name-of-the-group">
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

ExpansionPanel.propTypes = {
  /**
   * to set expansion panel state. Possible values are: {'done', 'active', 'pending' (default value), and 'disabled'}.
   */
  state: PropTypes.oneOf(['done', 'active', 'pending', 'disabled', 'next', 'previous']),
  /**
   * to define expansion panel title.
   */
  title: PropTypes.string,
  /**
   * 'Active' state content.
   */
  activeContent: PropTypes.node,
  children: PropTypes.node,
  /**
   * 'Done' state content.
   */
  doneContent: PropTypes.node,
  /**
   * 'Change' state content.
   */
  changeContent: PropTypes.node,
  /**
   * 'Footer' content.
   */
  footerContent: PropTypes.node,
  /**
   * to set the panel style to bordered.
   */
  bordered: PropTypes.bool,
  /**
   * to set the title of the panel.
   * @uxpinignoreprop
   */
  epanelTitle: PropTypes.string,
  /**
   * to render a state icon within the panel.
   */
  stateIcon: PropTypes.bool,
  /**
   * to render a state tooltip.
   */
  stateIconTooltip: PropTypes.string,
  /**
   * to set a step number next to the title of the panel.
   */
  step: PropTypes.string,
};

ExpansionPanel.defaultProps = {};
