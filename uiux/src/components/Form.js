import React from 'react'
import { connect } from 'react-redux';
import { apiCall, newRequest } from './../store/actions';

const Form = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    props.newRequest(e.target.value)
  }
  console.log(props)
  return (
    <form onSubmit={props.apiCall(props.settings)}>
      <input 
        type='url'
        name='newUrl'
        placeholder='URL *'
        onChange={handleChange}
        required
      /> 
    </form>
  )
}

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

export default connect(
  mapStateToProps,
  { apiCall,newRequest }
)(Form);