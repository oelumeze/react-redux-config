import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from './redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class CoursePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: ""
      }
    };
    //this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course })
  }

  handleSubmit = event => {
    event.preventDefault();
    debugger
    // this.props.dispatch
    //   (courseActions.createCourse(this.state.course)) using the dispatch directly
    this.props.actions.createCourse(this.state.course)
    // this.props.createCourse(this.state.course) //dispatch manually
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange} 
          value={this.state.course.title}/>
        <input type="submit" value="Save"/>
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>

    )
  }
}

CoursePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  createCourse: PropTypes.func.isRequired
}

//declare which state in entire store this component needs
function mapStateToProps(state) {
  return {
    courses: state.courses
  }
}

//what actions are available to this component to dispatch
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch) //using bindActionCreators redux function

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);