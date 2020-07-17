import React from 'react'
import { connect } from 'react-redux';
import { apiCall, newRequest } from './../store/actions';

const Form = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    props.newRequest(e.target.value)
  }

  return (
    <div className='uk-flex uk-flex-center'>
      <form className='uk-width-medium' onSubmit={props.apiCall(props.getUrl)}>
        <div className='uk-margin'>
          <input 
            className="uk-input"
            type='url'
            name='newUrl'
            placeholder='URL *'
            onChange={handleChange}
            required
          /> 
        </div>
        <button className='uk-button uk-button-primary uk-width-1-1'>Capture</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    getUrl: state.getUrl
  };
};

export default connect(
  mapStateToProps,
  { apiCall,newRequest }
)(Form);