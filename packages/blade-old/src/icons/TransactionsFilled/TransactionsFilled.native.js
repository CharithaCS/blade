import React from 'react';
import { Path } from 'react-native-svg';
import Icon, { IconPropTypes } from '../../atoms/Icon';

function TransactionsFilled(props) {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <Path
        d="M11.794 17.76a.85.85 0 011.393.928.85.85 0 01-.19.277L9.219 22.75a.845.845 0 01-.13.107c-.021.014-.043.024-.065.035a.806.806 0 01-.082.043.792.792 0 01-.085.027c-.024.007-.047.017-.073.022a.86.86 0 01-.333 0c-.025-.005-.048-.015-.072-.022a.768.768 0 01-.086-.027.868.868 0 01-.081-.043c-.022-.011-.043-.021-.065-.035a.869.869 0 01-.13-.107l-3.778-3.785a.853.853 0 01.604-1.445.85.85 0 01.598.24l2.327 2.33v-9.715a.853.853 0 01.85-.852.85.85 0 01.851.852v9.716l2.325-2.332zM16.33 1.142c-.02-.014-.042-.024-.064-.036a.885.885 0 00-.082-.042.771.771 0 00-.085-.027c-.024-.007-.048-.017-.073-.022a.858.858 0 00-.333 0c-.025.005-.048.015-.073.022a.797.797 0 00-.085.027.804.804 0 00-.081.042c-.022.012-.043.022-.065.036a.847.847 0 00-.13.107L11.48 5.035a.853.853 0 00.604 1.445.85.85 0 00.598-.24l2.327-2.33v9.715a.853.853 0 00.85.852.85.85 0 00.85-.852V3.909l2.328 2.332a.852.852 0 001.399-.27.855.855 0 00-.197-.936L16.463 1.25a.873.873 0 00-.131-.107h-.002z"
        stroke="#344A6C"
        strokeWidth={0.3}
      />
    </Icon>
  );
}

TransactionsFilled.propTypes = IconPropTypes;

TransactionsFilled.defaultProps = {
  size: 'medium',
  fill: 'sapphire.800',
};

export default TransactionsFilled;