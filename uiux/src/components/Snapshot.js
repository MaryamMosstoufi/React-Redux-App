import React from 'react'
import { connect } from 'react-redux';

import { apiCall } from './../store/actions';

const Snapshot = (props) => {
  return (
    <div>
      Snapshot
      <button onClick={()=>props.apiCall(props.newRequest)}>Capture</button>
       
      {props.isLoading &&
        <h4>Loading...</h4>
      }
      
      {props.snapshot && 
        <img src={props.snapshot} alt='snapshot'/>
      }

      {props.error && 
        <p className='error'>Uh oh, something happened... {props.error}</p>
      }
    </div>
  )
}


const mapStateToProps = state => {
  return {
      isLoading: state.isLoading,
      snapshot: state.snapshot,
      error: state.error
  };
};

export default connect(
  mapStateToProps,
  { apiCall }
)(Snapshot);
