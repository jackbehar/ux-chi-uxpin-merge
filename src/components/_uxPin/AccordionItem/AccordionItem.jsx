import React, { useState } from 'react';
import PropTypes from 'prop-types';
/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/alert/
 * @uxpindescription Alert messages provide contextual feedback for user actions.
 */

// Accordion Item Component
function AccordionItem({ title, content, isOpen, onClick, children }) {
  return (
    <div className={`chi-accordion__item ${isOpen ? '-expanded' : ''}`}>
      <button className="chi-accordion__trigger" onClick={onClick}>
        <i className="chi-icon icon-chevron-down" aria-hidden="true"></i>
        <div className="chi-accordion__title">{title}</div>
      </button>
      {isOpen && (
        <div className="chi-accordion__content">
          <p className="chi-accordion__text">{content}</p>
        </div>
      )}
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  /**
   * If `true`, the switch is checked.
   * @uxpinbind onClick 0
   */
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  key: PropTypes.string,
};

export default AccordionItem;
