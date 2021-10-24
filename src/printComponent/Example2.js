import React from 'react';

import ReactToPrint from 'react-to-print';
import  ComponentToPrint  from './ComponentToPrint';
import  ComponentToPrint123  from './ComponentToPrint123';
import Button from 'react-bootstrap/Button';

class Example2 extends React.PureComponent {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => {
              return  <Button variant="primary">Primary</Button>;
            }}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }

 export default Example2;