import React, { useState } from 'react';
import PropTypes from 'prop-types';
/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/accordion/
 * @uxpindescription Accordion is used to toggle between hiding and showing content.
 */
function AccordionItem({ title, content, isOpen, disabled, onClick }) {
  return (
    <div className={`chi-accordion__item  ${isOpen ? '-expanded' : ''}`}>
      <button className={`chi-accordion__trigger ${disabled ? '-disabled' : ''}`} onClick={onClick} type="button">
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
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  // key: PropTypes.string,
};

export default AccordionItem;
