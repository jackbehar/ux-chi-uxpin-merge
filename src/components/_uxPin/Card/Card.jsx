import * as PropTypes from 'prop-types';
import React from 'react';
import ReactWrapper from '../../UXPinWrapper/react-wrapper';

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/card/
 * @uxpindescription Cards are flexible containers used for displaying content.
 */
export default function UxpCard(props) {
  const WrappedCard = ReactWrapper('chi-card');

  return (
    <div
      className={`
      chi-card
      ${props.active ? '-active' : ''}
      ${props.empty ? '-empty' : ''}
      ${props.highlight ? '-highlight' : ''}
      `}
    >
      {props.title ? (
        <div className="chi-card__header">
          <div className="chi-card__title">{props.title}</div>
        </div>
      ) : (
        ''
      )}
      <div className="chi-card__content">
        <div className="chi-card__caption">{props.children}</div>
      </div>
    </div>
  );
}

UxpCard.propTypes = {
  title: PropTypes.node,
  /** The content of the card
   * @uxpinpropname  content
   */
  children: PropTypes.node,
  active: PropTypes.bool,
  empty: PropTypes.bool,
  highlight: PropTypes.bool,
};

UxpCard.defaultProps = {};
