/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AccordionItem from '../AccordionItem/AccordionItem';

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/accordion/
 * @uxpindescription Alert messages provide contextual feedback for user actions.
 */

function AccordionChildren(props) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`
      chi-accordion
      ${props.card ? '-card' : ''}
      `}
      id="example-base"
    >
      {props.children.map((item, key) => {
        {
          console.log(item.props.children);
        }
        return (
          <AccordionItem
            key={key}
            title={item.props.title}
            content={item.props.content}
            isOpen={openIndex === key}
            onClick={() => handleItemClick(key)}
          />
        );
      })}
    </div>
  );
}

AccordionChildren.propTypes = {
  children: PropTypes.node,
  card: PropTypes.bool,
};

export default AccordionChildren;
