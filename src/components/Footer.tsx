import React from 'react';
import '../styles/components/Footer.css';
interface Props {}
const Footer: React.FC<Props> = (props) => {
  return (
    <div className="Footer">
      <p className="Footer-title">Platiz conf Merch</p>
      <p className="Footer-copy">Todos los Izquierdos reservados</p>
    </div>
  );
};

export default Footer;
